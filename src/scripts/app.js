import express from 'express';
// import { load } from './index'
import cors from 'cors'
import bodyParser from 'body-parser';
import database from './database/index.db.js'
import {routes} from './routes/index.route.js'
// window.addEventListener('DOMContentLoaded',load);
const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

database.sync({force: true}).then((res)=>{ //force = tabel yang sudah ada di drop dan dibuat ulang.
    console.log('database running')
}).catch((err)=>{
    console.error('ERR: error running database', err)
})
routes(app)

app.listen(port,()=>{
    console.info(`Server listening on ${port}`)
})