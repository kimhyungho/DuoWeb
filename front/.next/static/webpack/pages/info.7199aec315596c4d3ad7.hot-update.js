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
    prefix: userNickname,
    suffix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onIsChangeNickname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 62
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwidXNlck5pY2tuYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImlzQ2hhbmdlTmlja25hbWUiLCJzZXRJc0NoYW5nZU5pY2tuYW1lIiwib25Jc0NoYW5nZU5pY2tuYW1lIiwidXNlQ2FsbGJhY2siLCJvbkNvbXBlbHRlQ2hhbmdlTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsWUFBdEI7QUFBQSxHQUFELENBQWhDOztBQUZpQixrQkFHK0JJLHNEQUFRLENBQUMsS0FBRCxDQUh2QztBQUFBLE1BR1ZDLGdCQUhVO0FBQUEsTUFHUUMsbUJBSFI7O0FBSWpCLE1BQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDekNGLHVCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDSCxHQUZxQyxDQUF0QztBQUlBLE1BQU1HLHdCQUF3QixHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDL0M7QUFDQUYsdUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNILEdBSDJDLENBQTVDO0FBS0EsU0FDSSxtRUFDS0QsZ0JBQWdCLEdBQ1gsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sTUFBQywwQ0FBRDtBQUFPLFVBQU0sRUFBRUwsWUFBZjtBQUE2QixVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRU8sa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTixDQURXLEdBRVgsTUFBQywwQ0FBRDtBQUFPLFVBQU0sRUFBRVAsWUFBZjtBQUE2QixVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRU8sa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXJDO0FBQXVGLFlBQVEsTUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhWLENBREo7QUFRSCxDQXJCRCxDLENBc0JBOzs7R0F0Qk1SLE07VUFFbUJFLHVEOzs7S0FGbkJGLE07QUF1QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZm8uNzE5OWFlYzMxNTU5NmM0ZDNhZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuY29uc3QgTXlJbmZvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVzZXJOaWNrbmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyTmlja25hbWUpO1xyXG4gICAgY29uc3QgW2lzQ2hhbmdlTmlja25hbWUsIHNldElzQ2hhbmdlTmlja25hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25Jc0NoYW5nZU5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldElzQ2hhbmdlTmlja25hbWUodHJ1ZSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ29tcGVsdGVDaGFuZ2VOaWNrbmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAvLyDrsJvslYTsmYDshJwgTmlja25hbWUgc3RhdGUg67OA6rK9XHJcbiAgICAgICAgc2V0SXNDaGFuZ2VOaWNrbmFtZShmYWxzZSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aXNDaGFuZ2VOaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgPyA8Rm9ybT48SW5wdXQgcHJlZml4PXt1c2VyTmlja25hbWV9IHN1ZmZpeD17PEJ1dHRvbiBvbkNsaWNrPXtvbklzQ2hhbmdlTmlja25hbWV9Pu2ZleyduDwvQnV0dG9uPn0gLz48L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA6IDxJbnB1dCBwcmVmaXg9e3VzZXJOaWNrbmFtZX0gc3VmZml4PXs8QnV0dG9uIG9uQ2xpY2s9e29uSXNDaGFuZ2VOaWNrbmFtZX0+67OA6rK9PC9CdXR0b24+fSBkaXNhYmxlZCAvPn1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbi8vIDxGb3JtPjxJbnB1dCBwcmVmaXg9e3VzZXJOaWNrbmFtZX0gc3VmZml4PXs8QnV0dG9uIG9uQ2xpY2s9e29uQ29tcGVsdGVDaGFuZ2VOaWNrbmFtZX0gaHRtbFR5cGU9XCJzdWJtaXRcIj48L0J1dHRvbj59PjwvSW5wdXQ+IDwvRm9ybT5cclxuZXhwb3J0IGRlZmF1bHQgTXlJbmZvOyJdLCJzb3VyY2VSb290IjoiIn0=