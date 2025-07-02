import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AsaasService } from 'src/asaas/asaas.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AsaasService],
})
export class UsersModule {}
