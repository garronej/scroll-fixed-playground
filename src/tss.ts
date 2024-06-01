import { createTss, GlobalStyles, keyframes } from "tss-react";
import { useCurrentBreakpoint } from "tools/useCurrentBreakpoint";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";

export { GlobalStyles, keyframes };


function useContext(){

    const currentBreakpoint = useCurrentBreakpoint();

    const { windowInnerWidth, windowInnerHeight } = useWindowInnerSize();

    return { currentBreakpoint, windowInnerWidth, windowInnerHeight } as const;

}

export const { tss } = createTss({ useContext })

export const useStyles = tss.create({});