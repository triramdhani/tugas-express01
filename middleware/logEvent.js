const logEvent = (req,res,next) => {
    console.log(new Date(), req.url)
    next()
}

module.exports = logEvent
