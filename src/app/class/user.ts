import { Profile } from './profile';
export class User {
    username: string;
    password: string;
    profile: Profile;

    public constructor(username: string, password: string, profile?: Profile) {
        this.username = username;
        this.password = password;
        if (profile) {
            this.profile = profile;
        }
    }
}
