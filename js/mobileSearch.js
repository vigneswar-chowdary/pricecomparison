mobileApp.controller('mobileSearch',function($scope,$http){
var url="http://api.pricecheckindia.com/feed/product/mobile_phones.json?user=vinaynan&key=TEKSACCFUBYRMSXY";
$http.get(url).then(function(response){
$scope.mobileresults=response;



});
})