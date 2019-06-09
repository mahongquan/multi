// import makeAnimations from '../helpers/animations';

class FirstScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'FirstScene'
        });
    }
    preload() {
        // const progress = this.add.graphics();

        // // Register a load progress event to show a load bar
        // this.load.on('progress', (value) => {
        //     progress.clear();
        //     progress.fillStyle(0xffffff, 1);
        //     progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        // });

        // // Register a load complete event to launch the title screen when all files are loaded
        // this.load.on('complete', () => {
        //     // prepare all animations, defined in a separate file
        //     // makeAnimations(this);
        //     // progress.destroy();
        //     // this.scene.start('TitleScene');
        // });

        this.load.image('about', 'assets/about.png'); // 16-bit later
    }
    create(){
        this.add.image(398/2,260/2, 'about');
    }
}

export default FirstScene;
