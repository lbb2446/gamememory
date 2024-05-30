import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
@Module({
  imports: [
    GameModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/database.db', // 您的数据库文件路径
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
