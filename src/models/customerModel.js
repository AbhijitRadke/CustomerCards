const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    DOB: {
        type: Date,
        required: true,
    },
    customerID: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        required: true,
        trim: true,
    },
}, { timeseries: true })

module.exports = mongoose.model("costomer", customerSchema)