import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserService } from '../../user/services/user.service'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto, LoginUserDto } from '../../user/dtos/user.dto'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async register(createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto)

        const token = await this._createToken(user)

        return {
            email: user.email,
            ...token,
        }
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.userService.findByLogin(loginUserDto)
        const token = await this._createToken(user)

        return {
            email: user.email,
            ...token,
        }
    }

    async validateUser(email) {
        const userExisted = this.userService.findByEmail(email)

        if (!userExisted) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
        }

        return userExisted
    }

    private _createToken({ email }: CreateUserDto) {
        const accessToken = this.jwtService.sign({ email })
        return {
            expiresIn: process.env.EXPIRES_IN,
            accessToken,
        }
    }
}
