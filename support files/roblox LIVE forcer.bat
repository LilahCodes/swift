:: Credit @aprllfools on discord

@echo off
setlocal EnableDelayedExpansion
title Force Roblox Version to LIVE

:: Check for admin
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Please run this script as administrator.
    pause
    exit /b 1
)

echo Fetching latest version info...
for /f "usebackq delims=" %%A in (`powershell -NoProfile -Command "$json = (Invoke-WebRequest -Uri 'https://clientsettings.roblox.com/v2/client-version/WindowsPlayer/channel/LIVE').Content | ConvertFrom-Json; $json.clientVersionUpload"`) do (
    set "robloxVersion=%%A"
)

:: Add error checking for version fetch
if not defined robloxVersion (
    echo Failed to get Roblox version info. Report this message to @aprllfools or support.
    pause
    exit /b 1
)

set "version_hash=%robloxVersion:version-=%"

echo.
echo Upgrading to: %version_hash%
echo.

:: Confirm
set /p confirm="Do you want to upgrade to this version? (Y/N): "
if /i not "%confirm%"=="Y" (
	:: Ask if user wants different version
	set /p altconfirm="What version would you like to switch to? Press (N) to exit: "
	if /i "%altconfirm%"=="N" (
		exit /b
	)
	
	set /p version_hash="Enter the version you want to upgrade to (e.g., 347f4ac346734391) Press right click to paste: "
	echo Your switching to version-%version_hash%
)

:: Detect installs
set "foundcount=0"
if exist "%localappdata%\Fishstrap\Versions" (
    set /a foundcount+=1
    set "found_path[!foundcount!]=%localappdata%\Fishstrap"
    set "found_name[!foundcount!]=Fishstrap"
)
if exist "%localappdata%\Bloxstrap\Versions" (
    set /a foundcount+=1
    set "found_path[!foundcount!]=%localappdata%\Bloxstrap"
    set "found_name[!foundcount!]=Bloxstrap"
)
if exist "%localappdata%\Roblox\Versions" (
    set /a foundcount+=1
    set "found_path[!foundcount!]=%localappdata%\Roblox"
    set "found_name[!foundcount!]=Roblox"
)

if %foundcount% equ 0 (
    echo No Roblox, Bloxstrap, or Fishstrap installs found in standard locations.
    pause
    exit /b 1
)

:: Choose install
if %foundcount% equ 1 (
    set "selected_base_path=!found_path[1]!"
    echo Using: !found_name[1]! - !selected_base_path!
) else (
    echo.
    echo Multiple installs found:
    for /L %%i in (1,1,%foundcount%) do (
        echo %%i. !found_name[%%i]! - !found_path[%%i]!
    )
    :getchoice
    set /p choice="Pick install (1-%foundcount%): "
    set "selected_base_path="
    call set "selected_base_path=%found_path[%choice%]%"
    if not defined selected_base_path (
        echo Please enter a number between 1 and %foundcount%.
        goto getchoice
    )
    call echo Using: %found_name[%choice%]% - %selected_base_path%
)

:: Define paths based on selection
set "versions_path=!selected_base_path!\Versions"
set "extract_path=!versions_path!\version-%version_hash%"
set "download_url=https://rdd.latte.to/?channel=LIVE^&binaryType=WindowsPlayer^&version=%version_hash%"

echo.
echo Downloading version: %version_hash%
echo.

start "" %download_url%

echo Waiting for download to finish...

set "download_folder=%USERPROFILE%\Downloads"
set "zip_filename=LIVE-WindowsPlayer-version-%version_hash%.zip"

:waitForDownload
timeout /t 2 >nul

if exist "%download_folder%\%final_file%.crdownload" goto waitForDownload
if exist "%download_folder%\%final_file%.part" goto waitForDownload
if exist "%download_folder%\%final_file%.download" goto waitForDownload
if exist "%download_folder%\%final_file%.tmp" goto waitForDownload

if not exist "%download_folder%\%zip_filename%" goto waitForDownload


if %errorlevel% neq 0 (
    echo Download failed. %errorlevel%
    echo Check your internet connection.
    pause
    exit /b 1
)

for %%A in ("%download_folder%\%zip_filename%") do set "size=%%~zA"
echo Download successful (Size: %size% bytes)

echo.
echo Removing old version from !versions_path!...
if exist "!versions_path!\" (
    for /d %%d in ("!versions_path!\version-*") do (
        if /i not "%%~nxd"=="version-%version_hash%" (
            echo Deleting: "%%~fd"
            rmdir /s /q "%%d"
        ) else (
            echo Keeping current target version folder: "%%~fd"
        )
    )
) else (
    echo Versions directory !versions_path! not found, skipping cleanup.
)

set "download_zip=%download_folder%\%zip_filename%"

:: Extract
echo.
echo Extracting to: !extract_path!
if not exist "!extract_path!" mkdir "!extract_path!" >nul 2>&1
echo Running PowerShell: Expand-Archive -Path '%download_zip%' -DestinationPath '!extract_path!' -Force
powershell -NoProfile -Command "Expand-Archive -Path '%download_zip%' -DestinationPath '!extract_path!' -Force"
if %errorlevel% neq 0 (
    echo Extraction failed. %errorlevel%
    pause
    exit /b 1
)

:: Cleanup downloaded zip
echo Cleaning up temp...
del "%download_zip%" >nul 2>&1

echo.
echo Upgrade complete to version-%version_hash%
echo Files installed to: !extract_path!
echo Opening versions folder...
explorer "!versions_path!"
pause
exit /b 0
