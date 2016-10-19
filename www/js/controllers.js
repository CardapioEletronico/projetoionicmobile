angular.module('app.controllers', [])



.factory('Data', function () {
var user;
return {
    getUser: function () {
     return user;
    },
    setUser: function (userparameter) {
        user = userparameter;
    }
};
})


.controller('inicioTabDefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('autenticaODefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Data) {
//console.log(Data.getUser());
  $scope.restaurante =  {Id: $stateParams.id};
}])

.controller('TabsCtrl',  ['$scope', '$stateParams', function($scope, $stateParams) {
  console.log($stateParams);
  $scope.restaurante =  {Id: $stateParams.id};
}])
.controller('listaRestaurantesCtrl', function($scope, $http , Data) {
  console.log($scope);

  $http.get('http://10.21.0.137/20131011110061/api/restaurante').
  then(function(response) {
    var eae = response.data;
    console.log(eae);
    $scope.restaurantes = response.data;

  });


  //naoleia
  $('#searchbox').keyup(function(){

    var valThis = $(this).val().toLowerCase();

    if(valThis == ""){
      $('ion-item').show();
    } else {
      $('ion-item').each(function(){
        var text = $(this).text().toLowerCase();
        (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
      });
    };
  });

})


.controller('cardapioDefaultPageCtrl',function ($scope, $http) {
  $http.get('http://10.21.0.137/20131011110061/api/cardapio').
  then(function(response) {
  var eae = $scope.cardapios = response.data;
  var name = window.location.href;
  console.log(name);
  //console.log(getQuerystring("id"));
    // for(var i =0;i< eae.lenght;i++){
    //   if(response.data[i].Id==){
    //     $scope.cardapios = eae[i];
    //   }
    // }
  });


})

.controller('burritosDefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pedidosDefaultPageCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
