import express from "express";
import routes from "./src/routes";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/user", routes);
app.use (cors({credentials: true, origin: true}));

app.listen(port, ()=>console.log(`App running: port ${port}...`));