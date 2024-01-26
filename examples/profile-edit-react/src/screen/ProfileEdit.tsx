import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Button, Skeleton, Snackbar, Typography } from "@mui/material";
import { Profiles, SignerStatus } from "@desmoslabs/desmjs";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import Grid2 from "@mui/material/Unstable_Grid2";
import LoadingButton from "@mui/lab/LoadingButton";
import { ProfileViewer } from "../components/Profile";
import { useDesmosContext } from "../context/desmos";

enum ProfileStatus {
  None,
  Fetching,
  Error,
  Fetched,
}

interface ProfileNone {
  status: ProfileStatus.None;
}

interface ProfileFetching {
  status: ProfileStatus.Fetching;
}

interface ProfileFetchError {
  status: ProfileStatus.Error;
  error: string;
}

interface ProfileFetched {
  status: ProfileStatus.Fetched;
  profile: Profile | null;
}

type ProfileState =
  | ProfileNone
  | ProfileFetching
  | ProfileFetchError
  | ProfileFetched;

export default function ProfileEdit() {
  const { signer, client } = useDesmosContext();
  const [profileState, setProfileState] = useState<ProfileState>({
    status: ProfileStatus.None,
  });
  const [profile, setProfile] = useState<Profile | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);
  const [saveProfileError, setSaveProfileError] = useState<string | undefined>(
    undefined,
  );
  const [showProfileSaved, setShowProfileSaved] = useState(false);

  useEffect(() => {
    if (signer === undefined || signer?.status === SignerStatus.NotConnected) {
      setProfileState({ status: ProfileStatus.None });
    }
  }, [signer, signer?.status]);

  useEffect(() => {
    if (
      client !== undefined &&
      signer !== undefined &&
      signer.status === SignerStatus.Connected
    ) {
      (async () => {
        try {
          setSaveProfileError(undefined);
          setProfileState({
            status: ProfileStatus.Fetching,
          });
          const accounts = await signer.getAccounts();
          const fetchedProfile = await client.getProfile(accounts[0].address);
          setProfileState({
            status: ProfileStatus.Fetched,
            profile: fetchedProfile,
          });
          setProfile(fetchedProfile);
        } catch (e) {
          setProfileState({
            status: ProfileStatus.Error,
            error: (e as Error).message,
          });
        }
      })();
    }
  }, [client, signer, signer?.status]);

  const saveProfile = useCallback(async () => {
    console.log(signer, client, profile);
    if (signer !== undefined && client !== undefined && profile !== null) {
      try {
        console.log("Saving profile...");
        setSavingProfile(true);
        setSaveProfileError(undefined);
        const accounts = await signer.getAccounts();
        const creator = accounts[0].address;
        await client.signAndBroadcast(
          creator,
          [
            {
              typeUrl: Profiles.v3.MsgSaveProfileTypeUrl,
              value: {
                dtag: profile.dtag,
                bio: profile.bio,
                nickname: profile.nickname,
                profilePicture: profile?.pictures?.profile ?? "",
                coverPicture: profile?.pictures?.cover ?? "",
                creator,
              },
            } as Profiles.v3.MsgSaveProfileEncodeObject,
          ],
          "auto",
        );
        setShowProfileSaved(true);
      } catch (e) {
        console.error("Profile save error", e);
        setSaveProfileError((e as Error).message);
      } finally {
        setSavingProfile(false);
        console.log("Profile save finished");
      }
    }
  }, [signer, client, profile]);

  const profileEditor = useMemo(() => {
    switch (profileState.status) {
      case ProfileStatus.None:
        return <></>;
      case ProfileStatus.Fetching:
        return (
          <>
            <Grid2>
              <Typography variant="caption">Fetching profile...</Typography>
            </Grid2>
            <Grid2 sx={{ height: 60, width: "30%" }}>
              <Skeleton
                sx={{ height: "100%" }}
                animation="wave"
                variant="rectangular"
              />
            </Grid2>
            <Grid2 sx={{ height: 60, width: "30%" }}>
              <Skeleton
                sx={{ height: "100%" }}
                animation="wave"
                variant="rectangular"
              />
            </Grid2>
            <Grid2 sx={{ height: 60, width: "30%" }}>
              <Skeleton
                sx={{ height: "100%" }}
                animation="wave"
                variant="rectangular"
              />
            </Grid2>
            <Grid2>
              <Button variant="contained" disabled>
                Save profile
              </Button>
            </Grid2>
          </>
        );
      case ProfileStatus.Fetched:
        return (
          <>
            <ProfileViewer
              profile={profileState.profile}
              onChange={setProfile}
            />
            {saveProfileError !== undefined && !savingProfile && (
              <Grid2>
                <Typography variant="caption" color="red">
                  {saveProfileError}
                </Typography>
              </Grid2>
            )}
            <Grid2>
              <LoadingButton
                variant="contained"
                onClick={saveProfile}
                disabled={signer?.status !== SignerStatus.Connected}
                loading={savingProfile}
              >
                Save profile
              </LoadingButton>
            </Grid2>
          </>
        );
      case ProfileStatus.Error:
        return (
          <Typography variant="caption" color="red">
            Fetch profile error {profileState.error}
          </Typography>
        );
      default:
        return null;
    }
  }, [profileState, saveProfile, savingProfile, saveProfileError, signer]);

  return (
    <Grid2 container direction="column" spacing={1} alignItems="center">
      {profileEditor}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showProfileSaved}
        autoHideDuration={6000}
        onClose={() => setShowProfileSaved(false)}
      >
        <Alert
          onClose={() => setShowProfileSaved(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Profile saved!
        </Alert>
      </Snackbar>
    </Grid2>
  );
}
