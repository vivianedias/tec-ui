import React$1 from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes$1 from '../IconPropTypes.js';

function IconPlus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties$1(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React$1.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.3,
    d: "M12 5a.566.566 0 00-.566.566v12.869a.566.566 0 001.132 0V5.565A.566.566 0 0012 5z"
  }), /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.3,
    d: "M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
  }));
}

IconPlus.propTypes = IconPropTypes$1;

export default IconPlus;
//# sourceMappingURL=IconPlus.js.map
