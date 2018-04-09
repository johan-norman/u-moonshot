"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var polarToCartesian = exports.polarToCartesian = function polarToCartesian(offsetX, offsetY, radius, degrees) {
  var radians = degrees * Math.PI / 180.0;
  return {
    x: offsetX + radius * Math.cos(radians),
    y: offsetY + radius * Math.sin(radians)
  };
};

var calcAngleDiff = exports.calcAngleDiff = function calcAngleDiff(x1, y1, x2, y2) {
  return Math.atan2(x1 * y2 - y1 * x2, x1 * x2 + y1 * y2) * 180 / Math.PI;
};

var circularArc = exports.circularArc = function circularArc(centerX, centerY, minAngle, maxAngle, r) {
  var start = polarToCartesian(centerX, centerY, r, maxAngle);
  var end = polarToCartesian(centerX, centerY, r, minAngle);
  var largeArcFlag = maxAngle - minAngle <= 180 ? 0 : 1;
  return "M " + start.x + " " + start.y + " A " + r + " " + r + " 0 " + largeArcFlag + " 0 " + end.x + " " + end.y;
};