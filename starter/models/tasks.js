const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "NAME IS REQUIRED"],
        trim: true,
        maxLength: [20, 'NAME CANNOT BE LONGER THAN 20 CHARACTERS'],
    },
    completed:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)