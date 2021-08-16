const dotenv = require('dotenv');
const pg = require('pg');
if (
  process.env.NODE_ENV === 'sandbox' ||
  process.env.NODE_ENV === 'development'
) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}
dotenv.config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
    pool: {
      min: 2,
      max: 11,
    },
    ssl: {
      rejectUnauthorized: false,
    },
  },
  sandbox: {
    client: 'pg',
    connection: {
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
    pool: {
      min: 2,
      max: 11,
    },
    ssl: {
      rejectUnauthorized: false,
    },
  },
  production: {
    client: 'pg',
    connection: {
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
    pool: {
      min: 2,
      max: 11,
    },
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
