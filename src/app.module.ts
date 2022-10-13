import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/dev.sqlite',
      logging: true,
      entities: ['dist/**/entities/**/*.entity.js'],
      migrations: ['dist/**/migrations/**/*.js'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
