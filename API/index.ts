// import express, { Express } from "express";
// const app: Express = express();
// const PORT: number = 8000;
// const handleLogger = require("./src/middleware/handleLogger");
// const carRouter = require("./src/routes/carRouter");

// // html./ view setting
// // app.set("view engine", "ejs");
// // //path
// // app.set("views", "./views");
// // app.use(express.static);

// app.use(express.urlencoded());
// app.use(express.json());
// // app.use(handleLogger);

// // set routing
// app.use("/cars", carRouter);

// //listen port
// app.listen(PORT, () => {
//   console.log(`Express nyala di http://localhost:${PORT}`);
// });

import App from "./app";
const app = new App();
app.start();
