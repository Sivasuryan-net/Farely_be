const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const connectDB = require('./src/db/connection');
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

connectDB();

app.use('/api-docs', swggerui.serve, swggerui.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

app.use('/api', require('./src/routes/index'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});