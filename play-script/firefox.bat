@echo off
echo lauching...
if "%~1"=="-dev" (
	start "" "C:\Program Files\Firefox Developer Edition\firefox.exe"
) else if "%~1"=="-private" (
	start "" "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Firefox Private Browsing.lnk"
) else (
	start "" "C:\Program Files\Mozilla Firefox\firefox.exe"
)

