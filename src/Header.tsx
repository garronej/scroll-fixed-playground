
import { forwardRef } from "react";
import { tss } from "tss";

type Props = {
    className?: string; 
};

export const Header = forwardRef<HTMLHeadElement, Props>((props, ref) =>{

    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <header
            ref={ref}
            className={cx(classes.root, className)} >
            <h1>Amelia</h1>
            <div className={classes.linksWrapper}>
                <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </header>
    );

});

const useStyles = tss
    .withName({ Header })
    .create({
        "root": {
            "backgroundColor": "pink",
            "display": "flex",
            "justifyContent": "space-between",
        },
        "linksWrapper": {

        }
    })