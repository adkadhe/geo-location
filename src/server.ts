import http from "http";
import express from "express";
import routes from "./routes";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "./middlewares/response.middleware";
import env from "./utils/env-config";

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10MB" }));
app.use(sendSuccessResponse);
app.use(sendErrorResponse);

app.use("/api", routes);

server.listen(Number(env.port), env.host, () => {
  console.log(`Server is running on port ${env.port}`);
});
