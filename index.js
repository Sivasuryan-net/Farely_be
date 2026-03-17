const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const connectDB = require('./src/db/connection');
dotenv.config();

// Initialize Express app
const port = process.env.PORT || 8000;
const app = express();

// Connect to the database
connectDB();

// Swagger UI setup
app.use('/api-docs', swggerui.serve, swggerui.setup(swaggerDocument));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./src/routes/index'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});