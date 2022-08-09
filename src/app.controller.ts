import { Controller, Delete, Get, Param, Patch, Post, Req, Request, } from '@nestjs/common';
//import { Request } from 'express';
import { AppService } from './app.service';

@Controller('/:user')
export class AppController {
  //constructor(private readonly appService: AppService) { }

  @Get()                                                   //base route with get method
  // getHello(): string {                            //get is for getting the data     
  //when you put /user it will show user controller
  //   return this.appService.getHello();
  // }
  getUsers() {
    //return "I am user";
    return { name: "Abc", email: "abc@gmail.com" };
  }

  @Post()   //post method means returning somekind of data
  store(@Req() req: Request) {              //use @Req() for request  ,, req as request and its type :request
    //return "I am storing the data";           //you have to go /3000 and use post method it will show data
    return req.body;
  }

  @Patch('/:userId')    //for updating  
  update(@Req() req: Request) {
    return req.body;
  }






  @Get('/:userId')    //for getting  the user
  getUser(@Param() params: { userId: Number }) {
    return params;
  }





  @Delete('/:userId')  //for deleting the index
  deleteUser(@Param() params: { userId: Number }) {
    return params;
  }
}
