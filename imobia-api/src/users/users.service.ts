import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { hash } from 'bcryptjs';
import { AsaasService } from 'src/asaas/asaas.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private asaas: AsaasService) {}

  async create(createUserDto: CreateUserDto) {

    // encrypt the password before saving it to the database
    const encryptedPassword = await hash(createUserDto.password, 10);
    createUserDto.password = encryptedPassword;

    // create a subaccount in Asaas
    const asaasResponse = await this.asaas.createSubaccount({...createUserDto});
    createUserDto.asaasId = asaasResponse.id;

    // check if the Asaas ID was created successfully
    if (!createUserDto.asaasId) {
      throw new Error('Asaas ID not created');
    }

    // create a user in the database
    const user = await this.prisma.user.create({
      data: {
        ...createUserDto, 
        birthDate: new Date(createUserDto.birthDate!),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // check if the user was created successfully
    if (!user) {
      throw new Error('User not created');
    }
    
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
