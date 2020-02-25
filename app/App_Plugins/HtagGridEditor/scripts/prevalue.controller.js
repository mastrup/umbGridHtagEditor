﻿angular.module("umbraco").controller("Our.Umbraco.HtagEditor.PreValueController", function ($scope, $http, $routeParams, assetsService, contentResource, notificationsService) {

    $scope.sizeOptions =  $scope.model.config && $scope.model.config.options && $scope.model.config.options.size && $scope.model.config.options.size.options ? config.options.size.options : "h1,h2,h3,h4,h5,h6".split(",");
    $scope.alignOptions = $scope.model.config && $scope.model.config.options && $scope.model.config.options.align && $scope.model.config.options.align.options ? config.options.align.options : "left,center,right".split(",");

    if (!$scope.model.value.size.options)
        $scope.model.value.size.options = $scope.sizeOptions.slice(0);

    if (!$scope.model.value.align.options)
        $scope.model.value.align.options = $scope.alignOptions.slice(0);

    $scope.toggleAlign = function(align){
        toggleOption($scope.model.value.align.options, align, $scope.model.value.align.default);
    }

    $scope.defaultAlign = function(align){
        var item = $scope.model.value.align;
        item.default = align;
        if(!isSelected(item.options, align))
            toggleOption(item.options, align);
    }

    $scope.defaultSize = function(size){
        var item = $scope.model.value.size;
        item.default = size;
        if(!isSelected(item.options, size))
            toggleOption(item.options, size);
    }

    $scope.toggleSize = function(size){
        toggleOption($scope.model.value.size.options, size, $scope.model.value.size.default);
    }

    function isSelected(values, value) {
        return values.indexOf(value) !== -1;
    }

    function toggleOption(selected, valueToToggle, currentDefault) {
        var index = selected.indexOf(valueToToggle);
        if (index !== -1) {
            if (valueToToggle !== currentDefault)
                selected.splice(index, 1); 
        }
        else {
            selected.push(valueToToggle);
        }
    }
});