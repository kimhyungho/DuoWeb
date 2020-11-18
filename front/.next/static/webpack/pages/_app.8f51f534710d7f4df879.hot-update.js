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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0IiwiZGVsZXRlTG9sUG9zdCIsIndhdGNoTG9hZEFsbExvbFBvc3RzIiwid2F0Y2hBZGRMb2xQb3N0Iiwid2F0Y2hEZWxldGVMb2xQb3N0IiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJUb2tlbiIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwiYWRkTG9sUG9zdEFQSSIsInBvc3QiLCJ1c2VyTmlja25hbWUiLCJ1c2VySWQiLCJnYW1lTW9kZSIsInRpdGxlIiwic3RhcnRUaWVyIiwiZW5kVGllciIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJ0b3AiLCJib3R0b20iLCJtaWQiLCJqdW5nbGUiLCJzdXBwb3J0IiwiY29udGVudCIsInRhbGtvbiIsInRhbGtPbiIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJkZWxldGVMb2xQb3N0QVBJIiwiREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9SRVFVRVNUIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FvQlVBLGU7bUdBK0JBQyxVO21HQXVCQUMsYTttR0FtQkFDLG9CO21HQUlBQyxlO21HQUlBQyxrQjttR0FJZUMsUTs7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QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSSxrQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTTJDLHFFQUFVLENBQUNHLHNFQUFELEVBQTBCakQsYUFBMUIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUksUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTThDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2xELG9CQUFELENBREUsRUFFTmtELCtEQUFJLENBQUNqRCxlQUFELENBRkUsRUFHTmlELCtEQUFJLENBQUNoRCxrQkFBRCxDQUhFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhmNTFmNTM0NzEwZDdmNGRmODc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgIEFERF9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBBRERfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIERFTEVURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRBbGxMb2xQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbExvbFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRBbGxMb2xQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAgeyAgIHVzZXJOaWNrbmFtZTogZGF0YS51c2VyTmlja25hbWUsIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgIGdhbWVNb2RlOiBkYXRhLmdhbWVNb2RlLCB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgc3RhcnRUaWVyOiBkYXRhLnN0YXJ0VGllciwgZW5kVGllcjogZGF0YS5lbmRUaWVyLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBkYXRhLmVuZFRpbWUsIGhlYWRDb3VudDogZGF0YS5oZWFkQ291bnQsXHJcbiAgICAgICAgICAgIHRvcDogZGF0YS50b3AsIGJvdHRvbTogZGF0YS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pZDogZGF0YS5taWQsIGp1bmdsZTogZGF0YS5qdW5nbGUsIFxyXG4gICAgICAgICAgICBzdXBwb3J0OiBkYXRhLnN1cHBvcnQsIGNvbnRlbnQ6IGRhdGEuY29udGVudCwgXHJcbiAgICAgICAgICAgIHRhbGtvbjogZGF0YS50YWxrT24sXHJcbiAgICAgICAgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogYWRkTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRBbGxMb2xQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsIGxvYWRBbGxMb2xQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZExvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9MT0xfUE9TVF9SRVFVRVNULCBhZGRMb2xQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsIGRlbGV0ZUxvbFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQWxsTG9sUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRMb2xQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlTG9sUG9zdCksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=