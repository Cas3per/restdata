exports.getAllService = (req, res) =>{
    res.status(200)
    res.json([
        {
            serviceName : "Barbing",
            servicePrice : "$130",

        },
        {
            serviceName : "Hair Dresser",
            servicePrice : "$120",
  
        },

        {
            serviceName : "Tailor",
            servicePrice : "$110",

        }
    ])
}

exports.getSingleService = (req, res)=>{
    res.status(200)
    res.json({
        serviceName : "Barber",
        servicePrice : "$130",

    })
}

exports.getNewService = (req, res)=>{
    res.status(200)
    res.json({
        message : "service added succesfully"
    })
}

exports.UpdateNewService = (req, res) =>{
    res.status(200)
    res.json({
        message : "service updated sucessfully"
    })
}

exports.deleteService = (req, res) =>{
    res.status (200)
    res.json({
        message : "service deleted succesfully"
    })
}

