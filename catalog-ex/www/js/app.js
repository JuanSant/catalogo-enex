// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers', 'ksSwiper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.usuarios', {
    url: '/usuarios',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuarios.html',
        controller: 'usuariosCtrl'
      }
    }
  })

  .state('app.configuracion', {
      url: '/configuracion',
      views: {
        'menuContent': {
          templateUrl: 'templates/configuracion.html'
        }
      }
    })
    .state('app.productos', {
      url: '/productos',
      views: {
        'menuContent': {
          templateUrl: 'templates/productos.html',
          controller: 'productosCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/productos/:productoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/producto.html',
        controller: 'productoCtrl'
      }
    }
  })

  .state('app.singleUsuario', {
    url: '/usuarios/:usuarioId',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuario.html',
        controller: 'usuarioCtrl'
      }
    }
  })

  .state('app.singlePedido', {
    url: '/pedidos/:pedidoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/pedido.html',
        controller: 'pedidoCtrl'
      }
    }
  })

  .state('app.miPedido', {
    url: '/misPedidos/:pedidoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/pedido.html',
        controller: 'pedidoCtrl'
      }
    }
  })

  .state('app.productosConfig', {
    url: '/productosConfig',
    views: {
      'menuContent': {
        templateUrl: 'templates/productos_editar.html',
        controller: 'productosCtrl'
      }
    }
  })

  .state('app.temas', {
    url: '/temas',
    views: {
      'menuContent': {
        templateUrl: 'templates/tema.html',
        controller: 'temasCtrl'
      }
    }
  })

  .state('app.pedidos', {
    url: '/pedidos',
    views: {
      'menuContent' : {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  
  })

  .state('app.misPedidos', {
    url: '/misPedidos',
    views: {
      'menuContent' : {
        templateUrl: 'templates/misPedidos.html',
        controller: 'misPedidosCtrl'
      }
    }
  
  })

  .state('app.usuariosConfig', {
    url: '/usuariosConfig',
    views: {
      'menuContent': {
        templateUrl: 'templates/usuarios_editar.html',
        controller: 'usuariosCtrl'
     
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/productos');
});