angular.module('myApp', []).config(function ($stateProvider) {
	//配置状态机的各个状态
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'page/main.html',
			controller: 'mainCtrl'
		})
		// .state('orderList', {
		// 	url: '/orderList',
		// 	templateUrl: 'template/orderList.html',
		// 	controller: 'orderListCtrl',
		// 	cache:false
		// })
		;
});