import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5000;
import data from './data.json' assert { type: 'json' };

app.use(cors());


app.get('/', (req, res) => {
    res.json("Hello Server")
});


app.get('/api/data',(req, res) => {
    res.json(data)
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
