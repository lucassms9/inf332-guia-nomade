const express = require("express");
const serverless = require("serverless-http");
const modoRoutes = require("./routes/modo");
const estiloRoutes = require("./routes/estilo");
const sugestaoRoutes = require("./routes/sugestao");
const lugarRoutes = require("./routes/lugar");
const cidadeRoutes = require("./routes/cidade");

const app = express();
app.use(express.json());
app.use("/api/", modoRoutes);
app.use("/api/", estiloRoutes);
app.use("/api/", sugestaoRoutes);
app.use("/api/", lugarRoutes);
app.use("/api/", cidadeRoutes);

export const handler = serverless(app);
