import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: "100" })
  name: string;
}