export interface DesmosProfile {
    /** The user's address */
    address: string,
    /** User dtag */
    dtag: string;
    /** The user nick name */
    nickname?: string;
    /** The user bio */
    bio?: string;
    /** Url to the user profile picture */
    profilePicture?: string;
    /** Url to the user cover picture */
    coverPicture?: string;
}