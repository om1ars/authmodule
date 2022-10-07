import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PathModule } from './path/path.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/authentication"), UsersModule, PathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
