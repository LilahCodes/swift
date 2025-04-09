[ONLY OFFICIAL DOWNLOAD](https://getswift.gg/)
# List of known fixes for swift issues  
READ AND TRY THESE FIXES **BEFORE** OPENING A TICKET

## Table of Contents
- [How do i disable my antivirus?](#how-do-i-disable-my-antivirus)
- [Key system Issues](#key-system-issues)
- [Fatal Error](#fatal-error)
- [Injection Timeout](#injection-timeout)
- [Module not found](#module-not-found)
- [Failed to relocate module](#failed-to-relocate-module)
- [Your system clock is incorrect](#your-system-clock-is-incorrect)
- [White screen](#white-screen)
- [What vpn to use](#what-vpn-to-use)
- [Not executing](#not-executing)
- [Dependencies](#dependencies)

## How do i disable my antivirus?

All windows pcs come with Windows Defender by default, which is an antivirus. Due to swift being the type of program it is, any antivirus will falsely flag it.
Here are some guides for disablng it:

[Windows 10](https://www.youtube.com/watch?v=1GgtAxWxhMQ)
[Windows 11](https://www.youtube.com/watch?v=o0OTed9c_GQ)

### Exceptions

Since you would need to do this on every restart though, you should make exceptions instead. This basically just makes defender "skip over" whatever folders you choose:

[Windows 10](https://www.youtube.com/watch?v=BonLkFNnO9w)
[Windows 11](https://www.youtube.com/watch?v=zGiNGnX5dYg)

You want to add the folder wherever your swift files are stored first off, but also you want to add `C:\Users\YOUR_USER\AppData\Local\Temp\amdxx64.dll`
This is a dll swift uses for injection, and if defender blocks it will result in the (Injection Timeout) Error

If you use other antiviruses such as McAfee, Norton, AVG, Avast, just search on youtube how to disable them. Or better yet search how to add folder exceptions to save future isues.

## Key system Issues

### Swift website

If the swift website itself wont load, use a vpn. Its probably an ISP issue blocking the website. This *might* mean you need to use a vpn the whole time you are using swift, just test it out as its different per user.

### Lootlabs

Disable VPN

Use Microsoft Edge browser in an **incognito/private tab**

Use [Quad9 DNS](https://youtube.com/watch?v=aujUl3yt6nM)

If a task is infinitely loading, refresh for another task. Also if you get an article task you have to click an article within the tab it opens for lootlabs to register it

## Fatal Error
Fatal error or Unexpected; Close UI and ROBLOX. Launch Swift first, then roblox.

## Injection Timeout

**Before** doing the following steps, refer to [this](#how-do-i-disable-my-antivirus) to turn off ur antivirus, **and** make an exception for the amd dll. Defender can and will delete this file without you knowing, and this can cause the injection timeout error. Restore the file and then make an exception.

[How to restore file](https://www.youtube.com/watch?v=EWaw1XZJj58)
[How to make an exception](#exceptions)

### If you're still getting this error

- Log in to the administrator account on your computer.
- Download the latest roblox version.
- If Roblox is already installed on the administrator account, uninstall it first (it may be outdated).
- Install the newly downloaded Roblox version.
- Return to Your User Account:
- Log back into your original account.
- Launch Swift as administrator, then launch Roblox as administrator.

Alternative (Simpler) Solution:
- Use the administrator account to download and install both the correct roblox version and swift
- Run them directly from the admin account.
- This should resolve the injection timeout issue.
- Another fix is to reinstall swift and roblox

## Module not found
- Ensure [antivirus is disabled](#how-do-i-disable-my-antivirus)
- Close swift & Roblox
- Delete 'Swift-Module.dll'
- Relaunch swift then roblox


## Failed to relocate module
- Ensure [antivirus is disabled](#how-do-i-disable-my-antivirus)
- Run as admin
- Relaunch both swift and roblox multiple times. Swift first, then roblox
- Another fix is If you are facing any issue such as “Failed to locate module”, “Missing DLL”, or unable to use Swift, please ensure you have [this](https://aka.ms/vs/17/release/vc_redist.x64.exe) installed

## Your system clock is incorrect
- Open settings, Go to Time & Language
- Go to Date & Time then ensure the Set Time Automatically toggle is on
- Scroll down and click sync now
- If this dosen't work for you, use the files from [this](https://discord.com/channels/868278834821230613/1245586098797678685/1358443560927498280) message in the discord. These try to force sync time for you

## White screen
Make sure you are running as admin / using an account that has admin priveleges

## What vpn to use
Warp is a good free choice
Download [here](https://1.1.1.1/)

- Open it
- Press the arrow at the bottom right of your desktop
- Click the cloud icon and enable cloudflare warp
- Relaunch swift and try to inject
- Youtube guide [here](https://www.youtube.com/watch?v=PQHv5wnePS4) on how to use warp if you prefer

## Not executing
- Click the windows key, type run
- Type inside of run %localappdata% (its different for bloxtrap/fishtrap)
- Look for the Roblox folder, open versions
- Delete everything inside the versions folder.

- Go to [this](https://rdd.latte.to) site
- Set the Binary Type to WindowsPlayer
- Set the channel name to LIVE
- Click download, click the link given, then copy the "version-(numbers)"
- paste the version into Version-Hash
- Click download

- Now drag the downloaded zip file into the versions folder you previously deleted everything in.
- Delete the Live-WindowsPlayer- from the file then extract the file.
- Double click on the extracted folder and open roblox, scroll down to find it
- Now swift should execute

## Dependencies
- https://dotnet.microsoft.com/en-us/download/dotnet/8.0
- https://aka.ms/vs/17/release/vc_redist.x64.exe
- https://aka.ms/vs/17/release/vc_redist.x86.exe
- https://go.microsoft.com/fwlink/p/?LinkId=2124703
- https://www.microsoft.com/en-us/download/details.aspx?id=8109
- https://www.microsoft.com/en-us/download/details.aspx?id=35
