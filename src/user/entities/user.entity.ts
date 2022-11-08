import { ApiProperty } from '@nestjs/swagger'

export class User {
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
