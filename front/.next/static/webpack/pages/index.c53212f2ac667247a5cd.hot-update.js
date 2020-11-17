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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");


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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      loadPostLoading = _useSelector2.loadPostLoading,
      loadPostError = _useSelector2.loadPostError,
      detailLolPost = _useSelector2.detailLolPost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var onClickMore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var data = {
      userToken: me.userToken,
      postId: post.id
    };
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["detailLolPostOnAction"])(post));
    dispatch(Object(_reducers_comment__WEBPACK_IMPORTED_MODULE_7__["loadCommentsRequestAction"])(data));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(CardWrapper, {
    key: post.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
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
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, post.top === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 52
      }
    }, "\uD0D1"), post.jungle === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 55
      }
    }, "\uC815\uAE00"), post.mid === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 52
      }
    }, "\uBBF8\uB4DC"), post.bottom === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 55
      }
    }, "\uBC14\uD140"), post.supprot === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 56
      }
    }, "\uC11C\uD3FF")),
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }
  }))));
};

_s(LolPostCard, "JpqkpoD272HCWLDAsBrDNO5sO3Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNhcmRNZXRhIiwiQ2FyZCIsIk1ldGEiLCJMb2xQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja01vcmUiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VyVG9rZW4iLCJwb3N0SWQiLCJpZCIsImRldGFpbExvbFBvc3RPbkFjdGlvbiIsImxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJ0b3AiLCJqdW5nbGUiLCJtaWQiLCJib3R0b20iLCJzdXBwcm90IiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7QUFNTixJQUFNRyxRQUFRLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFJLENBQUNDLElBQU4sQ0FBVCxvQkFBZDtNQUFNRixROztBQUlOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBRWZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkk7QUFBQSxNQUV0QkMsRUFGc0IsZ0JBRXRCQSxFQUZzQjs7QUFBQSxzQkFHNEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENBSHZDO0FBQUEsTUFHdEJLLGVBSHNCLGlCQUd0QkEsZUFIc0I7QUFBQSxNQUdMQyxhQUhLLGlCQUdMQSxhQUhLO0FBQUEsTUFHVUMsYUFIVixpQkFHVUEsYUFIVjs7QUFJOUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDLFFBQU1DLElBQUksR0FBRztBQUFFQyxlQUFTLEVBQUVULEVBQUUsQ0FBQ1MsU0FBaEI7QUFBMkJDLFlBQU0sRUFBRWQsSUFBSSxDQUFDZTtBQUF4QyxLQUFiO0FBQ0FQLFlBQVEsQ0FBQ1EsNEVBQXFCLENBQUNoQixJQUFELENBQXRCLENBQVI7QUFDQVEsWUFBUSxDQUFDUyxtRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQixDQUFSO0FBQ0gsR0FKOEIsRUFJNUIsRUFKNEIsQ0FBL0I7QUFNQSxTQUNJLG1FQUNJLE1BQUMsV0FBRDtBQUFhLE9BQUcsRUFBRVosSUFBSSxDQUFDZSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNJLFdBQU8sRUFBRSxDQUFDLE1BQUMsbUVBQUQ7QUFBbUIsU0FBRyxFQUFDLE1BQXZCO0FBQThCLGFBQU8sRUFBRUwsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELENBRGI7QUFFSSxZQUFRLEVBQUUsSUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0MsTUFBQyxRQUFEO0FBQ08sU0FBSyxFQUNELG1FQUNLVixJQUFJLENBQUNrQixHQUFMLEtBQWEsQ0FBYixJQUFrQixNQUFDLHdDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEdkIsRUFFS2xCLElBQUksQ0FBQ21CLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsTUFBQyx3Q0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRjFCLEVBR0tuQixJQUFJLENBQUNvQixHQUFMLEtBQWEsQ0FBYixJQUFrQixNQUFDLHdDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIdkIsRUFJS3BCLElBQUksQ0FBQ3FCLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsTUFBQyx3Q0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSjFCLEVBS0tyQixJQUFJLENBQUNzQixPQUFMLEtBQWlCLENBQWpCLElBQXNCLE1BQUMsd0NBQUQ7QUFBSyxXQUFLLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUwzQixDQUZYO0FBVU8sZUFBVyxFQUFFdEIsSUFBSSxDQUFDdUIsT0FWekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREosQ0FESixDQURKO0FBc0JILENBbENEOztHQUFNeEIsVztVQUVhRSx1RCxFQUMyQ0EsdUQsRUFDekNRLHVEOzs7TUFKZlYsVztBQXFDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzUzMjEyZjJhYzY2NzI0N2E1Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDYXJkLCBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXJyb3dEb3duT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZGV0YWlsTG9sUG9zdE9uQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IGxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jb21tZW50JztcclxuXHJcblxyXG5jb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkTWV0YSA9IHN0eWxlZChDYXJkLk1ldGEpYFxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvbFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgbG9hZFBvc3RMb2FkaW5nLCBsb2FkUG9zdEVycm9yLCBkZXRhaWxMb2xQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tNb3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJUb2tlbjogbWUudXNlclRva2VuLCBwb3N0SWQ6IHBvc3QuaWQgfVxyXG4gICAgICAgIGRpc3BhdGNoKGRldGFpbExvbFBvc3RPbkFjdGlvbihwb3N0KSk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFdyYXBwZXIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17WzxBcnJvd0Rvd25PdXRsaW5lZCBrZXk9XCJtb3JlXCIgb25DbGljaz17b25DbGlja01vcmV9IC8+XX1cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID48Q2FyZE1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50b3AgPT09IDEgJiYgPFRhZyBjb2xvcj0nIzQyNDI0Mic+7YORPC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lmp1bmdsZSA9PT0gMSAmJiA8VGFnIGNvbG9yPScjNDI0MjQyJz7soJXquIA8L1RhZz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QubWlkID09PSAxICYmIDxUYWcgY29sb3I9JyM0MjQyNDInPuuvuOuTnDwvVGFnPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5ib3R0b20gPT09IDEgJiYgPFRhZyBjb2xvcj0nIzQyNDI0Mic+67CU7YWAPC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN1cHByb3QgPT09IDEgJiYgPFRhZyBjb2xvcj0nIzQyNDI0Mic+7ISc7Y+/PC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2xQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9