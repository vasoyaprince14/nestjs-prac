import {IsNotEmpty,IsEmail,IsNumber} from 'class-validator';


export class CreateUserDtop{
    @IsNotEmpty()
    username:string;

    @IsEmail()
    email:string
    
    @IsNotEmpty()
    @IsNumber()
    age:number;
}

