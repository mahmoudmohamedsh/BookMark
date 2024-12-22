import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth') // global rout
export class AuthController {
    constructor(private authService : AuthService){}


    //end points
    @Post('signup')
    signup(){
        return this.authService.signup();
    }


    @Post('signin')
    signin(){
        return this.authService.signin();
    }
}