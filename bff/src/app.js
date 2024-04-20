const express = require("express");
const cors = require("cors");

const port = 8083;

const app = express();

app.use(express.json());

const routes = require("./routes");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
    ],
    credentials: true,
  })
);

app.use("/api", routes);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
