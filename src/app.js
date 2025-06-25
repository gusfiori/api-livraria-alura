import express from "express";
import conectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco: ", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
})

const app = express();
routes(app);

export default app;

