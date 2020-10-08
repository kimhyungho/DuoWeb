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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var PostList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"])(_templateObject());

var LolPostList = function LolPostList(_ref) {
  var data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: 10
    },
    grid: {
      gutter: 1,
      xs: 1,
      md: 1
    },
    size: "large",
    header: "\uAE00 \uBAA9\uB85D",
    pagination: {
      onChange: function onChange(page) {},
      pageSize: 12
    },
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        title: item.title,
        actions: ["자세히보기"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      }, item.content));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsInN0eWxlZCIsIkNhcmQiLCJMb2xQb3N0TGlzdCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwib25DaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLHlDQUFELENBQVQsbUJBQWQ7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUU5QixTQUNJLG1FQUNJLE1BQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQURYO0FBRUksUUFBSSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBRlY7QUFHSSxRQUFJLEVBQUMsT0FIVDtBQUlJLFVBQU0sRUFBQyxxQkFKWDtBQUtJLGNBQVUsRUFBRTtBQUNSQyxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSSxDQUVqQixDQUhPO0FBSVJDLGNBQVEsRUFBRTtBQUpGLEtBTGhCO0FBV0ksWUFBUSxNQVhaO0FBWUksY0FBVSxFQUFFUCxJQVpoQjtBQWFJLGNBQVUsRUFBRSxvQkFBQ1EsSUFBRDtBQUFBLGFBQ1IsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FBbEI7QUFBeUIsZUFBTyxFQUFFLENBQUMsT0FBRCxDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThDRCxJQUFJLENBQUNFLE9BQW5ELENBREosQ0FEUTtBQUFBLEtBYmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBdUJILENBekJEOztLQUFNWCxXO0FBNEJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOWRiYmQwNTg5YmY0NGJlMDM3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCwgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUG9zdExpc3QgPSBzdHlsZWQoQ2FyZClgXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2xQb3N0TGlzdCA9ICh7IGRhdGEgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiAxLCB4czogMSwgbWQ6IDEgfX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLquIAg66qp66GdXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17aXRlbS50aXRsZX0gYWN0aW9ucz17W1wi7J6Q7IS47Z6I67O06riwXCJdfT57aXRlbS5jb250ZW50fTwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=