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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100px;\n    height: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var PostCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"])(_templateObject());
_c = PostCard;

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
          lineNumber: 28,
          columnNumber: 21
        }
      }, __jsx(PostCard, {
        title: item.title,
        actions: ["자세히보기"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }
      }, item.content));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
};

_c2 = LolPostList;
/* harmony default export */ __webpack_exports__["default"] = (LolPostList);

var _c, _c2;

$RefreshReg$(_c, "PostCard");
$RefreshReg$(_c2, "LolPostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInN0eWxlZCIsIkNhcmQiLCJMb2xQb3N0TGlzdCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwib25DaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJpdGVtIiwidGl0bGUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLHlDQUFELENBQVQsbUJBQWQ7S0FBTUYsUTs7QUFLTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRTlCLFNBQ0ksbUVBQ0ksTUFBQyx5Q0FBRDtBQUNJLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBRFg7QUFFSSxRQUFJLEVBQUU7QUFBRUMsWUFBTSxFQUFFLENBQVY7QUFBYUMsUUFBRSxFQUFFLENBQWpCO0FBQW9CQyxRQUFFLEVBQUU7QUFBeEIsS0FGVjtBQUdJLFFBQUksRUFBQyxPQUhUO0FBSUksVUFBTSxFQUFDLHFCQUpYO0FBS0ksY0FBVSxFQUFFO0FBQ1JDLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJLENBRWpCLENBSE87QUFJUkMsY0FBUSxFQUFFO0FBSkYsS0FMaEI7QUFXSSxZQUFRLE1BWFo7QUFZSSxjQUFVLEVBQUVQLElBWmhCO0FBYUksY0FBVSxFQUFFLG9CQUFDUSxJQUFEO0FBQUEsYUFDUixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxRQUFEO0FBQVUsYUFBSyxFQUFFQSxJQUFJLENBQUNDLEtBQXRCO0FBQTZCLGVBQU8sRUFBRSxDQUFDLE9BQUQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrREQsSUFBSSxDQUFDRSxPQUF2RCxDQURKLENBRFE7QUFBQSxLQWJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQXVCSCxDQXpCRDs7TUFBTVgsVztBQTRCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzliNDA2M2YwYmU2N2M2ODc4MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpc3QsIENhcmQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gc3R5bGVkKENhcmQpYFxyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvbFBvc3RMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxyXG4gICAgICAgICAgICAgICAgZ3JpZD17eyBndXR0ZXI6IDEsIHhzOiAxLCBtZDogMSB9fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIuq4gCDrqqnroZ1cIlxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCB0aXRsZT17aXRlbS50aXRsZX0gYWN0aW9ucz17W1wi7J6Q7IS47Z6I67O06riwXCJdfT57aXRlbS5jb250ZW50fTwvUG9zdENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2xQb3N0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9