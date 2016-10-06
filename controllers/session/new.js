"use strict";

(function() {
  angular
  .module("roomietrack")
  .controller("sessionNewController", [
    "$http",
    "$window",
    sessionNewControllerFunction
  ])

  function sessionNewControllerFunction($http, $window) {
    var vm = this;
    vm.createSession = function() {
      $http({
        method: 'POST',
        url: "https://roomietrack.herokuapp.com/session/new",
        data: {user: vm.user}
      }).then(function success(response) {
        if (response.data.error) {
          vm.error = response.data.error;
          delete $window.sessionStorage.token;
        } else {
          $window.sessionStorage.token = response.data.token;
          $window.location.href = "/roomietrack/#/user/dashboard"
        }
      }, function error(error) {
      })
    }
  }
}());
