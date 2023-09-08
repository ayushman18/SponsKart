const express = require("express");
const brand  = require("../controllers/brand.controller");
const router = express.Router();
const fileupload = require('../middleware/fileupload');
const {authorization} = require('../middleware/authorization')


// End Point
// /creator

// router.put('/update',fileupload.fields([
//     {name:'logo'},
//     {name:'backgroundImage'}
// ]),creator.addprofile);
// router.get('/get/:id',creator.getById);
 router.get('/getall',brand.getAll);





module.exports = router;