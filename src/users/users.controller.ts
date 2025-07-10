import { Body, Controller, Get, Param,Patch,Post, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'intern' | 'employee' | 'manager') {
        return this.usersService.findAll(role);
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Get('Male')
    findAllMale() {
        return 'Here is all male'
    }

    @Post()
    create(@Body() user: {name: string, email: string, role: 'intern' | 'employee' | 'manager'}) {
        return 'User created: ' + JSON.stringify(this.usersService.create(user));
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() userUpdate :{name?: string, email?: string, role?: 'intern', 'employee', 'manager'})
    {
        return 'User has been updated with id ' + +id + ' is ' + JSON.stringify(this.usersService.update(+id, userUpdate));
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.remove(+id) + ' has been deleted'
    }

}
