webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LolPostList.js":
/*!***********************************!*\
  !*** ./components/LolPostList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LolPostList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin-top: 20px;\n        width: 250px;\n\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var LolPostList = function LolPostList(_ref) {
  var data = _ref.data;
  var ListWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item)(_templateObject());
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "large",
    header: "\uAE00 \uBAA9\uB85D",
    pagination: {
      onChange: function onChange(page) {},
      pageSize: 10
    },
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(ListWrapper, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [item.content],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.title,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJMb2xQb3N0TGlzdCIsImRhdGEiLCJMaXN0V3JhcHBlciIsInN0eWxlZCIsIkxpc3QiLCJJdGVtIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsIm9uQ2hhbmdlIiwicGFnZSIsInBhZ2VTaXplIiwiaXRlbSIsImNvbnRlbnQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFOUIsTUFBTUMsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQyx5Q0FBSSxDQUFDQyxJQUFOLENBQVQsbUJBQWpCO0FBS0EsU0FDSSxtRUFDSSxNQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FEWDtBQUVJLFFBQUksRUFBRTtBQUFFQyxZQUFNLEVBQUUsQ0FBVjtBQUFhQyxRQUFFLEVBQUUsQ0FBakI7QUFBb0JDLFFBQUUsRUFBRTtBQUF4QixLQUZWO0FBR0ksUUFBSSxFQUFDLE9BSFQ7QUFJSSxVQUFNLEVBQUMscUJBSlg7QUFLSSxjQUFVLEVBQUU7QUFDUkMsY0FBUSxFQUFFLGtCQUFBQyxJQUFJLEVBQUksQ0FFakIsQ0FITztBQUlSQyxjQUFRLEVBQUU7QUFKRixLQUxoQjtBQVdJLFlBQVEsTUFYWjtBQVlJLGNBQVUsRUFBRVgsSUFaaEI7QUFhSSxjQUFVLEVBQUUsb0JBQUNZLElBQUQ7QUFBQSxhQUNSLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx5Q0FBRDtBQUFNLGVBQU8sRUFBRSxDQUFDQSxJQUFJLENBQUNDLE9BQU4sQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxtQkFBVyxFQUFFRCxJQUFJLENBQUNFLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBRFE7QUFBQSxLQWJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQXlCSCxDQWhDRDs7S0FBTWYsVztBQW1DU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBmODRmM2I5ZTgzZDI3MzgyOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpc3QsIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5cclxuY29uc3QgTG9sUG9zdExpc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBMaXN0V3JhcHBlciA9IHN0eWxlZChMaXN0Lkl0ZW0pYFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICAgIGA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi6riAIOuqqeuhnVwiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHBhZ2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbaXRlbS5jb250ZW50XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=