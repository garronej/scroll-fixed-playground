

import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { breakpointsValuesPx } from "./breakpoints";


export function useCurrentBreakpoint(){

    const { windowInnerWidth } = useWindowInnerSize();

    if(windowInnerWidth < breakpointsValuesPx.sm){
        return "xs" as const;
    }

    if(windowInnerWidth < breakpointsValuesPx.md){
        return "sm" as const;
    }

    if(windowInnerWidth < breakpointsValuesPx.lg){
        return "md" as const;
    }

    if(windowInnerWidth < breakpointsValuesPx.xl){
        return "lg" ;
    }

    return "xl";


}    