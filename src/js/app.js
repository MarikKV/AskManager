var askManager = angular.module('askManager', []);
//то я покишо просто бавлюсь вчусь звісна річ треба буде переробляти
askManager.controller('AppController',  function PhoneListController($scope){
    $scope.showSignIn = 'v-v';
    $scope.showSignUp = 'v-h bounceOutLeft';
    $scope.activeSignIn = 'active';
    $scope.activeSignUp = '';
    $scope.changeShowSignComponents = () =>{
        if($scope.showSignIn === 'v-v'){
            $scope.showSignIn = 'v-h bounceOutLeft';
            $scope.showSignUp = 'v-v';
            $scope.activeSignIn = '';
            $scope.activeSignUp = 'active';
        } else{
            $scope.activeSignIn = 'active';
            $scope.activeSignUp = '';
            $scope.showSignIn = 'v-v';
            $scope.showSignUp = 'v-h bounceOutLeft';
        }
    }
});