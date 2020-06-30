import { Snake } from './Snake.js'

export class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    create(){
        this.snake = new Snake(this);
    }

    update(time){
        this.snake.update(time);
    }
}