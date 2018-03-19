'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complexStyle = exports.themeGet = exports.pseudoStyle = exports.responsiveStyle = exports.style = exports.getValue = exports.merge = exports.media = exports.dec = exports.breaks = exports.fallbackTheme = exports.mq = exports.get = exports.arr = exports.neg = exports.px = exports.num = exports.is = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  responsive: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),
  numberOrString: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var is = exports.is = function is(n) {
  return n !== undefined && n !== null;
};
var num = exports.num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};
var px = exports.px = function px(n) {
  return num(n) ? n + 'px' : n;
};
var neg = exports.neg = function neg(n) {
  return n < 0;
};
var arr = exports.arr = function arr(n) {
  return Array.isArray(n) ? n : [n];
};

var get = exports.get = function get(obj, path, fallback) {
  return path.split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj) || fallback;
};

var mq = exports.mq = function mq(n) {
  return '@media screen and (min-width: ' + px(n) + ')';
};

var fallbackTheme = exports.fallbackTheme = function fallbackTheme(props) {
  return (0, _extends3.default)({}, _constants2.default, get(props, 'theme'));
};

var breaks = exports.breaks = function breaks(props) {
  return [null].concat((0, _toConsumableArray3.default)(get(props, 'theme.breakpoints', _constants.breakpoints).map(mq)));
};

var dec = exports.dec = function dec(props) {
  return function (val) {
    return arr(props).reduce(function (acc, prop) {
      return acc[prop] = val, acc;
    }, {});
  };
};

var media = exports.media = function media(bp) {
  return function (d, i) {
    return is(d) ? bp[i] ? (0, _defineProperty3.default)({}, bp[i], d) : d : null;
  };
};

var merge = exports.merge = function merge(a, b) {
  return (0, _assign2.default)({}, a, b, (0, _keys2.default)(b).reduce(function (obj, key) {
    return (0, _assign2.default)(obj, (0, _defineProperty3.default)({}, key, a[key] !== null && (0, _typeof3.default)(a[key]) === 'object' ? merge(a[key], b[key]) : b[key]));
  }, {}));
};

var getValue = exports.getValue = function getValue(val, getter, toPx) {
  return typeof getter === 'function' ? getter(val) : toPx ? px(val) : val;
};

var style = exports.style = function style(_ref2) {
  var prop = _ref2.prop,
      cssProperty = _ref2.cssProperty,
      alias = _ref2.alias,
      key = _ref2.key,
      getter = _ref2.getter,
      numberToPx = _ref2.numberToPx;

  var fn = function fn(props) {
    cssProperty = cssProperty || prop;
    var n = is(props[prop]) ? props[prop] : props[alias];
    var th = fallbackTheme(props);
    if (!is(n)) return null;
    var value = getValue(get(th, [key, n].join('.'), n), getter, numberToPx);

    return (0, _defineProperty3.default)({}, cssProperty, value);
  };
  fn.propTypes = (0, _defineProperty3.default)({}, prop, propTypes.numberOrString);
  if (alias) {
    fn.propTypes[alias] = propTypes.numberOrString;
  }
  return fn;
};

var responsiveStyle = exports.responsiveStyle = function responsiveStyle(_ref4) {
  var prop = _ref4.prop,
      cssProperty = _ref4.cssProperty,
      alias = _ref4.alias,
      key = _ref4.key,
      getter = _ref4.getter,
      numberToPx = _ref4.numberToPx;

  var fn = function fn(props) {
    cssProperty = cssProperty || prop;
    var n = is(props[prop]) ? props[prop] : props[alias];
    if (!is(n)) return null;

    var bp = breaks(props);
    var th = fallbackTheme(props);
    var sx = function sx(n) {
      return getValue(get(th, [key || prop, n].join('.'), n), getter, numberToPx);
    };

    if (!Array.isArray(n)) {
      return (0, _defineProperty3.default)({}, cssProperty, sx(n));
    }

    var val = arr(n);
    return val.map(sx).map(dec(cssProperty)).map(media(bp)).reduce(merge, {});
  };

  // add propTypes object to returned function
  fn.propTypes = (0, _defineProperty3.default)({}, prop, propTypes.responsive);
  if (alias) {
    fn.propTypes[alias] = propTypes.responsive;
  }

  return fn;
};

var pseudoStyle = exports.pseudoStyle = function pseudoStyle(_ref6) {
  var prop = _ref6.prop,
      alias = _ref6.alias,
      pseudoclass = _ref6.pseudoclass,
      _ref6$keys = _ref6.keys,
      keys = _ref6$keys === undefined ? {} : _ref6$keys,
      _ref6$getters = _ref6.getters,
      getters = _ref6$getters === undefined ? {} : _ref6$getters,
      _ref6$numberToPx = _ref6.numberToPx,
      numberToPx = _ref6$numberToPx === undefined ? {} : _ref6$numberToPx;

  var fn = function fn(props) {
    var style = props[prop] || props[alias];
    pseudoclass = pseudoclass || prop;
    var th = fallbackTheme(props);
    for (var key in style) {
      var toPx = numberToPx[key];
      if (!keys[key] && !getters[key] && !toPx) continue;
      var themeKey = [keys[key], style[key]].join('.');
      style[key] = getValue(get(th, themeKey, style[key]), getters[key], toPx);
    }

    return (0, _defineProperty3.default)({}, '&:' + pseudoclass, style);
  };
  fn.propTypes = (0, _defineProperty3.default)({}, prop, _propTypes2.default.object);
  return fn;
};

// todo: consider alternative names
var themeGet = exports.themeGet = function themeGet(keys, fallback) {
  return function (props) {
    return get(props.theme, keys, fallback);
  };
};

var getBooleans = function getBooleans(props) {
  var bools = [];
  for (var key in props) {
    if (props[key] !== true) continue;
    bools.push(key);
  }
  return bools;
};

var complexStyle = exports.complexStyle = function complexStyle(_ref8) {
  var prop = _ref8.prop,
      key = _ref8.key,
      alias = _ref8.alias;

  var fn = function fn(props) {
    var style = get(props, ['theme', key, get(props, prop, props[alias])].join('.'), {});
    var bools = getBooleans(props);
    bools.forEach(function (name) {
      style = (0, _extends3.default)({}, style, get(props, ['theme', key, name].join('.'), {}));
    });
    return style;
  };

  fn.propTypes = (0, _defineProperty3.default)({}, prop, _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]));

  if (alias) {
    fn.propTypes[alias] = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);
  }

  return fn;
};