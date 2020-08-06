'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
var defineProperty$1 = require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
require('styled-components');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./components.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./FocusVisible.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var Checkbox = require('./Checkbox.js');
var RadioGroup = require('./RadioGroup.js');

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
var KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

var RadioButton = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf.inherits(RadioButton, _React$PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    getPrototypeOf.classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "_element", /*#__PURE__*/React__default.createRef());

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          selectPrev = _this$props.selectPrev,
          selectNext = _this$props.selectNext;

      if (KEYS_PREV.includes(event.key)) {
        selectPrev();
        event.preventDefault();
      }

      if (KEYS_NEXT.includes(event.key)) {
        selectNext();
        event.preventDefault();
      }
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleChange", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          id = _this$props2.id;

      if (onChange) {
        onChange(id);
      }
    });

    return _this;
  }

  getPrototypeOf.createClass(RadioButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          addRadio = _this$props3.addRadio,
          id = _this$props3.id;

      if (addRadio && id !== null) {
        addRadio(id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props4 = this.props,
          removeRadio = _this$props4.removeRadio,
          id = _this$props4.id;

      if (removeRadio && id !== null) {
        removeRadio(id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var checked = this.props.checked;

      if (checked && !prevProps.checked) {
        this._element.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          checked = _this$props5.checked,
          disabled = _this$props5.disabled,
          id = _this$props5.id,
          onChange = _this$props5.onChange,
          tabIndex = _this$props5.tabIndex,
          props = objectWithoutProperties.objectWithoutProperties(_this$props5, ["checked", "disabled", "id", "onChange", "tabIndex"]);

      return /*#__PURE__*/React__default.createElement(Checkbox.default, _extends$1._extends_1({
        ref: this._element,
        checked: checked,
        disabled: disabled,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        tabIndex: tabIndex,
        variant: "radio"
      }, props));
    }
  }]);

  return RadioButton;
}(React__default.PureComponent);

defineProperty$1.defineProperty(RadioButton, "propTypes", {
  addRadio: index.propTypes.func,
  checked: index.propTypes.bool,
  disabled: index.propTypes.bool,
  id: index.propTypes.oneOfType([index.propTypes.string, index.propTypes.number]),
  onChange: index.propTypes.func,
  removeRadio: index.propTypes.func,
  selectNext: index.propTypes.func,
  selectPrev: index.propTypes.func,
  tabIndex: index.propTypes.string
});

defineProperty$1.defineProperty(RadioButton, "defaultProps", {
  addRadio: miscellaneous.noop,
  checked: false,
  disabled: false,
  id: null,
  onChange: undefined,
  // <Button /> need to detect if onChange has been set
  removeRadio: miscellaneous.noop,
  selectNext: miscellaneous.noop,
  selectPrev: miscellaneous.noop
});

var Radio = /*#__PURE__*/function (_React$PureComponent2) {
  getPrototypeOf.inherits(Radio, _React$PureComponent2);

  var _super2 = _createSuper(Radio);

  function Radio() {
    getPrototypeOf.classCallCheck(this, Radio);

    return _super2.apply(this, arguments);
  }

  getPrototypeOf.createClass(Radio, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/React__default.createElement(RadioGroup.RadioGroupConsumer, null, function (_ref) {
        var onChange = _ref.onChange,
            selected = _ref.selected,
            focusableId = _ref.focusableId,
            addRadio = _ref.addRadio,
            removeRadio = _ref.removeRadio,
            selectNext = _ref.selectNext,
            selectPrev = _ref.selectPrev;
        return /*#__PURE__*/React__default.createElement(RadioButton, _extends$1._extends_1({}, props, {
          onChange: props.onChange || onChange,
          checked: props.checked || props.id === selected && selected !== null,
          tabIndex: props.tabIndex || (focusableId === undefined || props.id === focusableId ? '0' : '-1'),
          addRadio: addRadio,
          removeRadio: removeRadio,
          selectPrev: selectPrev,
          selectNext: selectNext
        }));
      });
    }
  }]);

  return Radio;
}(React__default.PureComponent);

defineProperty$1.defineProperty(Radio, "propTypes", RadioButton.propTypes);

defineProperty$1.defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

exports.default = Radio;
//# sourceMappingURL=Radio.js.map
