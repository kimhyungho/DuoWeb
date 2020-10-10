webpackHotUpdate_N_E("pages/info",{

/***/ "./components/MyInfo.js":
/*!******************************!*\
  !*** ./components/MyInfo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\MyInfo.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MyInfo = function MyInfo() {
  _s();

  var userNickname = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.userNickname;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isChangeNickname = _useState[0],
      setIsChangeNickname = _useState[1];

  var onIsChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsChangeNickname(true);
  });
  var onCompelteChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 받아와서 Nickname state 변경
    setIsChangeNickname(false);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isChangeNickname ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "submit",
    prefix: userNickname,
    suffix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onCompelteChangeNickname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 76
      }
    }, "\uD655\uC778"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: userNickname,
    suffix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onIsChangeNickname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 56
      }
    }, "\uBCC0\uACBD"),
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }));
}; // <Form><Input prefix={userNickname} suffix={<Button onClick={onCompelteChangeNickname} htmlType="submit"></Button>}></Input> </Form>


_s(MyInfo, "lMUAqYv3xOuBgw9bcTS4ANRcxXM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = MyInfo;
/* harmony default export */ __webpack_exports__["default"] = (MyInfo);

var _c;

$RefreshReg$(_c, "MyInfo");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwidXNlck5pY2tuYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImlzQ2hhbmdlTmlja25hbWUiLCJzZXRJc0NoYW5nZU5pY2tuYW1lIiwib25Jc0NoYW5nZU5pY2tuYW1lIiwidXNlQ2FsbGJhY2siLCJvbkNvbXBlbHRlQ2hhbmdlTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsWUFBdEI7QUFBQSxHQUFELENBQWhDOztBQUZpQixrQkFHK0JJLHNEQUFRLENBQUMsS0FBRCxDQUh2QztBQUFBLE1BR1ZDLGdCQUhVO0FBQUEsTUFHUUMsbUJBSFI7O0FBSWpCLE1BQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDekNGLHVCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSCxHQUZxQyxDQUF0QztBQUlBLE1BQU1HLHdCQUF3QixHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDL0M7QUFDQUYsdUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNILEdBSDJDLENBQTVDO0FBS0EsU0FDSSxtRUFDS0QsZ0JBQWdCLEdBQ1gsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFVBQU0sRUFBRUwsWUFBN0I7QUFBMkMsVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVTLHdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU4sQ0FEVyxHQUVYLE1BQUMsMENBQUQ7QUFBTyxVQUFNLEVBQUVULFlBQWY7QUFBNkIsVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVPLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFyQztBQUF1RixZQUFRLE1BQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIVixDQURKO0FBUUgsQ0FyQkQsQyxDQXNCQTs7O0dBdEJNUixNO1VBRW1CRSx1RDs7O0tBRm5CRixNO0FBdUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmZvLjllMmIzZjI5YWQxYzFmZGU2YWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbmNvbnN0IE15SW5mbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB1c2VyTmlja25hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlck5pY2tuYW1lKTtcclxuICAgIGNvbnN0IFtpc0NoYW5nZU5pY2tuYW1lLCBzZXRJc0NoYW5nZU5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uSXNDaGFuZ2VOaWNrbmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc0NoYW5nZU5pY2tuYW1lKHRydWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNvbXBlbHRlQ2hhbmdlTmlja25hbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgLy8g67Cb7JWE7JmA7IScIE5pY2tuYW1lIHN0YXRlIOuzgOqyvVxyXG4gICAgICAgIHNldElzQ2hhbmdlTmlja25hbWUoZmFsc2UpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzQ2hhbmdlTmlja25hbWVcclxuICAgICAgICAgICAgICAgID8gPEZvcm0+PElucHV0IHR5cGU9XCJzdWJtaXRcIiBwcmVmaXg9e3VzZXJOaWNrbmFtZX0gc3VmZml4PXs8QnV0dG9uIG9uQ2xpY2s9e29uQ29tcGVsdGVDaGFuZ2VOaWNrbmFtZX0+7ZmV7J24PC9CdXR0b24+fSAvPjwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDogPElucHV0IHByZWZpeD17dXNlck5pY2tuYW1lfSBzdWZmaXg9ezxCdXR0b24gb25DbGljaz17b25Jc0NoYW5nZU5pY2tuYW1lfT7rs4Dqsr08L0J1dHRvbj59IGRpc2FibGVkIC8+fVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuLy8gPEZvcm0+PElucHV0IHByZWZpeD17dXNlck5pY2tuYW1lfSBzdWZmaXg9ezxCdXR0b24gb25DbGljaz17b25Db21wZWx0ZUNoYW5nZU5pY2tuYW1lfSBodG1sVHlwZT1cInN1Ym1pdFwiPjwvQnV0dG9uPn0+PC9JbnB1dD4gPC9Gb3JtPlxyXG5leHBvcnQgZGVmYXVsdCBNeUluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==