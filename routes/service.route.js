const express = require("express");
const servicecontroller = require("../controllers/service.contoller");
const router = express.Router();

//search routes

router.get('/search',servicecontroller.searchservice);

module.exports = router;