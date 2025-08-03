// import dependency
const express = require('express');
const router = express.Router();

// import product router
router.use(require("../modules/product/product.routes"));

// export the router
module.exports = router;