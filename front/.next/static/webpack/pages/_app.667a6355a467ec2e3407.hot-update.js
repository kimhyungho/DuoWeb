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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _s = $RefreshSig$();

var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function socailLogInAPI() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      platform = _useSelector.platform,
      accessToken = _useSelector.accessToken;

  var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    baseURL: 'http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/',
    timeout: 1000,
    headers: {
      'Authorization': accessToken
    }
  });
  return instance.post("login/".concat(platform));
}

_s(socailLogInAPI, "XZGrWziZ1VKYfj1rikqidTuPX0U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return call(socailLogInAPI);

        case 3:
          result = _context.sent;
          console.log("된다"); // yield put({
          //     type: 'LOG_IN_SUCCESS',
          //     data: action.data,
          // });

          _context.next = 12;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("안된다.");
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_FAILURE',
            error: action.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsIndhdGNoTG9nSW4iLCJ1c2VyU2FnYSIsInNvY2FpbExvZ0luQVBJIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJwbGF0Zm9ybSIsImFjY2Vzc1Rva2VuIiwiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaGVhZGVycyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJlcnJvciIsInJlc3BvbnNlIiwiZGF0YSIsInRha2VMYXRlc3QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWtCVUEsSzttR0FvQkFDLFU7bUdBSWVDLFE7O0FBMUN6QjtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUFBLHFCQUVZQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZ2QjtBQUFBLE1BRWRDLFFBRmMsZ0JBRWRBLFFBRmM7QUFBQSxNQUVKQyxXQUZJLGdCQUVKQSxXQUZJOztBQUd0QixNQUFNQyxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsV0FBTyxFQUFFLGlFQURpQjtBQUUxQkMsV0FBTyxFQUFFLElBRmlCO0FBRzFCQyxXQUFPLEVBQUU7QUFBRSx1QkFBaUJOO0FBQW5CO0FBSGlCLEdBQWIsQ0FBakI7QUFNQSxTQUFPQyxRQUFRLENBQUNNLElBQVQsaUJBQXVCUixRQUF2QixFQUFQO0FBQ0g7O0dBVlFKLGM7VUFFNkJDLHVEOzs7QUFXdEMsU0FBVUosS0FBVixDQUFnQmdCLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1DLElBQUksQ0FBQ2QsY0FBRCxDQUFWOztBQUZ2QjtBQUVjZSxnQkFGZDtBQUlRQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUpSLENBTVE7QUFDQTtBQUNBO0FBQ0E7O0FBVFI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZUUQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFaUjtBQWFRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsZ0JBREE7QUFFTkMsaUJBQUssRUFBRVAsTUFBTSxDQUFDUSxRQUFQLENBQWdCQztBQUZqQixXQUFELENBQVQ7O0FBYlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVV4QixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNeUIscUVBQVUsQ0FBQyx1QkFBRCxFQUEwQjFCLEtBQTFCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU15Qiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUMzQixVQUFELENBREUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjY3YTYzNTVhNDY3ZWMyZTM0MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5mdW5jdGlvbiBzb2NhaWxMb2dJbkFQSSgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgeyBwbGF0Zm9ybSwgYWNjZXNzVG9rZW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwLycsXHJcbiAgICAgICAgdGltZW91dDogMTAwMCxcclxuICAgICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogYWNjZXNzVG9rZW4gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QoYGxvZ2luLyR7cGxhdGZvcm19YCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc29jYWlsTG9nSW5BUEkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi65Cc64ukXCIpO1xyXG5cclxuICAgICAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgICAgIC8vICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgIC8vICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyViOuQnOuLpC5cIik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcclxuICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoJ1NPQ0lBTF9MT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9