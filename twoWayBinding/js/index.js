var testApp = angular.module('testApp', ['ui.router']);
testApp.controller('testCtrl',['$scope', function($scope) {
  $scope.userInfo = {
    email : '1221@qq.com',
    password : '222222',
    autoLogin : true
  }
  $scope.getUserData = function() {
    console.log($scope.userInfo)
  };
  $scope.deleUserData = function() {
    this.userInfo = {};
  };
  $scope.setUserData = function() {
    this.userInfo = {
      email : '00000@qq.com',
      password : '11111111111111111',
      autoLogin : false
    }
  }

  $scope.color = 'red';
  $scope.setbgColor = function() {
    $scope.color = 'green';
  }
  $scope.isError = false;
  $scope.isWarning = false;
  $scope.showError = function() {
    $scope.messageText = 'This is an error.';
    $scope.isError = true;
    $scope.isWarning = false;
  }
  $scope.showWarning = function() {
    $scope.messageText = 'Just a warning,please carry on.';
    $scope.isError = false;
    $scope.isWarning = true;
  }
}]);

testApp.directive('hello', function() {
  return {
    restrict: 'AEMC',
    transclude: true,
    template: '<div>Hi everyone!<div ng-transclude></div></div>'
    // replace: true
    compile: function() {
      //自定义指令会自动执行的函数
    },
    link: function(scope, element, attrs) {
      //这里操作dom元素
    }
  };
})






  // var myApp = angular.module('myApp', ['ui.router']);

  // myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  //   $stateProvider
  //     .state('hello', {
  //         url: '/hello',
  //         views: {
  //           'main-view': {
  //             templateUrl: 'templates/hello.html'
  //           }
  //         }
  //     })
  //     .state('bookList',{
  //       url:'/bookList',
  //       views: {
  //         'main-view': {
  //           templateUrl: 'templates/bookList.html'
  //         }
  //       }
  //     })

  //   $urlRouterProvider.otherwise('/hello');

  // }]);
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
