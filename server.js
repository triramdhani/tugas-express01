const express = require('express')


const app = express()

const RouterBiodata = require('./route/routeBidodata')
const logEvent = require('./middleware/logEvent')



app.use(logEvent)

app.use('/biodata/', RouterBiodata)
app.get('/', (req,res)=> {
    res.send('server running on port 3500')
})


app.listen(3500 , ()=>{
    console.log('Server running on port 3500')
})
