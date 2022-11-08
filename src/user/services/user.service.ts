import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UpdateUserDto } from '../dtos/update-user.dto'
import { UserRepository } from '../repositories/user.repository'

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAllUser() {
        return this.userRepository.getByCondition({})
    }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto)
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
