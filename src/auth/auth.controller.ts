import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}
    
    @Post('signup')
    signup() {
        return this.AuthService.singup();
    }

    @Post('login')
    login() {
        return this.AuthService.login();
    }
}