var json;
var items = [
	{
		id: 1,
		description: "Casa em ponta negra",
		code: "A123",
		main_picture: "http://youveneverheardofjentidwell.files.wordpress.com/2012/03/house.jpg",
		address: {
			id: 3,
			cep: "59.040-226",
			street: "Rua dos bobos",
			neighborhood: "Bairro dos Bobos",
			city: "Natal",
			state: "RN",
			number: "0",
			complement: null,
			area: "Zona Sul",
			condominium_id: null,
			created_at: "2014-10-29T17:42:25.550Z",
			updated_at: "2014-10-29T17:42:25.550Z"
		},
		url: "http://localhost:3000/real_states/1.json?locale=pt-BR"
	},
	{
		id: 2,
		description: "Casa no Alecrim",
		code: "AACC2",
		main_picture: "http://cdn.freshome.com/wp-content/uploads/2013/04/Modern-A-House-17.jpg",
		address: {
			id: 4,
			cep: "59.040-226",
			street: "Rua dos Javas",
			neighborhood: "Bairro dos Bobos",
			city: "Natal",
			state: "RN",
			number: "0",
			complement: null,
			area: "Zona Leste",
			condominium_id: null,
			created_at: "2014-10-29T17:42:25.566Z",
			updated_at: "2014-10-29T17:42:25.566Z"
		},
		url: "http://localhost:3000/real_states/2.json?locale=pt-BR"
	},
	{
		id: 3,
		description: "Casa no Limbo",
		code: "LACC2",
		main_picture: "http://www.e-architect.co.uk/images/jpgs/sydney/northbridge-house-r210813-m2.jpg",
		address: {
			id: 5,
			cep: "59.040-226",
			street: "Rua dos Limbos",
			neighborhood: "Bairro dos Bobos",
			city: "Natal",
			state: "RN",
			number: "0",
			complement: null,
			area: "Zona Norte",
			condominium_id: null,
			created_at: "2014-10-29T17:42:25.572Z",
			updated_at: "2014-10-29T17:42:25.572Z"
		},
		url: "http://localhost:3000/real_states/3.json?locale=pt-BR"
	}
];

angular.module('app', [])
.controller('jubileus', function($scope, $http) {
	$http.get('http://localhost:3000/real_states.json')
				.success(function(data) {
					scope.json = data;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});

    $scope.json = (json || items); 
});