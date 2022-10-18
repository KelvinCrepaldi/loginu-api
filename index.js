import express from "express";
import routes from "./src/routes";
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    app.use(cors());
    next();
});
app.use("/user", routes);



app.listen(port, ()=>console.log(`App running: port ${port}...`));