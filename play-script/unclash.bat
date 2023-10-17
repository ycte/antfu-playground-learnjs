@echo off
echo "stoping task..."
taskkill /f /im clash-win64.exe
taskkill /f /im "Clash for Windows.exe"
echo "changing proxy..." 
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f 
echo stoped
