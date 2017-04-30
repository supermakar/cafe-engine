function startGame () {    
    // Get canvas Context
    var context = document.getElementById('canvas').getContext('2d');

    //---------------------------------------------------------------------------
    // Load image resources
    var backgroundImage = new Image();
    backgroundImage.src = '../resources/canvasTestImage.png';
    backgroundImage.addEventListener("load", onImageLoad);

    var coinImage = new Image();
    coinImage.src = '../resources/coin-sprite.png';
    coinImage.addEventListener("load", onImageLoad);

    //---------------------------------------------------------------------------
    // Initialize initializeSprites
    var sprites = [];

    var backgroundSprite;
    var coinSprite;

    initializeSprites();

    sprites.push(backgroundSprite);
    sprites.push(coinSprite);

    //---------------------------------------------------------------------------
    // Start the game loop as soon as all image resources are loaded
    var totalImageResources = 2;
    var imagesLoaded = 0;

    function onImageLoad () {
        imagesLoaded++;

        if (imagesLoaded === totalImageResources) {
            gameLoop();
        }
    }

    //---------------------------------------------------------------------------
    // Run game loop
    function gameLoop () {
        window.requestAnimationFrame(gameLoop); 

        // Update game logic
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].update();
        }

        //-------------------------------------------------------
        
        // Clear the canvas
        context.clearRect(0, 0, 1024, 768);
        
        // Render the sprites
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].updateAnimation();
            sprites[i].render();
        }
    }

    //---------------------------------------------------------------------------
    // Function Definitions

    function initializeSprites () {
        backgroundSprite = createBackground({
            context: canvas.getContext("2d"),
            width: 1024,
            height: 768,
            initialXPosition: 0,
            initialYPosition: 0,
            image: backgroundImage,
            numberOfFrames: 1,
            ticksPerFrame: 2,
            loopAnimation: false
        });

        coinSprite = createCoin({
            context: canvas.getContext("2d"),
            width: 440,
            height: 44,
            initialXPosition: 0,
            initialYPosition: 362,
            image: coinImage,
            numberOfFrames: 10,
            ticksPerFrame: 2,
            loopAnimation: true
        });
    }


    //----------------------------------------------------------------------------
    // Mouse Events

    canvas.addEventListener("click", function (event) {
        var canvasRect = canvas.getBoundingClientRect();
        var mousePositionX = event.clientX - canvasRect.left;
        var mousePositionY = event.clientY - canvasRect.top;

        alert("Click detected at X: " + mousePositionX + " Y: " + mousePositionY);
    });
}