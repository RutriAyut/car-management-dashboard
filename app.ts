import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import handleLogger from "./src/middleware/handleLogger";
const carRouter = require("./src/routes/carRouter");
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "db_car_rental",
    user: "rutri",
    password: "rutri",
    // filename: "./dev.sqlite3"
  },
});

Model.knex(knexInstance);

class Applicaction {
  app: Express = express();

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", 8000);
  }

  middlewares() {
    this.app.set("view engine", "ejs");
    this.app.set("views", "./src/views");
    this.app.use(express.static("public"));
    this.app.use(express.urlencoded());
    this.app.use(express.json());
    this.app.use(handleLogger);
  }

  routes() {
    this.app.use("/cars", carRouter);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(">>> Server is running at port : ", this.app.get("port"));
    });
  }
}

export default Applicaction;
