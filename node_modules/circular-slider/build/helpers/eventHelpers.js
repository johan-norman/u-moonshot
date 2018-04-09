"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pauseEvent = exports.pauseEvent = function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
};

var absTouchPos = exports.absTouchPos = function absTouchPos(e) {
  return {
    x: e.touches[0].pageX - (window.scrollX || window.pageXOffset),
    y: e.touches[0].pageY - (window.scrollY || window.pageYOffset)
  };
};

var absMousePos = exports.absMousePos = function absMousePos(e) {
  return {
    x: e.pageX - (window.scrollX || window.pageXOffset),
    y: e.pageY - (window.scrollY || window.pageYOffset)
  };
};