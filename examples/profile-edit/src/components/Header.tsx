import {
    SignerStatus, SignerType, useAddresses,
    useConnectSigner,
    useDisconnectSigner,
    useSignerStatus
} from "@desmoslabs/sdk-react";
import React from "react";
import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import ChainSelector from "./ChainSelector";
import QrCodeModal from "@walletconnect/qrcode-modal";
import {WCOptions} from "../defaults";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    address: {
        fontSize: "small",
        marginRight: theme.spacing(5),
    },
    chainSelector: {
        marginLeft: theme.spacing(5),
    }
}));

export default function Header(): JSX.Element {
    const classes = useStyles();
    const addresses = useAddresses();
    const {connect, connected, connectError} = useConnectSigner();
    const {disconnect, disconnected, disconnectError} = useDisconnectSigner();
    const status = useSignerStatus();

    const onClick = () => {
        if (status === SignerStatus.NotConnected) {
            connect({
                type: SignerType.WalletConnect,
                options: WCOptions,
                qrCodeController: QrCodeModal
            });
        } else if (status === SignerStatus.Connected) {
            disconnect();
        }
    }

    const connectDisabled = status !== SignerStatus.Connected && status !== SignerStatus.NotConnected;

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Profile Manager
                </Typography>
                {addresses !== undefined &&
                <Typography variant="h6" hidden={addresses.length === 0} className={classes.address}>
                    {addresses![0]}
                </Typography>
                }
                <Button color="inherit" onClick={onClick} disabled={connectDisabled}>
                    {status === SignerStatus.Connected ? "Disconnect" : "Connect"}
                </Button>
                <ChainSelector className={classes.chainSelector}/>
            </Toolbar>
        </AppBar>
    </div>
}