

import express from "express";

//import routes
import userRoute from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

//apply routes
app.use(userRoute);

export default app;