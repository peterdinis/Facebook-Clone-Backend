export interface IUser {
    _doc: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    isAdmin: boolean;
    profilePicture: string;
    coverPicture: string;
    about: string;
    livesIn: string;
    worksAt: string;
    relationship: string;
    followers: [],
    following: []
}