app.controller('MainController', function($scope) {
 $scope.today = new Date();

 
$scope.apetizers=[

 {
 	"name":"Vegetable Spring Rolls",
 	"price":7
},
{
 	"name":"Chicken Spring Rolls",
 	"price":8
},
{
 	"name":"Deep Fried Prawns",
 	"price":10
},
{
 	"name":"Fried Chicken Wings",
 	"price":10
},
{
 	"name":"Samosa",
 	"price":6
}
 ];

 $scope.soups=[
 {
 	"name":"Sweeet Corn Chicken Soup",
 	"price":7.5
},
{
 	"name":"Sweeet Corn Shrimp Soup",
 	"price":6
},
{
 	"name":"Peking Soup",
 	"price":12
},
{
 	"name":"Seafood Soup",
 	"price":19
}
 ];

  $scope.rices=[
 {
 	"name":"Fried Rice With Egg",
 	"price":4
},
{
 	"name":"Fried Rice With Shrimps",
 	"price":6
},
{
 	"name":"Fried Rice With Chicken",
 	"price":5
},
{
 	"name":"Chicken Noodles",
 	"price":9
},
{
 	"name":"Shrimp Noodles",
 	"price":4.5
}
 ];
 $scope.chickens=[
 {
 	"name":"Chicken With Cashew Nuts",
 	"price":10
},
{
 	"name":"Chicken in Oyester Sauce",
 	"price":8
},
{
 	"name":"Chicken With Black Bean Sauce",
 	"price":5
},
{
 	"name":"Chicken With Mushroom",
 	"price":7.5
},
{
 	"name":"Chicken in Chilli Sauce",
 	"price":12
}
 ];
  $scope.seafoods=[
 {
 	"name":"Fish in Mushroom and Garlic Sauce",
 	"price":15
},
{
 	"name":"Prawns in Oyester Sauce",
 	"price":10.5
},
{
 	"name":"Prawns in Chilli and Garlic Sauce",
 	"price":11
},
{
 	"name":"Prawns in Sweeet and Sour Sauce",
 	"price":12
},
{
 	"name":"Fish in Chilli Sauce",
 	"price":8
}
 ]

 
});