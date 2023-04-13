import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DogType } from './dog.interface';

@Entity()
export class Dog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  type: DogType;
}
