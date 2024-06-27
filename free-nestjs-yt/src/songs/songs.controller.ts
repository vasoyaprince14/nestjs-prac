import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

        constructor(private songsService: SongsService){}

    @Post()
    create(){
        return this.songsService.create('Animal added by me')
        // return "post crearted"
    
    }

    @Get()
    findAll(){
        // return "find all the songs end point"
        return this.songsService.findAll();
    }

    @Get(':id')
    findById(){
        return `find all the sing for this`;
    }

    @Put(':id')
    update(){
        return "song updated";
    }
    @Delete(':id')
    delete(){
        return 'song deleted'
    }
    

}
