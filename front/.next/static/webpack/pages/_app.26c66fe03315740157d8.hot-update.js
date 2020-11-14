webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, loginRequestAction, logoutRequestAction, signUpRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequestAction", function() { return signUpRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");


var _initialState;


var initialState = (_initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "logInError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "signUpError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "me", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJ1c2VySWQiLCJuaWNrbmFtZSIsInVzZXJUb2tlbiIsImFjY2Vzc1Rva2VuIiwicGxhdGZvcm0iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibWUiLCJlcnJvciIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcEVycm9yIiwic2lnblVwRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZO0FBQ3JCQyxjQUFZLEVBQUUsS0FETztBQUVyQkMsV0FBUyxFQUFFLEtBRlU7QUFHckJDLFlBQVUsRUFBRSxJQUhTO0FBSXJCQyxlQUFhLEVBQUUsS0FKTTtBQUtyQkMsWUFBVSxFQUFFO0FBTFMsMEhBTVQsSUFOUyw2SEFPTixLQVBNLDBIQVFULEtBUlMsMkhBU1IsSUFUUSxrSEFVakI7QUFDQUMsUUFBTSxFQUFFLElBRFI7QUFFQUMsVUFBUSxFQUFFLElBRlY7QUFHQUMsV0FBUyxFQUFFLElBSFg7QUFJQUMsYUFBVyxFQUFFLElBSmI7QUFLQUMsVUFBUSxFQUFFO0FBTFYsQ0FWaUIs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QUFOLENBQVN0QixTQUFULEdBQXFCLElBQXJCO0FBQ0FxQixhQUFLLENBQUNDLEVBQU4sQ0FBU3JCLFdBQVQsR0FBdUIsSUFBdkI7QUFDQW9CLGFBQUssQ0FBQ0MsRUFBTixDQUFTcEIsUUFBVCxHQUFvQixJQUFwQjtBQUNBOztBQUNKLFdBQUtPLGVBQUw7QUFDSVksYUFBSyxDQUFDQyxFQUFOLENBQVN4QixNQUFULEdBQWtCcUIsTUFBTSxDQUFDTixJQUFQLENBQVlmLE1BQTlCO0FBQ0F1QixhQUFLLENBQUNDLEVBQU4sQ0FBU3ZCLFFBQVQsR0FBb0JvQixNQUFNLENBQUNOLElBQVAsQ0FBWWQsUUFBaEM7QUFDQXNCLGFBQUssQ0FBQ0MsRUFBTixDQUFTdEIsU0FBVCxHQUFxQm1CLE1BQU0sQ0FBQ04sSUFBUCxDQUFZYixTQUFqQztBQUNBcUIsYUFBSyxDQUFDSSxhQUFOLEdBQXNCLElBQXRCO0FBQ0FKLGFBQUssQ0FBQ0ssV0FBTixHQUFvQixJQUFwQjtBQUNBTCxhQUFLLENBQUNNLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFDSixXQUFLakIsZUFBTDtBQUNJVyxhQUFLLENBQUMxQixVQUFOLEdBQW1CLElBQW5CO0FBQ0EwQixhQUFLLENBQUNJLGFBQU4sR0FBc0IsS0FBdEI7QUFDQUosYUFBSyxDQUFDTSxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7O0FBQ0osV0FBS2hCLGVBQUw7QUFDSVUsYUFBSyxDQUFDSSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FKLGFBQUssQ0FBQ0ssV0FBTixHQUFvQlAsTUFBTSxDQUFDSSxLQUEzQjtBQUNBOztBQUNKO0FBQ0k7QUFwRFI7QUFzREgsR0F2RHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBeURlTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI2YzY2ZmUwMzMxNTc0MDE1N2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgbWU6IHtcclxuICAgICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gYWN0aW9uLmRhdGEucGxhdGZvcm07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==