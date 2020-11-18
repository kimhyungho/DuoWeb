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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteLolPost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadAllLolPosts),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddLolPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteLolPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);





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
          console.log(action.data);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {
    userNickname: data.userNickname,
    userId: data.userId,
    gameMode: data.gameMode,
    title: data.title,
    startTier: data.startTier,
    endTier: data.endTier,
    endTime: data.endTime,
    headCount: data.headCount,
    top: data.top,
    bottom: data.bottom,
    mid: data.mid,
    jungle: data.jungle,
    support: data.support,
    content: data.content,
    talkon: data.talkOn
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

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
          console.log(_context2.t0.response);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_LOL_POST_FAILURE"],
            error: _context2.t0.response
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function deleteLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

function deleteLolPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteLolPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(deleteLolPostAPI, action.data);

        case 3:
          result = _context3.sent;
          console.log(result);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_LOL_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.response);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_LOL_POST_FAILURE"],
            error: _context3.t0.response
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function watchLoadAllLolPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadAllLolPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_LOL_POSTS_REQUEST"], loadAllLolPosts);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchAddLolPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddLolPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_LOL_POST_REQUEST"], addLolPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchDeleteLolPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteLolPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_LOL_POST_REQUEST"], deleteLolPost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDeleteLolPost)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0IiwiZGVsZXRlTG9sUG9zdCIsIndhdGNoTG9hZEFsbExvbFBvc3RzIiwid2F0Y2hBZGRMb2xQb3N0Iiwid2F0Y2hEZWxldGVMb2xQb3N0IiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJUb2tlbiIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRkTG9sUG9zdEFQSSIsInBvc3QiLCJ1c2VyTmlja25hbWUiLCJ1c2VySWQiLCJnYW1lTW9kZSIsInRpdGxlIiwic3RhcnRUaWVyIiwiZW5kVGllciIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJ0b3AiLCJib3R0b20iLCJtaWQiLCJqdW5nbGUiLCJzdXBwb3J0IiwiY29udGVudCIsInRhbGtvbiIsInRhbGtPbiIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJkZWxldGVMb2xQb3N0QVBJIiwiREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9SRVFVRVNUIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FvQlVBLGU7bUdBK0JBQyxVO21HQXVCQUMsYTttR0FtQkFDLG9CO21HQUlBQyxlO21HQUlBQyxrQjttR0FJZUMsUTs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVJLGtCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNMkMscUVBQVUsQ0FBQ0csc0VBQUQsRUFBMEJqRCxhQUExQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVSSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNOEMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDbEQsb0JBQUQsQ0FERSxFQUVOa0QsK0RBQUksQ0FBQ2pELGVBQUQsQ0FGRSxFQUdOaUQsK0RBQUksQ0FBQ2hELGtCQUFELENBSEUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjlmNjAyYjI4Yzc1MWY3Mjc4MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QsIGZvcmssIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgQUREX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIERFTEVURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZEFsbExvbFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQWxsTG9sUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEFsbExvbFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7ICAgdXNlck5pY2tuYW1lOiBkYXRhLnVzZXJOaWNrbmFtZSwgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgZ2FtZU1vZGU6IGRhdGEuZ2FtZU1vZGUsIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBzdGFydFRpZXI6IGRhdGEuc3RhcnRUaWVyLCBlbmRUaWVyOiBkYXRhLmVuZFRpZXIsXHJcbiAgICAgICAgICAgIGVuZFRpbWU6IGRhdGEuZW5kVGltZSwgaGVhZENvdW50OiBkYXRhLmhlYWRDb3VudCxcclxuICAgICAgICAgICAgdG9wOiBkYXRhLnRvcCwgYm90dG9tOiBkYXRhLmJvdHRvbSxcclxuICAgICAgICAgICAgbWlkOiBkYXRhLm1pZCwganVuZ2xlOiBkYXRhLmp1bmdsZSwgXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6IGRhdGEuc3VwcG9ydCwgY29udGVudDogZGF0YS5jb250ZW50LCBcclxuICAgICAgICAgICAgdGFsa29uOiBkYXRhLnRhbGtPbixcclxuICAgICAgICB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZExvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQWxsTG9sUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULCBsb2FkQWxsTG9sUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfTE9MX1BPU1RfUkVRVUVTVCwgYWRkTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZUxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9MT0xfUE9TVF9SRVFVRVNULCBkZWxldGVMb2xQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEFsbExvbFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbGV0ZUxvbFBvc3QpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9