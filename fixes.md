# 🛠️ Swift Troubleshooting Guide

> [!IMPORTANT]
> [Only official download](https://getswift.gg/)  
> **Status:** 🚫 Down  
> **Last updated version:** `347f4ac346734391`  
> **Join the community:** [Swift Discord](https://discord.gg/getswift)

---

## 📋 Table of Contents
- [Issues with No Fix / Planned Features](#issues-with-no-fix--planned-features)
- [How do I downgrade?](#how-do-i-downgrade)
- [How do I disable my antivirus?](#how-do-i-disable-my-antivirus)
- [Key system Issues](#key-system-issues)
- [Fatal Error](#fatal-error)
- [Injection Timeout](#injection-timeout)
- [Module not found](#module-not-found)
- [Failed to relocate module](#failed-to-relocate-module)
- [Your system clock is incorrect](#your-system-clock-is-incorrect)
- [White screen](#white-screen)
- [What VPN to use](#what-vpn-to-use)
- [Not executing](#not-executing)
- [Dependencies](#dependencies)

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
> Downgrading is NOT supported and is likely detected. This increases your chances of getting banned. We take no responsibility and **support will not** assist with any issues caused by downgrading.

You might want to downgrade if Swift hasn’t updated yet. Here’s how:

1. Go to https://rdd.latte.to  
2. Input the version hash: `347f4ac346734391`  
3. Download and unzip the file  
4. Open `RobloxPlayerBeta.exe` inside the folder  
5. Inject as normal

Again—this is probably detected, and any issues here won’t be helped by support.

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
- `C:\Users\YOUR_USER\AppData\Local\Temp\amdxx64.dll`

> [!IMPORTANT]
> That DLL (`amdxx64.dll`) is used by Swift for injection. If it's blocked, you’ll get the [Injection Timeout](#injection-timeout) error.

Using McAfee, Norton, AVG, Avast? Just search how to disable or make folder exceptions for your antivirus on YouTube.

---

## Key system Issues

### Swift website won’t load?
- Use [Warp VPN](#what-vpn-to-use)
- Use **Microsoft Edge** in **incognito/private tab**

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

1. Launch Swift first  
2. Then launch Roblox

---

## Injection Timeout

> [!IMPORTANT]
> First, make sure [antivirus is disabled and exceptions are added](#how-do-i-disable-my-antivirus). Defender can silently delete `amdxx64.dll`.

- [Restore the DLL](https://www.youtube.com/watch?v=EWaw1XZJj58)  
- [Add an Exception](#how-do-i-disable-my-antivirus)

### Still getting this error?

1. Log into an **administrator account**
2. Download the latest Roblox
3. If Roblox is already installed, uninstall it
4. Install the freshly downloaded one
5. Log back into your original user account
6. Launch Swift as admin, then launch Roblox as admin

> **Alternative (Simpler):** Install and run both Swift + Roblox directly from the admin account.

---

## Module not found

- Make sure [antivirus is disabled](#how-do-i-disable-my-antivirus)
- Close both Swift & Roblox
- Delete `Swift-Module.dll`
- Relaunch Swift, then Roblox

---

## Failed to relocate module

1. Ensure [antivirus is disabled](#how-do-i-disable-my-antivirus)  
2. Run Swift and Roblox as admin  
3. Relaunch both multiple times (Swift first)  
4. Also install: [VC++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)

---

## Your system clock is incorrect

1. Open **Settings → Time & Language → Date & Time**  
2. Enable **Set Time Automatically**  
3. Click **Sync Now**

Still not syncing?  
Use files from [this Discord message](https://discord.com/channels/868278834821230613/1245586098797678685/1358443560927498280)

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

1. Press `Win + R`, type: `%localappdata%`  
2. Go to `Roblox/Versions`, delete **everything**
3. Visit [rdd.latte.to](https://rdd.latte.to)  
    - Set Binary Type: `WindowsPlayer`  
    - Channel: `LIVE`  
    - Paste version number from downloaded zip
4. Drag the zip into the versions folder  
5. Remove `Live-WindowsPlayer-` from the filename  
6. Extract & run Roblox from inside

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
