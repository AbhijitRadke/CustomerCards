const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customerController")

// router.get("/test", function (req, res) {
//     const a = 100
//     res.send({ msg: a })

// })

router.post("/customer", customerController.createCustomer)

router.get("/customer", customerController.getcustomers)

router.delete("/customer/:customerID", customerController.deleteCustomer)





module.exports = router