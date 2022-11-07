import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://admin:LInhduyle%401998@mongodb.kevqyya.mongodb.net/?retryWrites=true&w=majority')],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
