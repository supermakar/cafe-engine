function createSprite (parameters) {
    // The sprite object to return
    var sprite = {};

    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = parameters.ticksPerFrame || 0;
    var numberOfFrames = parameters.numberOfFrames || 1;
    var xPosition = parameters.initialXPosition;
    var yPosition = parameters.initialYPosition;

    sprite.loopAnimation = parameters.loopAnimation;
    sprite.context = parameters.context;
    sprite.width = parameters.width;
    sprite.height = parameters.height;
    sprite.image = parameters.image;

    sprite.render = function () {
        sprite.context.drawImage(
            sprite.image,
            frameIndex * sprite.width / numberOfFrames,
            0,
            sprite.width / numberOfFrames, 
            sprite.height,
            xPosition,
            yPosition,
            sprite.width / numberOfFrames,
            sprite.height
        );
    };

    sprite.updateAnimation = function () {
        tickCount += 1;

        if (tickCount > ticksPerFrame) {
            tickCount = 0;

            // If the current frame index is in range
            if (frameIndex < numberOfFrames -1) {
                // Go to the next frame
                frameIndex += 1;
            } else if (sprite.loopAnimation) {
                frameIndex = 0;
            }
        }
    };

    sprite.updatePosition = function (newXPosition, newYPosition) {
        xPosition = newXPosition;
        yPosition = newYPosition;
    };

    return sprite;
}