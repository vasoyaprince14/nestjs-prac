import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response ,Request} from 'express';
import { CreateUserDtop } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';



@Controller('user')
export class UserController {
constructor(private userService:UserService){

}

@Get('')
getUsers(){
    console.log("inside controllerzs")
    return this.userService.fetchUsers();
}

@Get('posts')
@HttpCode(202)
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
// @Post('create')

// createUse(@Req() request:Request, @Res() response:Response){
//     console.log(request.body);
//     // console.log(userData)
//     // this.userService.createUser(userData)
//     response.send('created');

// }

@Post('create')
@UsePipes(new ValidationPipe())//added validation
createUser(@Body(UserPipe) userData:CreateUserDtop){
    console.log(userData);
    this.userService.createUser(userData)
    return userData;
}
// @Get(':id')
// getUserById(@Req()request :Request, @Res() response:Response ){
//     console.log(request.params);
//     response.send("oprnce");
// }

@Get(':id')
getUserById(@Param('id',ParseIntPipe)id:number){
    return this.userService.fetchUserById(id);
}


// @Get(':id/:postId')
// getUserById(@Param('id',ParseIntPipe) id:number, @Param('postId') postId:string){
//     console.log(id)
//     console.log(postId);

//     return {id,postId};
// }

@Get('sort')
getUserByQuery(@Query('sortBy',ParseBoolPipe) sortBy:boolean ){
    console.log(sortBy);
    return {sortBy}
}




}
