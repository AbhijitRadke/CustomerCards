const customerModel = require("../models/customerModel")
const validators = require("../validators/validators")

const { isEmpty, isValidName, isValidEmail, isValidPhone, isValidBody, } = validators

const createCustomer = async function (req, res) {

    try {
        const data = req.body
        let { firstName, lastName, mobileNumber, DOB, emailID, address, customerID, status } = data

        if (!firstName) return res.status(400).send({ status: false, message: "firstName is requires" })
        if (!isValidName(firstName)) return res.status(400).send({ status: false, message: "firstName is not Valid" })

        if (!lastName) return res.status(400).send({ status: false, message: "lastName is requires" })
        if (!isValidName(lastName)) return res.status(400).send({ status: false, message: "lastName is not Valid" })

        if (!mobileNumber) return res.status(400).send({ status: false, message: "mobilNnumber is requires" })
        if (!isValidPhone(mobileNumber)) return res.status(400).send({ status: false, message: "mobileNumber is not Valid" })
        const findMobile = await customerModel.findOne({ mobileNumber: mobileNumber })
        if (findMobile) return res.status(400).send({ status: false, message: "mobilNnumber is allrady use by other acount" })

        if (!emailID) return res.status(400).send({ status: false, message: "emailID is requires" })
        if (!isValidEmail(emailID)) return res.status(400).send({ status: false, message: "emailID is not Valid" })
        const findemailID = await customerModel.findOne({ emailID: emailID })
        if (findemailID) return res.status(400).send({ status: false, message: "emailID is allrady use by other acount" })



    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }


}