set path=%~d0\nodejs
node_modules\.bin\prettier --single-quote --trailing-comma es5 --write "phaser1/src/*.js"
