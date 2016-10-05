"use strict";

(function() {
  angular
  .module("roomietrack")
  .controller("userIndexController", [
    "userFactory",
    "roommateFactory",
    userIndexControllerFunction
  ])

  function userIndexControllerFunction(userFactory, roommateFactory) {
    var vm = this;
    vm.search = function() {
      userFactory.search(vm.username).then(function(response) {
        if (response.data.error) {
          vm.error = response.data.error;
          vm.user = null;
        } else {
          vm.user = response.data;
          vm.error = null;
        }
      })
    }
    vm.createRoommate = function() {
      roommateFactory.create(vm.user._id).then(function(response) {
        //redirect to dashboard
      })
    }
  }
}())
