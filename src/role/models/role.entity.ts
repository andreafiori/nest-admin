import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from '../../permission/models/permission.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: "100" })
  name: string;

  @ManyToMany( () => Permission, {cascade: true})
  @JoinTable({
    name: 'role_permission',
    joinColumn: {name: 'role_id', referencedColumnName: 'id'},
    inverseJoinColumn: {name: 'permission_id', referencedColumnName: 'id'}
  })
  permissions: Permission[];
}
