rem %~d0 �ǵ�ǰ�̷�
rem %cd% �ǵ�ǰĿ¼
set path=%~d0\nodejs
node_modules\.bin\electron .\parts  --local --dev
rem .\out\Sqlectron-win32-ia32\sqlectron.exe