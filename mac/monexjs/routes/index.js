'use strict';
var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs') // We'll need to ask the filesystem if it exists    
var projectname = 'myfolder';
var path = require('path'); //core module 
var databaseUrl = "localhost:27017/DB"; // default env
var bodyParser = require('body-parser');
var os = require("os");
var drive = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"

// All possible mongo db objects 
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    assert = require('assert');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/login', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/help', function(req, res, next) {
    res.render(drive + 'Applications/monexjs/admin/index');
 });

router.get('/main/mainView', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/main/collections', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/main/mainView', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/default', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/admin', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/dashboard', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/main', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/main/main/collections/:data', function(req, res, next) {
    var name = req.params.projectname;
    res.render('http://localhost:9090/main/main/collections/' + name); 
});


router.get('/header', function(req, res, next) {
   res.render(drive + 'Applications/monexjs/admin/index');
});

router.get('/databases', function (req, res, next) {
    // Default server is set to DB
    var db = new Db('DB', new Server('localhost', 27017));
    console.log("-- recived GET request --");
    db.open(function (err, db) {
        // Use the admin database for the operation
        var adminDb = db.admin();
        // List all the available databases
        adminDb.listDatabases(function (err, dbs) {
            assert.equal(null, err);
            assert.ok(dbs.databases.length > 0);
            console.log(dbs);
            res.json(dbs);
            db.close();
        });
    });
}); 

// Listen for collection Post request
router.post('/collection', function (req, res, next) {
    console.log("-- recived collection post request --");
    var databaseName = req.body.DB;
    console.log('req contackItem: ' + databaseName);
    var db = new Db(databaseName, new Server('localhost', 27017));
    db.open(function (err, db) {
        db.listCollections().toArray(function (err, collections) {
            for (var collection of collections) {
                console.log(collection);
            }
            res.json(collections);
            db.close();
        });
    });
}); 


// Listen for add contactlist post request
router.post('/addcollection', function (req, res, next) {
    var databaseName = req.body.DB; 
    var collectionName = req.body.collection;
    console.log('----creat collection req contackItem: ' + databaseName);
    var db = new Db(databaseName, new Server('localhost', 27017)); 
    // Establish connection to db
    db.open(function (err, db) {
        // Create a collection 
        console.log("progress");
        db.createCollection(collectionName, function (err, collection) {
            console.log("Collection created");
            res.json(true);
            db.close();
        });
    });
});


// Listen for addDB post request
router.post('/addDB', function (req, res, next) {
    var databaseName = req.body.DB;
    console.log('req contackItem: ' + databaseName);
    var db = new Db(databaseName, new Server('localhost', 27017)); 
    // Establish connection to db
    db.open(function (err, db) {
        // Create a null collection
        db.createCollection(databaseName,  function (err, collection) {
        // db.createCollection(databaseName, { w: 1 }, function (err, collection) {
            if (err) throw err;
            console.log("DB created");
            res.json(true);
            db.close();
        });
    });
});

// Listen for viewcollection post request
router.post('/viewcollection', function (req, res, next) {
    console.log("-- recived viewcollection post request --");
    var databaseName = req.body.DB, collection = req.body.collection;
    var db = new Db(databaseName, new Server('localhost', 27017));
    db.open(function (err, db) {
        console.log(databaseName + ": opened");
        var cursor = db.collection(collection).find().toArray(function (err, documents) {
            if(err)
                throw err ; 
             res.json(documents);
             db.close();
        });
    });

});

// Listen for drop DB post request
router.post('/dropDB', function (req, res, next) {
    var databaseName = req.body.DB;
    console.log('req contackItem: ' + databaseName);
    var db = new Db(databaseName, new Server('localhost', 27017)); 
    // Establish connection to db
    db.open(function (err, db) {
        assert.equal(null, err);
        // Execute drop db command against the server
        db.command({ dropDatabase: 1 }, function (err, result) {
            assert.equal(null, err);
            res.json(true);
            db.close();
        });
    });
});



// Listen for drop contactlist post request
router.post('/dropcollection', function (req, res, next) {
    var databaseName = req.body.DB, collectionName = req.body.collection;
    console.log('----drop req for : ' + databaseName);
    console.log('----collection : ' + collectionName);

    var db = new Db(databaseName, new Server('localhost', 27017)); 
    // Establish connection to db
    db.open(function (err, db) {
        // Drop the collection 
        db.dropCollection(collectionName, function (err, result) {
            assert.equal(null, err);
            console.log(collectionName + ": DROPED");
            res.json(true);
            db.close();
        });
    });

});

// Listen for Create collection post request
router.post('/insertData', function (req, res, next) {
    var databaseName = req.body.DB, collection = req.body.collection, data = req.body.data;
    var db = new Db(databaseName, new Server('localhost', 27017));
    db.open(function (err, db) {
        // Insert a document in the capped collection
        db.collection(collection).insert(JSON.parse(data), { w: 1 }, function (err, result) {
            assert.equal(null, err);
            console.log("New user added");
            res.json(true);
            db.close();
        });
    });
});

// Listen for Create collection post request
router.post('/dropData', function (req, res, next) {
    var databaseName = req.body.DB, collection = req.body.collection, data = req.body.data;
    var par = { "_id": ObjectID(data._id) };
    var db = new Db(databaseName, new Server('localhost', 27017));
    db.open(function (err, db) {
        db.collection(collection).remove(par, function (err, result) {
            assert.equal(null, err);
            console.log("Data removed");
            res.json(true);
            db.close();
        });
    });
});

router.get('/:projectname', function(req, res, next) {
    var name = req.params.projectname;
    res.render(drive + 'Applications/monexjs/myprojects/' + name + '/index'); 
});
module.exports = router;