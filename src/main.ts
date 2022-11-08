import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log'],
    })

    const configSwagger = new DocumentBuilder()
        .setTitle('Project example')
        .setDescription('The project API description')
        .setVersion('1.0')
        .addTag('projects')
        .build()
    const document = SwaggerModule.createDocument(app, configSwagger)
    SwaggerModule.setup('api', app, document)

    await app.listen(process.env.PORT)
}

bootstrap()
