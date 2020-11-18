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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0IiwiZGVsZXRlTG9sUG9zdCIsIndhdGNoTG9hZEFsbExvbFBvc3RzIiwid2F0Y2hBZGRMb2xQb3N0Iiwid2F0Y2hEZWxldGVMb2xQb3N0IiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJUb2tlbiIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRkTG9sUG9zdEFQSSIsInBvc3QiLCJ1c2VyTmlja25hbWUiLCJ1c2VySWQiLCJnYW1lTW9kZSIsInRpdGxlIiwic3RhcnRUaWVyIiwiZW5kVGllciIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJ0b3AiLCJib3R0b20iLCJtaWQiLCJqdW5nbGUiLCJzdXBwb3J0IiwiY29udGVudCIsInRhbGtvbiIsInRhbGtPbiIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJkZWxldGVMb2xQb3N0QVBJIiwiREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9SRVFVRVNUIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FvQlVBLGU7bUdBK0JBQyxVO21HQStCQUMsYTttR0FtQkFDLG9CO21HQUlBQyxlO21HQUlBQyxrQjttR0FJZUMsUTs7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QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMjc0ZjBjODAwNDA0YWYxYTEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWxsTG9sUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRBbGxMb2xQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsTG9sUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTG9sUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHsgICB1c2VyTmlja25hbWU6IGRhdGEudXNlck5pY2tuYW1lLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLCBcclxuICAgICAgICAgICAgc3VwcG9ydDogZGF0YS5zdXBwb3J0LCBjb250ZW50OiBkYXRhLmNvbnRlbnQsIFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa09uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZExvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlTG9sUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHsgICB1c2VyTmlja25hbWU6IGRhdGEudXNlck5pY2tuYW1lLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLCBcclxuICAgICAgICAgICAgc3VwcG9ydDogZGF0YS5zdXBwb3J0LCBjb250ZW50OiBkYXRhLmNvbnRlbnQsIFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa09uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRBbGxMb2xQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsIGxvYWRBbGxMb2xQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZExvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9MT0xfUE9TVF9SRVFVRVNULCBhZGRMb2xQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsIGRlbGV0ZUxvbFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQWxsTG9sUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRMb2xQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlTG9sUG9zdCksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=