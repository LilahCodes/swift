# 🛠️ Swift Troubleshooting Guide

> [!IMPORTANT]
> [Only official download](https://getswift.gg/)  
> **Status:** 🟢 Working</br>
> **Last updated version:** `c2c9efad42eb44e5`  
> **Join the community:** [Swift Discord](https://discord.gg/getswift)

---

## 📋 Table of Contents


> [!NOTE]
> Some files are required for swift to work, refer to [Dependencies](#dependencies)

### Misc
- [What VPN to use](#what-vpn-to-use)
- [Issues with No Fix / Planned Features](#issues-with-no-fix--planned-features)
- [How do I downgrade?](#how-do-i-downgrade)
- [How do I disable my antivirus?](#how-do-i-disable-my-antivirus)
- [Custom themes](#custom-themes)
### Website
- [Key system Issues](#key-system-issues)
### App
- [Fatal Error](#fatal-error)
- [Injection Timeout](#injection-timeout)
- [Module not found](#module-not-found)
- [Failed to relocate module](#failed-to-relocate-module)
- [Your system clock is incorrect](#your-system-clock-is-incorrect)
- [White screen](#white-screen)
- [Not executing](#not-executing)

---

## Issues with No Fix / Planned Features

> [!NOTE]
> These are known issues or upcoming features that are being worked on.

Script editor bugs:
- Switching tabs clears active text
- Tab autofill doesn't work
- Cannot rename files/tabs directly

Planned:
- Multi-instance is not yet supported. Might work via third-party tools, but official support is coming soon.

---

## How do I downgrade?

> [!CAUTION]
> Downgrading might be detected, likely not but still a risk of being banned. Just as there is a risk with exploiting, you have been warned. Use alts!

You might want to downgrade if Swift hasn’t updated yet. Here’s how:

- Go to https://rdd.latte.to/?channel=LIVE&binaryType=WindowsPlayer&version=347f4ac346734391 (this is the previous roblox version) 
- Download and unzip the file  
- Open `RobloxPlayerBeta.exe` inside the folder  
- Inject as normal

---

## How do I disable my antivirus?

> [!TIP]
> Swift often triggers false positives because of how it operates. Disabling antivirus or adding exceptions is necessary.

### Windows Defender (default on all Windows PCs)

- [Windows 10 Disable Guide](https://www.youtube.com/watch?v=1GgtAxWxhMQ)  
- [Windows 11 Disable Guide](https://www.youtube.com/watch?v=o0OTed9c_GQ)

### Add Exceptions Instead (Recommended)
- [Windows 10 Exceptions Guide](https://www.youtube.com/watch?v=BonLkFNnO9w)  
- [Windows 11 Exceptions Guide](https://www.youtube.com/watch?v=zGiNGnX5dYg)

Add these paths:
- Your Swift folder
- `%temp%\Ckfn1k59vk.exe`

> [!IMPORTANT]
> The file (`Ckfn1k59vk.exe`) is used by Swift. If it's blocked, you’ll get the [Injection Timeout](#injection-timeout) error.

Using McAfee, Norton, AVG, Avast? Just search how to disable or make folder exceptions for your antivirus on YouTube.

---

## Key system Issues

> [!IMPORTANT]
> You **will** encounter key system issues on certain browsers. Please use microsoft edge in an incognito window, this solves most issues

### Swift website won’t load?
- Use [Warp VPN](#what-vpn-to-use)

> [!NOTE]
> If you obtain a key using a VPN, you **MUST** redeem the key using the same VPN. After that, you can turn it off.

### Lootlabs issues?
- Disable VPN  
- Use [Quad9 DNS](https://youtube.com/watch?v=aujUl3yt6nM)  
- Refresh stuck tasks  
- If given an article task, click inside **the same tab** that opens.

---

## Fatal Error

Close Swift and Roblox completely.

- Launch Swift first  
- Then launch Roblox

---

## Injection Timeout

> [!NOTE]
> Have you tried injecting multiple times? For a lot of users the first inject is failing at the moment, but the second or third works.

> [!IMPORTANT]
> First, make sure [antivirus is disabled and exceptions are added](#how-do-i-disable-my-antivirus). Defender can silently delete `Ckfn1k59vk.exe`.

- [Restore the DLL](https://www.youtube.com/watch?v=EWaw1XZJj58)  
- [Add an Exception](#how-do-i-disable-my-antivirus)

### Still getting this error?

- Log into an **administrator account**
- Download the latest Roblox
- If Roblox is already installed, uninstall it
- Install the freshly downloaded one
- Log back into your original user account
- Launch Swift as admin, then launch Roblox as admin

> **Alternative (Simpler):** Install and run both Swift + Roblox directly from the admin account.

---

## Module not found

- Make sure [antivirus is disabled](#how-do-i-disable-my-antivirus)
- Close both Swift & Roblox
- Delete `Swift-Module.dll`
- Relaunch Swift, then Roblox

---

## Failed to relocate module

- Ensure [antivirus is disabled](#how-do-i-disable-my-antivirus)  
- Close both Swift and Roblox
- Open Swift
- When loaded, open Roblox

---

## Your system clock is incorrect

- Open **Settings → Time & Language → Date & Time**  
- Enable **Set Time Automatically**  
- Click **Sync Now**


> [!TIP]
> Still not syncing?
> Use the file from [this Discord message](https://discord.com/channels/868278834821230613/1245586098797678685/1358443560927498280)

---

## White screen

- Make sure you are running Swift as admin  
- Ensure your Windows account has admin privileges

---

## What VPN to use

> [!TIP]
> Warp by Cloudflare is free, simple, and works great with Swift.

- Download: [Warp VPN](https://1.1.1.1/)  
- Open it and enable "Cloudflare Warp"  
- [YouTube Setup Guide](https://www.youtube.com/watch?v=PQHv5wnePS4)

---

## Not executing

- Press `Win + R`, type: `%localappdata%`  
- Go to `Roblox/Versions`, delete **everything**
- Visit [rdd.latte.to](https://rdd.latte.to)  
    - Set Binary Type: `WindowsPlayer`  
    - Channel: `LIVE`  
    - Paste version number from downloaded zip
- Drag the zip into the versions folder  
- Remove `Live-WindowsPlayer-` from the filename  
- Extract & run Roblox from inside

Now Swift should execute properly.

---

## Dependencies

> [!NOTE]
> Make sure all the following are installed:

- [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)  
- [VC++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)  
- [VC++ x86](https://aka.ms/vs/17/release/vc_redist.x86.exe)  
- [DirectX Runtime](https://go.microsoft.com/fwlink/p/?LinkId=2124703)  
- [Microsoft Visual C++ 2010](https://www.microsoft.com/en-us/download/details.aspx?id=8109)  
- [Microsoft Visual C++ 2008](https://www.microsoft.com/en-us/download/details.aspx?id=35)


---

## Custom Themes

Iykyk, not technically supported yet will *hopefully* be coming soon 
---
