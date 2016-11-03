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

//pode ler
.controller('cardapioDefaultPageCtrl',function ($scope, $http,$stateParams, Data) {
  $http.get('http://10.21.0.137/20131011110061/api/cardapio').
  then(function(response) {
  var eae = response.data;
  var name = window.location.href;
  var tabaco = [];
  var key,length= 0;
  var count=0;
  for(key in eae) {
    if(eae.hasOwnProperty(key)){
      length++;
    }
  }
  console.log(length);
  console.log(eae);
   var f = {Id: $stateParams.id};

    for(var i =0;i< length;i++){

      if(eae[i].Restaurante_id== f.Id){
        count++
          tabaco.push(eae[i]);

      }
    }
    console.log(count);
    console.log(tabaco);
    $scope.cardapios = tabaco;


  });


})

.controller('burritosDefaultPageCtrl',function ($scope, $http, $stateParams, Data) {
  $http.get('http://10.21.0.137/20131011110061/api/produto').
   then(function(response) {
   var eae = response.data;
   var name = window.location.href;
   var tabaco = [];
    var key,length= 0;
    var count=0;
    for(key in eae) {
      if(eae.hasOwnProperty(key)){
        length++;
      }
    }
    console.log(length);
   console.log(eae);
   var f = {Id2: $stateParams.id2};
   console.log(f.Id2);
    for(var i =0;i< length;i++){

        if(eae[i].Cardapio_id== f.Id2){
          count++
            tabaco.push(eae[i]);

        }
    }
      console.log(count);
      console.log(tabaco);
      $scope.produtos = tabaco;


    });

})

.controller('pedidosDefaultPageCtrl',function ($scope, $http) {
  $http.get('http://10.21.0.137/20131011110061/api/cardapio').
  then(function(response) {
    var eae = $scope.cardapios = response.data;
    var name = window.location.href;
    });

    $scope.getTotal = function(){
        var total = 0;
        console.log("Rabo");
        for(var i = 0; i < $scope.cardapio.length; i++){
            var product = $scope.cardapio[i];
            total += (cardapio.Descricao);
        }
        return total;
    };
  //http://stackoverflow.com/questions/22731145/calculating-sum-of-repeated-elements-in-angularjs-ng-repeat



});
