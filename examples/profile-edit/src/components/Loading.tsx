import React from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export default function LoadingComponent<P>(Component: React.FC<P>): React.FC<P & { loading?: boolean }> {
    return props => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const classes = useStyles();
        return <div className={classes.wrapper}>
            <Component {...props}/>
            {props.loading === true && <CircularProgress size={24} className={classes.progress}/>}
        </div>
    }
}