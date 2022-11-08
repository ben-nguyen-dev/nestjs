import { Schema, Document } from 'mongoose'

const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        password: String,
        email: String,
        avatar: String,
        phoneNumber: String,
    },
    { collection: 'users', timestamps: true },
)

export { UserSchema }

export interface User extends Document {
    firstName: string
    lastName: string
    password: string
    email: string
    avatar: string
    phoneNumber?: string
}
