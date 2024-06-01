import { Illustration } from "./Illustration";
import { tss } from "tss";


type Props = {
    className?: string;
};

export function About(props: Props){

    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Illustration />
            About
        </div>
    );
}

const useStyles = tss
    .withName({ About })
    .create(() => ({
        "root": {
            "backgroundColor": "red"
        }
    }));