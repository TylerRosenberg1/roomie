"use strict";

(function() {
  angular
  .module("roomietrack")
  .controller("userShowController", [
    "userFactory",
    "requestFactory",
    "$stateParams",
    "$location",
    userShowControllerFunction
  ])


  function userShowControllerFunction(userFactory, requestFactory, $stateParams, $location) {
    var vm = this;
    userFactory.show().then(function(response) {
      vm.name = response.data.name;
      vm.username = response.data.username;
      vm.roommates = response.data.roommates;
    }, function error(error) {
        $location.path("/404")
    })
    vm.createRequest = function(requestRecieverId) {
      requestFactory.create(vm.newRequest, requestRecieverId).then(function(response) {

      })
    }
    vm.acceptRequest = function(roommateId, requestId) {
      requestFactory.update(roommateId, requestId).then(function(response) {

      });
      for (var i = 0; i < vm.roommates.length; i++) {
        if (vm.roommates[i]._id._id == roommateId) {
          for (var k = 0; k < vm.roommates[i].requests.length; k++) {
            if (vm.roommates[i].requests[k]._id == requestId) {
              vm.roommates[i].balance -= vm.roommates[i].requests[k].amount;
              vm.roommates[i].requests.splice(k, 1);
            }
          }
        }
      }

    }
    vm.deleteRequest = function(roommateId, requestId) {
      requestFactory.destroy(roommateId, requestId).then(function(response) {

      })
    }
  }
}())
