const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customerController")
const cardController = require("../controllers/cardController")

// router.get("/test", function (req, res) {
//     const a = 100
//     res.send({ msg: a })

// })

router.post("/customer", customerController.createCustomer)

router.get("/customer", customerController.getcustomers)

router.delete("/customer/:customerID", customerController.deleteCustomer)

router.post("/card", cardController.createCard)

router.get("/card", cardController.getcards)





module.exports = router