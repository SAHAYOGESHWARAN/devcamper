const express = require('express');
const dotenv = require('dotenv');
const bootcampRouter = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json()); // Ensure JSON parsing is enabled

app.use('/api/v1/bootcamps', bootcampRouter);

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
