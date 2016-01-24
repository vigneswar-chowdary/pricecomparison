bookApp.controller('isbn',function($scope,$http){
$scope.search=function(){
var url="http://www.pricetree.com/dev/api.ashx?isbn="+$scope.isbn_number+"&apikey=7770AD31-382F-4D32-8C36-3743C0271699&apikey=7770AD31-382F-4D32-8C36-3743C0271699";
$http.get(url).then(function(response){
                                                      $scope.results=response;                                                                                                                                   
                                                });
                                                }
                })
                                             
