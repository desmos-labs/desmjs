import {
    DesmosSdkProvider,
    useReconnectToWalletConnect
} from "@desmoslabs/sdk-react";
import React from "react";
import ProfileEdit from "./screen/ProfileEdit";
import {WCOptions} from "./defaults";
import Header from "./components/Header";
import QrCodeModal from "@walletconnect/qrcode-modal";
import {Container, makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
        }
    }
})

const AppRoot: React.FC = (props) => {
    const classes = useStyle();
    useReconnectToWalletConnect(WCOptions, QrCodeModal);
    return <div className={classes.root}>
        <Header/>
        <Container>
            <ProfileEdit/>
        </Container>
    </div>
}

export default function App(): JSX.Element {
    return <DesmosSdkProvider chainId={'morpheus-apollo-2'} extraChains={
        {'testchain': {
                rpcUrl: 'http://localhost:26657/',
                chainId: 'testchain',
                coinDenom: 'stake',
                uiDenom: 'stake',
                denomUnits: [{
                    denom: 'stake',
                    exponent: 0,
                }]
        }}
    }>
        <AppRoot/>
    </DesmosSdkProvider>
}