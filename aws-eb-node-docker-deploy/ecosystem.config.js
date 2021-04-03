module.exports = {
    apps: [
        {
            name: 'api',
            script: './dist/api.entry.js',
            // 이거 구조분해 할당 안하면 unicode 때문에 json parsing error 발생한다
            env: {...process.env, NODE_ENV: 'development'},
            env_prod: {
                ...process.env,
                NODE_ENV: 'production'
            },
            instances: process.env.PM2_INSTANCES || 2,
            exec_mode: 'cluster',
            max_memory_restart: '300M',
            autorestart: true
        }
    ]
};
