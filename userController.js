exports.getAllUsers = (req, res) =>{
    res.status(200)
    res.json([
        {
            userName : "Jospeh",
            userData: "Male",

        },
        {
            userName : "Phil",
            userData : "Male",
  
        },

        {
            userName : "Mayor",
            userData : "Male",

        }
    ])
}

exports.getSingleUser = (req, res)=>{
    res.status(200)
    res.json({
        usertName : "Phil",
        userData: "Male",

    })
}

exports.createAUser = (req, res)=>{
    res.status(200)
    res.json({
        message : "user added succesfully"
    })
}

exports.updateUser = (req, res) =>{
    res.status(200)
    res.json({
        message : "User updated sucessfully"
    })
}

exports.deleteUser = (req, res) =>{
    res.status (200)
    res.json({
        message : "User deleted succesfully"
    })
}

