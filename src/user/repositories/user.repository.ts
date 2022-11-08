import { Injectable } from '@nestjs/common'
import { BaseRepository } from '../../base.repository'
import { User } from '../schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>,
    ) {
        super(userModel)
    }
}
