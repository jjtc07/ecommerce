import { ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AuthModule } from './app.module'
import swagger from './swagger'

async function bootstrap() {
  const app = await NestFactory.create(AuthModule)
  const configService = app.get(ConfigService)

  app.enableCors({
    origin: configService.get('WHITE_LIST').split(';'),
    credentials: true,
  })

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.enableVersioning({
    type: VersioningType.URI,
  })

  swagger(app, configService)

  await app.listen(3001)
}

bootstrap()
