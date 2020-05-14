export class Profile {
    profileId: string;
    type: string;

    public constructor(profileId: string, type: string) {
        this.profileId = profileId;
        this.type = type;
    }
}
