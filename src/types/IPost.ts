export interface IPost  {
    userId: string;
    desc: string;
    likes: Array<any>;
    image: string;
    timestamps?: Date;
}