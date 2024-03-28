const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

//middlewares
app.use(cors()); //allows cross-origin req
app.use(express.json()) // allows us to pass payloads from f-end to b-end
app.use(express.urlencoded());

//routes
app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.get('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));