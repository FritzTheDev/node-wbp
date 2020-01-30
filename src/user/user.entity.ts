import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Listing } from "../listing/listing.entity";
import { WestlandsAccount } from "../WestlandsAccount/westlandsAccount.entity";

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
    () => WestlandsAccount,
    (westlandsAccount: WestlandsAccount) => westlandsAccount.owner
  )
  public westlandsAccounts: WestlandsAccount[];

  @OneToMany(
    () => Listing,
    (listing: Listing) => listing.owner
  )
  public listings: Listing[];
}
