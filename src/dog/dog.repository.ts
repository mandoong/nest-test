import { Repository } from 'typeorm';
import { Dog } from './dog.entity';

export class DogRepository extends Repository<Dog> {}
