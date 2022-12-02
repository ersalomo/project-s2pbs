import express from 'express';
import { load } from './index'
import database from './database/index.db'

window.addEventListener('DOMContentLoaded',load);
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extensions: true}))

database.async({force: true}).then((res)=>{ //force = tabel yang sudah ada di drop dan dibuat ulang.
    console.log('database running')
}).catch((err)=>{
    console.error('ERR: error running database', err)
})

app.listen(port,()=>{
    console.info(`Server listening on ${port}`)
})