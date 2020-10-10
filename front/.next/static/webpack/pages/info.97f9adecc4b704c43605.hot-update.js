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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userNickname),
      nickname = _useState2[0],
      setNickname = _useState2[1];

  var onIsChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsChangeNickname(true);
  });
  var onCompelteChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 받아와서 Nickname state 변경
    setIsChangeNickname(false);
  });
  var onSetNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setNickname(e.target.value);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isChangeNickname ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: onSetNickname,
    type: "text",
    prefix: userNickname,
    suffix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onCompelteChangeNickname,
      htmlType: "submit",
      type: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 95
      }
    }, "\uD655\uC778"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: userNickname,
    suffix: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onIsChangeNickname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 56
      }
    }, "\uBCC0\uACBD"),
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }));
}; // <Form><Input prefix={userNickname} suffix={<Button onClick={onCompelteChangeNickname} htmlType="submit"></Button>}></Input> </Form>


_s(MyInfo, "4zjS0G5ZsvSq5zPlU2SMmow9dnw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUluZm8uanMiXSwibmFtZXMiOlsiTXlJbmZvIiwidXNlck5pY2tuYW1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImlzQ2hhbmdlTmlja25hbWUiLCJzZXRJc0NoYW5nZU5pY2tuYW1lIiwibmlja25hbWUiLCJzZXROaWNrbmFtZSIsIm9uSXNDaGFuZ2VOaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwib25Db21wZWx0ZUNoYW5nZU5pY2tuYW1lIiwib25TZXROaWNrbmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQixNQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxZQUF0QjtBQUFBLEdBQUQsQ0FBaEM7O0FBRmlCLGtCQUcrQkksc0RBQVEsQ0FBQyxLQUFELENBSHZDO0FBQUEsTUFHVkMsZ0JBSFU7QUFBQSxNQUdRQyxtQkFIUjs7QUFBQSxtQkFLZUYsc0RBQVEsQ0FBQ0osWUFBRCxDQUx2QjtBQUFBLE1BS1ZPLFFBTFU7QUFBQSxNQUtBQyxXQUxBOztBQU1qQixNQUFNQyxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3pDSix1QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQ0gsR0FGcUMsQ0FBdEM7QUFJQSxNQUFNSyx3QkFBd0IsR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQy9DO0FBQ0FKLHVCQUFtQixDQUFDLEtBQUQsQ0FBbkI7QUFDSCxHQUgyQyxDQUE1QztBQUtBLE1BQU1NLGFBQWEsR0FBR0YseURBQVcsQ0FBQyxVQUFDRyxDQUFELEVBQU87QUFDckNMLGVBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILEdBRmdDLENBQWpDO0FBSUEsU0FDSSxtRUFDS1YsZ0JBQWdCLEdBQ1gsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFlBQVEsRUFBRU8sYUFBakI7QUFBZ0MsUUFBSSxFQUFDLE1BQXJDO0FBQTRDLFVBQU0sRUFBRVosWUFBcEQ7QUFBa0UsVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVXLHdCQUFqQjtBQUEyQyxjQUFRLEVBQUMsUUFBcEQ7QUFBNkQsVUFBSSxFQUFDLFNBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURXLEdBSVgsTUFBQywwQ0FBRDtBQUFPLFVBQU0sRUFBRVgsWUFBZjtBQUE2QixVQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRVMsa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXJDO0FBQXVGLFlBQVEsTUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxWLENBREo7QUFVSCxDQTdCRCxDLENBOEJBOzs7R0E5Qk1WLE07VUFFbUJFLHVEOzs7S0FGbkJGLE07QUErQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZm8uOTdmOWFkZWNjNGI3MDRjNDM2MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuY29uc3QgTXlJbmZvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHVzZXJOaWNrbmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyTmlja25hbWUpO1xyXG4gICAgY29uc3QgW2lzQ2hhbmdlTmlja25hbWUsIHNldElzQ2hhbmdlTmlja25hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbbmlja25hbWUsIHNldE5pY2tuYW1lXSA9IHVzZVN0YXRlKHVzZXJOaWNrbmFtZSk7XHJcbiAgICBjb25zdCBvbklzQ2hhbmdlTmlja25hbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNDaGFuZ2VOaWNrbmFtZSh0cnVlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25Db21wZWx0ZUNoYW5nZU5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIC8vIOuwm+yVhOyZgOyEnCBOaWNrbmFtZSBzdGF0ZSDrs4Dqsr1cclxuICAgICAgICBzZXRJc0NoYW5nZU5pY2tuYW1lKGZhbHNlKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb25TZXROaWNrbmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0NoYW5nZU5pY2tuYW1lXHJcbiAgICAgICAgICAgICAgICA/IDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17b25TZXROaWNrbmFtZX0gdHlwZT1cInRleHRcIiBwcmVmaXg9e3VzZXJOaWNrbmFtZX0gc3VmZml4PXs8QnV0dG9uIG9uQ2xpY2s9e29uQ29tcGVsdGVDaGFuZ2VOaWNrbmFtZX0gaHRtbFR5cGU9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiPu2ZleyduDwvQnV0dG9uPn0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDogPElucHV0IHByZWZpeD17dXNlck5pY2tuYW1lfSBzdWZmaXg9ezxCdXR0b24gb25DbGljaz17b25Jc0NoYW5nZU5pY2tuYW1lfT7rs4Dqsr08L0J1dHRvbj59IGRpc2FibGVkIC8+fVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuLy8gPEZvcm0+PElucHV0IHByZWZpeD17dXNlck5pY2tuYW1lfSBzdWZmaXg9ezxCdXR0b24gb25DbGljaz17b25Db21wZWx0ZUNoYW5nZU5pY2tuYW1lfSBodG1sVHlwZT1cInN1Ym1pdFwiPjwvQnV0dG9uPn0+PC9JbnB1dD4gPC9Gb3JtPlxyXG5leHBvcnQgZGVmYXVsdCBNeUluZm87Il0sInNvdXJjZVJvb3QiOiIifQ==