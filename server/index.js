const express = require('express');
const cors = require('cors');
const { resortRoute } = require('./routes/resortsRoute');



require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// connectDB();         //create dataBase

const port = 3000;
const server = process.env.SERVER_URL || `http://localhost:${port}`

app.listen(port, () => {
    console.log(`===== server started on  : ${server}`);
})





// -----------routes-------------
app.get('/', (req,res)=>{
    res.json({
        message: 'connected to server'
    })
} );
app.use('/api/resorts', resortRoute);


//------ error handling -------


app.all('*', (req, res) => {
    res.json(`API does not exist`);
})