import React, {useState} from "react";
import {
    SignerStatus,
    useCurrentChainInfo,
    useFetchChainData,
    useFetchChainDataCallback,
    useSignerStatus,
    useAddresses, usePostChainData,
} from "@desmoslabs/sdk-react";
import {DesmosClient} from "@desmoslabs/sdk-core";
import {coin, StargateClient, StdFee} from "@cosmjs/stargate";
import {Button, makeStyles, TextField, Theme, Typography} from "@material-ui/core";
import LoadingComponent from "../components/Loading";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(2)
    },
}));

enum ProfileEditStage {
    FetchProfile,
    EditProfile,
    UpdatingProfile,
}

const LoadingTextField = LoadingComponent(TextField);
const LoadingButton = LoadingComponent(Button);

export default function ProfileEdit(): JSX.Element {
    const classes = useStyles();
    const signerStatus = useSignerStatus();
    const addresses = useAddresses();
    const chainInfo = useCurrentChainInfo();

    const [stage, setStage] = useState(ProfileEditStage.FetchProfile);
    const [balance, setBalance] = useState("0");
    const [dtag, setDtag] = useState("");
    const [nickname, setNickname] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [saveProfileError, setSaveProfileError] = useState<null | string>(null);

    const fetchUserAmount = useFetchChainDataCallback(async (client: DesmosClient) => {
        if (addresses !== undefined) {
            const balance = await (client as unknown as StargateClient).getBalance(addresses[0], chainInfo.coinDenom);
            setBalance(balance.amount + " " + balance.denom);
        }
    }, [addresses, chainInfo]);

    useFetchChainData(async (client: DesmosClient) => {
        if (addresses !== undefined) {
            setStage(ProfileEditStage.FetchProfile);
            const profile = await client.getProfile(addresses![0]);
            setDtag(profile?.dtag ?? "");
            setNickname(profile?.nickname ?? "");
            setBio(profile?.bio ?? "");
            setProfilePicture(profile?.profilePicture ?? "");
            setCoverPicture(profile?.coverPicture ?? "");

            const balance = await (client as unknown as StargateClient).getBalance(addresses[0], chainInfo.coinDenom);
            setBalance(balance.amount + " " + balance.denom);

            setStage(ProfileEditStage.EditProfile);
        }
    }, [addresses, chainInfo])

    const postChainData = usePostChainData(async (client: DesmosClient) => {
        const address = addresses![0];
        setStage(ProfileEditStage.UpdatingProfile);
        setSaveProfileError(null);
        client.saveProfile(address, {
            dtag,
            nickname,
            bio,
            profilePicture,
            coverPicture,
        }, {gas: '400000', amount: [coin(4000, chainInfo.coinDenom)]} as StdFee).catch(e => {
            setSaveProfileError(e.toString());
            setStage(ProfileEditStage.EditProfile);
        }).finally(() => {
            fetchUserAmount.fetch();
            setStage(ProfileEditStage.EditProfile);
        });
    }, [addresses, dtag, nickname, bio, profilePicture, coverPicture, fetchUserAmount.fetch]);

    if (signerStatus !== SignerStatus.Connected) {
        return <div className={classes.root}>
            <Typography variant="subtitle1">Connect to edit the user profile</Typography>
        </div>
    } else {
        switch (stage) {
            case ProfileEditStage.UpdatingProfile:
            case ProfileEditStage.FetchProfile:
            case ProfileEditStage.EditProfile:
                const fetchingProfile = stage === ProfileEditStage.FetchProfile;
                const fieldsDisabled = stage !== ProfileEditStage.EditProfile;
                const saving = stage === ProfileEditStage.UpdatingProfile;

                return <form className={classes.root}>
                    <LoadingTextField
                        variant="outlined"
                        label="DTag"
                        onChange={e => setDtag(e.target.value)}
                        value={dtag}
                        disabled={fieldsDisabled}
                        loading={fetchingProfile}
                    />
                    <LoadingTextField
                        variant="outlined"
                        label="Nickname"
                        onChange={e => setNickname(e.target.value)}
                        value={nickname}
                        disabled={fieldsDisabled}
                        loading={fetchingProfile}
                    />
                    <LoadingTextField
                        variant="outlined"
                        label="Biography"
                        multiline
                        minRows={4}
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                        disabled={fieldsDisabled}
                        loading={fetchingProfile}
                    />
                    <LoadingTextField
                        variant="outlined"
                        label="Profile Picture URL"
                        onChange={e => setProfilePicture(e.target.value)}
                        value={profilePicture}
                        disabled={fieldsDisabled}
                        loading={fetchingProfile}
                    />
                    <LoadingTextField
                        variant="outlined"
                        label="Cover Picture URL"
                        onChange={e => setCoverPicture(e.target.value)}
                        value={coverPicture}
                        disabled={fieldsDisabled}
                        loading={fetchingProfile}
                    />
                    <LoadingButton
                        onClick={postChainData.exec}
                        disabled={fieldsDisabled || saving}
                        color="primary"
                        variant="contained"
                        loading={saving}
                    >
                        Save
                    </LoadingButton>
                    <Typography variant="subtitle1">Balance: {balance}</Typography>
                    {saveProfileError && <label>Error saving the profile: ${saveProfileError}</label>}
                </form>
        }
    }
}