webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, getAccessToken, socailLoginRequest, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
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
var getAccessToken = function getAccessToken(state) {
  return state.user.accessToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VySWQiLCJuaWNrbmFtZSIsInVzZXJUb2tlbiIsImFjY2Vzc1Rva2VuIiwicGxhdGZvcm0iLCJnZXRBY2Nlc3NUb2tlbiIsInN0YXRlIiwidXNlciIsInNvY2FpbExvZ2luUmVxdWVzdCIsInR5cGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJ1c2VyTmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxRQUFNLEVBQUUsSUFEZ0I7QUFFeEJDLFVBQVEsRUFBRSxJQUZjO0FBR3hCQyxXQUFTLEVBQUUsSUFIYTtBQUl4QkMsYUFBVyxFQUFFLElBSlc7QUFLeEJDLFVBQVEsRUFBRTtBQUxjLENBQXJCO0FBUUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdKLFdBQXRCO0FBQUEsQ0FBdkI7QUFFQSxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLFdBQUQsRUFBY0MsUUFBZCxFQUEyQjtBQUN6RCxTQUFPO0FBQ0hLLFFBQUksRUFBRyx1QkFESjtBQUVITixlQUFXLEVBQVhBLFdBRkc7QUFHSEMsWUFBUSxFQUFSQTtBQUhHLEdBQVA7QUFLSCxDQU5NO0FBUUEsSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDeEMsU0FBTztBQUNIRixRQUFJLEVBQUUsZ0JBREg7QUFFSEUsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3JDLFNBQU87QUFDSEgsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk07O0FBTVAsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ1AsS0FBaUMsdUVBQXpCUCxZQUF5QjtBQUFBLE1BQVhlLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUssdUJBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJSCxtQkFBVyxFQUFFVyxNQUFNLENBQUNYLFdBRnhCO0FBR0lDLGdCQUFRLEVBQUVVLE1BQU0sQ0FBQ1Y7QUFIckI7O0FBS0EsU0FBSyxnQkFBTDtBQUNBLDZDQUNPRSxLQURQO0FBRUlOLGNBQU0sRUFBRWMsTUFBTSxDQUFDSCxJQUFQLENBQVlYLE1BRnhCO0FBR0lDLGdCQUFRLEVBQUVhLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZSSxZQUgxQjtBQUlJYixpQkFBUyxFQUFFWSxNQUFNLENBQUNILElBQVAsQ0FBWVQ7QUFKM0I7O0FBTUosU0FBSyxpQkFBTDtBQUNJLDZDQUNPSSxLQURQO0FBRUlOLGNBQU0sRUFBRSxJQUZaO0FBR0lDLGdCQUFRLEVBQUUsSUFIZDtBQUlJQyxpQkFBUyxFQUFFLElBSmY7QUFLSUMsbUJBQVcsRUFBRSxJQUxqQjtBQU1JQyxnQkFBUSxFQUFFO0FBTmQ7O0FBUUo7QUFDSSxhQUFPRSxLQUFQO0FBeEJSO0FBMEJILENBM0JEOztBQTZCZU8sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNzY4MGI0N2E0ZmI5N2Q3ZDdlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXJJZDogbnVsbCxcclxuICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICBwbGF0Zm9ybTogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmFjY2Vzc1Rva2VuO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvY2FpbExvZ2luUmVxdWVzdCA9IChhY2Nlc3NUb2tlbiwgcGxhdGZvcm0pID0+IHtcclxuICAgIHJldHVybiB7ICAgIFxyXG4gICAgICAgIHR5cGUgOiAnU09DSUFMX0xPR19JTl9SRVFVRVNUJyxcclxuICAgICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgICBwbGF0Zm9ybSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUX1JFUVVFU1QnLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTT0NJQUxfTE9HX0lOX1JFUVVFU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWN0aW9uLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm06IGFjdGlvbi5wbGF0Zm9ybSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdMT0dfSU5fU1VDQ0VTUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogYWN0aW9uLmRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IGFjdGlvbi5kYXRhLnVzZXJOaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJUb2tlbjogYWN0aW9uLmRhdGEudXNlclRva2VuLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfUkVRVUVTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=