webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DELETE_LOL_POST_REQUEST, DELETE_LOL_POST_SUCCESS, DELETE_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, addLolPostRequestAction, deleteLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_REQUEST", function() { return DELETE_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_SUCCESS", function() { return DELETE_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_FAILURE", function() { return DELETE_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_ON", function() { return DETAIL_LOL_POST_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_OFF", function() { return DETAIL_LOL_POST_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLolPostRequestAction", function() { return addLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLolPostRequestAction", function() { return deleteLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailLolPostOnAction", function() { return detailLolPostOnAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailLolPostOffAction", function() { return detailLolPostOffAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

var initialState = {
  posts: [],
  myLolPosts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addLolPostLoading: false,
  addLolPostDone: false,
  addLolPostError: null,
  deleteLolPostLoading: false,
  deleteLolPostDone: false,
  deleteLolPostError: null,
  detailLolPostOn: false,
  detailLolPost: null
};
var LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
var LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
var LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';
var ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
var ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
var ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';
var DELETE_LOL_POST_REQUEST = 'DELETE_LOL_POST_REQUEST';
var DELETE_LOL_POST_SUCCESS = 'DELETE_LOL_POST_SUCCESS';
var DELETE_LOL_POST_FAILURE = 'DELETE_LOL_POST_FAILURE';
var DETAIL_LOL_POST_ON = 'DETAIL_LOL_POST_ON';
var DETAIL_LOL_POST_OFF = 'DETAIL_LOL_POST_OFF';
var loadAllLolPostsRequestAction = function loadAllLolPostsRequestAction(data) {
  return {
    type: LOAD_ALL_LOL_POSTS_REQUEST,
    data: data
  };
};
var addLolPostRequestAction = function addLolPostRequestAction(data) {
  return {
    type: ADD_LOL_POST_REQUEST,
    data: data
  };
};
var deleteLolPostRequestAction = function deleteLolPostRequestAction(data) {
  return {
    type: DELETE_LOL_POST_REQUEST,
    data: data
  };
};
var detailLolPostOnAction = function detailLolPostOnAction(data) {
  return {
    type: DETAIL_LOL_POST_ON,
    data: data
  };
};
var detailLolPostOffAction = function detailLolPostOffAction() {
  return {
    type: DETAIL_LOL_POST_OFF
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
        draft.addLolPostLoading = true;
        draft.addLolPostDone = false;
        draft.addLolPostError = null;
        break;

      case ADD_LOL_POST_SUCCESS:
        draft.addLolPostLoading = false;
        draft.addLolPostDone = true;
        break;

      case ADD_LOL_POST_FAILURE:
        draft.addLolPostLoading = false;
        draft.addLolPostError = action.error;
        break;

      case DELETE_LOL_POST_REQUEST:
        draft.deleteLolPostLoading = true;
        draft.deleteLolPostDone = false;
        draft.deleteLolPostError = null;
        break;

      case DELETE_LOL_POST_SUCCESS:
        draft.deleteLolPostLoading = false;
        draft.deleteLolPostDone = true;
        break;

      case DELETE_LOL_POST_FAILURE:
        draft.deleteLolPostLoading = false;
        draft.deleteLolPostError = action.error;
        break;

      case DETAIL_LOL_POST_ON:
        draft.detailLolPostOn = true;
        draft.detailLolPost = action.data;
        break;

      case DETAIL_LOL_POST_OFF:
        draft.detailLolPostOn = false;
        draft.detailLolPost = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJkZXRhaWxMb2xQb3N0T24iLCJkZXRhaWxMb2xQb3N0IiwiTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyIsIkxPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFIiwiQUREX0xPTF9QT1NUX1JFUVVFU1QiLCJBRERfTE9MX1BPU1RfU1VDQ0VTUyIsIkFERF9MT0xfUE9TVF9GQUlMVVJFIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUyIsIkRFTEVURV9MT0xfUE9TVF9GQUlMVVJFIiwiREVUQUlMX0xPTF9QT1NUX09OIiwiREVUQUlMX0xPTF9QT1NUX09GRiIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24iLCJkZXRhaWxMb2xQb3N0T25BY3Rpb24iLCJkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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ekM7QUFBQSxDQUFoQjs7QUF3RGVtQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YTI5Mjk5NzFlMDMxMzYzYzk3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwb3N0czogW10sXHJcbiAgICBteUxvbFBvc3RzOiBbXSxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZExvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGRlbGV0ZUxvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3RFcnJvcjogbnVsbCxcclxuXHJcblxyXG5cclxuICAgIGRldGFpbExvbFBvc3RPbjogZmFsc2UsXHJcbiAgICBkZXRhaWxMb2xQb3N0OiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUID0gJ0xPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTID0gJ0xPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFID0gJ0xPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfUkVRVUVTVCA9ICdBRERfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfU1VDQ0VTUyA9ICdBRERfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfRkFJTFVSRSA9ICdBRERfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QgPSAnREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbExvbFBvc3RPbkFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVUQUlMX0xPTF9QT1NUX09OLFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERVRBSUxfTE9MX1BPU1RfT0ZGLFxyXG59KTtcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5wb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT046XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT0ZGOlxyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0T24gPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9