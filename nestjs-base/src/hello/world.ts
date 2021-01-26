import { Entity } from 'typeorm';
import { IdField } from 'src/common';
import { PKColumn, VarcharColumn } from 'src/common/typeorm';

@Entity()
export class World {
	@IdField()
	@PKColumn()
	id: number;

	@VarcharColumn({
		name: 'name',
		length: 255,
		nullable: false,
	})
	name: string;
}
