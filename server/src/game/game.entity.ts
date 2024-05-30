import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Name: string;

  // 添加更多字段...
}
