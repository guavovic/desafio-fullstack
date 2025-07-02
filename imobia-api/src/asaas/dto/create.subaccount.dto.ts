import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  IsDateString,
} from 'class-validator';

export class CreateSubaccountDto {
  @ApiProperty({
    example: 'Gustavo Victor',
    description: 'Nome do usuário',
    minLength: 3,
    maxLength: 60,
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  name: string;

  @ApiProperty({
    example: 'exemplo@email.com',
    description: 'E-mail do usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsEmail({}, { message: 'O campo email deve ser um email válido' })
  email: string;

  @ApiProperty({
    example: '12345678900',
    description: 'CPF ou CNPJ do usuário (somente números)',
  })
  @IsNotEmpty({ message: 'O campo CPF/CNPJ não pode ser vazio' })
  @IsString()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF deve ter 11 dígitos ou CNPJ 14 dígitos (apenas números)',
  })
  cpfCnpj: string;

  @ApiPropertyOptional({
    example: '1990-01-01', 
    description: 'Data de nascimento (formato yyyy-mm-dd)',})
  @IsOptional()
  @IsDateString()
  birthDate?: string; 

  @ApiPropertyOptional({
    example: 'MEI',
    description: 'Tipo de empresa (ex: MEI, LIMITED)',
  })
  @IsOptional()
  @IsString()
  companyType?: string; 

  @ApiPropertyOptional({
    example: '1122223333',
    description: 'Telefone fixo do usuário',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    example: '11999999999',
    description: 'Número de celular do usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo celular não pode ser vazio' })
  mobilePhone: string;

  @ApiProperty({
    example: 'Rua Exemplo',
    description: 'Endereço do usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio' })
  address: string;

  @ApiProperty({
    example: '123',
    description: 'Número do endereço do usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo número do endereço não pode ser vazio' })
  addressNumber: string;

  @ApiPropertyOptional({
    example: 'Apto 101',
    description: 'Complemento do endereço',
  })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado do usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
  province: string;

  @ApiProperty({
    example: '12345-678',
    description: 'CEP do usuário (formato 00000-000)',
  })
  @IsString()
  @IsNotEmpty({ message: 'O campo CEP não pode ser vazio' })
  @Matches(/^\d{5}-\d{3}$/)
  postalCode: string;
}