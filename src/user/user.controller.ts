import { Controller, Get, Post } from "@nestjs/common";

@Controller('/user')

export class UserController {
    @Get()
    getUser() {
        return "I am From User Controller";
    }
    @Post()
    storedata() {
        return "I stored user data";
    }
}