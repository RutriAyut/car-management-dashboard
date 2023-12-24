require('dotenv').config();
import pg from 'pg';
pg.defaults.ssl = true;
module.exports = {
	client: 'pg',
	connection: process.env.DATABASE_URL
};