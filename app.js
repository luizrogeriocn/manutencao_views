var json = {"id":2,"description":"Apartamento Mobiliado, Ótima Localização","code":"np3202","mainPicture":"http://www.kevinandamanda.com/whatsnew/wp-content/uploads/2012/10/new-house-1.jpg","address":{"id":7,"cep":"59.151-250","street":"Avenida Abel Cabral","neighborhood":"Nova Parnamirim","city":"Parnamirim","state":"RN","number":"1914","complement":"","area":"Zona Sul","condominium_id":null,"created_at":"2014-10-29T00:09:17.700Z","updated_at":"2014-10-29T00:09:17.700Z"},"url":"http://potato-machine-111353.sae1.nitrousbox.com/real_states/2.json?locale=pt-BR"};

angular.module('app', [])
.controller('jubileus', function($scope) {
    $scope.json = json; 
});