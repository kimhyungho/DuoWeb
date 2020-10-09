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


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LolPostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 20px;\n    display: inline-block;\n    width: 300px\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = CardWrapper;

var LolPostCard = function LolPostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      more = _useState[0],
      setMore = _useState[1];

  var onClickMore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMore(true);
  }, []);
  var onClickClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMore(false);
  }, []);
  return __jsx(CardWrapper, {
    key: post.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDownOutlined"], {
      key: "more",
      onClick: onClickMore,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 27
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    title: post.title,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 14
    }
  })));
};

_s(LolPostCard, "TCHqzoAEnPy5vU5irJxP5dy/im0=");

_c2 = LolPostCard;
/* harmony default export */ __webpack_exports__["default"] = (LolPostCard);

var _c, _c2;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "LolPostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkxvbFBvc3RDYXJkIiwicG9zdCIsInVzZVN0YXRlIiwibW9yZSIsInNldE1vcmUiLCJvbkNsaWNrTW9yZSIsInVzZUNhbGxiYWNrIiwib25DbGlja0Nsb3NlIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7O0FBS04sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFFTkMsc0RBQVEsQ0FBQyxLQUFELENBRkY7QUFBQSxNQUV2QkMsSUFGdUI7QUFBQSxNQUVqQkMsT0FGaUI7O0FBRzlCLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDRixXQUFPLENBQUMsSUFBRCxDQUFQO0FBRUgsR0FIOEIsRUFHNUIsRUFINEIsQ0FBL0I7QUFJQSxNQUFNRyxZQUFZLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUNuQ0YsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUVILEdBSCtCLEVBRzdCLEVBSDZCLENBQWhDO0FBS0EsU0FDSSxNQUFDLFdBQUQ7QUFBYSxPQUFHLEVBQUVILElBQUksQ0FBQ08sRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQ7QUFDSSxXQUFPLEVBQUUsQ0FBQyxNQUFDLG1FQUFEO0FBQW1CLFNBQUcsRUFBQyxNQUF2QjtBQUE4QixhQUFPLEVBQUVILFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBRCxDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNPLFNBQUssRUFBRUosSUFBSSxDQUFDUSxLQURuQjtBQUVPLGVBQVcsRUFBRVIsSUFBSSxDQUFDUyxPQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FESixDQURKO0FBYUgsQ0F6QkQ7O0dBQU1WLFc7O01BQUFBLFc7QUE0QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3MDMwZWQ2NWQ5YTM2N2E0NmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBcnJvd0Rvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAwcHhcclxuYDtcclxuY29uc3QgTG9sUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbbW9yZSwgc2V0TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvbkNsaWNrTW9yZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRNb3JlKHRydWUpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uQ2xpY2tDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRNb3JlKGZhbHNlKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1s8QXJyb3dEb3duT3V0bGluZWQga2V5PVwibW9yZVwiIG9uQ2xpY2s9e29uQ2xpY2tNb3JlfSAvPl19XHJcbiAgICAgICAgICAgID48Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NhcmRXcmFwcGVyPlxyXG5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=