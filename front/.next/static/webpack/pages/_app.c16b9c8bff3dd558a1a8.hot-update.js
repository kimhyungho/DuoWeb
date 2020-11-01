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
          }).then(function (response) {
            return response.data.userToken;
          });
          console.log("lkkk", result); // yield put({
          //     type: 'LOG_IN_SUCCESS',
          //     userToken: userToken,
          //     userId: userId,
          //     nickname: nickname,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsIndhdGNoTG9nSW4iLCJ1c2VyU2FnYSIsInNvY2lhbExvZ2luQVBJIiwiYWN0aW9uIiwic2VsZWN0Iiwic2VsZWN0b3JzIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsInJlc3VsdCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVzZXJUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBWVVBLEs7bUdBK0JBQyxVO21HQUllQyxROztBQS9DekI7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGNBQVQsR0FBMEIsQ0FFdEI7QUFDQTtBQUVIOztBQUdELFNBQVVILEtBQVYsQ0FBZ0JJLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHNEIsaUJBQU1DLGlFQUFNLENBQUNDLHNEQUFELENBQVo7O0FBSDVCO0FBR2NDLHFCQUhkO0FBQUE7QUFJeUIsaUJBQU1GLGlFQUFNLENBQUNDLG1EQUFELENBQVo7O0FBSnpCO0FBSWNFLGtCQUpkO0FBTWNDLGdCQU5kLEdBTXVCQyw0Q0FBSyxDQUFDQyxJQUFOLCtFQUFrRkgsUUFBbEYsR0FDWCxFQURXLEVBQ1A7QUFBRUksbUJBQU8sRUFBRTtBQUFFQywyQkFBYSxFQUFFTjtBQUFqQjtBQUFYLFdBRE8sRUFDc0NPLElBRHRDLENBQzJDLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0EsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQTVCO0FBQUEsV0FEM0MsQ0FOdkI7QUFXUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JWLE1BQXBCLEVBWFIsQ0FjUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbkJSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBdUJRUyxpQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQXZCUixDQXdCUTtBQUNBO0FBQ0E7QUFDQTs7QUEzQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBK0JBLFNBQVVsQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNbUIscUVBQVUsQ0FBQyx1QkFBRCxFQUEwQnBCLEtBQTFCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1tQiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNyQixVQUFELENBREUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzE2YjljOGJmZjNkZDU1OGExYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBzZWxlY3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcclxuXHJcbmZ1bmN0aW9uIHNvY2lhbExvZ2luQVBJKCkge1xyXG5cclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC8ke3BsYXRmb3JtfWAsXHJcbiAgICAvLyB7fSwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbn19KTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHlpZWxkIHNlbGVjdChzZWxlY3RvcnMuYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0geWllbGQgc2VsZWN0KHNlbGVjdG9ycy5wbGF0Zm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgvJHtwbGF0Zm9ybX1gLFxyXG4gICAgICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGFjY2Vzc1Rva2VuIH0gfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEudXNlclRva2VuKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGtra1wiLCByZXN1bHQpO1xyXG5cclxuXHJcbiAgICAgICAgLy8geWllbGQgcHV0KHtcclxuICAgICAgICAvLyAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcclxuICAgICAgICAvLyAgICAgdXNlclRva2VuOiB1c2VyVG9rZW4sXHJcbiAgICAgICAgLy8gICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIC8vICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7JWI65Cc64ukLlwiKTtcclxuICAgICAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgICAgIC8vICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgIC8vICAgICBlcnJvcjogYWN0aW9uLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCgnU09DSUFMX0xPR19JTl9SRVFVRVNUJywgbG9nSW4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=