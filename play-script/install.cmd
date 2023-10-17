@REM 遍历当前目录下所有文件
@echo off
setlocal enabledelayedexpansion

for /r %%i in (*) do (
  @echo off
  echo %%i
  set "file=%%i"
  set "file=!file:~64,-1!"
  echo "!file!t"
  if exist C:\script\!file!t (
    @REM 先删除
    del "C:\script\!file!t"
    copy "%%i" "C:\script\!file!t"
  ) else (
    copy "%%i" "C:\script\!file!t"
  )
)
echo 安装完成