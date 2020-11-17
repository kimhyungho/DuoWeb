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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");


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
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      loadPostLoading = _useSelector2.loadPostLoading,
      loadPostError = _useSelector2.loadPostError,
      detailLolPost = _useSelector2.detailLolPost;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var onClickMore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var data = {
      userToken: me.userToken,
      postId: post.id
    };
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_7__["detailLolPostOnAction"])(post));
    dispatch(Object(_reducers_comment__WEBPACK_IMPORTED_MODULE_8__["loadCommentsRequestAction"])(data));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(CardWrapper, {
    key: post.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ArrowDownOutlined"], {
      key: "more",
      onClick: onClickMore,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 31
      }
    })],
    bordered: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(CardMeta, {
    title: post.title,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 18
    }
  }))));
};

_s(LolPostCard, "JpqkpoD272HCWLDAsBrDNO5sO3Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNhcmRNZXRhIiwiQ2FyZCIsIk1ldGEiLCJMb2xQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja01vcmUiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VyVG9rZW4iLCJwb3N0SWQiLCJpZCIsImRldGFpbExvbFBvc3RPbkFjdGlvbiIsImxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJ0aXRsZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFqQjtLQUFNRixXO0FBTU4sSUFBTUcsUUFBUSxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBSSxDQUFDQyxJQUFOLENBQVQsb0JBQWQ7TUFBTUYsUTs7QUFJTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUVmQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZJO0FBQUEsTUFFdEJDLEVBRnNCLGdCQUV0QkEsRUFGc0I7O0FBQUEsc0JBRzRCSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUh2QztBQUFBLE1BR3RCSyxlQUhzQixpQkFHdEJBLGVBSHNCO0FBQUEsTUFHTEMsYUFISyxpQkFHTEEsYUFISztBQUFBLE1BR1VDLGFBSFYsaUJBR1VBLGFBSFY7O0FBSTlCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQyxRQUFNQyxJQUFJLEdBQUc7QUFBQ0MsZUFBUyxFQUFFVCxFQUFFLENBQUNTLFNBQWY7QUFBMEJDLFlBQU0sRUFBRWQsSUFBSSxDQUFDZTtBQUF2QyxLQUFiO0FBQ0FQLFlBQVEsQ0FBQ1EsNEVBQXFCLENBQUNoQixJQUFELENBQXRCLENBQVI7QUFDQVEsWUFBUSxDQUFDUyxtRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQixDQUFSO0FBQ0gsR0FKOEIsRUFJNUIsRUFKNEIsQ0FBL0I7QUFNQSxTQUNJLG1FQUNJLE1BQUMsV0FBRDtBQUFhLE9BQUcsRUFBRVosSUFBSSxDQUFDZSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNJLFdBQU8sRUFBRSxDQUFDLE1BQUMsbUVBQUQ7QUFBbUIsU0FBRyxFQUFDLE1BQXZCO0FBQThCLGFBQU8sRUFBRUwsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELENBRGI7QUFFSSxZQUFRLEVBQUUsSUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0MsTUFBQyxRQUFEO0FBQ08sU0FBSyxFQUFFVixJQUFJLENBQUNrQixLQURuQjtBQUVPLGVBQVcsRUFBRWxCLElBQUksQ0FBQ21CLE9BRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQURKLENBREosQ0FESjtBQWNILENBMUJEOztHQUFNcEIsVztVQUVhRSx1RCxFQUMyQ0EsdUQsRUFDekNRLHVEOzs7TUFKZlYsVztBQTZCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjcxYWEyNWZiN2Y2NTI3YzdhMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93RG93bk91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgRGV0YWlsUG9zdCBmcm9tICcuL0RldGFpbFBvc3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGRldGFpbExvbFBvc3RPbkFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBsb2FkQ29tbWVudHNSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY29tbWVudCc7XHJcblxyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZE1ldGEgPSBzdHlsZWQoQ2FyZC5NZXRhKWBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2xQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IGxvYWRQb3N0TG9hZGluZywgbG9hZFBvc3RFcnJvciwgZGV0YWlsTG9sUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrTW9yZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge3VzZXJUb2tlbjogbWUudXNlclRva2VuLCBwb3N0SWQ6IHBvc3QuaWR9XHJcbiAgICAgICAgZGlzcGF0Y2goZGV0YWlsTG9sUG9zdE9uQWN0aW9uKHBvc3QpKTtcclxuICAgICAgICBkaXNwYXRjaChsb2FkQ29tbWVudHNSZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkV3JhcHBlciBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbPEFycm93RG93bk91dGxpbmVkIGtleT1cIm1vcmVcIiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0gLz5dfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPjxDYXJkTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2xQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9