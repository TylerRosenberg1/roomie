"use strict";

(function() {
  angular
  .module("roomietrack")
  .controller("userNewController", [
    "userFactory",
    "$window",
    userNewControllerFunction
  ])

  function userNewControllerFunction(userFactory, $window) {
    var vm = this;
    vm.createUser = function() {
      userFactory.create(vm.newUser).then(function success(response) {
        if (response.data.errors) {
          vm.error = response.data.errors
        } else {
          $window.sessionStorage.token = response.data.token;
          $window.location.href = "/#/user/dashboard"
        }
      }, function error(error) {

      })
    }
  }
}())
