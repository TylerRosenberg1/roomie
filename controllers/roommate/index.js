"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("roommateRequestIndexController", [
    "roommateFactory",
    "$location",
    roommateRequestIndexControllerFunction
  ])

  function roommateRequestIndexControllerFunction(roommateFactory, $location) {
    var vm = this;
    roommateFactory.index().then(function(response) {
      vm.roommateRequesters = response.data;
    })
    vm.acceptRequest = function(requesterId) {
      roommateFactory.update(requesterId).then(function(response) {
        $window.location.href = "/#/user/dashboard"
      })
    }
    vm.destroyRequest = function(requesterId) {
      roommateFactory.destroy(requesterId).then(function(response) {
        $window.location.href = "/#/user/dashboard"

      })
    }
  }
}())
