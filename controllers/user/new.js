"use strict";

(function() {
  angular
  .module("roomtrack")
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
          vm.user = response.data;
          $window.location.href = `/#/user/${vm.user._id}`
        }
      }, function error(error) {
        
      })
    }
  }
}())
