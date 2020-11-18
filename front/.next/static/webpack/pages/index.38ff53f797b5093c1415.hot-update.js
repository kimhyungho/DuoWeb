webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DetailPost.js":
/*!**********************************!*\
  !*** ./components/DetailPost.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\DetailPost.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 1px solid #000000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Frame = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Frame;

var DetailPost = function DetailPost() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      detailLolPost = _useSelector2.detailLolPost;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.comment;
  }),
      comments = _useSelector3.comments,
      loadCommentsLoading = _useSelector3.loadCommentsLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var onClose = function onClose() {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["detailLolPostOffAction"])());
    dispatch(Object(_reducers_comment__WEBPACK_IMPORTED_MODULE_7__["emptyCommentsRequestAction"])());
  };

  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      width: '100%'
    },
    onClick: onClose,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    style: {
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, detailLolPost.title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, detailLolPost.content), me.userId === detailLolPost.userId && __jsx(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 52
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 65
    }
  }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 84
    }
  }, "\uC0AD\uC81C")), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    loading: loadCommentsLoading,
    header: "".concat(comments ? comments.length : 0, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: comments,
    renderItem: function renderItem(item) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.nickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
};

_s(DetailPost, "LaNcPk02YZYcfu0fnN053+n23EQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c2 = DetailPost;
/* harmony default export */ __webpack_exports__["default"] = (DetailPost);

var _c, _c2;

$RefreshReg$(_c, "Frame");
$RefreshReg$(_c2, "DetailPost");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/unreachableException.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/lib/_util/unreachableException.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var UnreachableException = function UnreachableException(value) {
  (0, _classCallCheck2["default"])(this, UnreachableException);
  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

exports["default"] = UnreachableException;

/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _unreachableException = _interopRequireDefault(__webpack_require__(/*! ../_util/unreachableException */ "./node_modules/antd/lib/_util/unreachableException.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new _unreachableException["default"](size));
    }

    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context, legacyLocale) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        form = props.form,
        input = props.input,
        locale = props.locale,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
    var config = (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    var childNode = children; // Additional Form provider

    var validateMessages = {};

    if (locale && locale.Form && locale.Form.defaultValidateMessages) {
      validateMessages = locale.Form.defaultValidateMessages;
    }

    if (form && form.validateMessages) {
      validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
    }

    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
        validateMessages: validateMessages
      }, children);
    }

    return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
      value: config
    }, /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale || legacyLocale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode)));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return renderProvider(context, legacyLocale);
    });
  });
};
/** @private internal usage. do not use in your production */


ConfigProvider.ConfigContext = _context.ConfigContext;
var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = /*#__PURE__*/React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
      }, restProps), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), des && /*#__PURE__*/React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(_context["default"]);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || _default["default"][componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click sort by descend',
    triggerAsc: 'Click sort by ascend',
    cancelSort: 'Click to cancel sort'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} at least ${min} characters',
        max: '${label} up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} minimum value is ${min}',
        max: '${label} maximum value is ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/message/hooks/useMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseMessage;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _ = __webpack_require__(/*! .. */ "./node_modules/antd/lib/message/index.js");

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var target = args.key || (0, _.getKeyThenIncreaseKey)();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          prefixCls: mergedPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return (0, _.attachTypeApi)(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
exports.attachTypeApi = attachTypeApi;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _useMessage = _interopRequireDefault(__webpack_require__(/*! ./hooks/useMessage */ "./node_modules/antd/lib/message/hooks/useMessage.js"));

var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var prefixCls = args.prefixCls || localPrefixCls;

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      instance: messageInstance
    });
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;
    callback({
      prefixCls: prefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose
  };
}

function notice(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};

function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          closable = _this$props.closable,
          closeIcon = _this$props.closeIcon,
          style = _this$props.style,
          onClick = _this$props.onClick,
          children = _this$props.children,
          holder = _this$props.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});

      var node = _react.default.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), _react.default.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? _react.default.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || _react.default.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(_react.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5,
  style: {
    right: '50%'
  }
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3VucmVhY2hhYmxlRXhjZXB0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L3NpbXBsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaG9va3MvdXNlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaG9va3MvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9saWIvbG9jYWxlL2VuX1VTLmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwiZGV0YWlsTG9sUG9zdCIsImNvbW1lbnQiLCJjb21tZW50cyIsImxvYWRDb21tZW50c0xvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbG9zZSIsImRldGFpbExvbFBvc3RPZmZBY3Rpb24iLCJlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbiIsIndpZHRoIiwicGFkZGluZyIsImZvbnRTaXplIiwidGl0bGUiLCJjb250ZW50IiwidXNlcklkIiwibGVuZ3RoIiwiaXRlbSIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtLQUFNRixLOztBQUlOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxxQkFFUkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGSDtBQUFBLE1BRWRDLEVBRmMsZ0JBRWRBLEVBRmM7O0FBQUEsc0JBR0tILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSGhCO0FBQUEsTUFHYkMsYUFIYSxpQkFHYkEsYUFIYTs7QUFBQSxzQkFJcUJMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ssT0FBakI7QUFBQSxHQUFELENBSmhDO0FBQUEsTUFJYkMsUUFKYSxpQkFJYkEsUUFKYTtBQUFBLE1BSUhDLG1CQUpHLGlCQUlIQSxtQkFKRzs7QUFL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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsMklBQTJJO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTZFO0FBQzdFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4ZmY1M2Y3OTdiNTA5M2MxNDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIENvbW1lbnQsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY29tbWVudCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdhbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwJztcclxuXHJcbmNvbnN0IEZyYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBEZXRhaWxQb3N0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgZGV0YWlsTG9sUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IHsgY29tbWVudHMsIGxvYWRDb21tZW50c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbWVudCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtvbkNsb3NlfSB0eXBlPVwicHJpbWFyeVwiPuuLq+q4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT57ZGV0YWlsTG9sUG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57ZGV0YWlsTG9sUG9zdC5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICB7bWUudXNlcklkID09PSBkZXRhaWxMb2xQb3N0LnVzZXJJZCAmJiA8QnV0dG9uR3JvdXA+PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj48QnV0dG9uPuyCreygnDwvQnV0dG9uPjwvQnV0dG9uR3JvdXA+fVxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRDb21tZW50c0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake2NvbW1lbnRzID8gY29tbWVudHMubGVuZ3RoIDogMH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRnJhbWU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUG9zdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlc2V0V2FybmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93YXJuaW5nLnJlc2V0V2FybmVkO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtdXRpbC9saWIvd2FybmluZ1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkLCBjb21wb25lbnQsIG1lc3NhZ2UpIHtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkodmFsaWQsIFwiW2FudGQ6IFwiLmNvbmNhdChjb21wb25lbnQsIFwiXSBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBVbnJlYWNoYWJsZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIFVucmVhY2hhYmxlRXhjZXB0aW9uKHZhbHVlKSB7XG4gICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgVW5yZWFjaGFibGVFeGNlcHRpb24pO1xuICByZXR1cm4gbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY2FzZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVbnJlYWNoYWJsZUV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF91bnJlYWNoYWJsZUV4Y2VwdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3VucmVhY2hhYmxlRXhjZXB0aW9uXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBCdXR0b25Hcm91cCA9IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdidG4tZ3JvdXAnLCBjdXN0b21pemVQcmVmaXhDbHMpOyAvLyBsYXJnZSA9PiBsZ1xuICAgIC8vIHNtYWxsID0+IHNtXG5cbiAgICB2YXIgc2l6ZUNscyA9ICcnO1xuXG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihuZXcgX3VucmVhY2hhYmxlRXhjZXB0aW9uW1wiZGVmYXVsdFwiXShzaXplKSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZUNscyksIHNpemVDbHMpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBCdXR0b25Hcm91cDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfZW5fVVNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5TaXplQ29udGV4dFByb3ZpZGVyID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgU2l6ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuXG52YXIgU2l6ZUNvbnRleHRQcm92aWRlciA9IGZ1bmN0aW9uIFNpemVDb250ZXh0UHJvdmlkZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAob3JpZ2luU2l6ZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHNpemUgfHwgb3JpZ2luU2l6ZVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSBTaXplQ29udGV4dFByb3ZpZGVyO1xudmFyIF9kZWZhdWx0ID0gU2l6ZUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aENvbmZpZ0NvbnN1bWVyID0gd2l0aENvbmZpZ0NvbnN1bWVyO1xuZXhwb3J0cy5Db25maWdDb25zdW1lciA9IGV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVuZGVyRW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlckVtcHR5XCIpKTtcblxudmFyIENvbmZpZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBDb250ZXh0IHdpdGhvdXQgcHJvdmlkZXJcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHJldHVybiBzdWZmaXhDbHMgPyBcImFudC1cIi5jb25jYXQoc3VmZml4Q2xzKSA6ICdhbnQnO1xuICB9LFxuICByZW5kZXJFbXB0eTogX3JlbmRlckVtcHR5W1wiZGVmYXVsdFwiXVxufSk7XG5leHBvcnRzLkNvbmZpZ0NvbnRleHQgPSBDb25maWdDb250ZXh0O1xudmFyIENvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29udGV4dC5Db25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxuZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyRnVuYyhDb21wb25lbnQpIHtcbiAgICAvLyBXcmFwIHdpdGggQ29uZmlnQ29uc3VtZXIuIFNpbmNlIHdlIG5lZWQgY29tcGF0aWJsZSB3aXRoIHJlYWN0IDE1LCBiZSBjYXJlIHdoZW4gdXNpbmcgcmVmIG1ldGhvZHNcbiAgICB2YXIgU0ZDID0gZnVuY3Rpb24gU0ZDKHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbmZpZ1Byb3BzLCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY29ucyA9IENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgbmFtZSA9IGNvbnMgJiYgY29ucy5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBTRkMuZGlzcGxheU5hbWUgPSBcIndpdGhDb25maWdDb25zdW1lcihcIi5jb25jYXQobmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBTRkM7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgX2xvY2FsZVByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlclwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gcmVxdWlyZShcIi4vU2l6ZUNvbnRleHRcIik7XG5cbnZhciBfbWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21lc3NhZ2VcIikpO1xuXG52YXIgX25vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25vdGlmaWNhdGlvblwiKSk7XG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbnRcbi8vIFNGQyBoYXMgc3BlY2lmaWVkIGEgZGlzcGxheU5hbWUsIGJ1dCBub3Qgd29ya2VkLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRUYXJnZXRDb250YWluZXInLCAnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZScsICdwYWdlSGVhZGVyJ107XG5leHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBjb25maWdDb25zdW1lclByb3BzO1xuXG52YXIgQ29uZmlnUHJvdmlkZXIgPSBmdW5jdGlvbiBDb25maWdQcm92aWRlcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5kaXJlY3Rpb24pIHtcbiAgICAgIF9tZXNzYWdlW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuXG4gICAgICBfbm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLmRpcmVjdGlvbl0pO1xuXG4gIHZhciBnZXRQcmVmaXhDbHNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gcHJlZml4Q2xzIHx8IGNvbnRleHQuZ2V0UHJlZml4Q2xzKCcnKTtcbiAgICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChtZXJnZWRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IG1lcmdlZFByZWZpeENscztcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBnZXRUYXJnZXRDb250YWluZXIgPSBwcm9wcy5nZXRUYXJnZXRDb250YWluZXIsXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHJlbmRlckVtcHR5ID0gcHJvcHMucmVuZGVyRW1wdHksXG4gICAgICAgIGNzcCA9IHByb3BzLmNzcCxcbiAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcGFnZUhlYWRlciA9IHByb3BzLnBhZ2VIZWFkZXIsXG4gICAgICAgIGNvbXBvbmVudFNpemUgPSBwcm9wcy5jb21wb25lbnRTaXplLFxuICAgICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIHNwYWNlID0gcHJvcHMuc3BhY2UsXG4gICAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgdmFyIGNvbmZpZyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQpLCB7XG4gICAgICBnZXRQcmVmaXhDbHM6IGdldFByZWZpeENsc1dyYXBwZXIoY29udGV4dCksXG4gICAgICBjc3A6IGNzcCxcbiAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgdmlydHVhbDogdmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0VGFyZ2V0Q29udGFpbmVyID0gZ2V0VGFyZ2V0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmdldFBvcHVwQ29udGFpbmVyID0gZ2V0UG9wdXBDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICBjb25maWcucmVuZGVyRW1wdHkgPSByZW5kZXJFbXB0eTtcbiAgICB9XG5cbiAgICBpZiAocGFnZUhlYWRlcikge1xuICAgICAgY29uZmlnLnBhZ2VIZWFkZXIgPSBwYWdlSGVhZGVyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgY29uZmlnLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuOyAvLyBBZGRpdGlvbmFsIEZvcm0gcHJvdmlkZXJcblxuICAgIHZhciB2YWxpZGF0ZU1lc3NhZ2VzID0ge307XG5cbiAgICBpZiAobG9jYWxlICYmIGxvY2FsZS5Gb3JtICYmIGxvY2FsZS5Gb3JtLmRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0gJiYgZm9ybS52YWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdmFsaWRhdGVNZXNzYWdlcyksIGZvcm0udmFsaWRhdGVNZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRlTWVzc2FnZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoaWxkTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlczogdmFsaWRhdGVNZXNzYWdlc1xuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2l6ZUNvbnRleHQuU2l6ZUNvbnRleHRQcm92aWRlciwge1xuICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkNvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb25maWdcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfbG9jYWxlUHJvdmlkZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgICBfQU5UX01BUktfXzogX2xvY2FsZVByb3ZpZGVyLkFOVF9NQVJLXG4gICAgfSwgY2hpbGROb2RlKSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG4vKiogQHByaXZhdGUgaW50ZXJuYWwgdXNhZ2UuIGRvIG5vdCB1c2UgaW4geW91ciBwcm9kdWN0aW9uICovXG5cblxuQ29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCA9IF9jb250ZXh0LkNvbmZpZ0NvbnRleHQ7XG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9lbXB0eVwiKSk7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF8uQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXhDbHMoJ2VtcHR5Jyk7XG5cbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ1RhYmxlJzpcbiAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ1NlbGVjdCc6XG4gICAgICBjYXNlICdUcmVlU2VsZWN0JzpcbiAgICAgIGNhc2UgJ0Nhc2NhZGVyJzpcbiAgICAgIGNhc2UgJ1RyYW5zZmVyJzpcbiAgICAgIGNhc2UgJ01lbnRpb25zJzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXJFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHllYXJQbGFjZWhvbGRlcjogJ1NlbGVjdCB5ZWFyJyxcbiAgICBxdWFydGVyUGxhY2Vob2xkZXI6ICdTZWxlY3QgcXVhcnRlcicsXG4gICAgbW9udGhQbGFjZWhvbGRlcjogJ1NlbGVjdCBtb250aCcsXG4gICAgd2Vla1BsYWNlaG9sZGVyOiAnU2VsZWN0IHdlZWsnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddLFxuICAgIHJhbmdlWWVhclBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHllYXInLCAnRW5kIHllYXInXSxcbiAgICByYW5nZU1vbnRoUGxhY2Vob2xkZXI6IFsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10sXG4gICAgcmFuZ2VXZWVrUGxhY2Vob2xkZXI6IFsnU3RhcnQgd2VlaycsICdFbmQgd2VlayddXG4gIH0sIF9lbl9VU1tcImRlZmF1bHRcIl0pLFxuICB0aW1lUGlja2VyTG9jYWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9lbl9VUzJbXCJkZWZhdWx0XCJdKVxufTsgLy8gQWxsIHNldHRpbmdzIGF0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9ibG9iL21hc3Rlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xvY2FsZS9leGFtcGxlLmpzb25cblxudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtcHR5XCIpKTtcblxudmFyIF9zaW1wbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGVmYXVsdEVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgX3Byb3BzJGltYWdlID0gcHJvcHMuaW1hZ2UsXG4gICAgICAgIGltYWdlID0gX3Byb3BzJGltYWdlID09PSB2b2lkIDAgPyBkZWZhdWx0RW1wdHlJbWcgOiBfcHJvcHMkaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGltYWdlU3R5bGUgPSBwcm9wcy5pbWFnZVN0eWxlLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImltYWdlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjaGlsZHJlblwiLCBcImltYWdlU3R5bGVcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNvbXBvbmVudE5hbWU6IFwiRW1wdHlcIlxuICAgIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlcyA9IHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBkZXNjcmlwdGlvbiA6IGxvY2FsZS5kZXNjcmlwdGlvbjtcbiAgICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgIGFsdDogYWx0LFxuICAgICAgICAgIHNyYzogaW1hZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZU5vZGUgPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpXG4gICAgICB9LCByZXN0UHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgICAgc3R5bGU6IGltYWdlU3R5bGVcbiAgICAgIH0sIGltYWdlTm9kZSksIGRlcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICAgIH0sIGRlcyksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICAgICAgfSwgY2hpbGRyZW4pKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlTG9jYWxlUmVjZWl2ZXIgPSB1c2VMb2NhbGVSZWNlaXZlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWZhdWx0XCIpKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIExvY2FsZVJlY2VpdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyKTtcblxuICBmdW5jdGlvbiBMb2NhbGVSZWNlaXZlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVJlY2VpdmVyKTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgIGtleTogXCJnZXRMb2NhbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb21wb25lbnROYW1lID0gX3RoaXMkcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3RoaXMkcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQ7XG4gICAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBjb21wb25lbnROYW1lICYmIGFudExvY2FsZSA/IGFudExvY2FsZVtjb21wb25lbnROYW1lXSA6IHt9O1xuICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9jYWxlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGVDb2RlKCkge1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVDb2RlID0gYW50TG9jYWxlICYmIGFudExvY2FsZS5sb2NhbGU7IC8vIEhhZCB1c2UgTG9jYWxlUHJvdmlkZSBidXQgZGlkbid0IHNldCBsb2NhbGVcblxuICAgICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5sb2NhbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5nZXRMb2NhbGUoKSwgdGhpcy5nZXRMb2NhbGVDb2RlKCksIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGVSZWNlaXZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVSZWNlaXZlcjtcbkxvY2FsZVJlY2VpdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50TmFtZTogJ2dsb2JhbCdcbn07XG5Mb2NhbGVSZWNlaXZlci5jb250ZXh0VHlwZSA9IF9jb250ZXh0W1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gdXNlTG9jYWxlUmVjZWl2ZXIoY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSkge1xuICB2YXIgYW50TG9jYWxlID0gUmVhY3QudXNlQ29udGV4dChfY29udGV4dFtcImRlZmF1bHRcIl0pO1xuICB2YXIgY29tcG9uZW50TG9jYWxlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgIHZhciBsb2NhbGVGcm9tQ29udGV4dCA9IGNvbXBvbmVudE5hbWUgJiYgYW50TG9jYWxlID8gYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdIDoge307XG4gICAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgfSwgW2NvbXBvbmVudE5hbWUsIGRlZmF1bHRMb2NhbGUsIGFudExvY2FsZV0pO1xuICByZXR1cm4gW2NvbXBvbmVudExvY2FsZV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIExvY2FsZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh1bmRlZmluZWQpO1xudmFyIF9kZWZhdWx0ID0gTG9jYWxlQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9kZWZhdWx0MltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5BTlRfTUFSSyA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoXCIuLi9tb2RhbC9sb2NhbGVcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBBTlRfTUFSSyA9ICdpbnRlcm5hbE1hcmsnO1xuZXhwb3J0cy5BTlRfTUFSSyA9IEFOVF9NQVJLO1xuXG52YXIgTG9jYWxlUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBMb2NhbGVQcm92aWRlcik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkocHJvcHMubG9jYWxlICYmIHByb3BzLmxvY2FsZS5Nb2RhbCk7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMuX0FOVF9NQVJLX18gPT09IEFOVF9NQVJLLCAnTG9jYWxlUHJvdmlkZXInLCAnYExvY2FsZVByb3ZpZGVyYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBsb2NhbGVgIHdpdGggYENvbmZpZ1Byb3ZpZGVyYCBpbnN0ZWFkOiBodHRwOi8vdS5hbnQuZGVzaWduL2xvY2FsZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubG9jYWxlICE9PSBsb2NhbGUpIHtcbiAgICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkobG9jYWxlICYmIGxvY2FsZS5Nb2RhbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMubG9jYWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsb2NhbGUpLCB7XG4gICAgICAgICAgZXhpc3Q6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVByb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVByb3ZpZGVyO1xuTG9jYWxlUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBsb2NhbGU6IHt9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2FsZW5kYXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG52YXIgdHlwZVRlbXBsYXRlID0gJyR7bGFiZWx9IGlzIG5vdCBhIHZhbGlkICR7dHlwZX0nO1xudmFyIGxvY2FsZVZhbHVlcyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBfZW5fVVNbXCJkZWZhdWx0XCJdLFxuICBEYXRlUGlja2VyOiBfZW5fVVMyW1wiZGVmYXVsdFwiXSxcbiAgVGltZVBpY2tlcjogX2VuX1VTM1tcImRlZmF1bHRcIl0sXG4gIENhbGVuZGFyOiBfZW5fVVM0W1wiZGVmYXVsdFwiXSxcbiAgZ2xvYmFsOiB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0J1xuICB9LFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgZmlsdGVyRW1wdHlUZXh0OiAnTm8gZmlsdGVycycsXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0aW9uQWxsOiAnU2VsZWN0IGFsbCBkYXRhJyxcbiAgICBzb3J0VGl0bGU6ICdTb3J0JyxcbiAgICBleHBhbmQ6ICdFeHBhbmQgcm93JyxcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlIHJvdycsXG4gICAgdHJpZ2dlckRlc2M6ICdDbGljayBzb3J0IGJ5IGRlc2NlbmQnLFxuICAgIHRyaWdnZXJBc2M6ICdDbGljayBzb3J0IGJ5IGFzY2VuZCcsXG4gICAgY2FuY2VsU29ydDogJ0NsaWNrIHRvIGNhbmNlbCBzb3J0J1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBqdXN0T2tUZXh0OiAnT0snXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICB0aXRsZXM6IFsnJywgJyddLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUnLFxuICAgIGl0ZW1Vbml0OiAnaXRlbScsXG4gICAgaXRlbXNVbml0OiAnaXRlbXMnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgc2VsZWN0Q3VycmVudDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHJlbW92ZUN1cnJlbnQ6ICdSZW1vdmUgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHJlbW92ZUFsbDogJ1JlbW92ZSBhbGwgZGF0YScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZSdcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgIHVwbG9hZEVycm9yOiAnVXBsb2FkIGVycm9yJyxcbiAgICBwcmV2aWV3RmlsZTogJ1ByZXZpZXcgZmlsZScsXG4gICAgZG93bmxvYWRGaWxlOiAnRG93bmxvYWQgZmlsZSdcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ05vIERhdGEnXG4gIH0sXG4gIEljb246IHtcbiAgICBpY29uOiAnaWNvbidcbiAgfSxcbiAgVGV4dDoge1xuICAgIGVkaXQ6ICdFZGl0JyxcbiAgICBjb3B5OiAnQ29weScsXG4gICAgY29waWVkOiAnQ29waWVkJyxcbiAgICBleHBhbmQ6ICdFeHBhbmQnXG4gIH0sXG4gIFBhZ2VIZWFkZXI6IHtcbiAgICBiYWNrOiAnQmFjaydcbiAgfSxcbiAgRm9ybToge1xuICAgIG9wdGlvbmFsOiAnKG9wdGlvbmFsKScsXG4gICAgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiAnRmllbGQgdmFsaWRhdGlvbiBlcnJvciAke2xhYmVsfScsXG4gICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciAke2xhYmVsfScsXG4gICAgICBcImVudW1cIjogJyR7bGFiZWx9IG11c3QgYmUgb25lIG9mIFske2VudW19XScsXG4gICAgICB3aGl0ZXNwYWNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGEgYmxhbmsgY2hhcmFjdGVyJyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgZm9ybWF0OiAnJHtsYWJlbH0gZGF0ZSBmb3JtYXQgaXMgaW52YWxpZCcsXG4gICAgICAgIHBhcnNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIGRhdGUnLFxuICAgICAgICBpbnZhbGlkOiAnJHtsYWJlbH0gaXMgYW4gaW52YWxpZCBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIHN0cmluZzogdHlwZVRlbXBsYXRlLFxuICAgICAgICBtZXRob2Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgYXJyYXk6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgb2JqZWN0OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG51bWJlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBkYXRlOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIFwiYm9vbGVhblwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGludGVnZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJmbG9hdFwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBlbWFpbDogdHlwZVRlbXBsYXRlLFxuICAgICAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSAke2xlbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWF4OiAnJHtsYWJlbH0gdXAgdG8gJHttYXh9IGNoYXJhY3RlcnMnLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9IGNoYXJhY3RlcnMnXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgZXF1YWwgdG8gJHtsZW59JyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbWluaW11bSB2YWx1ZSBpcyAke21pbn0nLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtYXhpbXVtIHZhbHVlIGlzICR7bWF4fScsXG4gICAgICAgIHJhbmdlOiAnJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgYXJyYXk6IHtcbiAgICAgICAgbGVuOiAnTXVzdCBiZSAke2xlbn0gJHtsYWJlbH0nLFxuICAgICAgICBtaW46ICdBdCBsZWFzdCAke21pbn0gJHtsYWJlbH0nLFxuICAgICAgICBtYXg6ICdBdCBtb3N0ICR7bWF4fSAke2xhYmVsfScsXG4gICAgICAgIHJhbmdlOiAnVGhlIGFtb3VudCBvZiAke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBwYXR0ZXJuOiB7XG4gICAgICAgIG1pc21hdGNoOiAnJHtsYWJlbH0gZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm4gJHtwYXR0ZXJufSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGVWYWx1ZXM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlVXNlTWVzc2FnZTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VNZXNzYWdlKGdldFJjTm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpIHtcbiAgdmFyIHVzZU1lc3NhZ2UgPSBmdW5jdGlvbiB1c2VNZXNzYWdlKCkge1xuICAgIC8vIFdlIGNhbiBvbmx5IGdldCBjb250ZW50IGJ5IHJlbmRlclxuICAgIHZhciBnZXRQcmVmaXhDbHM7IC8vIFdlIGNyZWF0ZSBhIHByb3h5IHRvIGhhbmRsZSBkZWxheSBjcmVhdGVkIGluc3RhbmNlXG5cbiAgICB2YXIgaW5uZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHByb3h5ID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKSB7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPT09IG51bGwgfHwgaW5uZXJJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJJbnN0YW5jZS5jb21wb25lbnQuYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfdXNlUkNOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKHByb3h5KSxcbiAgICAgICAgX3VzZVJDTm90aWZpY2F0aW9uMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlUkNOb3RpZmljYXRpb24sIDIpLFxuICAgICAgICBob29rTm90aWZ5ID0gX3VzZVJDTm90aWZpY2F0aW9uMlswXSxcbiAgICAgICAgaG9sZGVyID0gX3VzZVJDTm90aWZpY2F0aW9uMlsxXTtcblxuICAgIGZ1bmN0aW9uIG5vdGlmeShhcmdzKSB7XG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdtZXNzYWdlJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciB0YXJnZXQgPSBhcmdzLmtleSB8fCAoMCwgXy5nZXRLZXlUaGVuSW5jcmVhc2VLZXkpKCk7XG4gICAgICB2YXIgY2xvc2VQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmdzLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3Mub25DbG9zZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdldFJjTm90aWZpY2F0aW9uSW5zdGFuY2UoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IG1lcmdlZFByZWZpeENsc1xuICAgICAgICB9KSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgICAgICBpbm5lckluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgICAgaG9va05vdGlmeShnZXRSQ05vdGljZVByb3BzKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgICBrZXk6IHRhcmdldCxcbiAgICAgICAgICAgIG9uQ2xvc2U6IGNhbGxiYWNrXG4gICAgICAgICAgfSksIHByZWZpeENscykpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgICAgICBpZiAoaW5uZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGlubmVySW5zdGFuY2UucmVtb3ZlTm90aWNlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlc3VsdC50aGVuID0gZnVuY3Rpb24gKGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGNsb3NlUHJvbWlzZS50aGVuKGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgICAgfTtcblxuICAgICAgcmVzdWx0LnByb21pc2UgPSBjbG9zZVByb21pc2U7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gLy8gRmlsbCBmdW5jdGlvbnNcblxuXG4gICAgdmFyIGhvb2tBcGlSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICAgIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuID0gbm90aWZ5O1xuICAgIFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnbG9hZGluZyddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiAoMCwgXy5hdHRhY2hUeXBlQXBpKShob29rQXBpUmVmLmN1cnJlbnQsIHR5cGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBbaG9va0FwaVJlZi5jdXJyZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIHtcbiAgICAgIGtleTogXCJob2xkZXJcIlxuICAgIH0sIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICBnZXRQcmVmaXhDbHMgPSBjb250ZXh0LmdldFByZWZpeENscztcbiAgICAgIHJldHVybiBob2xkZXI7XG4gICAgfSldO1xuICB9O1xuXG4gIHJldHVybiB1c2VNZXNzYWdlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0S2V5VGhlbkluY3JlYXNlS2V5ID0gZ2V0S2V5VGhlbkluY3JlYXNlS2V5O1xuZXhwb3J0cy5hdHRhY2hUeXBlQXBpID0gYXR0YWNoVHlwZUFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0xvYWRpbmdPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0xvYWRpbmdPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3VzZU1lc3NhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU1lc3NhZ2VcIikpO1xuXG52YXIgbWVzc2FnZUluc3RhbmNlO1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDM7XG52YXIgZGVmYXVsdFRvcDtcbnZhciBrZXkgPSAxO1xudmFyIGxvY2FsUHJlZml4Q2xzID0gJ2FudC1tZXNzYWdlJztcbnZhciB0cmFuc2l0aW9uTmFtZSA9ICdtb3ZlLXVwJztcbnZhciBnZXRDb250YWluZXI7XG52YXIgbWF4Q291bnQ7XG52YXIgcnRsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldEtleVRoZW5JbmNyZWFzZUtleSgpIHtcbiAgcmV0dXJuIGtleSsrO1xufVxuXG5mdW5jdGlvbiBzZXRNZXNzYWdlQ29uZmlnKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0VG9wID0gb3B0aW9ucy50b3A7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IGRlZmF1bHRUb3BcbiAgfVxuXG4gIGlmIChvcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmFuc2l0aW9uTmFtZSA9IG9wdGlvbnMudHJhbnNpdGlvbk5hbWU7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IHRyYW5zaXRpb25OYW1lXG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXhDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4Q291bnQgPSBvcHRpb25zLm1heENvdW50O1xuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBpZiAob3B0aW9ucy5ydGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIHByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGxvY2FsUHJlZml4Q2xzO1xuXG4gIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgc3R5bGU6IHtcbiAgICAgIHRvcDogZGVmYXVsdFRvcFxuICAgIH0sXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgbWF4Q291bnQ6IG1heENvdW50XG4gIH0sIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgaW5mbzogX0luZm9DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgbG9hZGluZzogX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBhcmdzLmR1cmF0aW9uIDogZGVmYXVsdER1cmF0aW9uO1xuICB2YXIgSWNvbkNvbXBvbmVudCA9IHR5cGVUb0ljb25bYXJncy50eXBlXTtcbiAgdmFyIG1lc3NhZ2VDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY3VzdG9tLWNvbnRlbnRcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYXJncy50eXBlKSwgYXJncy50eXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSksIF9jbGFzc05hbWVzKSk7XG4gIHJldHVybiB7XG4gICAga2V5OiBhcmdzLmtleSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZSxcbiAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG1lc3NhZ2VDbGFzc1xuICAgIH0sIGFyZ3MuaWNvbiB8fCBJY29uQ29tcG9uZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIG51bGwpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgYXJncy5jb250ZW50KSksXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIHZhciB0YXJnZXQgPSBhcmdzLmtleSB8fCBrZXkrKztcbiAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgfTtcblxuICAgIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcygoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBrZXk6IHRhcmdldCxcbiAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgIH0pLCBwcmVmaXhDbHMpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBtZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlKHRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIHJlc3VsdC50aGVuID0gZnVuY3Rpb24gKGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gIH07XG5cbiAgcmVzdWx0LnByb21pc2UgPSBjbG9zZVByb21pc2U7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQXJnc1Byb3BzKGNvbnRlbnQpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb250ZW50KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgISFjb250ZW50LmNvbnRlbnQ7XG59XG5cbnZhciBhcGkgPSB7XG4gIG9wZW46IG5vdGljZSxcbiAgY29uZmlnOiBzZXRNZXNzYWdlQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KG1lc3NhZ2VLZXkpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBpZiAobWVzc2FnZUtleSkge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZSA9IG1lc3NhZ2VJbnN0YW5jZSxcbiAgICAgICAgICAgIHJlbW92ZU5vdGljZSA9IF9tZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlO1xuICAgICAgICByZW1vdmVOb3RpY2UobWVzc2FnZUtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX21lc3NhZ2VJbnN0YW5jZTIgPSBtZXNzYWdlSW5zdGFuY2UsXG4gICAgICAgICAgICBkZXN0cm95ID0gX21lc3NhZ2VJbnN0YW5jZTIuZGVzdHJveTtcbiAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNoVHlwZUFwaShvcmlnaW5hbEFwaSwgdHlwZSkge1xuICBvcmlnaW5hbEFwaVt0eXBlXSA9IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgIGlmIChpc0FyZ3NQcm9wcyhjb250ZW50KSkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQXBpLm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGVudCksIHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2xvc2UgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBvcmlnaW5hbEFwaS5vcGVuKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgb25DbG9zZTogb25DbG9zZVxuICAgIH0pO1xuICB9O1xufVxuXG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiBhdHRhY2hUeXBlQXBpKGFwaSwgdHlwZSk7XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5hcGkudXNlTWVzc2FnZSA9ICgwLCBfdXNlTWVzc2FnZVtcImRlZmF1bHRcIl0pKGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpO1xudmFyIF9kZWZhdWx0ID0gYXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoYW5nZUNvbmZpcm1Mb2NhbGUgPSBjaGFuZ2VDb25maXJtTG9jYWxlO1xuZXhwb3J0cy5nZXRDb25maXJtTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcnVudGltZUxvY2FsZSksIG5ld0xvY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb25maXJtTG9jYWxlKCkge1xuICByZXR1cm4gcnVudGltZUxvY2FsZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvbi9saWIvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU5vdGlmaWNhdGlvbihnZXROb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gdXNlTm90aWZpY2F0aW9uKCkge1xuICAgIC8vIFdlIGNhbiBvbmx5IGdldCBjb250ZW50IGJ5IHJlbmRlclxuICAgIHZhciBnZXRQcmVmaXhDbHM7IC8vIFdlIGNyZWF0ZSBhIHByb3h5IHRvIGhhbmRsZSBkZWxheSBjcmVhdGVkIGluc3RhbmNlXG5cbiAgICB2YXIgaW5uZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHByb3h5ID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKSB7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPT09IG51bGwgfHwgaW5uZXJJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJJbnN0YW5jZS5jb21wb25lbnQuYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfdXNlUkNOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKHByb3h5KSxcbiAgICAgICAgX3VzZVJDTm90aWZpY2F0aW9uMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlUkNOb3RpZmljYXRpb24sIDIpLFxuICAgICAgICBob29rTm90aWZ5ID0gX3VzZVJDTm90aWZpY2F0aW9uMlswXSxcbiAgICAgICAgaG9sZGVyID0gX3VzZVJDTm90aWZpY2F0aW9uMlsxXTtcblxuICAgIGZ1bmN0aW9uIG5vdGlmeShhcmdzKSB7XG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdub3RpZmljYXRpb24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgcHJlZml4Q2xzOiBtZXJnZWRQcmVmaXhDbHNcbiAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgaG9va05vdGlmeShnZXRSQ05vdGljZVByb3BzKGFyZ3MsIHByZWZpeENscykpO1xuICAgICAgfSk7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIGhvb2tBcGlSZWYuY3VycmVudFt0eXBlXSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiBob29rQXBpUmVmLmN1cnJlbnQub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2hvb2tBcGlSZWYuY3VycmVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCB7XG4gICAgICBrZXk6IFwiaG9sZGVyXCJcbiAgICB9LCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgZ2V0UHJlZml4Q2xzID0gY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH0pXTtcbiAgfTtcblxuICByZXR1cm4gdXNlTm90aWZpY2F0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY05vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9JbmZvQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9JbmZvQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX3VzZU5vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlTm90aWZpY2F0aW9uXCIpKTtcblxudmFyIG5vdGlmaWNhdGlvbkluc3RhbmNlID0ge307XG52YXIgZGVmYXVsdER1cmF0aW9uID0gNC41O1xudmFyIGRlZmF1bHRUb3AgPSAyNDtcbnZhciBkZWZhdWx0Qm90dG9tID0gMjQ7XG52YXIgZGVmYXVsdFByZWZpeENscyA9ICdhbnQtbm90aWZpY2F0aW9uJztcbnZhciBkZWZhdWx0UGxhY2VtZW50ID0gJ3RvcFJpZ2h0JztcbnZhciBkZWZhdWx0R2V0Q29udGFpbmVyO1xudmFyIGRlZmF1bHRDbG9zZUljb247XG52YXIgcnRsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldE5vdGlmaWNhdGlvbkNvbmZpZyhvcHRpb25zKSB7XG4gIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICBwbGFjZW1lbnQgPSBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdHRvbSA9IG9wdGlvbnMuYm90dG9tLFxuICAgICAgdG9wID0gb3B0aW9ucy50b3AsXG4gICAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcixcbiAgICAgIGNsb3NlSWNvbiA9IG9wdGlvbnMuY2xvc2VJY29uLFxuICAgICAgcHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG5cbiAgaWYgKHByZWZpeENscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdFByZWZpeENscyA9IHByZWZpeENscztcbiAgfVxuXG4gIGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdER1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cblxuICBpZiAocGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0UGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICB9IGVsc2UgaWYgKG9wdGlvbnMucnRsKSB7XG4gICAgZGVmYXVsdFBsYWNlbWVudCA9ICd0b3BMZWZ0JztcbiAgfVxuXG4gIGlmIChib3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRCb3R0b20gPSBib3R0b207XG4gIH1cblxuICBpZiAodG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0VG9wID0gdG9wO1xuICB9XG5cbiAgaWYgKGdldENvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdEdldENvbnRhaW5lciA9IGdldENvbnRhaW5lcjtcbiAgfVxuXG4gIGlmIChjbG9zZUljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRDbG9zZUljb24gPSBjbG9zZUljb247XG4gIH1cblxuICBpZiAob3B0aW9ucy5ydGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCkge1xuICB2YXIgdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0VG9wO1xuICB2YXIgYm90dG9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkZWZhdWx0Qm90dG9tO1xuICB2YXIgc3R5bGU7XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiBib3R0b21cbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXROb3RpZmljYXRpb25JbnN0YW5jZShhcmdzLCBjYWxsYmFjaykge1xuICB2YXIgX2FyZ3MkcGxhY2VtZW50ID0gYXJncy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfYXJncyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IGRlZmF1bHRQbGFjZW1lbnQgOiBfYXJncyRwbGFjZW1lbnQsXG4gICAgICB0b3AgPSBhcmdzLnRvcCxcbiAgICAgIGJvdHRvbSA9IGFyZ3MuYm90dG9tLFxuICAgICAgX2FyZ3MkZ2V0Q29udGFpbmVyID0gYXJncy5nZXRDb250YWluZXIsXG4gICAgICBnZXRDb250YWluZXIgPSBfYXJncyRnZXRDb250YWluZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRDb250YWluZXIgOiBfYXJncyRnZXRDb250YWluZXIsXG4gICAgICBfYXJncyRjbG9zZUljb24gPSBhcmdzLmNsb3NlSWNvbixcbiAgICAgIGNsb3NlSWNvbiA9IF9hcmdzJGNsb3NlSWNvbiA9PT0gdm9pZCAwID8gZGVmYXVsdENsb3NlSWNvbiA6IF9hcmdzJGNsb3NlSWNvbjtcbiAgdmFyIG91dGVyUHJlZml4Q2xzID0gYXJncy5wcmVmaXhDbHMgfHwgZGVmYXVsdFByZWZpeENscztcbiAgdmFyIHByZWZpeENscyA9IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gIHZhciBjYWNoZUtleSA9IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCk7XG4gIHZhciBjYWNoZUluc3RhbmNlID0gbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldO1xuXG4gIGlmIChjYWNoZUluc3RhbmNlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGNhY2hlSW5zdGFuY2UpLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjbG9zZUljb25Ub1JlbmRlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItY2xvc2UteFwiKVxuICB9LCBjbG9zZUljb24gfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChvdXRlclByZWZpeENscywgXCItY2xvc2UtaWNvblwiKVxuICB9KSk7XG4gIHZhciBub3RpZmljYXRpb25DbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSkpO1xuICBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgICAgcHJlZml4Q2xzOiBvdXRlclByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZTogbm90aWZpY2F0aW9uQ2xhc3MsXG4gICAgICBzdHlsZTogZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50LCB0b3AsIGJvdHRvbSksXG4gICAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICAgIGNsb3NlSWNvbjogY2xvc2VJY29uVG9SZW5kZXJcbiAgICB9LCBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICByZXNvbHZlKG5vdGlmaWNhdGlvbik7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZTogbm90aWZpY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciB0eXBlVG9JY29uID0ge1xuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIGluZm86IF9JbmZvQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3MuZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHREdXJhdGlvbiA6IGFyZ3MuZHVyYXRpb247XG4gIHZhciBpY29uTm9kZSA9IG51bGw7XG5cbiAgaWYgKGFyZ3MuaWNvbikge1xuICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgfSwgYXJncy5pY29uKTtcbiAgfSBlbHNlIGlmIChhcmdzLnR5cGUpIHtcbiAgICBpY29uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHR5cGVUb0ljb25bYXJncy50eXBlXSB8fCBudWxsLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbiBcIikuY29uY2F0KHByZWZpeENscywgXCItaWNvbi1cIikuY29uY2F0KGFyZ3MudHlwZSlcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhdXRvTWFyZ2luVGFnID0gIWFyZ3MuZGVzY3JpcHRpb24gJiYgaWNvbk5vZGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXNzYWdlLXNpbmdsZS1saW5lLWF1dG8tbWFyZ2luXCIpXG4gIH0pIDogbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGljb25Ob2RlID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aXRoLWljb25cIikgOiAnJyxcbiAgICAgIHJvbGU6IFwiYWxlcnRcIlxuICAgIH0sIGljb25Ob2RlLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVzc2FnZVwiKVxuICAgIH0sIGF1dG9NYXJnaW5UYWcsIGFyZ3MubWVzc2FnZSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgIH0sIGFyZ3MuZGVzY3JpcHRpb24pLCBhcmdzLmJ0biA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYnRuXCIpXG4gICAgfSwgYXJncy5idG4pIDogbnVsbCksXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIG9uQ2xvc2U6IGFyZ3Mub25DbG9zZSxcbiAgICBvbkNsaWNrOiBhcmdzLm9uQ2xpY2ssXG4gICAga2V5OiBhcmdzLmtleSxcbiAgICBzdHlsZTogYXJncy5zdHlsZSB8fCB7fSxcbiAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgaW5zdGFuY2Uubm90aWNlKGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSk7XG4gIH0pO1xufVxuXG52YXIgYXBpID0ge1xuICBvcGVuOiBub3RpY2UsXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShrZXkpIHtcbiAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5yZW1vdmVOb3RpY2Uoa2V5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBjb25maWc6IHNldE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XTsgLy8gbGd0bVtqcy9taXNzaW5nLWF3YWl0XVxuICAgIH0pO1xuICB9XG59O1xuWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgYXBpW3R5cGVdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gYXBpLm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSk7XG4gIH07XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5hcGkudXNlTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShnZXROb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcyk7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgbG9jYWxlID0ge1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCB0aW1lJyxcbiAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCB0aW1lJywgJ0VuZCB0aW1lJ11cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgU3VwZXIgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIuZGVmYXVsdCkodGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbnZhciBOb3RpY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czIuZGVmYXVsdCkoTm90aWNlLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vdGljZSk7XG5cbiAgZnVuY3Rpb24gTm90aWNlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syLmRlZmF1bHQpKHRoaXMsIE5vdGljZSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcblxuICAgIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuXG4gICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhcnRDbG9zZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmR1cmF0aW9uKSB7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJDbG9zZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNsb3NlVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczIuZGVmYXVsdCkoTm90aWNlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gcHJldlByb3BzLmR1cmF0aW9uIHx8IHRoaXMucHJvcHMudXBkYXRlKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0YXJ0Q2xvc2VUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0YXJ0Q2xvc2VUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9zYWJsZSA9IF90aGlzJHByb3BzLmNsb3NhYmxlLFxuICAgICAgICAgIGNsb3NlSWNvbiA9IF90aGlzJHByb3BzLmNsb3NlSWNvbixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaG9sZGVyID0gX3RoaXMkcHJvcHMuaG9sZGVyO1xuICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gICAgICB2YXIgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkuc3Vic3RyKDAsIDUpID09PSAnYXJpYS0nIHx8IGtleSA9PT0gJ3JvbGUnKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBfdGhpczIucHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY29tcG9uZW50Q2xhc3MsIGNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoe30sIFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zYWJsZVwiKSwgY2xvc2FibGUpKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuY2xlYXJDbG9zZVRpbWVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuc3RhcnRDbG9zZVRpbWVyLFxuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICB9LCBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMpLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY29udGVudFwiKVxuICAgICAgfSwgY2hpbGRyZW4pLCBjbG9zYWJsZSA/IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuY2xvc2UsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNsb3NlXCIpXG4gICAgICB9LCBjbG9zZUljb24gfHwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZS14XCIpXG4gICAgICB9KSkgOiBudWxsKTtcblxuICAgICAgaWYgKGhvbGRlcikge1xuICAgICAgICByZXR1cm4gX3JlYWN0RG9tLmRlZmF1bHQuY3JlYXRlUG9ydGFsKG5vZGUsIGhvbGRlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTm90aWNlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWNlO1xuTm90aWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBkdXJhdGlvbjogMS41LFxuICBzdHlsZToge1xuICAgIHJpZ2h0OiAnNTAlJ1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTm90aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob3RpY2VcIikpO1xuXG5mdW5jdGlvbiB1c2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSW5zdGFuY2UpIHtcbiAgdmFyIGNyZWF0ZWRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShub3RpY2VQcm9wcykge1xuICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlLmFkZChub3RpY2VQcm9wcywgZnVuY3Rpb24gKGRpdiwgcHJvcHMpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wcy5rZXk7XG5cbiAgICAgIGlmIChkaXYgJiYgIWNyZWF0ZWRSZWYuY3VycmVudFtrZXldKSB7XG4gICAgICAgIHZhciBub3RpY2VFbGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Ob3RpY2UuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBob2xkZXI6IGRpdlxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZWRSZWYuY3VycmVudFtrZXldID0gbm90aWNlRWxlO1xuICAgICAgICBzZXRFbGVtZW50cyhmdW5jdGlvbiAob3JpZ2luRWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG9yaWdpbkVsZW1lbnRzKSwgW25vdGljZUVsZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbbm90aWZ5LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBlbGVtZW50cyldO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICAvLyBPcHRpb25zLmpzeFxuICBpdGVtc19wZXJfcGFnZTogJy8gcGFnZScsXG4gIGp1bXBfdG86ICdHbyB0bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcbiAgLy8gUGFnaW5hdGlvbi5qc3hcbiAgcHJldl9wYWdlOiAnUHJldmlvdXMgUGFnZScsXG4gIG5leHRfcGFnZTogJ05leHQgUGFnZScsXG4gIHByZXZfNTogJ1ByZXZpb3VzIDUgUGFnZXMnLFxuICBuZXh0XzU6ICdOZXh0IDUgUGFnZXMnLFxuICBwcmV2XzM6ICdQcmV2aW91cyAzIFBhZ2VzJyxcbiAgbmV4dF8zOiAnTmV4dCAzIFBhZ2VzJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgbG9jYWxlOiAnZW5fVVMnLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==