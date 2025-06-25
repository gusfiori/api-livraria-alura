import express from 'express';
import livros from "./livrosRoutes.js";
import autoresRoutes from './autoresRouters.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200). send("Curso Node.js"));

    app.use(express.json(), livros, autoresRoutes)
    
};

export default routes;