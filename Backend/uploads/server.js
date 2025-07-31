const app = require('./app');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;


//connect to mongoDB
connectDB();

//start server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});