import express from "express";
import routes from "./src/routes";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/user", routes);
app.all('/*', function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.listen(port, ()=>console.log(`App running: port ${port}...`));