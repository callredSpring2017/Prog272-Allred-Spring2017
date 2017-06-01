var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    "use strict";
    res.render("index", {title: "CongressServer-Allred"});
});

router.get("/insertValidCollection", function (request, response) {
    "use strict";
    response.status(200).send({result: "insterValidCollection"});
});

router.get("/bar", function (request, response) {
    "use strict";
    response.status(200).send({result: "bar"});
});

router.get("/bar/:id", function (request, response) {
    "use strict";
    response.status(200).send({param: request.params.id});
});

module.exports = router;
