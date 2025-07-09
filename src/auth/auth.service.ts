import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    singup() {
        return 'Here is the signup endpoint from service';
    }

    login() {
        return 'Here is the login endpoint from service';
    }
}

