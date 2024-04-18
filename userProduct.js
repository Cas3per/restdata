exports.getAllProduct = (req, res) =>{
    res.status(200)
    res.json([
        {
            productName : "Iphone 15",
            productPrice : "$1300",

        },
        {
            productName : "Iphone 14",
            productPrice : "$1200",
  
        },

        {
            productName : "Iphone 13",
            productPrice : "$1100",

        }
    ])
}

exports.getSingleProduct = (req, res)=>{
    res.status(200)
    res.json({
        productName : "Iphone 15",
        productPrice : "$1300",

    })
}

exports.getNewProduct = (req, res)=>{
    res.status(200)
    res.json({
        message : "product added succesfully"
    })
}

exports.UpdateNewProduct = (req, res) =>{
    res.status(200)
    res.json({
        message : "product updated sucessfully"
    })
}

exports.deleteProduct = (req, res) =>{
    res.status (200)
    res.json({
        message : "product deleted succesfully"
    })
}

