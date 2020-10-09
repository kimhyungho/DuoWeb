webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    userId: 1,
    title: '1번글',
    content: 'asdfasdfas dfaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaa asdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaasd fasdfasdfa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa  aasdfasdfasd faaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaasdfasdfasdfaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    Comments: [{
      userNickname: '유저1',
      content: '댓글1'
    }, {
      userNickname: '유저2',
      content: '댓글2'
    }]
  }, {
    id: 2,
    userId: 2,
    title: 'title',
    content: 'content',
    Comments: [{
      userNickname: '유저1',
      content: '댓글1'
    }, {
      userNickname: '유저2',
      content: '댓글2'
    }]
  }, {
    id: 3,
    userId: 3,
    title: 'title',
    content: 'content',
    Comments: [{
      userNickname: '유저1',
      content: '댓글1'
    }, {
      userNickname: '유저2',
      content: '댓글2'
    }]
  }, {
    id: 4,
    userId: 4,
    title: 'title',
    content: 'content',
    Comments: [{
      userNickname: '유저1',
      content: '댓글1'
    }, {
      userNickname: '유저2',
      content: '댓글2'
    }]
  }]
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        userId: action.data.userId,
        userNickname: action.data.userNickname
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        userId: null,
        userNickname: null
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInVzZXJJZCIsInRpdGxlIiwiY29udGVudCIsIkNvbW1lbnRzIiwidXNlck5pY2tuYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlzTG9nZ2VkSW4iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxVQUFNLEVBQUUsQ0FGQTtBQUdSQyxTQUFLLEVBQUUsS0FIQztBQUlSQyxXQUFPLEVBQUUsbTVDQUpEO0FBS1JDLFlBQVEsRUFBRSxDQUFDO0FBQ1BDLGtCQUFZLEVBQUcsS0FEUjtBQUVQRixhQUFPLEVBQUU7QUFGRixLQUFELEVBR1A7QUFDQ0Usa0JBQVksRUFBRSxLQURmO0FBRUNGLGFBQU8sRUFBRTtBQUZWLEtBSE87QUFMRixHQUFELEVBWVQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsVUFBTSxFQUFFLENBRlY7QUFHRUMsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsWUFBUSxFQUFFLENBQUM7QUFDUEMsa0JBQVksRUFBRyxLQURSO0FBRVBGLGFBQU8sRUFBRTtBQUZGLEtBQUQsRUFHUDtBQUNDRSxrQkFBWSxFQUFFLEtBRGY7QUFFQ0YsYUFBTyxFQUFFO0FBRlYsS0FITztBQUxaLEdBWlMsRUF3QlQ7QUFDRUgsTUFBRSxFQUFFLENBRE47QUFFRUMsVUFBTSxFQUFFLENBRlY7QUFHRUMsU0FBSyxFQUFFLE9BSFQ7QUFJRUMsV0FBTyxFQUFFLFNBSlg7QUFLRUMsWUFBUSxFQUFFLENBQUM7QUFDUEMsa0JBQVksRUFBRyxLQURSO0FBRVBGLGFBQU8sRUFBRTtBQUZGLEtBQUQsRUFHUDtBQUNDRSxrQkFBWSxFQUFFLEtBRGY7QUFFQ0YsYUFBTyxFQUFFO0FBRlYsS0FITztBQUxaLEdBeEJTLEVBb0NUO0FBQ0VILE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRSxDQUZWO0FBR0VDLFNBQUssRUFBRSxPQUhUO0FBSUVDLFdBQU8sRUFBRSxTQUpYO0FBS0VDLFlBQVEsRUFBRSxDQUFDO0FBQ1BDLGtCQUFZLEVBQUcsS0FEUjtBQUVQRixhQUFPLEVBQUU7QUFGRixLQUFELEVBR1A7QUFDQ0Usa0JBQVksRUFBRSxLQURmO0FBRUNGLGFBQU8sRUFBRTtBQUZWLEtBSE87QUFMWixHQXBDUztBQURhLENBQXJCOztBQXFEUCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJULFlBQXlCO0FBQUEsTUFBWFUsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxRQUFMO0FBQ0ksNkNBQ09GLEtBRFA7QUFFSUcsa0JBQVUsRUFBRSxJQUZoQjtBQUdJVCxjQUFNLEVBQUVPLE1BQU0sQ0FBQ0csSUFBUCxDQUFZVixNQUh4QjtBQUlJSSxvQkFBWSxFQUFFRyxNQUFNLENBQUNHLElBQVAsQ0FBWU47QUFKOUI7O0FBTUosU0FBSyxTQUFMO0FBQ0ksNkNBQ09FLEtBRFA7QUFFSUcsa0JBQVUsRUFBRSxLQUZoQjtBQUdJVCxjQUFNLEVBQUUsSUFIWjtBQUlJSSxvQkFBWSxFQUFFO0FBSmxCOztBQU1KO0FBQ0ksYUFBT0UsS0FBUDtBQWhCUjtBQWtCSCxDQW5CRDs7QUFxQmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmUwZTU3N2YyZDVmOTg3Y2UwZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHRpdGxlOiAnMeuyiOq4gCcsXHJcbiAgICAgICAgY29udGVudDogJ2FzZGZhc2RmYXMgZGZhYWFhYWEgYWFhYWFhYWFhYWFhIGFhYWFhYWFhYWEgYWFhYWFhYWFhIGFhYWFhYWFhYWFhIGFzZGZhc2RmYXNkZmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXNkZmFzZGZhc2RmYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhc2RmYXNkZmFzZGZhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFzZGZhc2RmYXNkZmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXNkZmFzZGZhc2RmYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhc2RmYXNkZmFzZGZhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFzZGZhc2RmYXNkZmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXNkZmFzZGZhc2RmYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhc2RmYXNkZmFzZGZhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFzZGZhc2RmYXNkZmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXNkZmFzZGZhc2RmYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWEgYWFhYWFhYXNkIGZhc2RmYXNkZmEgYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhIGFhYWFhYWFhYWFhYWFhYSBhYWFhYWFhYWFhYSAgYWFzZGZhc2RmYXNkIGZhYWFhYWFhYWFhYWFhYWFhYSBhYWFhYWFhYSBhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhc2RmYXNkZmFzZGZhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFzZGZhc2RmYXNkZmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXNkZmFzZGZhc2RmYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhc2RmYXNkZmFzZGZhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWEgYWFhYWFhYSBhYWFhYWFhYWFhYSBhYWFhYWFzZGZhc2RmYXNkZmFhYWFhYSBhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYScsXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIHVzZXJOaWNrbmFtZSA6ICfsnKDsoIAxJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+uMk+q4gDEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdXNlck5pY2tuYW1lOiAn7Jyg7KCAMicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfrjJPquIAyJyxcclxuICAgICAgICB9XVxyXG4gICAgfSx7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdXNlcklkOiAyLFxyXG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdjb250ZW50JyxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgdXNlck5pY2tuYW1lIDogJ+ycoOyggDEnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn64yT6riAMScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWU6ICfsnKDsoIAyJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+uMk+q4gDInLFxyXG4gICAgICAgIH1dXHJcbiAgICB9LHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB1c2VySWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgY29udGVudDogJ2NvbnRlbnQnLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWUgOiAn7Jyg7KCAMScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfrjJPquIAxJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHVzZXJOaWNrbmFtZTogJ+ycoOyggDInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn64yT6riAMicsXHJcbiAgICAgICAgfV1cclxuICAgIH0se1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHVzZXJJZDogNCxcclxuICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICBjb250ZW50OiAnY29udGVudCcsXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIHVzZXJOaWNrbmFtZSA6ICfsnKDsoIAxJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+uMk+q4gDEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdXNlck5pY2tuYW1lOiAn7Jyg7KCAMicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfrjJPquIAyJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbn07XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogYWN0aW9uLmRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgdXNlck5pY2tuYW1lOiBhY3Rpb24uZGF0YS51c2VyTmlja25hbWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXNlck5pY2tuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=