import { Entity } from 'typeorm';
import { RoleEnum } from 'src/role/role.enum';
import {
	CreatedAtColumn,
	DeletedAtColumn,
	PKColumn,
	UpdatedAtColumn,
} from '../common/database';

@Entity({ name: 'roles' })
export class RoleEntity {
	@PKColumn()
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
