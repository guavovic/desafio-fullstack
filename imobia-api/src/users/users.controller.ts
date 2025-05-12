import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({
    type: CreateUserDto,
    description: 'Create a new user',
    required: true,
    examples: {
      'application/json': {
        summary: 'Create User',
        value: {
          name: 'Test User',
          email: 'user.test@test.com',
          password: '12345678',
          phone: '123456789',
          address: 'Rua do Teste, 123',
          city: 'São Paulo',
          state: 'SP',
          country: 'Brasil',
          zipCode: '12345-678',
          birthDate: '01/01/1999',
        },
      },
    },
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
