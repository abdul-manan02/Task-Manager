const notFound = (req,res) =>{
    res.statsu(404).send("ROUTE DOES NOT EXIST")
}

module.exports = notFound