import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'User'
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    name: 'last_name'
  })
  lastName: string;

  @Column({
    default: new Date('now')
  })
  createdAt: Date;

  @Column({
    default: new Date('now')
  })
  updatedAt:Date;
}
