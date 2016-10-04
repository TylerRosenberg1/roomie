"use strict";

(function() {
  angular
  .module("roomtrack")
  .controller("requestIndexController", [
    "roommateRequestFactory",
    requestIndexControllerFunction
  ])

  function requestIndexControllerFunction(roommateRequestFactory) {
    var vm = this;
    roommateRequestFactory.index().then(function(response) {
      vm.roommateRequsters = response.data;
    })
  }
}())
