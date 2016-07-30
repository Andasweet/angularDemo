var myApp = angular.module('myApp', ['ui.router']);

  myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('hello', {
          url: '/hello',
          views: {
            'main-view': {
              templateUrl: 'templates/hello.html'
            }
          }
      })
      .state('bookList',{
        url:'/bookList',
        views: {
          'main-view': {
            templateUrl: 'templates/bookList.html'
          }
        }
      })

    $urlRouterProvider.otherwise('hello');

  }]);

myApp.directive('hello', function() {
  return {
    restrict: 'AEMC',
    template: '<div>Hi everyone!</div>',
    replace: true
  };
})

myApp.run(function($templateCache) {
  $templateCache.put('hello.html','<div>Hi everyone!</div>');
});
myApp.directive('hello',function($templateCache) {
  return {
    restrict: 'AEMC',
    template: $templateCache.get('hello.html'),
    replace: true
  }
})
//
//
//离线群事件
        // var eventArray = JSON.parse(localStorage.getItem('offLineGroupEvent')) || [],
        //     eventArrayLen = eventArray.length;
        // if (eventArrayLen) {
        //     for (var i = 0; i < eventArrayLen; i++) {
        //         (function(json) {
        //             dealGroupEvent(json);
        //         })(eventArray[i]);
        //     }
        // }
        // localStorage.removeItem('offLineGroupEvent');


  // myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
  //   $stateProvider
  //     .state('/hello', {
  //       url:'/hello',
  //       views: {
  //         templateUrl: '../templates/hello.html',
  //         controller: 'bookCtrl'
  //       }
  //     })
  //     .state('list', {
  //       url:'/list',
  //       views:{
  //         templateUrl: '第二个页面',
  //         controller: 'BookListCtrl'
  //       }
  //     })
  //     $urlRouterProvider.otherwise("/hello");
  // }]);

//   myApp.run(function($templateCache){

//     $templateCache.put('hello.html',"<div>hello</div>")

//   })



// var app = angular.module('test',[]);

// app.controller('ParentController',function($scope){
//     $scope.person = {'greeted':false};
// });

// app.controller('ChildController',function($scope){
//     $scope.sayHello = function(){
//         $scope.person.name = 'Ari Lerner';
//     };
// })

// angular.module('myApp',[])
// .run(function ($rootScope) {
//     $rootScope.name="world";
// })


// angular.module('myApp',[])
// .controller('MyController',function  ($scope,$parse) {
//     $scope.$watch('expr',function(newVal,oldVal,scope) {
//         if(newVal !==oldVal) {
//             var parseFun = $parse(newVal);
//             $scope.parseValue = parseFun(scope);
//         }
//     })

// })
