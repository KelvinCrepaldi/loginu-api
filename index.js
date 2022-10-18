import express from "express";
import routes from "./src/routes";
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use("/user", routes);



app.listen(port, ()=>console.log(`App running: port ${port}...`));