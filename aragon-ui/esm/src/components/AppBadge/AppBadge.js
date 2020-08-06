import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { warn } from '../../utils/environment.js';
import { isAddress } from '../../utils/web3.js';
import { GU, RADIUS } from '../../style/constants.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import BadgeBase$1 from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType$1 from '../BadgeBase/BadgePopoverActionType.js';
import Tag$1 from '../Tag/Tag.js';
import AppBadgePopover$1 from './AppBadgePopover.js';
import iconDefaultSvg from './assets/app-default.svg.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-5gkmrm-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-5gkmrm-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled$1(Tag$1).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-5gkmrm-2"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var AppBadge = /*#__PURE__*/React$1.memo(function AppBadge(_ref) {
  var appAddress = _ref.appAddress,
      badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      iconSrc = _ref.iconSrc,
      identifier = _ref.identifier,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      props = objectWithoutProperties$1(_ref, ["appAddress", "badgeOnly", "compact", "iconSrc", "identifier", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle"]);

  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray$1(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var isValidAddress = isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    warn("AppBadge: provided invalid app address (".concat(appAddress, ")"));
  }

  popoverTitle = popoverTitle || /*#__PURE__*/React$1.createElement(_StyledDiv, null, /*#__PURE__*/React$1.createElement(_StyledSpan, null, label), identifier && /*#__PURE__*/React$1.createElement(_StyledTag, {
    mode: "identifier",
    _css: 1 * GU
  }, identifier));
  return /*#__PURE__*/React$1.createElement(BadgeBase$1, {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React$1.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var displayFallback = _ref2.displayFallback,
          exists = _ref2.exists;
      return /*#__PURE__*/React$1.createElement(Icon, {
        compact: compact,
        src: exists ? iconSrc : iconDefaultSvg
      });
    }),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, function (popoverDisabled) {
    return !popoverDisabled && appAddress && /*#__PURE__*/React$1.createElement(AppBadgePopover$1, {
      appAddress: appAddress,
      iconFallbackSrc: iconDefaultSvg,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
AppBadge.propTypes = {
  appAddress: propTypes.string,
  badgeOnly: propTypes.bool,
  compact: propTypes.bool,
  iconSrc: propTypes.string,
  identifier: propTypes.string,
  label: propTypes.string.isRequired,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  popoverAction: BadgePopoverActionType$1,
  popoverTitle: propTypes.node
};

var _StyledSpan2 = _styled$1("span").withConfig({
  displayName: "AppBadge___StyledSpan2",
  componentId: "sc-5gkmrm-3"
})(["flex-shrink:0;width:", "px;height:", "px;margin-right:", "px;border-radius:", ";background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Icon = function Icon(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties$1(_ref3, ["compact", "src"]);

  var size = (compact ? 2.25 : 3) * GU;
  return /*#__PURE__*/React$1.createElement(_StyledSpan2, _extends_1({}, props, {
    _css2: size,
    _css3: size,
    _css4: 1 * GU,
    _css5: compact ? "".concat(RADIUS, "px") : 0,
    _css6: src
  }));
};

Icon.propTypes = {
  compact: propTypes.bool,
  src: propTypes.string.isRequired
};

export default AppBadge;
//# sourceMappingURL=AppBadge.js.map
