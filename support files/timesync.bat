@echo off
echo Forcing time sync...
net stop w32time
w32tm /unregister
w32tm /register
net start w32time
w32tm /resync /force
echo Time sync complete.
pause