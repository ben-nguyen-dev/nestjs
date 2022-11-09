import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { ConfigModule } from './config/config.module'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [AuthModule, UserModule, ConfigModule, MongooseModule.forRoot(process.env.MONGODB_URL)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
