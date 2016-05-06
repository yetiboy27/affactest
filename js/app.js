var myApp = angular.module('myApp', []);

myApp.controller('formController', ['$scope',
	function($scope) {

		$scope.step = 1;

        $scope.nextStep = function() {
            $scope.step++;
        }

        $scope.prevStep = function() {
            $scope.step--;
        }

        //$scope.areaInterest = '';
        $scope.$watch('areaInterest', function () {

	        if ($scope.areaInterest == 'Undecided') {
	        	$scope.stepTwoHeader = 'Undecided';
	    	}
	    	else if ($scope.areaInterest == 'Business') {
	        	$scope.stepTwoHeader = 'Business leaders have a bullish future ahead of them.';        
	        }
	        else if ($scope.areaInterest == 'CIS') {
	        	$scope.stepTwoHeader = 'The tech industry is programmed for opportunity.';        
	        }
	        else if ($scope.areaInterest == 'Education') {
	        	$scope.stepTwoHeader = 'Educators have a bright future ahead of them.';        
	        }
	        else if ($scope.areaInterest == 'Healthcare') {
	        	$scope.stepTwoHeader = 'Health care\'s prognosis is full of opportunity.';        
	        }
	        else if ($scope.areaInterest == 'STEM') {
	        	$scope.stepTwoHeader = 'Educators have a bright future ahead of them.';        
	        }
	        else if ($scope.areaInterest == 'HSS') {
	        	$scope.stepTwoHeader = 'Community involvement and leadership begins with understanding.';        
	        }
	        else{
	        	$scope.stepTwoHeader = 'Pick Something';

	        }
	    });
        



	}
]);
