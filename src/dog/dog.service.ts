import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './dog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogType } from './dog.interface';
import { DogRepository } from './dog.repository';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
  ) {}

  async getAllDog(): Promise<Dog[]> {
    return this.dogRepository.find();
  }

  async getDogById(id: number): Promise<Dog> {
    const found = await this.dogRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async createDog(createDogDto: CreateDogDto): Promise<Dog> {
    const { name, content } = createDogDto;

    const dog = this.dogRepository.create({
      name,
      content,
      type: DogType.PUBLIC,
    });

    await this.dogRepository.save(dog);

    return dog;
  }

  async updateDog(id: number, dogType: DogType): Promise<Dog> {
    const dog = await this.getDogById(id);

    dog.type = dogType;

    await this.dogRepository.save(dog);

    return dog;
  }

  async deleteDog(id: number): Promise<void> {
    await this.dogRepository.delete(id);
  }
}
