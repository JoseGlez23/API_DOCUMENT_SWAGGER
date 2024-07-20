const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

const app = express();
const port = 5000; // Puerto en el que escucha el servidor

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Datos simulados para las gráficas (reemplaza con tus datos reales)
const data = {
  bestSellingComputers: [
    { name: 'Laptop HP Pavilion', sales: 120 },
    { name: 'PC Gamer Lenovo Legion', sales: 90 },
    { name: 'iMac 27" Apple', sales: 80 },
    { name: 'Notebook ASUS ZenBook', sales: 70 },
    { name: 'Surface Laptop Microsoft', sales: 60 },
  ],
  otherChartData1: [
    { category: 'Juegos', value: 50 },
    { category: 'Productividad', value: 70 },
    { category: 'Entretenimiento', value: 30 },
  ],
  otherChartData2: [
    { label: 'Ventas Online', count: 25 },
    { label: 'Ventas en Tiendas', count: 45 },
    { label: 'Ventas por Distribuidores', count: 60 },
  ],
};

/**
 * @swagger
 * /api/best-selling-computers:
 *   get:
 *     summary: Obtiene las computadoras más vendidas
 *     responses:
 *       200:
 *         description: Lista de las computadoras más vendidas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   sales:
 *                     type: integer
 */
app.get('/api/best-selling-computers', (req, res) => {
  res.json(data.bestSellingComputers);
});

/**
 * @swagger
 * /api/other-chart-data-1:
 *   get:
 *     summary: Obtiene otros datos de la gráfica 1
 *     responses:
 *       200:
 *         description: Datos de la gráfica 1
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   category:
 *                     type: string
 *                   value:
 *                     type: integer
 */
app.get('/api/other-chart-data-1', (req, res) => {
  res.json(data.otherChartData1);
});

/**
 * @swagger
 * /api/other-chart-data-2:
 *   get:
 *     summary: Obtiene otros datos de la gráfica 2
 *     responses:
 *       200:
 *         description: Datos de la gráfica 2
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                   count:
 *                     type: integer
 */
app.get('/api/other-chart-data-2', (req, res) => {
  res.json(data.otherChartData2);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});