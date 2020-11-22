webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, loginRequestAction, logoutRequestAction, signUpRequestAction, signOutRequestAction, changeNicknameRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_REQUEST", function() { return SIGN_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return SIGN_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_FAILURE", function() { return SIGN_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequestAction", function() { return signUpRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutRequestAction", function() { return signOutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNicknameRequestAction", function() { return changeNicknameRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");


var _initialState;


var initialState = (_initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "logInError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signOutLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signOutDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signOutError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "changeNicknameLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "changeNicknameDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "changeNicknameError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "me", {
  userId: null,
  nickname: null,
  userToken: null,
  accessToken: null,
  platform: null
}), _initialState);
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
var SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
var SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var signUpRequestAction = function signUpRequestAction(data) {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};
var signOutRequestAction = function signOutRequestAction(data) {
  return {
    type: SIGN_OUT_REQUEST,
    data: data
  };
};
var changeNicknameRequestAction = function changeNicknameRequestAction(data) {
  return {
    type: CHANGE_NICKNAME_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        draft.me.accessToken = action.data.accessToken;
        draft.me.platform = action.data.platform;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInError = null;
        draft.logInDone = true;
        draft.me.userId = action.data.userId;
        draft.me.nickname = action.data.nickname;
        draft.me.userToken = action.data.userToken;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logInDone = false;
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me.userId = null;
        draft.me.nickname = null;
        draft.me.userToken = null;
        draft.me.accessToken = null;
        draft.me.platform = null;
        break;

      case SIGN_UP_REQUEST:
        draft.me.userId = action.data.userId;
        draft.me.nickname = action.data.nickname;
        draft.me.userToken = action.data.userToken;
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.logInError = null;
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case SIGN_OUT_REQUEST:
        draft.signOutLoading = true;
        draft.signOutError = null;
        draft.signOutDone = false;
        break;

      case SIGN_OUT_SUCCESS:
        draft.signOutLoading = false;
        draft.signOutDone = true;
        break;

      case SIGN_OUT_FAILURE:
        draft.signOutLoading = false;
        draft.signOutError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me.nickname = action.data.nickname;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJ1c2VySWQiLCJuaWNrbmFtZSIsInVzZXJUb2tlbiIsImFjY2Vzc1Rva2VuIiwicGxhdGZvcm0iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX09VVF9SRVFVRVNUIiwiU0lHTl9PVVRfU1VDQ0VTUyIsIlNJR05fT1VUX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwic2lnbk91dFJlcXVlc3RBY3Rpb24iLCJjaGFuZ2VOaWNrbmFtZVJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJtZSIsImVycm9yIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRXJyb3IiLCJzaWduVXBEb25lIiwic2lnbk91dExvYWRpbmciLCJzaWduT3V0RXJyb3IiLCJzaWduT3V0RG9uZSIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQ08sY0FBTixHQUF1QixLQUF2QjtBQUNBUCxhQUFLLENBQUNRLFlBQU4sR0FBcUJWLE1BQU0sQ0FBQ0ksS0FBNUI7QUFDQTs7QUFDSixXQUFLaEIsdUJBQUw7QUFDSWMsYUFBSyxDQUFDVSxxQkFBTixHQUE4QixJQUE5QjtBQUNBVixhQUFLLENBQUNXLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0FYLGFBQUssQ0FBQ1ksbUJBQU4sR0FBNEIsSUFBNUI7QUFDQTs7QUFDSixXQUFLekIsdUJBQUw7QUFDSWEsYUFBSyxDQUFDVSxxQkFBTixHQUE4QixLQUE5QjtBQUNBVixhQUFLLENBQUNXLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0FYLGFBQUssQ0FBQ0MsRUFBTixDQUFTL0IsUUFBVCxHQUFvQjRCLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZcEIsUUFBaEM7QUFDQTs7QUFDSixXQUFLa0IsdUJBQUw7QUFDSVksYUFBSyxDQUFDVSxxQkFBTixHQUE4QixLQUE5QjtBQUNBVixhQUFLLENBQUNZLG1CQUFOLEdBQTRCZCxNQUFNLENBQUNJLEtBQW5DO0FBQ0E7O0FBQ0o7QUFDSTtBQWhGUjtBQWtGSCxHQW5Gd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUFxRmVOLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5MTI4Nzk3YTRiOWM1NmNhZjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgc2lnbk91dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnbk91dERvbmU6IGZhbHNlLFxyXG4gICAgc2lnbk91dEVycm9yOiBudWxsLCAgICBcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIG1lOiB7XHJcbiAgICAgICAgdXNlcklkOiBudWxsLFxyXG4gICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICAgIHVzZXJUb2tlbjogbnVsbCxcclxuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgICBwbGF0Zm9ybTogbnVsbCxcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9SRVFVRVNUID0gJ1NJR05fT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfU1VDQ0VTUyA9ICdTSUdOX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX0ZBSUxVUkUgPSAnU0lHTl9PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduT3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTl9PVVRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBhY3Rpb24uZGF0YS5wbGF0Zm9ybTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=