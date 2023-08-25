const express = require("express");
const app = express();
const modoRoutes = require("./routes/modo");
const estiloRoutes = require("./routes/estilo");
const sugestaoRoutes = require("./routes/sugestao");
const lugarRoutes = require("./routes/lugar");
const cidadeRoutes = require("./routes/cidade");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(express.json());

app.use("/api/", modoRoutes);
app.use("/api/", estiloRoutes);
app.use("/api/", sugestaoRoutes);
app.use("/api/", lugarRoutes);
app.use("/api/", cidadeRoutes);

app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", (req, res) => res.send("Hello world"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
