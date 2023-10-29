const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')


// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks) 

// handle the 404
app.use(notFound)


const port = 5000;
const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(5000,()=>console.log(`Listening on port ${5000}`))
    } catch (error) {
        console.log(error)
    }
}

start()