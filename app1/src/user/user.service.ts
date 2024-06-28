import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UserService {

    private fakeUsers=[{username:"anaana",email:"ansoso@gmail.com"},
        {username:"prince",email:"vasoyaprince"},
        {username:"prerna", email:"prerna14@gmail.com"}
    ]
    fetchUsers(){
        console.log(this.fakeUsers,"inside service")
        return this.fakeUsers
    }
    createUser(userDetails:CreateUserType){
        this.fakeUsers.push(userDetails);
        return;
    }
    fetchUserById(id:number){
        return {id:1,usrname:"prince",email :'letsgo@gmail.com'}
        
    }

}
