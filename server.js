require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const RouterBiodata = require('./route/routeBidodata')
const logEvent = require('./middleware/logEvent')
const corsOption = require('./config/corsOption')

const port = process.env.PORT ||

app.use(logEvent)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOption))

app.use('/biodata', RouterBiodata)

app.get('/', (req,res)=> {
    res.send('Coded by Tri Ramdhani')
})


app.listen(3500 , ()=>{
    console.log('Server running at http://localhost:' + port)
})
