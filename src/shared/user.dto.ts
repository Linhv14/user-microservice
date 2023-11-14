import { IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CraeteProfileDTO {
    @IsNotEmpty()
    ID: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    phoneNumber: string

    @IsNumber()
    @IsOptional()
    age: number

    @IsOptional()
    avatar: string

    @IsNotEmpty()
    defaultAddress: string
}