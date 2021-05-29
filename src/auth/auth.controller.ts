import { BadRequestException, Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './model/register.dto';

@Controller()
export class AuthController {

    constructor(private UserService: UserService) {
    }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (body.password !== body.password_confirm) {
            throw new BadRequestException('Passwords do not match!');
        }

        const hashedPassword = await bcrypt.hash(body.password, 12);

        return this.UserService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: hashedPassword,
        });
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        const user = await this.UserService.findOne({email: email});

        if (!user) {
            throw new NotFoundException('User not foud');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid credentials');
        }

        return user;
    }
}
