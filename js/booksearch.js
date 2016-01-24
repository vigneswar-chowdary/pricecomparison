angular.module('booksearch',[])
.controller('isbn',function($scope,$http){
var key=$scope.isbn-number;
$http.get("searchbooks.php").success(function(response)
$scope.results=response;
);
})