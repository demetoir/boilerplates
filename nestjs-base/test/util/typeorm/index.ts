import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';
import { v4 as uuid } from 'uuid';
import { configurationLoader } from 'src/config/configurationLoader';
// import { entities } from 'src/database';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

/**
 * prepare database for test
 *
 * DB에 연결후 인자로 넘긴 database 생성뒤 synchronize 한다
 * database 인자를 주지않으면 uuid v4로 생성된 값을 사용한
 *
 * @param {string} database
 * @param options
 */
export const getConnectionForTest = async (
	database?: string,
	options?: Partial<ConnectionOptions>,
): Promise<Connection> => {
	const config = configurationLoader();

	const connection = await createConnection({
		type: config.TYPEORM_TYPE,
		host: config.TYPEORM_HOST,
		port: config.TYPEORM_PORT,
		username: config.TYPEORM_USERNAME,
		password: config.TYPEORM_PASSWORD,
		database: config.TYPEORM_DATABASE,
		// entities,
		...options,
	});

	const databaseName = database || uuid().replace('-', '_');

	await connection.query(`drop database if exists ${databaseName}`);
	await connection.query(`create database if not exists ${databaseName}`);
	await connection.query(`use ${databaseName}`);
	await connection.synchronize();

	return connection;
};
