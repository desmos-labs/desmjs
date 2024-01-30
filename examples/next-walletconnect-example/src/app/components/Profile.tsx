import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import React, { useCallback, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { TextField } from "@mui/material";

export interface Props {
  profile: Profile | null;

  onChange: (profile: Profile) => any;
}

export const ProfileViewer: React.FC<Props> = ({ profile, onChange }) => {
  const [localProfile, setLocalProfile] = useState(
    profile ?? {
      dtag: "",
      nickname: "",
      bio: "",
      pictures: {
        profile: "",
        cover: "",
      },
    },
  );

  const onFieldChange = useCallback(
    (
      field: "bio" | "nickname" | "dtag" | "profile" | "cover",
    ): React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =>
      (event) => {
        setLocalProfile((old) => {
          const newProfile = {
            ...old,
          };
          switch (field) {
            case "profile":
              newProfile.pictures = {
                cover: newProfile.pictures?.cover ?? "",
                profile: event.target.value,
              };
              break;
            case "cover":
              newProfile.pictures = {
                profile: newProfile.pictures?.profile ?? "",
                cover: event.target.value,
              };
              break;
            default:
              newProfile[field] = event.target.value;
              break;
          }
          onChange(newProfile);
          return newProfile;
        });
      },
    [onChange],
  );

  return (
    <Grid2 container direction="column">
      <Grid2>
        <TextField
          value={localProfile.dtag}
          label="DTag"
          onChange={onFieldChange("dtag")}
        />
      </Grid2>
      <Grid2>
        <TextField
          value={localProfile.nickname}
          label="Nickname"
          onChange={onFieldChange("nickname")}
        />
      </Grid2>
      <Grid2>
        <TextField
          value={localProfile.bio}
          label="Bio"
          multiline
          onChange={onFieldChange("bio")}
        />
      </Grid2>
    </Grid2>
  );
};
