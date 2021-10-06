exports.add = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = {"username":username,"password":password}
    res.json(user)
    console.log(user)
    }
   