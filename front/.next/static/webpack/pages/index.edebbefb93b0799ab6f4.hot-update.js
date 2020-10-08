webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LolPostList.js":
/*!***********************************!*\
  !*** ./components/LolPostList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LolPostList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var LolPostList = function LolPostList(_ref) {
  var _jsx;

  var data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], (_jsx = {
    style: {
      marginBottom: 10
    },
    grid: {
      gutter: 1,
      xs: 1,
      md: 1
    },
    size: "large",
    header: "\uAE00 \uBAA9\uB85D"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "header", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "\uAE00\uC4F0\uAE30")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "pagination", {
    onChange: function onChange(page) {},
    pageSize: 12
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "bordered", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "dataSource", data), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "renderItem", function renderItem(item) {
    return __jsx(ListWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      size: "default",
      actions: [item.content],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      description: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    })));
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }), _jsx)));
};

_c = LolPostList;
/* harmony default export */ __webpack_exports__["default"] = (LolPostList);

var _c;

$RefreshReg$(_c, "LolPostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJMb2xQb3N0TGlzdCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwib25DaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJpdGVtIiwiY29udGVudCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFOUIsU0FDSSxtRUFDSSxNQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FEWDtBQUVJLFFBQUksRUFBRTtBQUFFQyxZQUFNLEVBQUUsQ0FBVjtBQUFhQyxRQUFFLEVBQUUsQ0FBakI7QUFBb0JDLFFBQUUsRUFBRTtBQUF4QixLQUZWO0FBR0ksUUFBSSxFQUFDLE9BSFQ7QUFJSSxVQUFNLEVBQUM7QUFKWCwrR0FLWSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTFosaUhBTWdCO0FBQ1JDLFlBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJLENBRWpCLENBSE87QUFJUkMsWUFBUSxFQUFFO0FBSkYsR0FOaEIsb09BYWdCUCxJQWJoQixpSEFjZ0Isb0JBQUNRLElBQUQ7QUFBQSxXQUNSLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBQyxTQUFYO0FBQXFCLGFBQU8sRUFBRSxDQUFDQSxJQUFJLENBQUNDLE9BQU4sQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsaUJBQVcsRUFBRUQsSUFBSSxDQUFDRSxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURRO0FBQUEsR0FkaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBREo7QUEwQkgsQ0E1QkQ7O0tBQU1YLFc7QUErQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkZWJiZWZiOTNiMDc5OWFiNmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0LCBDYXJkLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5cclxuY29uc3QgTG9sUG9zdExpc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19XHJcbiAgICAgICAgICAgICAgICBncmlkPXt7IGd1dHRlcjogMSwgeHM6IDEsIG1kOiAxIH19XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi6riAIOuqqeuhnVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxCdXR0b24+6riA7JOw6riwPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2l6ZT1cImRlZmF1bHRcIiBhY3Rpb25zPXtbaXRlbS5jb250ZW50XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=