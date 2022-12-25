const validators = require("../validators/validators")
const cardModel = require("../models/cardModel")

const { isEmpty, isValidName, isValidEmail, isValidPhone, isValidBody, isValidDate } = validators

const createCard = async function (req, res) {

    try {
        const data = req.body

        if (!isValidBody(data)) return res.status(400).send({ status: false, message: "plese enter data in request body" })

        const { customerID, cardType, vision } = data

        






    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}