angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabs.inicio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicioTabDefaultPage.html',
        controller: 'inicioTabDefaultPageCtrl'
      }
    }
  })

  .state('autenticaODefaultPage', {
    url: '/page6/{id:[0-9]}',
    templateUrl: 'templates/autenticaODefaultPage.html',
    controller: 'autenticaODefaultPageCtrl'
  })

  .state('listaRestaurantes', {
    url: '/page5',
    templateUrl: 'templates/listaRestaurantes.html',
    controller: 'listaRestaurantesCtrl'
  })

  .state('tabs.cardapio', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/cardapioDefaultPage.html',
        controller: 'cardapioDefaultPageCtrl'
      }
    }
  })

  .state('burritosDefaultPage', {
    url: '/page7/{id2:[0-9]}',


        templateUrl: 'templates/burritosDefaultPage.html',
        controller: 'burritosDefaultPageCtrl'


  })

  .state('tabs.pedidos', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/pedidosDefaultPage.html',
        controller: 'pedidosDefaultPageCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page5/{id:[0-9]}',
    templateUrl: 'templates/tabsController.html',
    abstract: true,
    controller: 'TabsCtrl'
  })

$urlRouterProvider.otherwise('/page5')



});
