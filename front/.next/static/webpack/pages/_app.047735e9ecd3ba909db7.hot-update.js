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





function socialLoginAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/".concat(platform), {}, {
    headers: {
      Authorization: accessToken
    }
  });
}

function logIn(action) {
  var _accessToken, _platform, result;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["accessToken"]);

        case 3:
          _accessToken = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["platform"]);

        case 6:
          _platform = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(socialLoginAPI);

        case 9:
          result = _context.sent;
          console.log("lkkk", result); // yield put({
          //     type: 'LOG_IN_SUCCESS',
          //     data: action.data,
          // });

          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log("안된다."); // yield put({
          //     type: 'LOG_IN_FAILURE',
          //     error: action.response.data,
          // });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsIndhdGNoTG9nSW4iLCJ1c2VyU2FnYSIsInNvY2lhbExvZ2luQVBJIiwiYXhpb3MiLCJwb3N0IiwicGxhdGZvcm0iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFjY2Vzc1Rva2VuIiwiYWN0aW9uIiwic2VsZWN0Iiwic2VsZWN0b3JzIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBWVVBLEs7bUdBeUJBQyxVO21HQUllQyxROztBQXpDekI7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGNBQVQsR0FBMEI7QUFFdEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTiwwRUFBNkVDLFFBQTdFLEdBQ1AsRUFETyxFQUNIO0FBQUNDLFdBQU8sRUFBRTtBQUFDQyxtQkFBYSxFQUFFQztBQUFoQjtBQUFWLEdBREcsQ0FBUDtBQUdIOztBQUdELFNBQVVULEtBQVYsQ0FBZ0JVLE1BQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzRCLGlCQUFNQyxpRUFBTSxDQUFDQyxzREFBRCxDQUFaOztBQUg1QjtBQUdjSCxzQkFIZDtBQUFBO0FBSXlCLGlCQUFNRSxpRUFBTSxDQUFDQyxtREFBRCxDQUFaOztBQUp6QjtBQUljTixtQkFKZDtBQUFBO0FBTXVCLGlCQUFNTywrREFBSSxDQUFDVixjQUFELENBQVY7O0FBTnZCO0FBTWNXLGdCQU5kO0FBT1FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixNQUFwQixFQVBSLENBVVE7QUFDQTtBQUNBO0FBQ0E7O0FBYlI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQlFDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBakJSLENBa0JRO0FBQ0E7QUFDQTtBQUNBOztBQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF5QkEsU0FBVWYsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWdCLHFFQUFVLENBQUMsdUJBQUQsRUFBMEJqQixLQUExQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNZ0IsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDbEIsVUFBRCxDQURFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA0NzczNWU5ZWNkM2JhOTA5ZGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgc2VsZWN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnXHJcblxyXG5mdW5jdGlvbiBzb2NpYWxMb2dpbkFQSSgpIHtcclxuXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvJHtwbGF0Zm9ybX1gLFxyXG4gICAge30sIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW59fSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB5aWVsZCBzZWxlY3Qoc2VsZWN0b3JzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IHlpZWxkIHNlbGVjdChzZWxlY3RvcnMucGxhdGZvcm0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc29jaWFsTG9naW5BUEkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGtra1wiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgICAgIC8vICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgIC8vICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLslYjrkJzri6QuXCIpO1xyXG4gICAgICAgIC8vIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgLy8gICAgIGVycm9yOiBhY3Rpb24ucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdTT0NJQUxfTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==