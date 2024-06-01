import NameBadge from "./NameBadge/NameBadge.tsx";
import AnimationFrame, {SpriteRef} from "../AnimationFrame/AnimationFrame.tsx";
import katySpriteSheet from "../../assets/sprite-sheet-v1.png";
import Footer from "./Footer/Footer.tsx";

export default function HomePage() {
    // TODO figure out how to configure the site for mobile as well (primarily phones)
    const katyAnimationRef: SpriteRef[] = [
        {rowName: 'run-right', rowIndex: 0, columns: 8, animationLoops: 4, move: 'right'},
        {rowName: 'chop-right', rowIndex: 1, columns: 5, animationLoops: 6, move: 'none'},
        {rowName: 'celebrate', rowIndex: 3, columns: 8, animationLoops: 2, move: 'none'},
        {rowName: 'run-left', rowIndex: 2, columns: 8, animationLoops: 4, move: 'left'},
    ];
    return (
        <>
            <div className="base-page">
                <NameBadge></NameBadge>
                <div className="body">
                    {/*<NavBar isHomePage={true}></NavBar>*/}
                    <div className="animation-frames">
                        <AnimationFrame
                            key="katy-animation"
                            spriteSheetRef={katyAnimationRef}
                            spriteSheet={katySpriteSheet}
                        ></AnimationFrame>
                    </div>
                </div>
                <Footer></Footer>
                {/* TODO add interactive elements */}
                {/* TODO make the options panel a flyout that doesn't affect other elements*/}
            </div>
        </>
    )
}