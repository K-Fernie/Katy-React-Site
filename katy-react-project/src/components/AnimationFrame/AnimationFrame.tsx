import './AnimationFrame.css'
import {useEffect, useRef} from "react";
import spriteSheet from '../../assets/sprite-sheet-v1.png';

export default function AnimationFrame() {
    // Getting sprite sheet
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spriteSheetRef = [
        {rowName: 'run-right', rowIndex: 0, columns: 8, animationLoops: 4, move: 'right'},
        {rowName: 'chop-right', rowIndex: 1, columns: 5, animationLoops: 6, move: 'none'},
        {rowName: 'wipe-sweat', rowIndex: 3, columns: 8, animationLoops: 1, move: 'none'},
        {rowName: 'run-left', rowIndex: 2, columns: 8, animationLoops: 4, move: 'left'},
    ];
    // Using use effect so methods are called after canvas render
    useEffect(() => {
        // TODO need to figure out why the sprite is a little blurry
        const img = new Image();
        img.src = spriteSheet;
        img.onload = function () {
            init();
        };

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        //Set canvas dimensions
        canvas.width = 500;
        //Sprite variables
        let refIndex = 0;
        let spriteRef = spriteSheetRef[refIndex]
        const spriteWidth = 32;
        const spriteHeight = 32;
        let spriteX = 0;
        const spriteY = canvas.height - spriteHeight;

        //Animation variables
        let frameIndex = 0;
        const frameSpeed = 9;
        let frameTimer = 0;
        let animationLoops = 0;
        let isAnimating = true;


        // Draw a frame
        function drawFrame(frameX: number, frameY: number, canvasX: number, canvasY: number) {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                frameX * spriteWidth,
                frameY * spriteHeight, // y-coordinate is always 0 since there's only one row
                spriteWidth,
                spriteHeight,
                canvasX,
                canvasY,
                spriteWidth * 4,
                spriteHeight
            );
        }

        function animate() {
            if (isAnimating) {
                frameTimer++;
                // This determines the speed of the sprite rendering
                if (frameTimer >= frameSpeed) {
                    frameTimer = 0;
                    frameIndex++;
                    // Updating X axis based on sprite direction
                    switch (spriteRef.move) {
                        case 'right':
                            spriteX += 5
                            console.log('moving right')
                            break
                        case 'left':
                            spriteX -= 5
                            console.log('moving left')
                            break
                        default:
                            console.log('not moving')
                            break
                    }
                    // This determines the x-index of the sprite sheet
                    if (frameIndex >= spriteRef.columns) {
                        frameIndex = 0;
                        animationLoops++;
                        // This determines when to stop looping through the current animation
                        if (animationLoops >= spriteRef.animationLoops) {
                            animationLoops = 0;
                            if (++refIndex >= spriteSheetRef.length) {
                                refIndex = 0;
                                isAnimating = false;
                            }
                            spriteRef = spriteSheetRef[refIndex];
                        }
                    }
                }
                const frameX = frameIndex % spriteRef.columns;
                const frameY = spriteRef.rowIndex;
                drawFrame(frameX, frameY, spriteX, spriteY);
            }
            requestAnimationFrame(animate);
        }

        function init() {
            drawFrame(0, 0, spriteX, spriteY);
            requestAnimationFrame(animate);
        }
    }, []);


    return (
        <canvas ref={canvasRef} className="animation-container">
        </canvas>
    )
}

// 1. Top column running
// 2. Second column chopping
// 3. Third column blink, wipe sweat
// 4. Fourth column run back to cabin
// spriteX += 15; <- Movement for the sprite