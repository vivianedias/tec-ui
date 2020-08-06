'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconMaximize(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.434 5h-4.29a.566.566 0 000 1.131h3.725v3.724a.566.566 0 001.13 0v-4.29A.566.566 0 0018.435 5zM9.855 17.869H6.131v-3.724a.566.566 0 00-1.131 0v4.29c0 .312.253.565.565.565h4.29a.565.565 0 100-1.131z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.566.566 0 00.8.8l5.004-5.004a.566.566 0 000-.8zM10.97 13.03a.565.565 0 00-.8 0l-5.004 5.005a.566.566 0 00.8.8l5.004-5.005a.565.565 0 000-.8z"
  }));
}

IconMaximize.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMaximize;
//# sourceMappingURL=IconMaximize.js.map
