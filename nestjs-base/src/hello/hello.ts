import { Entity } from 'typeorm';
import { PKColumn, VarcharColumn } from '../common/database';

@Entity()
export class Hello {
	@PKColumn()
	id: number;

	@VarcharColumn({
		name: 'name',
		length: 255,
		nullable: false,
	})
	name: string;
}
