function createBackground (parameters) {
    // The sprite object for the background sprite
    var backgroundSprite = createSprite({
        context: parameters.context,
        width: parameters.width,
        height: parameters.height,
        initialXPosition: parameters.initialXPosition,
        initialYPosition: parameters.initialYPosition,
        image: parameters.image,
        numberOfFrames: parameters.numberOfFrames,
        ticksPerFrame: parameters.ticksPerFrame,
        loopAnimation: parameters.loopAnimation
    });

    // The background sprite object to return
    var background = Object.create(backgroundSprite);

    //-----------------------------------------------------------------------------

    background.update = function () {}

    return background;
}