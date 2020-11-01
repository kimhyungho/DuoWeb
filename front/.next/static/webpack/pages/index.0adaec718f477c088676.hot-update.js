webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, socailLoginRequest, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socailLoginRequest", function() { return socailLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  userId: null,
  nickname: null,
  userToken: null,
  accessToken: null,
  platform: null
};
var socailLoginRequest = function socailLoginRequest(accessToken, platform) {
  return {
    type: 'SOCIAL_LOG_IN_REQUEST',
    accessToken: accessToken,
    platform: platform
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: 'LOG_IN_REQUEST',
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: 'LOG_OUT_REQUEST'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SOCIAL_LOG_IN_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        accessToken: action.accessToken,
        platform: action.platform
      });

    case 'LOG_IN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: action.data.userId,
        nickname: action.data.userNickname,
        userToken: action.data.userToken
      });

    case 'LOG_OUT_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: null,
        nickname: null,
        userToken: null,
        accessToken: null,
        platform: null
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VySWQiLCJuaWNrbmFtZSIsInVzZXJUb2tlbiIsImFjY2Vzc1Rva2VuIiwicGxhdGZvcm0iLCJzb2NhaWxMb2dpblJlcXVlc3QiLCJ0eXBlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VyTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFFBQU0sRUFBRSxJQURnQjtBQUV4QkMsVUFBUSxFQUFFLElBRmM7QUFHeEJDLFdBQVMsRUFBRSxJQUhhO0FBSXhCQyxhQUFXLEVBQUUsSUFKVztBQUt4QkMsVUFBUSxFQUFFO0FBTGMsQ0FBckI7QUFTQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNGLFdBQUQsRUFBY0MsUUFBZCxFQUEyQjtBQUN6RCxTQUFPO0FBQ0hFLFFBQUksRUFBRyx1QkFESjtBQUVISCxlQUFXLEVBQVhBLFdBRkc7QUFHSEMsWUFBUSxFQUFSQTtBQUhHLEdBQVA7QUFLSCxDQU5NO0FBUUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDeEMsU0FBTztBQUNIRixRQUFJLEVBQUUsZ0JBREg7QUFFSEUsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3JDLFNBQU87QUFDSEgsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk07O0FBTVAsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCWixZQUF5QjtBQUFBLE1BQVhhLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ04sSUFBZjtBQUNJLFNBQUssdUJBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJUixtQkFBVyxFQUFFUyxNQUFNLENBQUNULFdBRnhCO0FBR0lDLGdCQUFRLEVBQUVRLE1BQU0sQ0FBQ1I7QUFIckI7O0FBS0EsU0FBSyxnQkFBTDtBQUNBLDZDQUNPTyxLQURQO0FBRUlYLGNBQU0sRUFBRVksTUFBTSxDQUFDSixJQUFQLENBQVlSLE1BRnhCO0FBR0lDLGdCQUFRLEVBQUVXLE1BQU0sQ0FBQ0osSUFBUCxDQUFZSyxZQUgxQjtBQUlJWCxpQkFBUyxFQUFFVSxNQUFNLENBQUNKLElBQVAsQ0FBWU47QUFKM0I7O0FBTUosU0FBSyxpQkFBTDtBQUNJLDZDQUNPUyxLQURQO0FBRUlYLGNBQU0sRUFBRSxJQUZaO0FBR0lDLGdCQUFRLEVBQUUsSUFIZDtBQUlJQyxpQkFBUyxFQUFFLElBSmY7QUFLSUMsbUJBQVcsRUFBRSxJQUxqQjtBQU1JQyxnQkFBUSxFQUFFO0FBTmQ7O0FBUUo7QUFDSSxhQUFPTyxLQUFQO0FBeEJSO0FBMEJILENBM0JEOztBQTZCZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGFkYWVjNzE4ZjQ3N2MwODg2NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VySWQ6IG51bGwsXHJcbiAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgIHVzZXJUb2tlbjogbnVsbCxcclxuICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgcGxhdGZvcm06IG51bGwsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc29jYWlsTG9naW5SZXF1ZXN0ID0gKGFjY2Vzc1Rva2VuLCBwbGF0Zm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuIHsgICAgXHJcbiAgICAgICAgdHlwZSA6ICdTT0NJQUxfTE9HX0lOX1JFUVVFU1QnLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIHBsYXRmb3JtLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NPQ0lBTF9MT0dfSU5fUkVRVUVTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY3Rpb24uYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybTogYWN0aW9uLnBsYXRmb3JtLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0xPR19JTl9TVUNDRVNTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBhY3Rpb24uZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogYWN0aW9uLmRhdGEudXNlck5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlclRva2VuOiBhY3Rpb24uZGF0YS51c2VyVG9rZW4sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9SRVFVRVNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB1c2VyVG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==