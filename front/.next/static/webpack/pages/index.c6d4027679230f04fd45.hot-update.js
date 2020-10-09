webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DetailPost.js":
/*!**********************************!*\
  !*** ./components/DetailPost.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\DetailPost.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 10px;\n    border: 1px solid #000000\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Frame = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Frame;

var DetailPost = function DetailPost(_ref) {
  var onClose = _ref.onClose,
      data = _ref.data;
  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      width: '100%'
    },
    onClick: onClose,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, data.content), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: "".concat(data.Comments ? data.Comments.length : 0, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: data.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.userNickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));
};

_c2 = DetailPost;
/* harmony default export */ __webpack_exports__["default"] = (DetailPost);

var _c, _c2;

$RefreshReg$(_c, "Frame");
$RefreshReg$(_c2, "DetailPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsIm9uQ2xvc2UiLCJkYXRhIiwid2lkdGgiLCJwYWRkaW5nIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInVzZXJOaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFYO0tBQU1GLEs7O0FBS04sSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBdUI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3RDLFNBQ0ksTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUFmO0FBQWtDLFdBQU8sRUFBRUYsT0FBM0M7QUFBb0QsUUFBSSxFQUFDLFNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1DLElBQUksQ0FBQ0csT0FBWCxDQUZKLEVBR0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLHlDQUFEO0FBQ0ksVUFBTSxZQUFLSCxJQUFJLENBQUNJLFFBQUwsR0FBZ0JKLElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxNQUE5QixHQUF1QyxDQUE1Qyw4QkFEVjtBQUVJLGNBQVUsRUFBQyxZQUZmO0FBR0ksY0FBVSxFQUFFTCxJQUFJLENBQUNJLFFBSHJCO0FBSUksY0FBVSxFQUFFLG9CQUFDRSxJQUFEO0FBQUEsYUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyw0Q0FBRDtBQUNJLGNBQU0sRUFBRUEsSUFBSSxDQUFDQyxZQURqQjtBQUVJLGVBQU8sRUFBRUQsSUFBSSxDQUFDSCxPQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FEUTtBQUFBLEtBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKO0FBcUJILENBdEJEOztNQUFNTCxVO0FBd0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNmQ0MDI3Njc5MjMwZjA0ZmQ0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBDb21tZW50IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcblxyXG5jb25zdCBGcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXHJcbmA7XHJcblxyXG5jb25zdCBEZXRhaWxQb3N0ID0gKHsgb25DbG9zZSwgZGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtvbkNsb3NlfSB0eXBlPVwicHJpbWFyeVwiPuuLq+q4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PntkYXRhLmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21tZW50Rm9ybSAvPlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtkYXRhLkNvbW1lbnRzID8gZGF0YS5Db21tZW50cy5sZW5ndGggOiAwfeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YS5Db21tZW50c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLnVzZXJOaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9GcmFtZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=