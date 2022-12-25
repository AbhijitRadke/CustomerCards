const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const cardsSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        trim: true
    },
    cardType: {
        type: String,
        enum: ["regular", "special"],
        required: true,
        trim: true
    },
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    customerID: {
        type: ObjectId,
        ref: "costomer",
        trim: true
    }
    , vision: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
        trim: true,
    },
}, { timeseries: true })

module.exports = mongoose.model("card", cardsSchema)