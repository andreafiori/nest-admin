import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {

    constructor(private UserService: UserService) {
    }

    @Post('register')
    async register(@Body() body) {
        const hashedPassword = await bcrypt.hash(body.password, 12);

        return this.UserService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hashedPassword,
        });
    }
}
