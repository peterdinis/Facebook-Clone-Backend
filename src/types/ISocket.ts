declare var io : {
    connect(url: string): Socket;
};

export interface Socket {
   on(event: string, callback: (data: any) => void): void;
   emit(event: string, data: any): void;
   id: string;
}

export interface IReciver {
    receiverId: string;
}

export interface IUser {
    socketId: string;
}