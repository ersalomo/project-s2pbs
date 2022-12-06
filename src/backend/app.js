const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./database/index.db')
const routes = require('./routes/index.route')
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
    console.info(`Server listening on http://localhost:${port}`)
})