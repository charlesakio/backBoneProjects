/*global require*/
require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore-min',
    mustache: '../bower_components/mustache/mustache'
  }
})

define(['app'], function (App) {
  App.initialize()
})
