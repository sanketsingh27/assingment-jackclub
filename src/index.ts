import express from "express";
import "dotenv/config";

import routes from "./router";

require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
