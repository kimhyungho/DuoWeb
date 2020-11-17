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
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, post.gameMode, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }), post.top === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 52
      }
    }, "\uD0D1"), post.jungle === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 55
      }
    }, "\uC815\uAE00"), post.mid === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 52
      }
    }, "\uBBF8\uB4DC"), post.bottom === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 55
      }
    }, "\uBC14\uD140"), post.supprot === 1 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: "#424242",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
  })), post.endTime));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNhcmRNZXRhIiwiQ2FyZCIsIk1ldGEiLCJMb2xQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja01vcmUiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VyVG9rZW4iLCJwb3N0SWQiLCJpZCIsImRldGFpbExvbFBvc3RPbkFjdGlvbiIsImxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJnYW1lTW9kZSIsInRvcCIsImp1bmdsZSIsIm1pZCIsImJvdHRvbSIsInN1cHByb3QiLCJjb250ZW50IiwiZW5kVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7QUFNTixJQUFNRyxRQUFRLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFJLENBQUNDLElBQU4sQ0FBVCxvQkFBZDtNQUFNRixROztBQUlOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEscUJBRWZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkk7QUFBQSxNQUV0QkMsRUFGc0IsZ0JBRXRCQSxFQUZzQjs7QUFBQSxzQkFHNEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENBSHZDO0FBQUEsTUFHdEJLLGVBSHNCLGlCQUd0QkEsZUFIc0I7QUFBQSxNQUdMQyxhQUhLLGlCQUdMQSxhQUhLO0FBQUEsTUFHVUMsYUFIVixpQkFHVUEsYUFIVjs7QUFJOUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDLFFBQU1DLElBQUksR0FBRztBQUFFQyxlQUFTLEVBQUVULEVBQUUsQ0FBQ1MsU0FBaEI7QUFBMkJDLFlBQU0sRUFBRWQsSUFBSSxDQUFDZTtBQUF4QyxLQUFiO0FBQ0FQLFlBQVEsQ0FBQ1EsNEVBQXFCLENBQUNoQixJQUFELENBQXRCLENBQVI7QUFDQVEsWUFBUSxDQUFDUyxtRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQixDQUFSO0FBQ0gsR0FKOEIsRUFJNUIsRUFKNEIsQ0FBL0I7QUFNQSxTQUNJLG1FQUNJLE1BQUMsV0FBRDtBQUFhLE9BQUcsRUFBRVosSUFBSSxDQUFDZSxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUNJLFdBQU8sRUFBRSxDQUFDLE1BQUMsbUVBQUQ7QUFBbUIsU0FBRyxFQUFDLE1BQXZCO0FBQThCLGFBQU8sRUFBRUwsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELENBRGI7QUFFSSxZQUFRLEVBQUUsSUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0MsTUFBQyxRQUFEO0FBQ08sU0FBSyxFQUNELG1FQUNLVixJQUFJLENBQUNrQixRQURWLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0tsQixJQUFJLENBQUNtQixHQUFMLEtBQWEsQ0FBYixJQUFrQixNQUFDLHdDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIdkIsRUFJS25CLElBQUksQ0FBQ29CLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsTUFBQyx3Q0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSjFCLEVBS0twQixJQUFJLENBQUNxQixHQUFMLEtBQWEsQ0FBYixJQUFrQixNQUFDLHdDQUFEO0FBQUssV0FBSyxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMdkIsRUFNS3JCLElBQUksQ0FBQ3NCLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsTUFBQyx3Q0FBRDtBQUFLLFdBQUssRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTjFCLEVBT0t0QixJQUFJLENBQUN1QixPQUFMLEtBQWlCLENBQWpCLElBQXNCLE1BQUMsd0NBQUQ7QUFBSyxXQUFLLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVAzQixDQUZYO0FBWU8sZUFBVyxFQUFFdkIsSUFBSSxDQUFDd0IsT0FaekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREosRUFtQkt4QixJQUFJLENBQUN5QixPQW5CVixDQURKLENBREo7QUF5QkgsQ0FyQ0Q7O0dBQU0xQixXO1VBRWFFLHVELEVBQzJDQSx1RCxFQUN6Q1EsdUQ7OztNQUpmVixXO0FBd0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmY1OWRhNGIyNjA2MmJlMWNiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENhcmQsIFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBcnJvd0Rvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBkZXRhaWxMb2xQb3N0T25BY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgbG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NvbW1lbnQnO1xyXG5cclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRNZXRhID0gc3R5bGVkKENhcmQuTWV0YSlgXHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9sUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBsb2FkUG9zdExvYWRpbmcsIGxvYWRQb3N0RXJyb3IsIGRldGFpbExvbFBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja01vcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlclRva2VuOiBtZS51c2VyVG9rZW4sIHBvc3RJZDogcG9zdC5pZCB9XHJcbiAgICAgICAgZGlzcGF0Y2goZGV0YWlsTG9sUG9zdE9uQWN0aW9uKHBvc3QpKTtcclxuICAgICAgICBkaXNwYXRjaChsb2FkQ29tbWVudHNSZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkV3JhcHBlciBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbPEFycm93RG93bk91dGxpbmVkIGtleT1cIm1vcmVcIiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0gLz5dfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPjxDYXJkTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmdhbWVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudG9wID09PSAxICYmIDxUYWcgY29sb3I9JyM0MjQyNDInPu2DkTwvVGFnPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5qdW5nbGUgPT09IDEgJiYgPFRhZyBjb2xvcj0nIzQyNDI0Mic+7KCV6riAPC9UYWc+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0Lm1pZCA9PT0gMSAmJiA8VGFnIGNvbG9yPScjNDI0MjQyJz7rr7jrk5w8L1RhZz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuYm90dG9tID09PSAxICYmIDxUYWcgY29sb3I9JyM0MjQyNDInPuuwlO2FgDwvVGFnPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdXBwcm90ID09PSAxICYmIDxUYWcgY29sb3I9JyM0MjQyNDInPuyEnO2PvzwvVGFnPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIHtwb3N0LmVuZFRpbWV9XHJcbiAgICAgICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvbFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=