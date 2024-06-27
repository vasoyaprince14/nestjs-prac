import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response ,Request} from 'express';
import { CreateUserDtop } from './dtos/createUser.dto';

@Controller('user')
export class UserController {


@Get('')
getUsers(){
    return [{username:'prince', emial:'vasoyaprince14@gmail.com'}];
}

@Get('posts')
getUsersPosts(){
    return [
        {
             username:'prince', emial:'vasoyaprince14@gmail.com',
             posts:[
                {
                    id:1,
                    title:'post 1'
                },
                {
                    id:2,
                    title :'post 2'
                }
             ]
        }
    ]
}
@Post('create')
createUse(@Req() request:Request, @Res() response:Response){
    console.log(request.body);
    response.send('created');

}

@Post('create/body')
createUser(@Body() userData:CreateUserDtop){
    console.log(userData);
    return userData;
}

}
