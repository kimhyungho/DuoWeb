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


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
  return state.user;
}),
    platform = _useSelector.platform,
    accessToken = _useSelector.accessToken; // // function socailLogInAPI() {
// //     const instance = axios.create({
// //         baseURL: 'http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/',
// //         timeout: 1000,
// //         headers: { 'Authorization': accessToken }
// //     });
// //     return instance.post(`login/${platform}`);
// // }
// function* logIn(action) {
//     try {
//         // const result = yield call(socailLogInAPI());
//         Log.d('되는건가 try');
//         // yield put({
//         //     type: 'LOG_IN_SUCCESS',
//         //     data: action.data,
//         // });
//     } catch (err) {
//         Log.error('안되는 건가 catch');
//         yield put({
//             type: 'LOG_IN_FAILURE',
//             error: action.response.data,
//         });
//     }
// }
// function* watchLogIn() {
//     yield takeLatest('SOCIAL_LOG_IN_REQUEST',);
// }


function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VyU2FnYSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicGxhdGZvcm0iLCJhY2Nlc3NUb2tlbiIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBMEN5QkEsUTs7QUExQ3pCO0FBQ0E7QUFDQTs7bUJBRWtDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsQ0FBRCxDO0lBQXJDQyxRLGdCQUFBQSxRO0lBQVVDLFcsZ0JBQUFBLFcsRUFFbEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFVTCxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNTSw4REFBRyxDQUFDLEVBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVmODc2ZjczNTdiNTE4N2JhNjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCB7IHBsYXRmb3JtLCBhY2Nlc3NUb2tlbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbi8vIC8vIGZ1bmN0aW9uIHNvY2FpbExvZ0luQVBJKCkge1xyXG5cclxuLy8gLy8gICAgIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuLy8gLy8gICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvJyxcclxuLy8gLy8gICAgICAgICB0aW1lb3V0OiAxMDAwLFxyXG4vLyAvLyAgICAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBhY2Nlc3NUb2tlbiB9XHJcbi8vIC8vICAgICB9KTtcclxuXHJcbi8vIC8vICAgICByZXR1cm4gaW5zdGFuY2UucG9zdChgbG9naW4vJHtwbGF0Zm9ybX1gKTtcclxuLy8gLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzb2NhaWxMb2dJbkFQSSgpKTtcclxuICAgICAgICBcclxuLy8gICAgICAgICBMb2cuZCgn65CY64qU6rG06rCAIHRyeScpO1xyXG5cclxuLy8gICAgICAgICAvLyB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICAgIC8vICAgICB0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG4vLyAgICAgICAgIC8vICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuLy8gICAgICAgICAvLyB9KTtcclxuXHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgICBMb2cuZXJyb3IoJ+yViOuQmOuKlCDqsbTqsIAgY2F0Y2gnKTtcclxuLy8gICAgICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4vLyAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4vLyAgICAgeWllbGQgdGFrZUxhdGVzdCgnU09DSUFMX0xPR19JTl9SRVFVRVNUJywpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9