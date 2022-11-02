const express = require("express")
const router = express.Router();
const mailController = require('../controlllers/MailController');

router.get('/', mailController.send);

module.exports = router;