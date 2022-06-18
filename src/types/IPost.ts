import { IsString, IsNotEmpty, IsArray } from "class-validator";

export class IPost {
    @IsNotEmpty()
    @IsString()
    userId!: string;
    
    @IsNotEmpty()
    @IsString()
    desc!: string;
    
    @IsNotEmpty()
    @IsArray()
    likes!: [];

    @IsNotEmpty()
    @IsString()
    image!: string;
}