"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("roommateRequestIndexController", [
    "roommateFactory",
    roommateRequestIndexControllerFunction
  ])

  function roommateRequestIndexControllerFunction(roommateFactory) {
    var vm = this;
    roommateFactory.index().then(function(response) {
      console.log(response);
      vm.roommateRequesters = response.data;
    })
    vm.acceptRequest = function(requesterId) {
      roommateFactory.update(requesterId).then(function(response) {
        console.log(response);
      })
    }
    vm.destroyRequest = function(requesterId) {
      roommateFactory.destroy(requesterId).then(function(response) {
        console.log(response);
      })
    }
  }
}())
