webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./sagas/selectors.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function socialLoginAPI() {// return axios.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/${platform}`,
  // {}, {headers: {Authorization: accessToken}});
}

function logIn(action) {
  var accessToken, platform, result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["accessToken"]);

        case 3:
          accessToken = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["platform"]);

        case 6:
          platform = _context.sent;
          result = axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/".concat(platform), {}, {
            headers: {
              Authorization: accessToken
            }
          });
          console.log("lkkk", result.data); // yield put({
          //     type: 'LOG_IN_SUCCESS',
          //     data: action.data,
          // });

          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log("안된다."); // yield put({
          //     type: 'LOG_IN_FAILURE',
          //     error: action.response.data,
          // });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('SOCIAL_LOG_IN_REQUEST', logIn);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsIndhdGNoTG9nSW4iLCJ1c2VyU2FnYSIsInNvY2lhbExvZ2luQVBJIiwiYWN0aW9uIiwic2VsZWN0Iiwic2VsZWN0b3JzIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsInJlc3VsdCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBWVVBLEs7bUdBMkJBQyxVO21HQUllQyxROztBQTNDekI7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGNBQVQsR0FBMEIsQ0FFdEI7QUFDQTtBQUVIOztBQUdELFNBQVVILEtBQVYsQ0FBZ0JJLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHNEIsaUJBQU1DLGlFQUFNLENBQUNDLHNEQUFELENBQVo7O0FBSDVCO0FBR2NDLHFCQUhkO0FBQUE7QUFJeUIsaUJBQU1GLGlFQUFNLENBQUNDLG1EQUFELENBQVo7O0FBSnpCO0FBSWNFLGtCQUpkO0FBTWNDLGdCQU5kLEdBTXVCQyw0Q0FBSyxDQUFDQyxJQUFOLCtFQUFrRkgsUUFBbEYsR0FDWCxFQURXLEVBQ1A7QUFBRUksbUJBQU8sRUFBRTtBQUFFQywyQkFBYSxFQUFFTjtBQUFqQjtBQUFYLFdBRE8sQ0FOdkI7QUFTUU8saUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JOLE1BQU0sQ0FBQ08sSUFBM0IsRUFUUixDQVlRO0FBQ0E7QUFDQTtBQUNBOztBQWZSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJRRixpQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQW5CUixDQW9CUTtBQUNBO0FBQ0E7QUFDQTs7QUF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkJBLFNBQVVkLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1nQixxRUFBVSxDQUFDLHVCQUFELEVBQTBCakIsS0FBMUIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTWdCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2xCLFVBQUQsQ0FERSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zM2E1MWI4OGJjMGUwOWJiZjJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHNlbGVjdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJ1xyXG5cclxuZnVuY3Rpb24gc29jaWFsTG9naW5BUEkoKSB7XHJcblxyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwLyR7cGxhdGZvcm19YCxcclxuICAgIC8vIHt9LCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VufX0pO1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0geWllbGQgc2VsZWN0KHNlbGVjdG9ycy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSB5aWVsZCBzZWxlY3Qoc2VsZWN0b3JzLnBsYXRmb3JtKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aC8ke3BsYXRmb3JtfWAsXHJcbiAgICAgICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4gfSB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsa2trXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgLy8gICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyViOuQnOuLpC5cIik7XHJcbiAgICAgICAgLy8geWllbGQgcHV0KHtcclxuICAgICAgICAvLyAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcclxuICAgICAgICAvLyAgICAgZXJyb3I6IGFjdGlvbi5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1NPQ0lBTF9MT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9