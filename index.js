const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
// Connect to database
connectDB();

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));