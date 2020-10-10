const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const DbService = require('./DBService');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/api/get', async (req, res) => {
    let db = DbService.getInstance();
    try{
        let data = await db.getAll();
        res.json({data});
    }catch(err){
        res.status(500).send(err)
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is avaliable on port ${process.env.PORT}`)
});