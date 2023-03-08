const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const routercategories = require("./routes/categories.models");
const routerusers = require("./routes/user.models");
const routerTodos = require("./routes/todos.models");



initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ alter: true })
    .then(() => {
        console.log('sincronizado');
    })
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.post()
// app.put()
// app.delete()
// app.patch()
app.use(routercategories)
app.use(routerusers)
app.use(routerTodos)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});