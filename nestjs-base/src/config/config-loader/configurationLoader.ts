const parseBoolean = (val) => !!JSON.parse(String(val).toLowerCase());

const transformEnv = (env) => ({
	// node
	NODE_PORT: parseInt(env.NODE_PORT, 10),
	NODE_ENV: env.NODE_ENV,

	// mysql
	MYSQL_HOST: env.MYSQL_HOST,
	MYSQL_PORT: parseInt(env.MYSQL_PORT, 10),
	MYSQL_SCHEME: env.MYSQL_SCHEME,
	MYSQL_USER: env.MYSQL_USER,
	MYSQL_PASSWORD: env.MYSQL_PASSWORD,

	// typeorm
	TYPEORM_TYPE: env.TYPEORM_TYPE,
	TYPEORM_HOST: env.TYPEORM_HOST,
	TYPEORM_PORT: parseInt(env.TYPEORM_PORT, 10),
	TYPEORM_USERNAME: env.TYPEORM_USERNAME,
	TYPEORM_PASSWORD: env.TYPEORM_PASSWORD,
	TYPEORM_DATABASE: env.TYPEORM_DATABASE,
	TYPEORM_SYNCHRONIZE: parseBoolean(env.TYPEORM_SYNCHRONIZE),
	TYPEORM_LOGGING: parseBoolean(env.TYPEORM_LOGGING),

	// redis
	REDIS_HOST: env.REDIS_HOST,
	REDIS_PORT: parseInt(env.REDIS_PORT, 10),

	// JWT
	JWT_SECRET: env.JWT_SECRET,
});
