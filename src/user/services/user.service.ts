import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto, LoginUserDto } from '../dtos/user.dto'
import { UserRepository } from '../repositories/user.repository'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAllUser() {
        return this.userRepository.getByCondition({})
    }

    async create(createUserDto: CreateUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, Number(process.env.SALT_ROUNDS))

        const userExisted = await this.userRepository.findByCondition({
            email: createUserDto.email,
        })

        if (userExisted) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
        }

        return this.userRepository.create(createUserDto)
    }

    async findByLogin({ email, password }: LoginUserDto) {
        const userExisted = await this.userRepository.findByCondition({
            email,
        })

        if (!userExisted) {
            throw new HttpException('Email or password invalid', HttpStatus.UNAUTHORIZED)
        }

        const isEqualPassword: boolean = bcrypt.compareSync(password, userExisted.password)

        if (!isEqualPassword) {
            throw new HttpException('Email or password invalid', HttpStatus.UNAUTHORIZED)
        }

        return userExisted
    }

    async findByEmail(email) {
        return await this.userRepository.findByCondition({
            email: email,
        })
    }

    async findAll() {
        return this.userRepository.findAll()
    }

    async findOne(id: string) {
        return this.userRepository.findById(id)
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return this.userRepository.findByIdAndUpdate(id, updateUserDto)
    }

    async remove(id: string) {
        return this.userRepository.deleteOne(id)
    }
}
