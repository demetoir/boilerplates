import { Entity } from 'typeorm';
import { RoleEnum } from 'src/role/role.enum';
import {
	CreatedAtColumn,
	DeletedAtColumn,
	IdColumn,
	UpdatedAtColumn,
} from '../common';

@Entity({ name: 'roles' })
export class RoleEntity {
	@IdColumn()
	id: number;

	@CreatedAtColumn()
	createdAt: Date;

	@UpdatedAtColumn()
	updatedAt: Date;

	@DeletedAtColumn()
	deletedAt: Date;

	name: RoleEnum;

	// @ManyToMany(() => User)
	// @JoinTable({
	// 	name: 'user_role',
	// 	joinColumn: {
	// 		name: 'role_id',
	// 		referencedColumnName: 'id',
	// 	},
	// 	inverseJoinColumn: {
	// 		name: 'user_id',
	// 		referencedColumnName: 'id',
	// 	},
	// })
	// users: User[];
}
