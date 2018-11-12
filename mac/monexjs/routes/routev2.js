'use strict';
var express = require('express');
var app = express();
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'admin';



router.post('/v2adminadduser', function(req, res, next){
	var data = req.body.data;
	var username = { "username": ObjectID(data.username) };
	var password = { "password": ObjectID(data.password) };
	MongoClient.connect(url, function(err, client) {
	  // Use the admin database for the operation
	  const adminDb = new Admin()

	  adminDb.addUser(username, password, function(err, dbs) {
	    assert.equal(null, err);
	    assert.ok(dbs.databases.length > 0);
	    res.json(true);
	    client.close();
	  });
	});
})

router.post('/v2adminremoveuser', function(req, res, next){
	var data = req.body.data;
	var username = { "username": ObjectID(data.username) };
	var password = { "password": ObjectID(data.password) };
	MongoClient.connect(url, function(err, client) {
	  // Use the admin database for the operation
	  const adminDb = new Admin()

	  adminDb.removeUser(username, function(err, dbs) {
	    assert.equal(null, err);
	    assert.ok(dbs.databases.length > 0);
	    res.json(true);
	    client.close();
	  });
	});
});

router.post('/v2addDB', function (req, res, next) {
    var dbName = req.body.DB;
    MongoClient.connect(url, function(err, client) {
	    // Create a collection we want to drop later
		const col = client.db(dbName);
		  // Insert a bunch of documents
		col.createCollection(dbName,  function (err, collection) {
        // db.createCollection(databaseName, { w: 1 }, function (err, collection) {
            if (err) 
            	throw err;
            console.log("DB created");
            res.json(true);
            db.close();
        });
	});
});

router.post('/v2listdb', function (req, res, next) {
    // Connect using MongoClient
	MongoClient.connect(url, function(err, client) {
	  // Use the admin database for the operation
	  const adminDb = db.admin();

	  // List all the available databases
	  adminDb.listDatabases(function(err, dbs) {
	    assert.equal(null, err);
	    assert.ok(dbs.databases.length > 0);
	    res.json(dbs);
	    client.close();
	  });
	});
}); 

router.post('/v2serverinfo', function (req, res, next) {
    // Connect using MongoClient
	MongoClient.connect(url, function(err, client) {
	  // Use the admin database for the operation
	  const adminDb = db.admin();

	  // List all the available databases
	  adminDb.serverInfo(function(err, dbs) {
	    assert.equal(null, err);
	    assert.ok(dbs.databases.length > 0);
	    res.json(dbs);
	    client.close();
	  });
	});
}); 

router.post('/v2serverstatus', function (req, res, next) {
    // Connect using MongoClient
	MongoClient.connect(url, function(err, client) {
	  // Use the admin database for the operation
	  const adminDb = db.admin();

	  // List all the available databases
	  adminDb.serverStatus(function(err, dbs) {
	    assert.equal(null, err);
	    assert.ok(dbs.databases.length > 0);
	    res.json(dbs);
	    client.close();
	  });
	});
}); 


router.post('/v2insertData', function (req, res, next) {
    var databaseName = req.body.DB, collection = req.body.collection, data = req.body.data;
    var db = new Db(databaseName, new Server('localhost', 27017));
    MongoClient.connect(url, function(err, client) {
	    // Create a collection we want to drop later
		const col = client.db(dbName).collection(collection);
		  // Insert a bunch of documents
		col.insert(JSON.parse(data), {w:1}, function(err, result) {
		    assert.equal(null, err);
		    // Show that duplicate records got dropped
		    col.aggregation({}, {cursor: {}}).toArray(function(err, items) {
		      assert.equal(null, err);
		      assert.equal(4, items.length);
		      res.json(true);
		      client.close();
		    });
		});
	});
});


router.post('/v2dropData', function (req, res, next) {
    var dbName = req.body.DB, collection = req.body.collection, data = req.body.data;
    var par = { "_id": ObjectID(data._id) };

	MongoClient.connect(url, function(err, client) {
	  // Create a collection we want to drop later
	const col = client.db(dbName).collection(collection);
	  
	col.collection(collection).deleteOne(par, function (err, result) {
        assert.equal(null, err);
        console.log("Data removed");
        res.json(true);
        db.close();
    });
	// col.collection(collection).remove(par, function (err, result) {
 //        assert.equal(null, err);
 //        console.log("Data removed");
 //        res.json(true);
 //        db.close();
 //    });
});

router.post('/v2listcollection', function (req, res, next) {
	var dbName = req.body.DB;
	// Connect using MongoClient
	MongoClient.connect(url, function(err, client) {
	  // Create a collection we want to drop later
	  const col = client.db(dbName).collection('createIndexExample1');
	  // Show that duplicate records got dropped
	  col.listCollections().toArray(function(err, collections) {
	  	for (var collection of collections) {
            console.log(collection);
        }
        res.json(collections);
	    client.close();
	  });
	});
});


router.post('/v2createCollection', function (req, res, next) {
	var databaseName = req.body.DB; 
    var collectionName = req.body.collection;
	MongoClient.connect(url, function(err, client) {
	  const col = client.db(dbName);
	  // Show that duplicate records got dropped
	  col.createCollection(collectionName, function (err, collection) {
        console.log("Collection created");
        assert.equal(null, err);
	    assert.equal(4, items.length);
        res.json(true);
        db.close();
      });
	});
}); 

router.post('/v2viewcollection', function (req, res, next) {
	var dbName = req.body.DB, collection = req.body.collection;
	MongoClient.connect(url, function(err, client) {
	  // Create a collection we want to drop later
	  const col = client.db(dbName).collection(collection);
	  // Show that duplicate records got dropped
	  col.find({}).toArray(function(err, items) {
	    test.equal(null, err);
	    test.equal(4, items.length);
	    if(err)
            throw err ; 
        res.json(documents);
	    client.close();
	  });
	});
});

router.post('/v2dropcollection', function (req, res, next) {
    var databaseName = req.body.DB, collectionName = req.body.collection;

    MongoClient.connect(url, function(err, client) {
		// Create a collection we want to drop later
		const col = client.db(dbName).collection(collectionName);
		// Show that duplicate records got dropped
	    col.drop(function (err, result) {
	        assert.equal(null, err);
	        console.log(collectionName + ": DROPED");
	        res.json(true);
	        db.close();
	    });
	});
});

router.post('/v2readfile', function (req, res, next) {
	MongoClient.connect(url, function(err, client) {
	  const db = client.db(dbName);
	  const gridStore = new GridStore(db, null, "w");
	  gridStore.open(function(err, gridStore) {
	    gridStore.write("hello world!", function(err, gridStore) {
	      gridStore.close(function(err, result) {
	        // Let's read the file using object Id
	        GridStore.read(db, result._id, function(err, data) {
	          test.equal('hello world!', data);
	          client.close();
	          test.done();
	        });
	      });
	    });
	  });
	});
});
