
import { tss, GlobalStyles, keyframes } from "tss";
import { Header } from "./Header";
import { useDomRect } from "powerhooks/useDomRect";
import avatarJpegUrl from "assets/avatar.jpeg";
import foodPhoWebpUrl from "assets/food-pho.webp";
import { useScrollHeight } from "tools/useScrollHeight";
import LinearProgress from '@mui/material/LinearProgress';

export function App() {

    const { ref: headerRef, domRect: { height: headerHeight } } = useDomRect();
    const { ref: scrollableContentRef, domRect: { height: scrollableContentHeight } } = useDomRect();

    const { classes } = useStyles({ headerHeight });

    const { scrollHeight } = useScrollHeight();

    return (
        <>
            <GlobalStyles
                styles={{
                    "*": {
                        "boxSizing": "border-box",
                        "margin": 0,
                        "padding": 0,
                    },
                    "body": {
                        "backgroundColor": "black",
                        "animation": `${keyframes`
                            0% {
                                opacity: 0;
                            }
                            100% {
                                opacity: 1;
                            }
                            `} 200ms`
                    }

                }}
            />
            <Header
                ref={headerRef}
                className={classes.header}
            />
            <main className={classes.main}>
                <div className={classes.hideTop} />

                <div className={classes.illustration} >
                    <img
                        src={
                            (() => {

                                if (scrollHeight > 500) {
                                    return foodPhoWebpUrl;
                                }

                                return avatarJpegUrl

                            })()
                        }
                        alt="avatar"
                        style={{ width: "80%" }}
                    />
                </div>

                <div className={classes.scrollableContent} ref={scrollableContentRef}>
                    {Array.from({ length: 1000 }, (_, i) => (
                        <p key={i}> Content {i} </p>
                    ))}
                </div>

                    <LinearProgress
                        classes={{
                            "bar": classes.progressBar
                        }}
                        className={classes.progress}
                        variant="determinate"
                        value={(scrollHeight / (scrollableContentHeight - 991)) * 100}
                    />


                <div className={classes.hideBottom} />

            </main>
        </>
    );

}


const useStyles = tss
    .withName({ App })
    .withParams<{ headerHeight: number; }>()
    .create(({ headerHeight, currentBreakpoint, windowInnerWidth, windowInnerHeight }) => {

        const mainWidth = (() => {
            switch (currentBreakpoint) {
                case "xs": return windowInnerWidth - 10;
                case "sm": return windowInnerWidth - 20;
                case "md": return 0.8 * windowInnerWidth;
                case "lg": return 0.7 * windowInnerWidth;
                case "xl": return 0.6 * windowInnerWidth;
            }
        })();

        const hideTopBottom = 300;

        const illustrationWidth = mainWidth * 0.5;

        return {
            "header": {
                "position": "fixed",
                "width": "100%",
                "zIndex": 1
            },
            "main": {
                "position": "relative",
                "top": headerHeight,
                //"backgroundColor": "cyan",
                "margin": "auto",
                "width": mainWidth
            },
            "hideTop": {
                position: "fixed",
                top: headerHeight,
                backgroundColor: "black",
                height: hideTopBottom,
                width: mainWidth,
                "zIndex": 1
            },
            "illustration": {
                "position": "fixed",
                "top": headerHeight + hideTopBottom,
                "width": illustrationWidth,
                "height": windowInnerHeight - headerHeight - 2 * hideTopBottom,
                //"backgroundColor": "cyan",
                "zIndex": 1000,

                "display": "flex",
                "alignItems": "center",
            },
            "scrollableContent": {
                position: "relative",
                top: hideTopBottom,
                backgroundColor: "black",
                "left": illustrationWidth,
                "width": mainWidth - illustrationWidth,
                "paddingLeft": 40,
                "color": "white",
                "paddingBottom": hideTopBottom,
                "paddingTop": 20
            },
            "progress": {
                position: "fixed",
                "width": mainWidth - 20,
                "bottom": hideTopBottom - 30,
                "zIndex": 2
            },
            "progressBar": {
                "backgroundColor": "white"
            },
            "hideBottom": {
                position: "fixed",
                bottom: 0,
                backgroundColor: "black",
                height: hideTopBottom,
                width: mainWidth,
                "zIndex": 1
            }
        };
    });

