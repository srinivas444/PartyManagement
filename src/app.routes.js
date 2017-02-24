angular.module('app').config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        component: 'home',
        name: 'home'
    }).state('about', {
        url: '/about',
        template: "<about></about>"
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');

});