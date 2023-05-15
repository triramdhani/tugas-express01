const express = require('express')
const cors = require('cors')

const app = express()

const RouterBiodata = require('./route/routeBidodata')
const logEvent = require('./middleware/logEvent')
const corsOption = require('./config/corsOption')



app.use(logEvent)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOption))

app.use('/biodata', RouterBiodata)

app.get('/', (req,res)=> {
    res.send('server running on port 3500')
})


app.listen(3500 , ()=>{
    console.log('Server running on port 3500')
})
