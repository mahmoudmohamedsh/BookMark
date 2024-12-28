import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    getMe(@Req() req:Request){//Request from express will case problem if we use other lib like fastefy under the hood
        /**
        log payload pass by the validate 
        function by the jwt strategy
        it's appended to the req 
        */
         console.log({user: req.user}) 
         
        return req.user;
    }
}
