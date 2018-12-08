<<<<<<< HEAD
rem %~d0 是当前盘符
rem %cd% 是当前目录
set path=%~d0\nodejs;
node_modules\.bin\electron . --local
rem .\out\Sqlectron-win32-ia32\sqlectron.exe
=======
rem %~d0 是当前盘符
rem %cd% 是当前目录
set path=%~d0\nodejs
node_modules\.bin\electron .\parts --dev --local
>>>>>>> 16e2db789644d51ea6ab21a21c742dae555e4a0a
