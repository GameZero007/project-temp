exports.add = (req, res) => {
    const temp = req.body.temp
    res.json({ message: 'temp is ' + temp })
    console.log(req.body.temp)
    }