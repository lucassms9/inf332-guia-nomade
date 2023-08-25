const express = require("express");
const serverless = require("serverless-http");
const modoRoutes = require("../../../routes/modo");
const estiloRoutes = require("../../../routes/estilo");
const sugestaoRoutes = require("../../../routes/sugestao");
const lugarRoutes = require("../../../routes/lugar");
const cidadeRoutes = require("../../../routes/cidade");

const app = express();
app.use(express.json());

app.use(modoRoutes);
app.use(estiloRoutes);
app.use(sugestaoRoutes);
app.use(lugarRoutes);
app.use(cidadeRoutes);
app.use("/", (req, res) => res.send("Hello world"));
const handler = serverless(app);

module.exports = { handler };
