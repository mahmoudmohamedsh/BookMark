import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth') // global rout
export class AuthController {
    constructor(private authService : AuthService){}


    //end points
    @Post('signup')
    signup(@Body() dto: AuthDto){
        console.log(dto)
        return this.authService.signup(dto);
    }


    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
}