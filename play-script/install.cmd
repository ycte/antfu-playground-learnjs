@REM ������ǰĿ¼�������ļ�
@echo off
setlocal enabledelayedexpansion

for /r %%i in (*) do (
  @echo off
  echo %%i
  set "file=%%i"
  set "file=!file:~64,-1!"
  echo "!file!t"
  if exist C:\script\!file!t (
    @REM ��ɾ��
    del "C:\script\!file!t"
    copy "%%i" "C:\script\!file!t"
  ) else (
    copy "%%i" "C:\script\!file!t"
  )
)
echo ��װ���