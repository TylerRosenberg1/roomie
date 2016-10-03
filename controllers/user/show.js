"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("userShowController", [
    "userFactory",
    "requestFactory",
    "$stateParams",
    userShowControllerFunction
  ])

  function userShowControllerFunction(userFactory, requestFactory, $stateParams) {
    var vm = this;
    userFactory.show($stateParams.id).then(function(response) {
      console.log(response);
      vm.name = response.data.name;
      vm.roommates = response.data.roommates;
    })
    vm.createRequest = function(requestRecieverId) {
      requestFactory.create(vm.newRequest, requestRecieverId).then(function(response) {
        console.log(response);
      })
    }
    vm.acceptRequest = function(roommateId, requestId) {
      requestFactory.update(roommateId, requestId).then(function(response) {
        console.log(response);
      })
    }
    vm.deleteRequest = function(roommateId, requestId) {
      requestFactory.destroy(roommateId, requestId).then(function(response) {
        console.log(response);
      })
    }
  }
}())
