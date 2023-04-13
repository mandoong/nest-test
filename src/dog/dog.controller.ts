import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from './dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { Repository } from 'typeorm';
import { DogRepository } from './dog.repository';
import { DogType } from './dog.interface';
import path from 'path';
import { DogTypeValidationPipe } from './pipes/dog-type-validation';

@Controller('dog')
export class DogController {
  constructor(private dogsService: DogService) {}

  @Get()
  getAllDog(): Promise<Dog[]> {
    return this.dogsService.getAllDog();
  }

  @Get('/:id')
  getDogByid(@Param('id') id: number): Promise<Dog> {
    return this.dogsService.getDogById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createDog(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogsService.createDog(createDogDto);
  }

  @Patch('/:id')
  updateDog(
    @Param('id', ParseIntPipe) id: number,
    @Body('type', DogTypeValidationPipe) dogType: DogType,
  ): Promise<Dog> {
    return this.dogsService.updateDog(id, dogType);
  }

  @Delete('/:id')
  deleteDog(@Param('id') id: number): Promise<void> {
    return this.dogsService.deleteDog(id);
  }
}
