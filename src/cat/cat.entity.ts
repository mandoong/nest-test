import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CatStatus } from './cat.model';

@Entity()
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: CatStatus;
}
