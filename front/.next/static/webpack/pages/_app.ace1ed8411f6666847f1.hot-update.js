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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol", {
    userNickname: data.userNickname,
    userId: data.userId,
    gameMode: data.gameMode,
    title: data.gameMode,
    startTier: data.startTier,
    endTier: data.endTier,
    endTime: data.endTime,
    headCount: data.headCount,
    top: data.top,
    bottom: data.bottom,
    mid: data.mid,
    jungle: data.jungle,
    support: data.support,
    content: data.contnet,
    talkon: data.talkon
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0Iiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaEFkZExvbFBvc3QiLCJwb3N0U2FnYSIsImxvYWRBbGxMb2xQb3N0c0FQSSIsImRhdGEiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlclRva2VuIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJhZGRMb2xQb3N0QVBJIiwicG9zdCIsInVzZXJOaWNrbmFtZSIsInVzZXJJZCIsImdhbWVNb2RlIiwidGl0bGUiLCJzdGFydFRpZXIiLCJlbmRUaWVyIiwiZW5kVGltZSIsImhlYWRDb3VudCIsInRvcCIsImJvdHRvbSIsIm1pZCIsImp1bmdsZSIsInN1cHBvcnQiLCJjb250ZW50IiwiY29udG5ldCIsInRhbGtvbiIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QiLCJBRERfTE9MX1BPU1RfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWlCVUEsZTttR0FnQ0FDLFU7bUdBa0JBQyxvQjttR0FJQUMsZTttR0FJZUMsUTs7QUEzRXpCO0FBQ0E7QUFFQTs7QUFTQSxTQUFTQyxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDOUIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTiw0RUFDSCxFQURHLEVBQ0M7QUFBRUMsV0FBTyxFQUFFO0FBQUVDLG1CQUFhLEVBQUVKLElBQUksQ0FBQ0s7QUFBdEI7QUFB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ZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTXdDLHFFQUFVLENBQUNFLG1FQUFELEVBQXVCNUMsVUFBdkIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUcsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTTBDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQzdDLG9CQUFELENBREUsRUFFTjZDLCtEQUFJLENBQUM1QyxlQUFELENBRkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWNlMWVkODQxMWY2NjY2ODQ3ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QsIGZvcmssIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgQUREX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9MT0xfUE9TVF9GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWxsTG9sUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRBbGxMb2xQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsTG9sUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJOaWNrbmFtZTogZGF0YS51c2VyTmlja25hbWUsIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgIGdhbWVNb2RlOiBkYXRhLmdhbWVNb2RlLCB0aXRsZTogZGF0YS5nYW1lTW9kZSwgXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLCBcclxuICAgICAgICAgICAgc3VwcG9ydDogZGF0YS5zdXBwb3J0LCBjb250ZW50OiBkYXRhLmNvbnRuZXQsIFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa29uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQWxsTG9sUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULCBsb2FkQWxsTG9sUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfTE9MX1BPU1RfUkVRVUVTVCwgYWRkTG9sUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRBbGxMb2xQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZExvbFBvc3QpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9