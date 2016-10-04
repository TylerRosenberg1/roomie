"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("userEditController", [
    "userFactory",
    userEditControllerFunction
  ])

  function userEditControllerFunction(userFactory) {
    var vm = this;
    userFactory.show().then(function(response) {
      vm.name = response.data.name;
    });
    vm.editUser = function() {
      userFactory.update(vm.user).then(function(response) {
        
      })
    }
  }
}())
