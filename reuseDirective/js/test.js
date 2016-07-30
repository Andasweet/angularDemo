var myApp = angular.module('myApp', []);
myApp.controller('MyCtrl',['$scope',function($scope) {
  $scope.loadData = function() {
    console.log('加载数据中...');
  }
}]);
myApp.controller('MyCtrl2',['$scope',function($scope) {
  $scope.loadData2 = function() {
    console.log('加载数据中...22222');
  }
}]);

myApp.directive("loader", function() {
  return {
    restrict:"AE",
    link:function(scope,element,attr) {
      element.bind('mouseenter', function(event) {
        //scope.loadData();
        //scope.$apply("loadData()");
        //注意这里的坑，howToLoad会被转换成小写的howtoload
        scope.$apply(attr.howtoload);
      });
    }
  }
})