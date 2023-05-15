const express = require('express')
const RouterBiodata = express.Router()

RouterBiodata.get('/', (req,res)=> {
    // const nama = req.query.name
    // const tempatLahir = req.query
    // const tanggalLahir = req.query
    // const alamat = req.query.alamat

    // res.send({
    //     'nama': nama,
    //     'tempat-lahir': tempatLahir,
    //     'tanggal-lahir': tanggalLahir,
    //     'alamat': alamat
    // })
    res.send(req.query)
})

RouterBiodata.post('/', (req,res)=>{
    console.log(req.body)
    const nama = req.body.nama
    const tempatLahir = req.body.tempatLahir
    const tanggalLahir = req.body.tanggalLahir
    const alamat = req.body.alamat
    
    
    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    })
})

module.exports = RouterBiodata


