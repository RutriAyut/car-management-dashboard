'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors = require('cors');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
// const carRouter = require('./src/routes/carRouter');
// const authenticationRouter = require('./src/routes/authenticationRouter');
// const userRouter = require('./src/routes/userRouter');
// const typeRouter = require('./src/routes/typeRouter');
const swaggerDocument = YAML.load('openAPI.yaml');
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
const app = (0, express_1.default)();
// const PORT: number = 8000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors());
// set routing
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.use('/cars', carRouter);
// app.use('/user', authenticationRouter); // kebutuhan login dan register
// app.use('/manage', userRouter); // segala sesuatu yang berhubungan dengan users
// app.use('/type', typeRouter);
app.get('/', (_, res) => {
	res.send('Express + TypeScript Server ++++++');
});
//listen port
// const server = app.listen(PORT, () => {
// 	console.log(`Express nyala di http://localhost:${PORT}`);
// });
// import App from './app';
// const app = new App();
// const server = app.start();
// export default app;
const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Express nyala di http://localhost:${PORT}`);
});
