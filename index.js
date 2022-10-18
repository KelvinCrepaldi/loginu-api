import express from "express";
import routes from "./src/routes";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/user", routes);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.listen(port, ()=>console.log(`App running: port ${port}...`));