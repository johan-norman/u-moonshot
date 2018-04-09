'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _geometryHelpers = require('./helpers/geometryHelpers');

var _SVG = require('./elements/SVG');

var _Dragger = require('./components/Dragger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircularSlider = exports.CircularSlider = function (_Component) {
  _inherits(CircularSlider, _Component);

  function CircularSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CircularSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CircularSlider.__proto__ || Object.getPrototypeOf(CircularSlider)).call.apply(_ref, [this].concat(args))), _this), _this.padding = 20, _this.center = {
      x: _this.props.r + _this.padding,
      y: _this.props.r + _this.padding
    }, _this.size = 2 * (_this.props.r + _this.padding), _this.absoluteContainerPosition = function () {
      if (!_this.containerNode) {
        return null;
      };

      var _this$containerNode$g = _this.containerNode.getBoundingClientRect(),
          x = _this$containerNode$g.left,
          y = _this$containerNode$g.top;

      return { x: x, y: y };
    }, _this.handleDrag = function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y;

      var _polarToCartesian = (0, _geometryHelpers.polarToCartesian)(0, 0, _this.props.r, _this.props.angle),
          fiducialX = _polarToCartesian.x,
          fiducialY = _polarToCartesian.y;

      var deltaTheta = (0, _geometryHelpers.calcAngleDiff)(x, y, fiducialX, -fiducialY);
      var newAngle = _this.props.angle + deltaTheta;
      _this.props.onMove(newAngle);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CircularSlider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          color = _props.color,
          arcStart = _props.arcStart,
          arcEnd = _props.arcEnd,
          r = _props.r,
          angle = _props.angle;

      var relCenterPos = this.center;
      var relPosition = (0, _geometryHelpers.polarToCartesian)(relCenterPos.x, relCenterPos.y, r, angle);
      var radialPosition = (0, _geometryHelpers.polarToCartesian)(0, 0, r, angle);
      return _react2.default.createElement(
        _SVG.SquareSVG,
        {
          innerRef: function innerRef(x) {
            _this2.containerNode = x;
          },
          size: this.size
        },
        this.props.showNeedle ? _react2.default.createElement('line', {
          stroke: color,
          strokeWidth: '1',
          x1: relCenterPos.x,
          x2: relPosition.x,
          y1: relCenterPos.y,
          y2: relPosition.y
        }) : null,
        this.props.showArc ? _react2.default.createElement('path', {
          d: (0, _geometryHelpers.circularArc)(relCenterPos.x, relCenterPos.y, arcStart, arcEnd, r),
          fill: 'transparent',
          stroke: color
        }) : null,
        _react2.default.createElement(_Dragger.Dragger, {
          absoluteContainerFunc: this.absoluteContainerPosition,
          color: color,
          onMove: this.handleDrag,
          radialPosition: radialPosition,
          relCenterPos: relCenterPos,
          trueRadius: this.padding,
          visibleRadius: 8
        })
      );
    }
  }]);

  return CircularSlider;
}(_react.Component);

CircularSlider.propTypes = {
  angle: _propTypes2.default.number,
  arcEnd: _propTypes2.default.number,
  arcStart: _propTypes2.default.number,
  color: _propTypes2.default.string,
  onMove: _propTypes2.default.func,
  r: _propTypes2.default.number,
  showArc: _propTypes2.default.bool,
  showNeedle: _propTypes2.default.bool
};

CircularSlider.defaultProps = {
  angle: 200,
  arcEnd: 360,
  arcStart: 180,
  color: "darkseagreen",
  onMove: function onMove() {},
  r: 100,
  showArc: false,
  showNeedle: true
};