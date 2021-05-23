import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;
}
