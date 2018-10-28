var app = angular.module ("monex", ['ui.router']);

app.config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider){
	$urlRouterProvider.otherwise('/main');
	// $locationProvider.html5Mode(true);
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: true
	});
	$stateProvider

	.state('default', {
		url: '/default',
		templateUrl: './views/default.html',
		data: {
			pageTitle: 'default'
		}
	})
 
	.state('login', {
		url: '/login',
		templateUrl: './views/login.html',
		data: {
			pageTitle: 'login'
		}
	})

	.state('help', {
		url: '/help',
		templateUrl: './views/help.html',
		data: {
			pageTitle: 'help'
		}
	})
	
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: './views/dashboard.html',
		data: {
			pageTitle: 'dashboard'
		}
	})

	.state('admin', {
		url: '/admin',
		templateUrl: './views/dashboard.html',
		data: {
			pageTitle: 'dashboard'
		}
	})

	.state('main', {
		url: '/main',
		templateUrl: './views/sidmenu.html',
		data: {
			pageTitle: 'main'
		}
	})

	.state('collections', {
		url: '/main/collections',
		templateUrl: './views/collections.html',
		data: {
			pageTitle: 'main'
		}
	})

	.state('main.view', {
        url: '/mainView',
        templateUrl: './views/dashboard.html',
        controller:'main',
      	controllerAs: "ctrl",
    })

    .state('main.collections', {
        url: '/main/collections/:data',
		params: {
			data: {
				array: true
			}
		},
        templateUrl: './views/collections.html',
        controller: 'collectionCtrl'
    })

    .state('main.data', {
        url: '/main/collections/data/:data',
		params: {
			data: {
				array: true
			},
			dataname:{
				array: true
			}
		},
        templateUrl: './views/datas.html',
        controller: 'dataCtrl'
    })


}]);