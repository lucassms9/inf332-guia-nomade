const express = require('express');
const app = express();
const modoRoutes = require('./routes/modo'); 
const estiloRoutes = require('./routes/estilo'); 
const sugestaoRoutes = require('./routes/sugestao'); 
const lugarRoutes = require('./routes/lugar'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use(express.json());
app.use(modoRoutes);
app.use(estiloRoutes);
app.use(sugestaoRoutes);
app.use(lugarRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
