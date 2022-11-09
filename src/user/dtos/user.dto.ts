import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
    @ApiProperty()
    firstName: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    password: string

    @ApiProperty()
    email: string

    @ApiProperty()
    avatar: string

    @ApiProperty({ required: false })
    phoneNumber?: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string
}
