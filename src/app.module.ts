import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CatModule } from './cat/cat.module';
import { typeORMConfig } from './configs/typeorm.config';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), CatModule, DogModule],
})
export class AppModule {}
