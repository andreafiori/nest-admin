import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller()
export class AuthController {

    constructor(private UserService: UserService) {
    }

    @Post('register')
    async register(@Body() body) {
        return this.UserService.create(body);
    }
}
