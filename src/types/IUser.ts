export interface IUser {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    isAdmin: boolean;
    profilePicture: string;
    coverPicture: string;
    about: string;
    livesin: string;
    worksAt: string;
    relationship: string;
    followers: Array<any>;
    following: Array<any>;
}