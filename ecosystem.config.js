module.exports = {
    apps: [
        {
            name: "API-AUTH",
            script: "src/microservices/MSAuth/index.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "2G",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
        {
            name: "API-MYSQL",
            script: "src/microservices/MSMySQL/index.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "2G",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
        {
            name: "API-CACHE",
            script: "src/microservices/MSCache/index.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "2G",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
