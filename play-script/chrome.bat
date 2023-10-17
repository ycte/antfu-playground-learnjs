@echo off
echo %1
if "%~1"=="" (
	start "" "C:\Program Files\Google\Chrome\Application\chrome.exe"
) else if "%~1"=="-dev" (
	start "" "C:\Program Files\Google\Chrome Dev\Application\chrome.exe"
) else if "%~1"=="-beta" (
	start "" "C:\Program Files\Google\Chrome Beta\Application\chrome.exe"
)
	

