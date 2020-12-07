webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SignUpForm */ "./components/SignUpForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_LolPostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LolPostCard */ "./components/LolPostCard.js");
/* harmony import */ var _components_DetailPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DetailPost */ "./components/DetailPost.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_LolFilterForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LolFilterForm */ "./components/LolFilterForm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Index = function Index() {
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, me.userToken ? __jsx("div", {
    style: {
      textAlign: 'right',
      margin: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 23
    }
  }, __jsx(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    style: {
      marginLeft: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./lol_write",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 92
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 117
    }
  }, "\uAE00\uC4F0\uAE30"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onIsFilter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "\uD544\uD130")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), isFilter && __jsx(_components_LolFilterForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 38
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), me.userToken && !detailLolPostOn && posts.map(function (post) {
    return __jsx(_components_LolPostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 74
      }
    });
  }), me.userToken && detailLolPostOn && __jsx(_components_DetailPost__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 53
    }
  }), me.userToken && !detailLolPostOn && __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Pagination"], {
    defaultCurrent: 1,
    total: 50,
    onChange: onPagenate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 53
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJtZSIsInVzZXJUb2tlbiIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJvbklzRmlsdGVyIiwiaXNGaWx0ZXIiLCJkZXRhaWxMb2xQb3N0T24iLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpZCIsIm9uUGFnZW5hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ1osU0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsRUFBRSxDQUFDQyxTQUFILEdBQ0s7QUFBSyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE9BQWI7QUFBc0JDLFlBQU0sRUFBRTtBQUE5QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNELE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXpCLENBQXRELENBQWIsRUFDQSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFQyxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLENBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJR0MsUUFBUSxJQUFJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpmLENBREwsR0FPSyxrRUFSVixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdLTixFQUFFLENBQUNDLFNBQUgsSUFBZ0IsQ0FBQ00sZUFBakIsSUFBb0NDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUFVLE1BQUMsK0RBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBcEI7QUFBd0IsVUFBSSxFQUFFRCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFWLENBWHpDLEVBWUtWLEVBQUUsQ0FBQ0MsU0FBSCxJQUFnQk0sZUFBaEIsSUFBbUMsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWnhDLEVBYUtQLEVBQUUsQ0FBQ0MsU0FBSCxJQUFnQixDQUFDTSxlQUFqQixJQUFtQyxNQUFDLCtDQUFEO0FBQVksa0JBQWMsRUFBRSxDQUE1QjtBQUErQixTQUFLLEVBQUUsRUFBdEM7QUFBMEMsWUFBUSxFQUFFSyxVQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYnhDLENBREo7QUFpQlAsQ0FsQkQ7O0tBQU1iLEs7QUFvQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjNWYwODg5MTUyZTkzNTQxZmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25VcEZvcm0nO1xyXG5pbXBvcnQgeyBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xvbFBvc3RDYXJkJ1xyXG5pbXBvcnQgRGV0YWlsUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL0RldGFpbFBvc3QnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cCc7XHJcbmltcG9ydCBMb2xGaWx0ZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9sRmlsdGVyRm9ybSdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPjxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMjBweCcgfX0+PExpbmsgaHJlZj1cIi4vbG9sX3dyaXRlXCI+PGE+6riA7JOw6riwPC9hPjwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbklzRmlsdGVyfT7tlYTthLA8L0J1dHRvbj48L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNGaWx0ZXIgJiYgPExvbEZpbHRlckZvcm0vPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IDw+PC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiAhZGV0YWlsTG9sUG9zdE9uICYmIHBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiBkZXRhaWxMb2xQb3N0T24gJiYgPERldGFpbFBvc3QgLz59XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuICYmICFkZXRhaWxMb2xQb3N0T24gJiY8UGFnaW5hdGlvbiBkZWZhdWx0Q3VycmVudD17MX0gdG90YWw9ezUwfSBvbkNoYW5nZT17b25QYWdlbmF0ZX0gLz59XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9