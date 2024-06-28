import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("inside user pipe");
    console.log(value)
    console.log()
    return value;
  }
}
