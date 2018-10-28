var app = angular.module('monex');
app.constant('baseUrl', 'http://127.0.0.1:9090/');

app.controller("loginControl", function($scope) {
    $scope.header = "Monexjs";
    $scope.title = "Login";
    console.log("login page");

});

app.controller ("viewCtrl", function($scope) {

    console.log("mainview reading");

});

app.controller ("monexcontroller", function($scope) {

    console.log("monex");

});

app.controller('dataCtrl', function($scope, $stateParams, $http){
    // console.log($stateParams.data[0]);
    // console.log($stateParams.dataname[0]);
    // $scope.items = "";
    function refreshData() {
        var collection =  $stateParams.data[0];
        var dbname = $stateParams.dataname[0];
        // console.log(collection + dbname);
        $scope.DB_COLLECTION = collection;
        var objson = { 'DB': dbname, 'collection': collection};
        listRefresh(objson);
    };
    refreshData();
    $scope.isArray = angular.isArray;


    $scope.insertData = function (data, collection) {
        try {
            var dbname = $stateParams.dataname[0];
            JSON.parse(data);
            var objson = { 'DB': dbname, 'collection': collection, 'data': data };
            $http.post('/insertData', objson).success(function (response) {
                listRefresh(objson);
                console.log(response);
            });
        } catch (ex) {
            alert("Not valid Json object");
        }
    };

    $scope.dropData = function (data, collection) {
        var dbname = $stateParams.dataname[0];
        var objson = { 'DB': dbname, 'collection': collection, 'data': data };
        $http.post('/dropData', objson).success(function (response) {
            console.log(response)
            listRefresh(objson);
        });
    };

    function listRefresh(obj) {
        $http.post('/viewcollection', obj).success(function (response) {
            $scope.itemss = response;
            // console.log(JSON.stringify(response));
             // $scope.items.push(angular.copy(response);
            $scope.newData = "";
            // console.log(response);
        });
    };

});

app.controller ("collectionCtrl", function($scope, $stateParams, $http) {
    function refresh() {
        var DB = $stateParams.data[0];
        console.log(DB);
        $http.post('/collection', JSON.stringify({ 'DB': DB })).success(function (response) {
            $scope.dbname = DB;
            $scope.objs = response;
            // $scope.dbname = response[0].name;
            // console.log(response);
            // console.log(JSON.stringify(response));
        });
    }

    refresh();
    $scope.isArray = angular.isArray;

    function collectionRefresh() {
        $http.post('/collection', JSON.stringify({ 'DB': $scope.dbname })).success(function (response) {
            $scope.objs = response;
            $scope.DB_COLLECTION = "";
            console.log(response);
        });
    }

    $scope.addCollection = function (COLLECTION_INPUT) {
        var dbname = $scope.dbname;
        try{
        var objson = { 'DB': dbname, 'collection': COLLECTION_INPUT };
        console.log(objson);
        $http.post('/addcollection', objson).success(function (response) {
            collectionRefresh();
            // console.log(response);
        });
        }catch(ex){
            alert("Not a valid input type");
        }
    };

    $scope.dropCollection = function (collection) {
        var objson = { 'DB': $scope.dbname, 'collection': collection };
        $http.post('/dropcollection', objson).success(function (response) {
            collectionRefresh();
        });
    };

});

app.controller ('DefaultControl', function($scope) {
	$scope.name = "default controller";
});


app.controller('main', function ($scope, $http,  $state, $rootScope, $log, $stateParams) {
    // console.log("working dashboard");
   
    function refresh() {
        $http.get('/databases').success(function (response) {
            // Re-init scope vars on refresh 
            // $scope.Nuberdb = "";

            $scope.databases = response;
            
            $scope.sizeOfDisk = response.totalSize;
            // console.log(response.totalSize);
            $scope.menu = {
                database:true,
                collection:false,
                data:false
            }; 
            $scope.DB_NAME = 'Select a Database';
            $scope.DB_INPUT = "";
            $scope.COLLECTION_INPUT = "";
            $scope.objs = "";
            $scope.items = "";
            $scope.DB_COLLECTION = "";
            $scope.Nuberdb = response.databases.length;
            var nNuberdb = response.databases.length;
            // console.log($scope.Nuberdb);
            // $scope.$apply();

        });
    }

    function collectionRefresh() {
        $http.post('/collection', JSON.stringify({ 'DB': $scope.DB_NAME })).success(function (response) {
            $scope.objs = response;
            $scope.DB_COLLECTION = "";
        });
    }

    function listRefresh(obj) {
        $http.post('/viewcollection', obj).success(function (response) {
            $scope.items.push() = response;
            console.log(response);
        });
    }
 
    // Call refresh to init cantacklist 
    refresh();
    
    $scope.openColl = function(){
        console.log($scope.objs);
    }

    $scope.toggleMenu = function() {
        // $scope.menu.database = true ; 
        refresh(); 
    }

    $scope.toggleCollection = function() {
        // $scope.menu.data = false ; 
        // $scope.menu.collection = true ; 
        collectionRefresh(); 
    }

    $scope.dropDB = function (DB) {
        $http.post('/dropDB', JSON.stringify({ 'DB': DB })).success(function (response) {
            refresh();
            // $scope.$digest();
            // $scope.$apply();
        });
    };

    $scope.addDB = function (DB) {
        try{
            var DB = $scope.DB_INPUT;
            var objson = JSON.stringify({ 'DB': DB }) ; 
            $http.post('/addDB', objson).success(function (response) {
                console.log("DB Added: ");
                refresh();
                // $scope.reload();
                // $scope.$digest();
                // $scope.$apply();
                 // console.log("this section is : " + nNuberdb);
            });
        }catch(ex){
            alert("Not a valid input type");
        }
    };

    $scope.updateDB = function (DB) {
        refresh();
        // $scope.$digest();
        // $scope.$apply();
        console.log("udpate : " + DB);
    };


    $scope.viewCollection = function (collection) {
        // $scope.menu.collection = false ; 
        // $scope.menu.data = true ; 
        $scope.DB_COLLECTION = collection;
        var objson = { 'DB': $scope.DB_NAME, 'collection': collection };
        listRefresh(objson);
    };
    $scope.minimize = function(){
      $scope.items =  ""; 
    };

    $scope.testIndex = function (collection) {
        console.log("index number: " + collection); 
        //alert("object count: "+$scope.objs.length); // object count 
    };

});







