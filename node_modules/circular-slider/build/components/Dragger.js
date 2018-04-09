'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dragger = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _eventHelpers = require('../helpers/eventHelpers');

var _SVG = require('../elements/SVG');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dragger = exports.Dragger = function (_Component) {
  _inherits(Dragger, _Component);

  function Dragger() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dragger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dragger.__proto__ || Object.getPrototypeOf(Dragger)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pressed: false
    }, _this.moveListenerArgs = function (isTouch) {
      return [isTouch ? 'touchmove' : 'mousemove', isTouch ? _this.handleTouchMove : _this.handleMouseMove, { passive: false }];
    }, _this.endListenerArgs = function (isTouch) {
      return [isTouch ? 'touchend' : 'mouseup', isTouch ? _this.handleTouchEnd : _this.handleMouseUp, { passive: false }];
    }, _this.addEventListeners = function (isTouch) {
      var _document, _document2;

      _this.setState({ pressed: true });
      (_document = document).addEventListener.apply(_document, _toConsumableArray(_this.moveListenerArgs(isTouch)));
      (_document2 = document).addEventListener.apply(_document2, _toConsumableArray(_this.endListenerArgs(isTouch)));
    }, _this.removeEventListeners = function (isTouch) {
      var _document3, _document4;

      _this.setState({ pressed: false });
      (_document3 = document).removeEventListener.apply(_document3, _toConsumableArray(_this.moveListenerArgs(isTouch)));
      (_document4 = document).removeEventListener.apply(_document4, _toConsumableArray(_this.endListenerArgs(isTouch)));
    }, _this.handleMouseDown = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      _this.addEventListeners(false);
    }, _this.handleTouchStart = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      _this.addEventListeners(true);
    }, _this.handleMouseUp = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      _this.removeEventListeners(false);
    }, _this.handleTouchEnd = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      _this.removeEventListeners(true);
    }, _this.handleMouseMove = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      var radialPos = _this.calcRadialPos((0, _eventHelpers.absMousePos)(e));
      _this.props.onMove(radialPos);
    }, _this.handleTouchMove = function (e) {
      (0, _eventHelpers.pauseEvent)(e);
      var radialPos = _this.calcRadialPos((0, _eventHelpers.absTouchPos)(e));
      _this.props.onMove(radialPos);
    }, _this.calcRadialPos = function (_ref2) {
      var pointerX = _ref2.x,
          pointerY = _ref2.y;

      var _this$props$absoluteC = _this.props.absoluteContainerFunc(),
          containerX = _this$props$absoluteC.x,
          containerY = _this$props$absoluteC.y;

      var relCenterPos = _this.props.relCenterPos;

      return {
        x: pointerX - containerX - relCenterPos.x,
        y: -(pointerY - containerY - relCenterPos.y)
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dragger, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          relCenterPos = _props.relCenterPos,
          radialPosition = _props.radialPosition,
          trueRadius = _props.trueRadius,
          visibleRadius = _props.visibleRadius,
          color = _props.color;

      return _react2.default.createElement(_SVG.CircularHandle, {
        color: color,
        cx: relCenterPos.x + radialPosition.x,
        cy: relCenterPos.y + radialPosition.y,
        isPressed: this.state.pressed,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        trueRadius: trueRadius,
        visibleRadius: visibleRadius
      });
    }
  }]);

  return Dragger;
}(_react.Component);

Dragger.propTypes = {
  absoluteContainerFunc: _propTypes2.default.func.isRequired,
  color: _propTypes2.default.string.isRequired,
  onMove: _propTypes2.default.func.isRequired,
  radialPosition: _propTypes2.default.object.isRequired,
  relCenterPos: _propTypes2.default.object.isRequired,
  trueRadius: _propTypes2.default.number.isRequired,
  visibleRadius: _propTypes2.default.number.isRequired
};