webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LolPostCard.js":
/*!***********************************!*\
  !*** ./components/LolPostCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _DetailPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailPost */ "./components/DetailPost.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LolPostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 150px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    display: inline-block;\n    width: 400px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = CardWrapper;
var CardMeta = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta)(_templateObject2());
_c2 = CardMeta;

var LolPostCard = function LolPostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      lolPosts = _useSelector.lolPosts,
      loadPostLoading = _useSelector.loadPostLoading,
      loadPostError = _useSelector.loadPostError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      more = _useState[0],
      setMore = _useState[1];

  var onClickMore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMore(true);
  }, []);
  var onClickClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMore(false);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, more ? __jsx(_DetailPost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClose: onClickClose,
    data: lolPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }) : __jsx(CardWrapper, {
    key: post.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 77
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDownOutlined"], {
      key: "more",
      onClick: onClickMore,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 31
      }
    })],
    bordered: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(CardMeta, {
    title: post.title,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }
  }))));
};

_s(LolPostCard, "508ZBCgZfVfEiaVkG/vaAmOIavY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c3 = LolPostCard;
/* harmony default export */ __webpack_exports__["default"] = (LolPostCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "CardMeta");
$RefreshReg$(_c3, "LolPostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNhcmRNZXRhIiwiQ2FyZCIsIk1ldGEiLCJMb2xQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdEVycm9yIiwidXNlU3RhdGUiLCJtb3JlIiwic2V0TW9yZSIsIm9uQ2xpY2tNb3JlIiwidXNlQ2FsbGJhY2siLCJvbkNsaWNrQ2xvc2UiLCJpZCIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7QUFNTixJQUFNRyxRQUFRLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFJLENBQUNDLElBQU4sQ0FBVCxvQkFBZDtNQUFNRixROztBQUlOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBRXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUZsQztBQUFBLE1BRXRCRyxRQUZzQixnQkFFdEJBLFFBRnNCO0FBQUEsTUFFWkMsZUFGWSxnQkFFWkEsZUFGWTtBQUFBLE1BRUtDLGFBRkwsZ0JBRUtBLGFBRkw7O0FBQUEsa0JBR05DLHNEQUFRLENBQUMsS0FBRCxDQUhGO0FBQUEsTUFHdkJDLElBSHVCO0FBQUEsTUFHakJDLE9BSGlCOztBQUk5QixNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0YsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUVILEdBSDhCLEVBRzVCLEVBSDRCLENBQS9CO0FBSUEsTUFBTUcsWUFBWSxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDbkNGLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFFSCxHQUgrQixFQUc3QixFQUg2QixDQUFoQztBQUtBLFNBQ0ksbUVBQ0tELElBQUksR0FBRyxNQUFDLG1EQUFEO0FBQVksV0FBTyxFQUFFSSxZQUFyQjtBQUFtQyxRQUFJLEVBQUVSLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUEyRCxNQUFDLFdBQUQ7QUFBYSxPQUFHLEVBQUVILElBQUksQ0FBQ1ksRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUM1RCxNQUFDLHlDQUFEO0FBQ0ksV0FBTyxFQUFFLENBQUMsTUFBQyxtRUFBRDtBQUFtQixTQUFHLEVBQUMsTUFBdkI7QUFBOEIsYUFBTyxFQUFFSCxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsQ0FEYjtBQUVJLFlBQVEsRUFBRSxJQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQyxNQUFDLFFBQUQ7QUFDTyxTQUFLLEVBQUVULElBQUksQ0FBQ2EsS0FEbkI7QUFFTyxlQUFXLEVBQUViLElBQUksQ0FBQ2MsT0FGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBRDRELENBRHBFLENBREo7QUFlSCxDQTVCRDs7R0FBTWYsVztVQUVtREUsdUQ7OztNQUZuREYsVztBQStCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTA4MGM0MmJmNGM0Mzc1Y2I3OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93RG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgRGV0YWlsUG9zdCBmcm9tICcuL0RldGFpbFBvc3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkTWV0YSA9IHN0eWxlZChDYXJkLk1ldGEpYFxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvbFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBsb2xQb3N0cywgbG9hZFBvc3RMb2FkaW5nLCBsb2FkUG9zdEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW21vcmUsIHNldE1vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbGlja01vcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9yZSh0cnVlKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvbkNsaWNrQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9yZShmYWxzZSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge21vcmUgPyA8RGV0YWlsUG9zdCBvbkNsb3NlPXtvbkNsaWNrQ2xvc2V9IGRhdGE9e2xvbFBvc3RzfSAvPiA6IDxDYXJkV3JhcHBlciBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbPEFycm93RG93bk91dGxpbmVkIGtleT1cIm1vcmVcIiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0gLz5dfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPjxDYXJkTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmRXcmFwcGVyPn1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=