webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadAllLolPosts),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addLolPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadAllLolPosts),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddLolPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);





function loadAllLolPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function loadAllLolPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadAllLolPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadAllLolPostsAPI, action.data);

        case 3:
          result = _context.sent;
          console.log(result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_LOL_POSTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_LOL_POSTS_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function addLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function addLolPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addLolPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addLolPostAPI, action.data);

        case 3:
          result = _context2.sent;
          console.log(result);
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_LOL_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_LOL_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function watchLoadAllLolPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadAllLolPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_LOL_POSTS_REQUEST"], loadAllLolPosts);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchAddLolPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddLolPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_LOL_POST_REQUEST"], addLolPost);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddLolPost)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0Iiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaEFkZExvbFBvc3QiLCJwb3N0U2FnYSIsImxvYWRBbGxMb2xQb3N0c0FQSSIsImRhdGEiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlclRva2VuIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJhZGRMb2xQb3N0QVBJIiwicG9zdCIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QiLCJBRERfTE9MX1BPU1RfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWlCVUEsZTttR0F1QkFDLFU7bUdBa0JBQyxvQjttR0FJQUMsZTttR0FJZUMsUTs7QUFsRXpCO0FBQ0E7QUFFQTs7QUFTQSxTQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDOUIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTiw0RUFDUCxFQURPLEVBQ0g7QUFBQ0MsV0FBTyxFQUFFO0FBQUNDLG1CQUFhLEVBQUVKLElBQUksQ0FBQ0s7QUFBckI7QUFBVixHQURHLENBQVA7QUFFSDs7QUFFRCxTQUFVWCxlQUFWLENBQTBCWSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXVCLGlCQUFNQywrREFBSSxDQUFDUixrQkFBRCxFQUFxQk8sTUFBTSxDQUFDTixJQUE1QixDQUFWOztBQUZ2QjtBQUVjUSxnQkFGZDtBQUdRQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFIUjtBQUlRLGlCQUFNRyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVDLHlFQURBO0FBRU5iLGdCQUFJLEVBQUVRLE1BQU0sQ0FBQ1I7QUFGUCxXQUFELENBQVQ7O0FBSlI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNRUyxpQkFBTyxDQUFDQyxHQUFSO0FBVFI7QUFVUSxpQkFBTUMsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFRSx5RUFEQTtBQUVOQyxpQkFBSyxFQUFFLFlBQUlDLFFBQUosQ0FBYWhCO0FBRmQsV0FBRCxDQUFUOztBQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFTaUIsYUFBVCxDQUF1QmpCLElBQXZCLEVBQTZCO0FBQ3pCLFNBQU9DLDRDQUFLLENBQUNpQixJQUFOLDRFQUNQLEVBRE8sRUFDSDtBQUFDZixXQUFPLEVBQUU7QUFBQ0MsbUJBQWEsRUFBRUosSUFBSSxDQUFDSztBQUFyQjtBQUFWLEdBREcsQ0FBUDtBQUVIOztBQUVELFNBQVVWLFVBQVYsQ0FBcUJXLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1DLCtEQUFJLENBQUNVLGFBQUQsRUFBZ0JYLE1BQU0sQ0FBQ04sSUFBdkIsQ0FBVjs7QUFGdkI7QUFFY1EsZ0JBRmQ7QUFHUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBSFI7QUFJUSxpQkFBTUcsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFTyxtRUFEQTtBQUVObkIsZ0JBQUksRUFBRVEsTUFBTSxDQUFDUjtBQUZQLFdBQUQsQ0FBVDs7QUFKUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU1FTLGlCQUFPLENBQUNDLEdBQVI7QUFUUjtBQVVRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVRLG1FQURBO0FBRU5MLGlCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhaEI7QUFGZCxXQUFELENBQVQ7O0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBLFNBQVVKLG9CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNeUIscUVBQVUsQ0FBQ0MseUVBQUQsRUFBNkI1QixlQUE3QixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVRyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNd0IscUVBQVUsQ0FBQ0UsbUVBQUQsRUFBdUI1QixVQUF2QixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNMEIsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDN0Isb0JBQUQsQ0FERSxFQUVONkIsK0RBQUksQ0FBQzVCLGVBQUQsQ0FGRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZjI5N2VkM2U2ZTA1MTlmMWViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0xPTF9QT1NUX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRBbGxMb2xQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICB7fSwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbn19KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRBbGxMb2xQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsTG9sUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgIHt9LCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VufX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQWxsTG9sUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULCBsb2FkQWxsTG9sUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfTE9MX1BPU1RfUkVRVUVTVCwgYWRkTG9sUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRBbGxMb2xQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZExvbFBvc3QpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9