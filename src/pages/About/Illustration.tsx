
import { tss } from "tss";

type Props = {
    className?: string;
};

export function Illustration(props: Props){
    const { className } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            Illustration
        </div>
    );
}

const useStyles = tss
    .withName({ Illustration })
    .create(() => ({
        "root": {
            "backgroundColor": "red"
        }
    }));