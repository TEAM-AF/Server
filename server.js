"use stric";

const app = require("./app");

const server = app.listen(app.get("port"), () => {
    console.log(`Iniciando Express en el puerto ${app.get("port")}`);
});