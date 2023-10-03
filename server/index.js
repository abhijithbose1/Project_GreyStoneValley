const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
require('dotenv').config();

const { userRoute } = require('./routes/userRoute');
const { resortRoute } = require('./routes/resortsRoute');
const { errorHandle } = require('./middlewares/errorHandle');


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// -------- routes --------------
app.use('/api/users', userRoute);
app.use('/api/resorts', resortRoute );



app.use(errorHandle);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server started on: http://localhost:${port}`);
})