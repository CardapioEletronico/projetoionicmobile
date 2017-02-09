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

.controller('autenticaODefaultPageCtrl', function ($scope, $stateParams, $http) {
  //console.log(Data.getUser());
  $scope.restaurante =  {Id: $stateParams.id};
  //  var cliente;
  // $scope.add = function(myVar)
  //   {
  //     cliente = myVar;
  //     console.log(cliente);
  //   };
  //   var darude = cliente;
  //   console.log(darude);
  $scope.getAbertura = function(myVar){
    cliente = myVar;
    console.log(cliente);
    $http.get('http://10.21.0.137/20131011110061/api/abertura').
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
      var f = cliente;
      console.log(f);
      for(var i =0;i< length;i++){

        if(eae[i].Cliente== f){
          count++
          tabaco.push(eae[i]);

        }
      }
      console.log(count);
      console.log(tabaco);
      $scope.mesinha=tabaco[0].Cliente;



    });



  };

})

.controller('TabsCtrl',  ['$scope', '$stateParams', function($scope, $stateParams) {
  console.log($stateParams);
  $scope.restaurante =  {Id: $stateParams.id};
}])

.controller('listaRestaurantesCtrl', function($scope, $http , Data)
{


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

  // When button is clicked, the popup will be shown...
  $scope.showPopup = function() {
    $scope.data = {}

    // Custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type = "text" ng-model = "data.model">',
      title: 'Confirme',
      subTitle: 'Tem certeza que deseja adicionar esse item ao carrinho?',
      scope: $scope,

      buttons: [
        { text: 'Cancelar' }, {
          text: '<b>Sim</b>',
          type: 'button-positive',
          onTap: function(e) {
            //Adicionar código para inserir no carrinho
            if (!$scope.data.model) {
              //don't allow the user to close unless he enters model...
              e.preventDefault();
            } else {
              return $scope.data.model;
            }
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  };


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
  //$http.get('http://10.21.0.137/20131011110061/api/cardapio').


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
  var config = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  }
  $scope.quants = [1,2,3,4,5,6,7,8];
  $scope.search=function(item)
  {

  var quantidade = item;
  }
  var nsei ={Id3: $stateParams.Id3};
  var aff = {
    //Hora = 'PT10H',
    Id: 3,
    Pedido_Id: 1,
    Produto_Id: 3,
    // Quantidade: parseInt(quantidade,10),//fazer
    Situacao: 1
  };
  /*$scope.itempedido ={
  //Hora = 'PT10H',
  Id = 3,
  Pedido_Id = 1,
  Produto_Id = nsei.Id3,
  Quantidade = 3,//fazer
  Situacao = 1
};*/
var data = aff;
console.log(data);


// AQUI DEU CERTO PORRA
$scope.postItem = function(){
  $http.post('http://10.21.0.137/20131011110061/api/itempedido', data, config)
  .success(function(data,status,headers,config){
    $scope.PostDataResponse = data;
  })
  .error(function (data, status, header, config) {
    $scope.ResponseDetails = "Data: " + data +
    "<hr />status: " + status +
    "<hr />headers: " + header +
    "<hr />config: " + config;
  });

};

})

.controller('pedidosDefaultPageCtrl',function ($scope, $http) {
  $http.get('http://10.21.0.137/20131011110061/api/itempedidoproduto').
  then(
    function(response) {
      var eae = $scope.itempedidoprodutos = response.data;
      var name = window.location.href;
      console.log("Eae");
    }



    // function(response){
    // }

  )
  $scope.remove = function($index){

    $scope.itempedidoprodutos.splice($index, 1);
  }


});

angular.module('mySuperApp', [])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };
});









// $http.get('http://10.21.0.137/20131011110061/api/cardapio').
// then(function(response) {
//   var total = 0;
//   angular.forEach($scope.cardapios.Id, function(cardapio) {
//       total += cardapios.Id;
//   });

//   $scope.delete = function(idx)
//   {
//     var delCardapio = $scope.cardapios[idx];
//
//    API.DeleteCardapio({id: delCardapio.id}, function(sucess){
//      $scope.cardapios.splice(idx, 1)
//    });
//  };
// $http.get('http://10.21.0.137/20131011110061/api/cardapio').
// then(function(response) {
// var total = 0;
// angular.forEach($scope.cardapios.Id, function(cardapio) {
//     total += cardapios.Id;
//     })
//     return total;
//     console.log("Rabo");
// }
//http://stackoverflow.com/questions/22731145/calculating-sum-of-repeated-elements-in-angularjs-ng-repeat



// });
