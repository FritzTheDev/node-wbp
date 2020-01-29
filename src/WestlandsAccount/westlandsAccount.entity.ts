import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class WestlandsAccount {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public accountNumber: string;

  @ManyToOne(
    () => User,
    (user: User) => user.westlandsAccounts
  )
  public owner: User;
}
