var express = require("express");
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');

/* GET home page. */
router.get("/", function (req, res, next) {
    "use strict";
    //res.render("index", {title: "CongressServer-Allred"});
    res.loadFile('index.html');
});

function checkConnection() {
    "use strict";
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}

router.get('/all-data', function(request, response) {
    'use strict';
    console.log('AllData route invoked.');
    checkConnection();
    allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    checkConnection();
    allMongo.empty(response);
});

router.get("/insertValidCollection", function (request, response) {
    "use strict";
    //response.status(200).send({result: "insertValidCollection"});
    checkConnection();
    allMongo.readDataAndInsert(response);
});

router.get("/bar", function (request, response) {
    "use strict";
    response.status(200).send({result: "bar"});
});

router.get("/bar/:id", function (request, response) {
    "use strict";
    response.status(200).send({param: request.params.id});
});

router.get("/:id", function (request, response) {
    "use strict";
    response.status(200).send({
        param: request.params.id,
        querry: request.query
    });
});

module.exports = router;
