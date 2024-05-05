import express from "express";
import routes from "./router";

const app = express();
const port = 5051;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
