webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, addLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_ON", function() { return DETAIL_LOL_POST_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_OFF", function() { return DETAIL_LOL_POST_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLolPostRequestAction", function() { return addLolPostRequestAction; });
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
        draft.loadPostError = null;
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
        draft.addLolPostLoading = true;
        draft.addLolPostDone = false;
        draft.addloadPostError = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJkZXRhaWxMb2xQb3N0T24iLCJkZXRhaWxMb2xQb3N0IiwiTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyIsIkxPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFIiwiQUREX0xPTF9QT1NUX1JFUVVFU1QiLCJBRERfTE9MX1BPU1RfU1VDQ0VTUyIsIkFERF9MT0xfUE9TVF9GQUlMVVJFIiwiREVUQUlMX0xPTF9QT1NUX09OIiwiREVUQUlMX0xPTF9QT1NUX09GRiIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJhZGRsb2FkUG9zdEVycm9yIiwiREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQUUsRUFEaUI7QUFFeEJDLFlBQVUsRUFBRSxFQUZZO0FBR3hCQyxpQkFBZSxFQUFFLEtBSE87QUFJeEJDLGNBQVksRUFBRSxLQUpVO0FBS3hCQyxlQUFhLEVBQUUsSUFMUztBQU14QkMsbUJBQWlCLEVBQUUsS0FOSztBQU94QkMsZ0JBQWMsRUFBRSxLQVBRO0FBUXhCQyxpQkFBZSxFQUFFLElBUk87QUFTeEJDLHNCQUFvQixFQUFFLEtBVEU7QUFVeEJDLG1CQUFpQixFQUFFLEtBVks7QUFXeEJDLG9CQUFrQixFQUFFLElBWEk7QUFleEJDLGlCQUFlLEVBQUUsS0FmTztBQWdCeEJDLGVBQWEsRUFBRTtBQWhCUyxDQUFyQjtBQW1CQSxJQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFDQSxJQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFDQSxJQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQ25EQyxRQUFJLEVBQUVWLDBCQUQ2QztBQUVuRFMsUUFBSSxFQUFKQTtBQUZtRCxHQUFYO0FBQUEsQ0FBckM7QUFLQSxJQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNGLElBQUQ7QUFBQSxTQUFXO0FBQzlDQyxRQUFJLEVBQUVQLG9CQUR3QztBQUU5Q00sUUFBSSxFQUFKQTtBQUY4QyxHQUFYO0FBQUEsQ0FBaEM7QUFLQSxJQUFNRyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNILElBQUQ7QUFBQSxTQUFXO0FBQzVDQyxRQUFJLEVBQUVKLGtCQURzQztBQUU1Q0csUUFBSSxFQUFKQTtBQUY0QyxHQUFYO0FBQUEsQ0FBOUI7QUFLQSxJQUFNSSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCO0FBQUEsU0FBTztBQUN6Q0gsUUFBSSxFQUFFSDtBQURtQyxHQUFQO0FBQUEsQ0FBL0I7O0FBSVAsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxLQUFELHVFQUFTN0IsWUFBVDtBQUFBLE1BQXVCOEIsTUFBdkI7QUFBQSxTQUFrQ0MsNkRBQU8sQ0FBQ0YsS0FBRCxFQUFRLFVBQUNHLEtBQUQsRUFBVztBQUN4RSxZQUFRRixNQUFNLENBQUNOLElBQWY7QUFDSSxXQUFLViwwQkFBTDtBQUNJa0IsYUFBSyxDQUFDN0IsZUFBTixHQUF3QixJQUF4QjtBQUNBNkIsYUFBSyxDQUFDNUIsWUFBTixHQUFxQixLQUFyQjtBQUNBNEIsYUFBSyxDQUFDM0IsYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNKLFdBQUtVLDBCQUFMO0FBQ0lpQixhQUFLLENBQUM3QixlQUFOLEdBQXdCLEtBQXhCO0FBQ0E2QixhQUFLLENBQUM1QixZQUFOLEdBQXFCLElBQXJCO0FBQ0E0QixhQUFLLENBQUMvQixLQUFOLEdBQWM2QixNQUFNLENBQUNQLElBQXJCO0FBQ0E7O0FBQ0osV0FBS1AsMEJBQUw7QUFDSWdCLGFBQUssQ0FBQzdCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTZCLGFBQUssQ0FBQzNCLGFBQU4sR0FBc0J5QixNQUFNLENBQUNHLEtBQTdCO0FBQ0E7O0FBQ0osV0FBS2hCLG9CQUFMO0FBQ0llLGFBQUssQ0FBQzFCLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0EwQixhQUFLLENBQUN6QixjQUFOLEdBQXVCLEtBQXZCO0FBQ0F5QixhQUFLLENBQUMzQixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0osV0FBS2Esb0JBQUw7QUFDSWMsYUFBSyxDQUFDMUIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTBCLGFBQUssQ0FBQ3pCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTs7QUFDSixXQUFLWSxvQkFBTDtBQUNJYSxhQUFLLENBQUMxQixpQkFBTixHQUEwQixLQUExQjtBQUNBMEIsYUFBSyxDQUFDeEIsZUFBTixHQUF3QnNCLE1BQU0sQ0FBQ0csS0FBL0I7QUFDQTs7QUFDSixXQUFLQyx1QkFBTDtBQUNJRixhQUFLLENBQUMxQixpQkFBTixHQUEwQixJQUExQjtBQUNBMEIsYUFBSyxDQUFDekIsY0FBTixHQUF1QixLQUF2QjtBQUNBeUIsYUFBSyxDQUFDRyxnQkFBTixHQUF5QixJQUF6QjtBQUNBOztBQUNKLFdBQUtDLHVCQUFMO0FBQ0lKLGFBQUssQ0FBQ3ZCLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0F1QixhQUFLLENBQUN0QixpQkFBTixHQUEwQixJQUExQjtBQUNBOztBQUNKLFdBQUsyQix1QkFBTDtBQUNJTCxhQUFLLENBQUN2QixvQkFBTixHQUE2QixLQUE3QjtBQUNBdUIsYUFBSyxDQUFDckIsa0JBQU4sR0FBMkJtQixNQUFNLENBQUNHLEtBQWxDO0FBQ0E7O0FBQ0osV0FBS2Isa0JBQUw7QUFDSVksYUFBSyxDQUFDcEIsZUFBTixHQUF3QixJQUF4QjtBQUNBb0IsYUFBSyxDQUFDbkIsYUFBTixHQUFzQmlCLE1BQU0sQ0FBQ1AsSUFBN0I7QUFDQTs7QUFDSixXQUFLRixtQkFBTDtBQUNJVyxhQUFLLENBQUNwQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FvQixhQUFLLENBQUNuQixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBRUo7QUFDSTtBQW5EUjtBQXFESCxHQXREd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUF3RGVlLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjE5ZWIxMmU1MTM5OGVmMzhhYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcG9zdHM6IFtdLFxyXG4gICAgbXlMb2xQb3N0czogW10sXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBkZWxldGVMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RXJyb3I6IG51bGwsXHJcblxyXG5cclxuXHJcbiAgICBkZXRhaWxMb2xQb3N0T246IGZhbHNlLFxyXG4gICAgZGV0YWlsTG9sUG9zdDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1JFUVVFU1QgPSAnQUREX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1NVQ0NFU1MgPSAnQUREX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX0ZBSUxVUkUgPSAnQUREX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbExvbFBvc3RPbkFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVUQUlMX0xPTF9QT1NUX09OLFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERVRBSUxfTE9MX1BPU1RfT0ZGLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZGxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT046XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT0ZGOlxyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0T24gPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9