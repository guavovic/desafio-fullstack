import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
  IsBoolean,
  IsDateString,
  Matches,
  MinLength,
  MaxLength,
  isNumber,
  IsNumber,
} from 'class-validator';

export enum companyType {
  MEI = 'MEI',
  LIMITED = 'LIMITED',
  INDIVIDUAL = 'INDIVIDUAL',
  ASSOCIATION = 'ASSOCIATION',
}

export class CreateUserDto {
  @ApiProperty({ example: 'Gustavo Victor', description: 'Nome completo do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'O campo nome é obrigatório' })
  name: string;

  @ApiProperty({ example: 'email@exemplo.com', description: 'E-mail do usuário' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  email: string;

  @ApiProperty({ example: 'senhaSegura123', description: 'Senha do usuário' })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  @MaxLength(30, { message: 'A senha deve ter no máximo 30 caracteres' })
  @IsNotEmpty({ message: 'O campo senha é obrigatório' })
  password: string;

  @ApiProperty({ example: '12345678900', description: 'CPF ou CNPJ do usuário' })
  @IsString()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF deve ter 11 dígitos ou CNPJ 14 dígitos (apenas números)',
  })
  cpfCnpj: string;

  @ApiPropertyOptional({ example: '1999-01-01', description: 'Data de nascimento (formato: yyyy-mm-dd)' })
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @ApiPropertyOptional({ enum: companyType, default: companyType.MEI, description: 'Tipo de empresa (apenas PJ)' })
  @IsOptional()
  @IsEnum(companyType, { message: 'Tipo de empresa inválido' })
  companyType?: companyType;

  @ApiPropertyOptional({ example: '1122223333', description: 'Telefone fixo' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: '11999999999', description: 'Telefone celular' })
  @IsString()
  @IsNotEmpty({ message: 'O campo celular é obrigatório' })
  mobilePhone: string;

  @ApiPropertyOptional({ example: 'https://www.site.com', description: 'Site do usuário' })
  @IsOptional()
  @IsString()
  site?: string;

  @ApiProperty({ example: 'Rua Arthur Olinger', description: 'Endereço do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'O campo endereço é obrigatório' })
  address: string;

  @ApiProperty({ example: '123', description: 'Número do endereço' })
  @IsString()
  @IsNotEmpty({ message: 'O campo número do endereço é obrigatório' })
  addressNumber: string;

  @ApiPropertyOptional({ example: 'Apto 101', description: 'Complemento do endereço' })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiProperty({ example: 'Centro', description: 'Bairro ou província do endereço' })
  @IsString()
  @IsNotEmpty({ message: 'O campo província é obrigatório' })
  province: string;

  @ApiProperty({ example: '12345678', description: 'CEP do usuário' })
  @IsString()
  @IsNotEmpty({ message: 'O campo CEP é obrigatório' })
  @Matches(/^\d{5}-\d{3}$/)
  postalCode: string;

  @ApiProperty({ description: 'ID do usuário no Asaas' })
  @IsOptional()
  @IsString()
  asaasId?: string;
}