// Specify the NodeJS packages we need.
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Configure app to use bodyParser() and JSON, so we can easily get data from the HTTP body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure CORS (i.e. cross-origin requests)
var originsWhitelist = ['http://localhost:4200'];
var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));


// Get an instance of the express Router.
var router = express.Router();

// Our application data.
var products = [
    { id: 0, description: "Swansea City shirt", category: "Leisure wear", price: 45 },
    { id: 1, description: "Cardiff City shirt", category: "Leisure wear", price: 5 },
    { id: 2, description: "Bugatti Chiron", category: "Auto", price: 2000000 },
    { id: 3, description: "65 inch UHDTV", category: "TV/Audio", price: 1800 },
    { id: 4, description: "Carving skis", category: "Sports equipment", price: 350 },
    { id: 5, description: "Ski boots", category: "Sports equipment", price: 150 }
];
var nextid = 6;

// HTTP handler methods.
router.get('/products', function (req, res) {
    res.status(200).json(products);
    return;
})

router.get('/products/:id', function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            res.status(200).json(products[i]);
            return;
        }
    }
    res.status(404).send('Invalid id');
    return;
})

router.post('/products', function (req, res) {
    var product = req.body;
    product.id = nextid++;
    products.push(product);
    res.status(201).json(product);
})

router.put('/products/:id', function (req, res) {
    var id = req.params.id;
    var product = req.body;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i] = product;
            res.status(200).send('Successfully updated');
            return;
        }
    }
    res.status(404).send('Product not found');
    return;
})

router.delete('/products/:id', function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
            res.status(410).send('Successfully deleted');
            return;
        }
    }
    res.status(404).send('Invalid id');
    return;
})

// For requests that have the /api prefix, use the router to route the request to the appropriate HTTP handler method above.
app.use('/api', router);

// Start listening on port 8080.
app.listen(8080);
console.log("Products Service listening at http://localhost:8080");
