import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Listing } from '../listing/listing.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public fullName: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @OneToMany(
    () => Listing,
    (listing: Listing) => listing.owner
  )
  public listing: Listing[];
}
