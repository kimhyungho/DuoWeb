webpackHotUpdate_N_E("pages/index",{

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
        draft.me.accessToken = action.data;
        draft.me.platform = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJ1c2VySWQiLCJuaWNrbmFtZSIsInVzZXJUb2tlbiIsImFjY2Vzc1Rva2VuIiwicGxhdGZvcm0iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibWUiLCJlcnJvciIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcEVycm9yIiwic2lnblVwRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZO0FBQ3JCQyxjQUFZLEVBQUUsS0FETztBQUVyQkMsV0FBUyxFQUFFLEtBRlU7QUFHckJDLFlBQVUsRUFBRSxJQUhTO0FBSXJCQyxlQUFhLEVBQUUsS0FKTTtBQUtyQkMsWUFBVSxFQUFFO0FBTFMsMEhBTVQsSUFOUyw2SEFPTixLQVBNLDBIQVFULEtBUlMsMkhBU1IsSUFUUSxrSEFVakI7QUFDQUMsUUFBTSxFQUFFLElBRFI7QUFFQUMsVUFBUSxFQUFFLElBRlY7QUFHQUMsV0FBUyxFQUFFLElBSFg7QUFJQUMsYUFBVyxFQUFFLElBSmI7QUFLQUMsVUFBUSxFQUFFO0FBTFYsQ0FWaUIs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QUFyQjtBQUNBcUIsYUFBSyxDQUFDQyxFQUFOLENBQVNyQixXQUFULEdBQXVCLElBQXZCO0FBQ0FvQixhQUFLLENBQUNDLEVBQU4sQ0FBU3BCLFFBQVQsR0FBb0IsSUFBcEI7QUFDQTs7QUFDSixXQUFLTyxlQUFMO0FBQ0lZLGFBQUssQ0FBQ0MsRUFBTixDQUFTeEIsTUFBVCxHQUFrQnFCLE1BQU0sQ0FBQ04sSUFBUCxDQUFZZixNQUE5QjtBQUNBdUIsYUFBSyxDQUFDQyxFQUFOLENBQVN2QixRQUFULEdBQW9Cb0IsTUFBTSxDQUFDTixJQUFQLENBQVlkLFFBQWhDO0FBQ0FzQixhQUFLLENBQUNDLEVBQU4sQ0FBU3RCLFNBQVQsR0FBcUJtQixNQUFNLENBQUNOLElBQVAsQ0FBWWIsU0FBakM7QUFDQXFCLGFBQUssQ0FBQ0ksYUFBTixHQUFzQixJQUF0QjtBQUNBSixhQUFLLENBQUNLLFdBQU4sR0FBb0IsSUFBcEI7QUFDQUwsYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7O0FBQ0osV0FBS2pCLGVBQUw7QUFDSVcsYUFBSyxDQUFDMUIsVUFBTixHQUFtQixJQUFuQjtBQUNBMEIsYUFBSyxDQUFDSSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FKLGFBQUssQ0FBQ00sVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNKLFdBQUtoQixlQUFMO0FBQ0lVLGFBQUssQ0FBQ0ksYUFBTixHQUFzQixLQUF0QjtBQUNBSixhQUFLLENBQUNLLFdBQU4sR0FBb0JQLE1BQU0sQ0FBQ0ksS0FBM0I7QUFDQTs7QUFDSjtBQUNJO0FBcERSO0FBc0RILEdBdkR3RCxDQUF6QztBQUFBLENBQWhCOztBQXlEZU4sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWY3Mzk4NGU1ODc3MDNhMmRhZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBtZToge1xyXG4gICAgICAgIHVzZXJJZDogbnVsbCxcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgICB1c2VyVG9rZW46IG51bGwsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICAgICAgcGxhdGZvcm06IG51bGwsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9