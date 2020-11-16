webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, loadAllLolPostsRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_REQUEST", function() { return LOAD_ALL_LOL_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_SUCCESS", function() { return LOAD_ALL_LOL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_FAILURE", function() { return LOAD_ALL_LOL_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_REQUEST", function() { return ADD_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_SUCCESS", function() { return ADD_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_FAILURE", function() { return ADD_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

var initialState = {
  posts: [],
  myLolPosts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addLolPostLoading: false,
  addLolPostDone: false,
  addLolPostError: false
};
var LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
var LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
var LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';
var ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
var ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
var ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';
var loadAllLolPostsRequestAction = function loadAllLolPostsRequestAction(data) {
  return {
    type: LOAD_ALL_LOL_POSTS_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_ALL_LOL_POSTS_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_ALL_LOL_POSTS_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.posts = action.data;
        break;

      case LOAD_ALL_LOL_POSTS_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case ADD_LOL_POST_REQUEST:
        break;

      case ADD_LOL_POST_SUCCESS:
        break;

      case ADD_LOL_POST_FAILURE:
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsIkxPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUIiwiTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSIsIkFERF9MT0xfUE9TVF9SRVFVRVNUIiwiQUREX0xPTF9QT1NUX1NVQ0NFU1MiLCJBRERfTE9MX1BPU1RfRkFJTFVSRSIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsT0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxZQUFVLEVBQUUsRUFGWTtBQUd4QkMsaUJBQWUsRUFBRSxLQUhPO0FBSXhCQyxjQUFZLEVBQUUsS0FKVTtBQUt4QkMsZUFBYSxFQUFFLElBTFM7QUFNeEJDLG1CQUFpQixFQUFFLEtBTks7QUFPeEJDLGdCQUFjLEVBQUUsS0FQUTtBQVF4QkMsaUJBQWUsRUFBRTtBQVJPLENBQXJCO0FBV0EsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsSUFBTUMsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUNuREMsUUFBSSxFQUFFUiwwQkFENkM7QUFFbkRPLFFBQUksRUFBSkE7QUFGbUQsR0FBWDtBQUFBLENBQXJDOztBQU1QLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBQ0MsS0FBRCx1RUFBU25CLFlBQVQ7QUFBQSxNQUF1Qm9CLE1BQXZCO0FBQUEsU0FBa0NDLDZEQUFPLENBQUNGLEtBQUQsRUFBUSxVQUFDRyxLQUFELEVBQVc7QUFDeEUsWUFBUUYsTUFBTSxDQUFDSCxJQUFmO0FBQ0ksV0FBS1IsMEJBQUw7QUFDSWEsYUFBSyxDQUFDbkIsZUFBTixHQUF3QixJQUF4QjtBQUNBbUIsYUFBSyxDQUFDbEIsWUFBTixHQUFxQixLQUFyQjtBQUNBa0IsYUFBSyxDQUFDakIsYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNKLFdBQUtLLDBCQUFMO0FBQ0lZLGFBQUssQ0FBQ25CLGVBQU4sR0FBd0IsS0FBeEI7QUFDQW1CLGFBQUssQ0FBQ2xCLFlBQU4sR0FBcUIsSUFBckI7QUFDQWtCLGFBQUssQ0FBQ3JCLEtBQU4sR0FBY21CLE1BQU0sQ0FBQ0osSUFBckI7QUFDQTs7QUFDSixXQUFLTCwwQkFBTDtBQUNJVyxhQUFLLENBQUNuQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FtQixhQUFLLENBQUNqQixhQUFOLEdBQXNCZSxNQUFNLENBQUNHLEtBQTdCO0FBQ0E7O0FBQ0osV0FBS1gsb0JBQUw7QUFDSTs7QUFDSixXQUFLQyxvQkFBTDtBQUNJOztBQUNKLFdBQUtDLG9CQUFMO0FBQ0k7O0FBQ0o7QUFDSTtBQXRCUjtBQXdCSCxHQXpCd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUEyQmVJLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlMzBlZDNlNDE0ODc2YjBlMTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBvc3RzOiBbXSxcclxuICAgIG15TG9sUG9zdHM6IFtdLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkTG9sUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkTG9sUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkTG9sUG9zdEVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1JFUVVFU1QgPSAnQUREX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1NVQ0NFU1MgPSAnQUREX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX0ZBSUxVUkUgPSAnQUREX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5wb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==