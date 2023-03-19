import { Module } from '@nestjs/common'
import { UserController } from './controllers/user-controller/user.controller'
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { SignInController } from './controllers/sign-in/sign-in.controller';

@Module({
  controllers: [UserController, SignUpController, SignInController],
})
export class UserModule {}
