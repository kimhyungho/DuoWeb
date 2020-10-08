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

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 350px;\n    height: ;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var PostCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"])(_templateObject());
_c = PostCard;
var ListItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item)(_templateObject2());
_c2 = ListItem;

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
      return __jsx(ListItem, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx(PostCard, {
        title: item.title,
        actions: ["자세히보기"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, item.content));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }));
};

_c3 = LolPostList;
/* harmony default export */ __webpack_exports__["default"] = (LolPostList);

var _c, _c2, _c3;

$RefreshReg$(_c, "PostCard");
$RefreshReg$(_c2, "ListItem");
$RefreshReg$(_c3, "LolPostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInN0eWxlZCIsIkNhcmQiLCJMaXN0SXRlbSIsIkxpc3QiLCJJdGVtIiwiTG9sUG9zdExpc3QiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsIm9uQ2hhbmdlIiwicGFnZSIsInBhZ2VTaXplIiwiaXRlbSIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVCxtQkFBZDtLQUFNRixRO0FBS04sSUFBTUcsUUFBUSxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBSSxDQUFDQyxJQUFOLENBQVQsb0JBQWQ7TUFBTUYsUTs7QUFJTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRTlCLFNBQ0ksbUVBQ0ksTUFBQyx5Q0FBRDtBQUNJLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBRFg7QUFFSSxRQUFJLEVBQUU7QUFBRUMsWUFBTSxFQUFFLENBQVY7QUFBYUMsUUFBRSxFQUFFLENBQWpCO0FBQW9CQyxRQUFFLEVBQUU7QUFBeEIsS0FGVjtBQUdJLFFBQUksRUFBQyxPQUhUO0FBSUksVUFBTSxFQUFDLHFCQUpYO0FBS0ksY0FBVSxFQUFFO0FBQ1JDLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJLENBRWpCLENBSE87QUFJUkMsY0FBUSxFQUFFO0FBSkYsS0FMaEI7QUFXSSxZQUFRLE1BWFo7QUFZSSxjQUFVLEVBQUVQLElBWmhCO0FBYUksY0FBVSxFQUFFLG9CQUFDUSxJQUFEO0FBQUEsYUFDUixNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsUUFBRDtBQUFVLGFBQUssRUFBRUEsSUFBSSxDQUFDQyxLQUF0QjtBQUE2QixlQUFPLEVBQUUsQ0FBQyxPQUFELENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0RELElBQUksQ0FBQ0UsT0FBdkQsQ0FESixDQURRO0FBQUEsS0FiaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUF1QkgsQ0F6QkQ7O01BQU1YLFc7QUE0QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2MWVjNGFmNzRhMDFkNjIzZDlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0LCBDYXJkLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9IHN0eWxlZChDYXJkKWBcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogO1xyXG5gO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQoTGlzdC5JdGVtKWBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2xQb3N0TGlzdCA9ICh7IGRhdGEgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cclxuICAgICAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiAxLCB4czogMSwgbWQ6IDEgfX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLquIAg66qp66GdXCJcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCB0aXRsZT17aXRlbS50aXRsZX0gYWN0aW9ucz17W1wi7J6Q7IS47Z6I67O06riwXCJdfT57aXRlbS5jb250ZW50fTwvUG9zdENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=