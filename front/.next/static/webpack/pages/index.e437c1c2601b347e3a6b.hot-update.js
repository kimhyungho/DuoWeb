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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\DetailPost.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    border: 1px solid #000000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Frame = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Frame;

var DetailPost = function DetailPost(_ref) {
  _s();

  var onClose = _ref.onClose,
      data = _ref.data;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      userId = _useSelector.userId;

  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
      lineNumber: 17,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    style: {
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, data.title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, data.content), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    key: "ellipsis",
    content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, userId && data.userId == userId ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, "\uC218\uC815")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 23
      }
    }, "\uC2E0\uACE0")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
          lineNumber: 41,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.userNickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
};

_s(DetailPost, "XIHPHvUohkVyU+MTU6yUG2CM+9Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsIm9uQ2xvc2UiLCJkYXRhIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VySWQiLCJ3aWR0aCIsInBhZGRpbmciLCJmb250U2l6ZSIsInRpdGxlIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInVzZXJOaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtLQUFNRixLOztBQUtOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxxQkFDbkJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRFE7QUFBQSxNQUM5QkMsTUFEOEIsZ0JBQzlCQSxNQUQ4Qjs7QUFHdEMsU0FDSSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBRTtBQUFULEtBQWY7QUFBa0MsV0FBTyxFQUFFTixPQUEzQztBQUFvRCxRQUFJLEVBQUMsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQUssU0FBSyxFQUFFO0FBQUNRLGNBQVEsRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QlAsSUFBSSxDQUFDUSxLQUFsQyxDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNUixJQUFJLENBQUNTLE9BQVgsQ0FISixFQUlJLE1BQUMsNENBQUQ7QUFDSSxPQUFHLEVBQUMsVUFEUjtBQUVJLFdBQU8sRUFDSCxNQUFDLDJDQUFELENBQVEsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tMLE1BQU0sSUFBSUosSUFBSSxDQUFDSSxNQUFMLElBQWVBLE1BQXpCLEdBQ0csbUVBQ0ksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLENBREgsR0FLSCxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsQ0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFtQkksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJKLEVBb0JJLE1BQUMseUNBQUQ7QUFDSSxVQUFNLFlBQUtKLElBQUksQ0FBQ1UsUUFBTCxHQUFnQlYsSUFBSSxDQUFDVSxRQUFMLENBQWNDLE1BQTlCLEdBQXVDLENBQTVDLDhCQURWO0FBRUksY0FBVSxFQUFDLFlBRmY7QUFHSSxjQUFVLEVBQUVYLElBQUksQ0FBQ1UsUUFIckI7QUFJSSxjQUFVLEVBQUUsb0JBQUNFLElBQUQ7QUFBQSxhQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDRDQUFEO0FBQ0ksY0FBTSxFQUFFQSxJQUFJLENBQUNDLFlBRGpCO0FBRUksZUFBTyxFQUFFRCxJQUFJLENBQUNILE9BRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURRO0FBQUEsS0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCSixDQURKO0FBcUNILENBeENEOztHQUFNWCxVO1VBQ2lCRyx1RDs7O01BRGpCSCxVO0FBMENTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDM3YzFjMjYwMWIzNDdlM2E2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBDb21tZW50LCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgRnJhbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuYDtcclxuXHJcbmNvbnN0IERldGFpbFBvc3QgPSAoeyBvbkNsb3NlLCBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IG9uQ2xpY2s9e29uQ2xvc2V9IHR5cGU9XCJwcmltYXJ5XCI+64ur6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogMjB9fT57ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57ZGF0YS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAga2V5PVwiZWxsaXBzaXNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VySWQgJiYgZGF0YS51c2VySWQgPT0gdXNlcklkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7ZGF0YS5Db21tZW50cyA/IGRhdGEuQ29tbWVudHMubGVuZ3RoIDogMH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGEuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS51c2VyTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRnJhbWU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9