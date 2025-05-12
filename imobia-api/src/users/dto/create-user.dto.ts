import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    title: 'User Name',
    description: 'Nome do usuário',
    example: 'Gustavo Victor',
    minLength: 8,
    maxLength: 40,
  })
  @IsString({ message: 'O campo nome deve ser uma string' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @MinLength(8, { message: 'O campo nome deve ter no mínimo 8 caracteres' })
  name: string;

  @ApiProperty({
    title: 'User Email',
    description: 'E-mail do usuário',
    example: 'exemplo@email.com',
    maxLength: 100,
  })
  @IsString({ message: 'O campo email deve ser uma string' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsEmail({}, { message: 'O campo email deve ser um email válido' })
  email: string;

  @ApiProperty({
    title: 'User Password',
    description: 'Senha do usuário',
    example: 'senha123',
    minLength: 8,
    maxLength: 30,
  })
  @IsString({ message: 'O campo senha deve ser uma string' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @MinLength(8, { message: 'O campo senha deve ter no mínimo 8 caracteres' })
  @MaxLength(30, { message: 'O campo senha deve ter no máximo 30 caracteres' })
  password: string;

  @ApiProperty({
    title: 'User Phone',
    description: 'Número de telefone do usuário',
    example: '11999999999',
    maxLength: 20,
  })
  @IsString({ message: 'O campo telefone deve ser uma string' })
  @IsNotEmpty({ message: 'O campo telefone não pode ser vazio' })
  phone: string;

  @ApiProperty({
    title: 'User Address',
    description: 'Endereço do usuário',
    example: 'Rua Arthur Olinger, 123',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio' })
  address: string;

  @ApiProperty({
    title: 'User City',
    description: 'Cidade do usuário',
    example: 'São Paulo',
    maxLength: 40,
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio' })
  city: string;

  @ApiProperty({
    title: 'User State',
    description: 'Estado do usuário',
    example: 'SP',
    maxLength: 30,
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
  state: string;

  @ApiProperty({
    title: 'User Country',
    description: 'País do usuário',
    example: 'Brasil',
    maxLength: 30,
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo país não pode ser vazio' })
  country: string;

  @ApiProperty({
    title: 'User Zip Code',
    description: 'CEP do usuário',
    example: '12345-678',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo CEP não pode ser vazio' })
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'O campo CEP deve estar no formato 00000-000',
  })
  zipCode: string;

  @ApiProperty({
    title: 'User Birth Date',
    description: 'Data de nascimento do usuário',
    example: '01/01/1990',
  })
  @IsNotEmpty({ message: 'O campo data de nascimento não pode ser vazio' })
  @IsDateString(
    {},
    {
      message:
        'O campo data de nascimento deve ser uma data válida no formato (YYYY-MM-DD)',
    },
  )
  @Matches(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: 'O campo data deve estar no formato 00/00/0000',
  })
  birthDate: string;
}
