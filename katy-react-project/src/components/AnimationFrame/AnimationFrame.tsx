import './AnimationFrame.css'
import {useEffect, useRef} from "react";
import spriteSheet from '../../assets/sprite-sheet-v1.png';

export default function AnimationFrame() {
    // Getting sprite sheet
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
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
        //Sprite data
        const spriteWidth = 32;
        const spriteHeight = 32;
        let spriteX = 0;
        const spriteY = canvas.height - spriteHeight;
        const spriteCols = 19;
        //Frame data
        let frameIndex = 0;
        const frameCount = spriteCols;
        const frameSpeed = 5;
        let frameTimer = 0;
        let isAnimating = true;

        // Draw a frame
        function drawFrame(frameX: number, canvasX: number, canvasY: number) {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                frameX * spriteWidth,
                0, // y-coordinate is always 0 since there's only one row
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
                if (frameTimer >= frameSpeed) {
                    frameTimer = 0;
                    frameIndex++;
                    // TODO Fix sprite sheet
                    // 1. Top column running
                    // 2. Second column chopping
                    // 3. Third column blink, wipe sweat
                    // 4. Fourth column run back to cabin
                    // spriteX += 15 <- Example of sprite moving
                    if (frameIndex >= frameCount) {
                        frameIndex = 0;
                        isAnimating = false;
                    }
                }
                const frameX = frameIndex % spriteCols;
                drawFrame(frameX, spriteX, spriteY);
            }
            requestAnimationFrame(animate);
        }

        function init() {
            drawFrame(0, spriteX, spriteY);
            requestAnimationFrame(animate);
        }
    }, []);


    return (
        <canvas ref={canvasRef} className="animation-container">
        </canvas>
    )
}

