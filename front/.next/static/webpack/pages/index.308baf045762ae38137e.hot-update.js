webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignUpForm.js":
/*!**********************************!*\
  !*** ./components/SignUpForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\SignUpForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SignUpForm = function SignUpForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      accessToken = _useSelector.accessToken,
      platform = _useSelector.platform;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nickname = _useState[0],
      setNickname = _useState[1];

  var onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setNickname(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var data = {
      accessToken: accessToken,
      platform: platform,
      nickname: nickname
    };
    dispatch(loginRequestAction(data));
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
    value: nickname,
    onChange: onChangeNickname,
    addonBefore: "\uB2C9\uB124\uC784",
    enterButton: "\uD68C\uC6D0\uAC00\uC785",
    onSearch: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }));
};

_s(SignUpForm, "+26Mt3ketwkVJ/hefO6kDKliLPU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = SignUpForm;
/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

var _c;

$RefreshReg$(_c, "SignUpForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtLmpzIl0sIm5hbWVzIjpbIlNpZ25VcEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwidXNlU3RhdGUiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJkYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBR3JCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBSHFCLHFCQUlhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUp4QjtBQUFBLE1BSWJDLFdBSmEsZ0JBSWJBLFdBSmE7QUFBQSxNQUlBQyxRQUpBLGdCQUlBQSxRQUpBOztBQUFBLGtCQUtXQyxzREFBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQSxNQUtkQyxRQUxjO0FBQUEsTUFLSkMsV0FMSTs7QUFPckIsTUFBTUMsZ0JBQWdCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDSCxlQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLE1BQU1DLFFBQVEsR0FBR0oseURBQVcsQ0FBQyxZQUFNO0FBQy9CLFFBQU1LLElBQUksR0FBRztBQUFFWCxpQkFBVyxFQUFFQSxXQUFmO0FBQTRCQyxjQUFRLEVBQUVBLFFBQXRDO0FBQWdERSxjQUFRLEVBQUVBO0FBQTFELEtBQWI7QUFDQVIsWUFBUSxDQUFDaUIsa0JBQWtCLENBQUNELElBQUQsQ0FBbkIsQ0FBUjtBQUNILEdBSDJCLENBQTVCO0FBS0EsU0FDSSxNQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBDQUFELENBQU8sTUFBUDtBQUNJLFNBQUssRUFBRVIsUUFEWDtBQUVJLFlBQVEsRUFBRUUsZ0JBRmQ7QUFHSSxlQUFXLEVBQUMsb0JBSGhCO0FBSUksZUFBVyxFQUFDLDBCQUpoQjtBQUtJLFlBQVEsRUFBRUssUUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQVlILENBNUJEOztHQUFNaEIsVTtVQUdlRSx1RCxFQUNpQkMsdUQ7OztLQUpoQ0gsVTtBQThCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA4YmFmMDQ1NzYyYWUzODEzN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBTaWduVXBGb3JtID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGFjY2Vzc1Rva2VuLCBwbGF0Zm9ybSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgY29uc3QgW25pY2tuYW1lLCBzZXROaWNrbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VOaWNrbmFtZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0Tmlja25hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcGxhdGZvcm06IHBsYXRmb3JtLCBuaWNrbmFtZTogbmlja25hbWUgfTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiXHJcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvbj1cIu2ajOybkOqwgOyehVwiXHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TdWJtaXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=