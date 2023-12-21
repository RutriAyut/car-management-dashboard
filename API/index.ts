// import express, { Express } from 'express';
// import knex from 'knex';
// import { Model } from 'objection';

// const cors = require('cors');
// const YAML = require('yamljs');
// const swaggerUI = require('swagger-ui-express');

// const carRouter = require('./src/routes/carRouter');
// const authenticationRouter = require('./src/routes/authenticationRouter');
// const userRouter = require('./src/routes/userRouter');
// const typeRouter = require('./src/routes/typeRouter');

// const swaggerDocument = YAML.load('openAPI.yaml');
// const knexInstance = knex({
// 	client: 'postgresql',
// 	connection: {
// 		database: 'db_car_rental',
// 		user: 'rutri',
// 		password: 'rutri',
// 		// filename: "./dev.sqlite3"
// 	},
// });

// Model.knex(knexInstance);

// const app: Express = express();
// const PORT: number = 8000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// // set routing
// app.use(
// 	'/api-docs',
// 	swaggerUI.serve,
// 	swaggerUI.setup(swaggerDocument)
// );
// app.use('/cars', carRouter);
// app.use('/user', authenticationRouter); // kebutuhan login dan register
// app.use('/manage', userRouter); // segala sesuatu yang berhubungan dengan users
// app.use('/type', typeRouter);

// //listen port
// const server = app.listen(PORT, () => {
// 	console.log(`Express nyala di http://localhost:${PORT}`);
// });

const PORT: number = 8000;
const App = require('./app');
const server = App.listen(PORT, () => {
	console.log(`Express nyala di http://localhost:${PORT}`);
});

module.exports = server;