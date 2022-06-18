import { IsBoolean, IsString, IsNotEmpty, IsArray } from "class-validator";

export class IUser {
    @IsNotEmpty()
    @IsString()
    _doc!: string;

    @IsNotEmpty()
    @IsString()
    username!: string;
    
    @IsNotEmpty()
    @IsString()
    password!: string;
    
    @IsNotEmpty()
    @IsString()
    firstname!: string;
    
    @IsNotEmpty()
    @IsString()
    lastname!: string;
    
    @IsNotEmpty()
    @IsBoolean()
    isAdmin!: boolean;
    
    @IsNotEmpty()
    @IsString()
    profilePicture!: string;
    
    @IsNotEmpty()
    @IsString()
    coverPicture!: string;
   
    @IsNotEmpty()
    @IsString()
    about!: string;
    
    @IsNotEmpty()
    @IsString()
    livesIn!: string;
    
    @IsNotEmpty()
    @IsString()
    worksAt!: string;
    
    @IsNotEmpty()
    @IsString()
    relationship!: string;
    
    @IsNotEmpty()
    @IsArray()
    followers!: [];
    
    @IsNotEmpty()
    @IsArray()
    following!: [];
}