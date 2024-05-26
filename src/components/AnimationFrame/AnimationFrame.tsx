import './AnimationFrame.css'
import {useEffect, useRef} from "react";

export interface SpriteRef {
    rowName: string,
    rowIndex: number,
    columns: number,
    animationLoops: number,
    move: string
}

export default function AnimationFrame(props: { spriteSheet: string, spriteSheetRef: SpriteRef[]; }) {
    // TODO in the props need to pass in if the animation should stop or forever continue
    // TODO need to pass in the height and width of the canvas so we can dynamically set how big it should be
    // TODO the frame needs to be sticky (not flex) so it doesn't move
    // TODO the rendering needs to be adjusted (the speed is wild on other computers)
    // Getting sprite sheet
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Using use effect so methods are called after canvas renders
    useEffect(() => {
        const img = new Image();
        img.src = props.spriteSheet;
        img.onload = function () {
            init();
        };

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        //Sprite variables
        let refIndex = 0;
        let spriteRef = props.spriteSheetRef[refIndex]
        const spriteRefWidth = 64;
        const spriteRefHeight = 64;
        const spriteRender = 64;
        let spriteX = 0;
        const spriteY = canvas.height - 64;

        //Animation variables
        let frameIndex = 0;
        const frameSpeed = 6;
        const frameDuration = 1000 / frameSpeed;
        let lastTimestamp = 0;
        let animationLoops = 0;
        let isAnimating = true;


        // draw frame used to render the sprite to the screen
        function drawFrame(frameX: number, frameY: number, canvasX: number, canvasY: number) {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                frameX * spriteRefWidth,
                frameY * spriteRefHeight, // y-coordinate is always 0 since there's only one row
                spriteRefWidth,
                spriteRefHeight,
                canvasX,
                canvasY,
                spriteRender,
                spriteRender
            );
        }

        function animate(timestamp: number) {
            if (!isAnimating) {
                return;
            }

            if (!lastTimestamp) {
                lastTimestamp = timestamp;
            }

            const delta = timestamp - lastTimestamp;

            if (delta >= frameDuration) {
                lastTimestamp = timestamp;
                frameIndex++;

                // Updating X axis based on sprite direction
                switch (spriteRef.move) {
                    case 'right':
                        spriteX += 5;
                        break;
                    case 'left':
                        spriteX -= 5;
                        break;
                    default:
                        break;
                }

                // This determines the x-index of the sprite sheet
                if (frameIndex >= spriteRef.columns) {
                    frameIndex = 0;
                    animationLoops++;
                    // This determines when to stop looping through the current animation
                    if (animationLoops >= spriteRef.animationLoops) {
                        animationLoops = 0;
                        if (++refIndex >= props.spriteSheetRef.length) {
                            refIndex = 0;
                        }
                        spriteRef = props.spriteSheetRef[refIndex];
                    }
                }

                const frameX = frameIndex % spriteRef.columns;
                const frameY = spriteRef.rowIndex;
                drawFrame(frameX, frameY, spriteX, spriteY);
            }
            // TODO this will forever be called unless we only want it triggered by something
            requestAnimationFrame(animate);
        }


        function init() {
            // Draw the initial frame and initialize recursive animation loop
            drawFrame(0, 0, spriteX, spriteY);
            requestAnimationFrame(animate);
        }
    }, []);


    return (
        <canvas style={{imageRendering: 'pixelated'}} ref={canvasRef} className="animation-container">
        </canvas>
    )
}