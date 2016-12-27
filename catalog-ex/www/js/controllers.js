angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('productosCtrl', function($scope) {
  $scope.productos = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('usuariosCtrl', function($scope) {
  $scope.usuarios = [
    {id: 1, nombre: 'Julian Casablancas', telefono: 3310485946, sucursal: 'Las Fuentes'},
    {id: 2, nombre: 'Herbert James', telefono: 3314225963, sucursal: 'Galerias'},
    {id: 3, nombre: 'David Lee', telefono: 3310890802, sucursal: 'Patria'}
  ];
})

.controller('temasCtrl', function($scope) {
  $scope.temas = [
    {id: 1, nombre: 'Tema1', img: '#'},
    {id: 2, nombre: 'Tema2', img: '#'},
    {id: 3, nombre: 'Tema3', img: '#'}
  ];
})

.controller('pedidosCtrl', function($scope) {
  $scope.pedidos = [
    {id: 1, cliente: 'Julian Casablancas', sucursal: 'Las Fuentes', detalle: 'Producto1, Producto2'},
    {id: 2, cliente: 'Herbert James', sucursal: 'Galerias', detalle: 'Producto1, Producto2'},
    {id: 3, cliente: 'David Lee', sucursal: 'Patria', detalle: 'Producto1, Producto2'}
  ];
})

.controller('usuarioCtrl', function($scope, $stateParams) {
})

.controller('pedidoCtrl', function($scope, $stateParams) {
})

.controller('productoCtrl', function($scope, $stateParams) {
});
