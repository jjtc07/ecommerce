import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

const swagger = (app: INestApplication, configService: ConfigService) => {
  const serverSwagger = configService.get('SERVER_SWAGGER')?.split(';')
  const configSwagger = new DocumentBuilder()
    .setTitle('Auth')
    .setDescription('Api for management auth')
    .setVersion('1.0')
    .addBearerAuth()
    // .addServer(serverSwagger[0])
    // .addServer(serverSwagger[1])
    // .addServer(serverSwagger[2])
    // .addServer(serverSwagger[3])
    .build()

  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('api/docs', app, document)
}

export default swagger
