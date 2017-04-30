function createCoin (parameters) {
    // The sprite object for the coin sprite
    var coinSprite = createSprite({
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

    // The coin sprite object to return
    var coin = Object.create(coinSprite);

    //-----------------------------------------------------------------------------
    
    var movingRight = true;
    var xPosition = 0;

    coin.update = function () {
        // Update movement
        if (movingRight) {
            if (xPosition < (1024 - 44)) {
                xPosition++;
            } else {
                movingRight = false;
                xPosition--;
            }
        } else {
            if (xPosition > 0) {
                xPosition--;
            } else {
                movingRight = true;
                xPosition++;
            }
        }

        coin.updatePosition(xPosition, 362);
    };

    return coin;
}