webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DetailPost.js":
/*!**********************************!*\
  !*** ./components/DetailPost.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\DetailPost.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DetailPost = function DetailPost(_ref) {
  var onClose = _ref.onClose,
      data = _ref.data;
  return __jsx("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      width: '100%'
    },
    onClick: onClose,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.content), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: "".concat(data.Comments ? data.Comments.length : 0, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: data.Comments || [],
    renderItem: function renderItem(item) {
      __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.userNickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
};

_c = DetailPost;
/* harmony default export */ __webpack_exports__["default"] = (DetailPost);

var _c;

$RefreshReg$(_c, "DetailPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkRldGFpbFBvc3QiLCJvbkNsb3NlIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInVzZXJOaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF1QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdEMsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUFrQyxXQUFPLEVBQUVGLE9BQTNDO0FBQW9ELFFBQUksRUFBQyxTQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQyxJQUFJLENBQUNHLE9BQVgsQ0FGSixFQUdJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQyx5Q0FBRDtBQUNJLFVBQU0sWUFBS0gsSUFBSSxDQUFDSSxRQUFMLEdBQWdCSixJQUFJLENBQUNJLFFBQUwsQ0FBY0MsTUFBOUIsR0FBdUMsQ0FBNUMsOEJBRFY7QUFFSSxjQUFVLEVBQUMsWUFGZjtBQUdJLGNBQVUsRUFBRUwsSUFBSSxDQUFDSSxRQUFMLElBQWlCLEVBSGpDO0FBSUksY0FBVSxFQUFFLG9CQUFDRSxJQUFELEVBQVE7QUFDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNENBQUQ7QUFDSSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsWUFEakI7QUFFSSxlQUFPLEVBQUVELElBQUksQ0FBQ0gsT0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKO0FBT0gsS0FaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESjtBQXVCSCxDQXhCRDs7S0FBTUwsVTtBQTBCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDZhM2JmMmQ0MTIzYzMxN2JjYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5cclxuXHJcbmNvbnN0IERldGFpbFBvc3QgPSAoeyBvbkNsb3NlLCBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gb25DbGljaz17b25DbG9zZX0gdHlwZT1cInByaW1hcnlcIj7ri6vquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj57ZGF0YS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0vPlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtkYXRhLkNvbW1lbnRzID8gZGF0YS5Db21tZW50cy5sZW5ndGggOiAwfeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YS5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS51c2VyTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==