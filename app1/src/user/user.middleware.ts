import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log("inside middleware");
    console.log(req.headers.authorization);
    const{authorization}=req.headers;
    if(!authorization) throw new HttpException('No Authorization token',HttpStatus.FORBIDDEN);
    if(authorization){
      next();
    }
   
  }
}
