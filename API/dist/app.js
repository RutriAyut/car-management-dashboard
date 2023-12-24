'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
	return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
const express_1 = __importDefault(require('express'));
const knex_1 = __importDefault(require('knex'));
const objection_1 = require('objection');
const cors = require('cors');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const carRouter = require('./src/routes/carRouter');
const authenticationRouter = require('./src/routes/authenticationRouter');
const userRouter = require('./src/routes/userRouter');
const typeRouter = require('./src/routes/typeRouter');
const swaggerDocument = YAML.load('openAPI.yaml');
const knexInstance = (0, knex_1.default)({
	client: 'postgresql',
	connection: {
		database: 'db_car_rental',
		user: 'rutri',
		password: 'rutri',
		// filename: "./dev.sqlite3"
	},
});
objection_1.Model.knex(knexInstance);
exports.app = (0, express_1.default)();
// const PORT: number = 8000;
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.json());
exports.app.use(cors());
// set routing
exports.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
exports.app.use('/cars', carRouter);
exports.app.use('/user', authenticationRouter); // kebutuhan login dan register
exports.app.use('/manage', userRouter); // segala sesuatu yang berhubungan dengan users
exports.app.use('/type', typeRouter);
exports.app.get('/', (_, res) => {
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
module.exports = exports.app;
