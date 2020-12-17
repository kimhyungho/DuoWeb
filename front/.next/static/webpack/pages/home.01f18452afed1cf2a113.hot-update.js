webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
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
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\pages\\home.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFilter = _useState[0],
      setIsFilter = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      logInError = _useSelector2.logInError,
      logInDone = _useSelector2.logInDone;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      posts = _useSelector3.posts,
      loadPostLoading = _useSelector3.loadPostLoading,
      loadPostError = _useSelector3.loadPostError,
      detailLolPost = _useSelector3.detailLolPost,
      detailLolPostOn = _useSelector3.detailLolPostOn;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var data = {
      limit: 15,
      offset: 0,
      userToken: me.userToken
    };

    if (logInDone) {
      dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["loadAllLolPostsRequestAction"])(data));
    }
  }, [logInDone]);
  var onPagenate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var data = {
      limit: 15,
      offset: (e - 1) * 15,
      userToken: me.userToken
    };
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["loadAllLolPostsRequestAction"])(data));
  }, []);
  var onIsFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsFilter(!isFilter);
  }, [isFilter]);

  if (logInError === -401) {
    return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 48,
        columnNumber: 23
      }
    }, __jsx(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "primary",
      style: {
        marginLeft: '20px',
        backgroundColor: '#FA5A5A'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 38
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "./lol_write",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 120
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 145
      }
    }, "\uAE00\uC4F0\uAE30"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: onIsFilter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "\uD544\uD130")), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }), isFilter && __jsx(_components_LolFilterForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 38
      }
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }), me.userToken && !detailLolPostOn && posts.map(function (post) {
      return __jsx(_components_LolPostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: post.id,
        post: post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 74
        }
      });
    }), me.userToken && detailLolPostOn && __jsx(_components_DetailPost__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 53
      }
    }), me.userToken && !detailLolPostOn && __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Pagination"], {
      defaultCurrent: 1,
      total: 50,
      onChange: onPagenate,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 53
      }
    }));
  }
};

_s(Home, "k8gvBVKKIix6TTjhpvAnjfI63Ek=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNGaWx0ZXIiLCJzZXRJc0ZpbHRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwicG9zdCIsInBvc3RzIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkZXRhaWxMb2xQb3N0T24iLCJ1c2VFZmZlY3QiLCJkYXRhIiwibGltaXQiLCJvZmZzZXQiLCJ1c2VyVG9rZW4iLCJsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIiwib25QYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwiZSIsIm9uSXNGaWx0ZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGUsa0JBRWlCQyxzREFBUSxDQUFDLEtBQUQsQ0FGekI7QUFBQSxNQUVSQyxRQUZRO0FBQUEsTUFFRUMsV0FGRjs7QUFBQSxxQkFHQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIWDtBQUFBLE1BR1BDLEVBSE8sZ0JBR1BBLEVBSE87O0FBQUEsc0JBSW1CSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUo5QjtBQUFBLE1B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O0FBQUE7QUFBQTtBQUFBLE1BVkosRUFXS0ssRUFBRSxDQUFDYSxTQUFILElBQWdCLENBQUNMLGVBQWpCLElBQW9DSixLQUFLLENBQUNtQixHQUFOLENBQVUsVUFBQ3BCLElBQUQ7QUFBQSxhQUFVLE1BQUMsK0RBQUQ7QUFBVSxXQUFHLEVBQUVBLElBQUksQ0FBQ3FCLEVBQXBCO0FBQXdCLFlBQUksRUFBRXJCLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBVjtBQUFBLEtBQVYsQ0FYekMsRUFZS0gsRUFBRSxDQUFDYSxTQUFILElBQWdCTCxlQUFoQixJQUFtQyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaeEMsRUFhS1IsRUFBRSxDQUFDYSxTQUFILElBQWdCLENBQUNMLGVBQWpCLElBQW1DLE1BQUMsK0NBQUQ7QUFBWSxvQkFBYyxFQUFFLENBQTVCO0FBQStCLFdBQUssRUFBRSxFQUF0QztBQUEwQyxjQUFRLEVBQUVPLFVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFieEMsQ0FESjtBQWlCSDtBQUNKLENBbEREOztHQUFNeEIsSTtVQUNlRSx1RCxFQUVGSSx1RCxFQUNtQkEsdUQsRUFDZ0RBLHVEOzs7S0FMaEZOLEk7QUFvRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMDFmMTg0NTJhZmVkMWNmMmExMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwRm9ybSc7XHJcbmltcG9ydCB7IGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTG9sUG9zdENhcmQnXHJcbmltcG9ydCBEZXRhaWxQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvRGV0YWlsUG9zdCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdhbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IExvbEZpbHRlckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2xGaWx0ZXJGb3JtJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtpc0ZpbHRlciwgc2V0SXNGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgbG9nSW5FcnJvciwgbG9nSW5Eb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBwb3N0cywgbG9hZFBvc3RMb2FkaW5nLCBsb2FkUG9zdEVycm9yLCBkZXRhaWxMb2xQb3N0LCBkZXRhaWxMb2xQb3N0T24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBsaW1pdDogMTUsIG9mZnNldDogMCwgdXNlclRva2VuOiBtZS51c2VyVG9rZW4gfVxyXG4gICAgICAgIGlmIChsb2dJbkRvbmUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRG9uZV0pO1xyXG5cclxuICAgIGNvbnN0IG9uUGFnZW5hdGUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGxpbWl0OiAxNSwgb2Zmc2V0OiAoZS0xKSoxNSwgdXNlclRva2VuOiBtZS51c2VyVG9rZW4gfVxyXG4gICAgICAgIGRpc3BhdGNoKGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbklzRmlsdGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldElzRmlsdGVyKCFpc0ZpbHRlcik7XHJcbiAgICB9LFtpc0ZpbHRlcl0pO1xyXG5cclxuXHJcbiAgICBpZiAobG9nSW5FcnJvciA9PT0gLTQwMSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U2lnblVwRm9ybSAvPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPjxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMjBweCcsIGJhY2tncm91bmRDb2xvcjogJyNGQTVBNUEnIH19PjxMaW5rIGhyZWY9XCIuL2xvbF93cml0ZVwiPjxhPuq4gOyTsOq4sDwvYT48L0xpbms+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25Jc0ZpbHRlcn0+7ZWE7YSwPC9CdXR0b24+PC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRmlsdGVyICYmIDxMb2xGaWx0ZXJGb3JtLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8PjwvPn1cclxuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHttZS51c2VyVG9rZW4gJiYgIWRldGFpbExvbFBvc3RPbiAmJiBwb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICAgICAgICAgIHttZS51c2VyVG9rZW4gJiYgZGV0YWlsTG9sUG9zdE9uICYmIDxEZXRhaWxQb3N0IC8+fVxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiAhZGV0YWlsTG9sUG9zdE9uICYmPFBhZ2luYXRpb24gZGVmYXVsdEN1cnJlbnQ9ezF9IHRvdGFsPXs1MH0gb25DaGFuZ2U9e29uUGFnZW5hdGV9IC8+fVxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9