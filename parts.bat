rem %~d0 是当前盘符
rem %cd% 是当前目录
set path=%~d0\nodejs
node_modules\.bin\electron .\parts  --local --dev
rem .\out\Sqlectron-win32-ia32\sqlectron.exe
