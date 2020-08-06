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

function IconZoomOut(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M15.73 6.84A6.244 6.244 0 0011.284 5 6.244 6.244 0 006.84 6.84 6.244 6.244 0 005 11.286c0 1.679.654 3.257 1.84 4.444a6.244 6.244 0 004.445 1.841 6.244 6.244 0 004.444-1.84 6.244 6.244 0 001.841-4.445 6.244 6.244 0 00-1.84-4.444zm-4.445 9.6a5.16 5.16 0 01-5.154-5.155 5.16 5.16 0 015.154-5.154 5.16 5.16 0 015.154 5.154 5.16 5.16 0 01-5.154 5.154z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M18.834 18.035l-3.11-3.11a.566.566 0 00-.8.8l3.11 3.11a.564.564 0 00.8 0 .566.566 0 000-.8zM13.43 10.72H9.14a.566.566 0 000 1.13h4.29a.565.565 0 100-1.13z"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconZoomOut.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconZoomOut;
//# sourceMappingURL=IconZoomOut.js.map
