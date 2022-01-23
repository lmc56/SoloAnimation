class SoloAnimation {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SoloSprite.png"), 0, 0, 32, 45, 9, 0.2);
    };

    update(){

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}