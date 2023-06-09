import express from 'express'
import musicSearchRoutes from './routes/musicSearch'

const app = express();
const port = 8000

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/musicSearch', musicSearchRoutes)

app.listen(port, () => {
    console.log(`Music Search is listening on port ${port}`)
})