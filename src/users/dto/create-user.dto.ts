import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export enum UserRole {
  INTERN = 'intern',
  EMPLOYEE = 'employee',
  MANAGER = 'manager'
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['intern', 'employee', 'manager'], {
    message: "Must be valid value"
  })
  role: 'intern' | 'employee' | 'manager'
}
