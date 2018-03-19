'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.space = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REG = /^[mp][trblxy]?$/;

var space = exports.space = function space(props) {
  var keys = (0, _keys2.default)(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  var bp = (0, _util.breaks)(props);
  var sc = (0, _util.get)(props, 'theme.space', _constants2.default.space);

  return keys.map(function (key) {
    var val = props[key];
    var p = getProperties(key);

    if (!Array.isArray(val)) {
      return p.reduce(function (a, b) {
        return (0, _assign2.default)(a, (0, _defineProperty3.default)({}, b, mx(sc)(val)));
      }, {});
    }

    return (0, _util.arr)(val).map(mx(sc)).map((0, _util.dec)(p)).map((0, _util.media)(bp)).reduce(_util.merge, {});
  }).reduce(_util.merge, {});
};

var mx = function mx(scale) {
  return function (n) {
    if (!(0, _util.num)(n)) {
      return n;
    }

    var value = scale[Math.abs(n)] || Math.abs(n);
    if (!(0, _util.num)(value)) {
      return value;
    }

    return (0, _util.px)(value * ((0, _util.neg)(n) ? -1 : 1));
  };
};

var getProperties = function getProperties(key) {
  var _key$split = key.split(''),
      _key$split2 = (0, _slicedToArray3.default)(_key$split, 2),
      a = _key$split2[0],
      b = _key$split2[1];

  var prop = properties[a];
  var dirs = directions[b] || [''];
  return dirs.map(function (dir) {
    return prop + dir;
  });
};

var properties = {
  m: 'margin',
  p: 'padding'
};

var directions = {
  t: ['Top'],
  r: ['Right'],
  b: ['Bottom'],
  l: ['Left'],
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};

var responsive = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]);

space.propTypes = {
  m: responsive,
  mt: responsive,
  mr: responsive,
  mb: responsive,
  ml: responsive,
  mx: responsive,
  my: responsive,
  p: responsive,
  pt: responsive,
  pr: responsive,
  pb: responsive,
  pl: responsive,
  px: responsive,
  py: responsive
};

exports.default = space;