const express = require('express')
const router = express.Router()

//var express = require('express');
var app = express();
//var router = express.Router();
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
//route to get all database using mongo objets 
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
//route to show all collections in a dataase by posting databasename 
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
module.exports = router 