cd .\node_modules\sqlite3
npm install nan --save
npm run prepublishOnly
node-gyp configure --msvs_version=2015 --module_name=node_sqlite3 --module_path=./lib/binding/lectron-v2.0-win32-ia32
node-gyp rebuild  --msvs_version=2015 --target=2.0.2 --arch=ia32 --target_platform=win32 --dist-url=https://atom.io/download/electron/ --module_name=node_sqlite3 --module_path=./lib/binding/electron-v2.0-win32-ia32