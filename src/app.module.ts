import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CatModule } from './cat/cat.module';
import { typeOrmConfigAsync } from './configs/typeorm.config';
import { DogModule } from './dog/dog.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CatModule,
    DogModule,
  ],
})
export class AppModule {}
