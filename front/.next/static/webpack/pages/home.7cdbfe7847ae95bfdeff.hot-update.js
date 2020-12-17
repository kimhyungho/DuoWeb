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
        backgroundColor: '#FA5A5A',
        borderColor: '#FA5A5A'
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
        columnNumber: 144
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 169
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNGaWx0ZXIiLCJzZXRJc0ZpbHRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwicG9zdCIsInBvc3RzIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkZXRhaWxMb2xQb3N0T24iLCJ1c2VFZmZlY3QiLCJkYXRhIiwibGltaXQiLCJvZmZzZXQiLCJ1c2VyVG9rZW4iLCJsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIiwib25QYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwiZSIsIm9uSXNGaWx0ZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEZSxrQkFFaUJDLHNEQUFRLENBQUMsS0FBRCxDQUZ6QjtBQUFBLE1BRVJDLFFBRlE7QUFBQSxNQUVFQyxXQUZGOztBQUFBLHFCQUdBQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhYO0FBQUEsTUFHUEMsRUFITyxnQkFHUEEsRUFITzs7QUFBQSxzQkFJbUJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSjlCO0FBQUEsTUFJUEUsVUFKTyxpQkFJUEEsVUFKTztBQUFBLE1BSUtDLFNBSkwsaUJBSUtBLFNBSkw7O0FBQUEsc0JBS21FTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNLLElBQWpCO0FBQUEsR0FBRCxDQUw5RTtBQUFBLE1BS1BDLEtBTE8saUJBS1BBLEtBTE87QUFBQSxNQUtBQyxlQUxBLGlCQUtBQSxlQUxBO0FBQUEsTUFLaUJDLGFBTGpCLGlCQUtpQkEsYUFMakI7QUFBQSxNQUtnQ0MsYUFMaEMsaUJBS2dDQSxhQUxoQztBQUFBLE1BSytDQyxlQUwvQyxpQkFLK0NBLGVBTC9DOztBQU9mQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBTSxFQUFFLENBQXJCO0FBQXdCQyxlQUFTLEVBQUViLEVBQUUsQ0FBQ2E7QUFBdEMsS0FBYjs7QUFDQSxRQUFJWCxTQUFKLEVBQWU7QUFDWFYsY0FBUSxDQUFDc0IsbUZBQTRCLENBQUNKLElBQUQsQ0FBN0IsQ0FBUjtBQUNIO0FBQ0osR0FMUSxFQUtOLENBQUNSLFNBQUQsQ0FMTSxDQUFUO0FBT0EsTUFBTWEsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNsQyxRQUFNUCxJQUFJLEdBQUc7QUFBRUMsV0FBSyxFQUFFLEVBQVQ7QUFBYUMsWUFBTSxFQUFFLENBQUNLLENBQUMsR0FBQyxDQUFILElBQU0sRUFBM0I7QUFBK0JKLGVBQVMsRUFBRWIsRUFBRSxDQUFDYTtBQUE3QyxLQUFiO0FBQ0FyQixZQUFRLENBQUNzQixtRkFBNEIsQ0FBQ0osSUFBRCxDQUE3QixDQUFSO0FBQ0gsR0FINkIsRUFHM0IsRUFIMkIsQ0FBOUI7QUFNQSxNQUFNUSxVQUFVLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUNqQ3BCLGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDSCxHQUY2QixFQUU1QixDQUFDQSxRQUFELENBRjRCLENBQTlCOztBQUtBLE1BQUlNLFVBQVUsS0FBSyxDQUFDLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESjtBQUtILEdBTkQsTUFNTztBQUNILFdBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tELEVBQUUsQ0FBQ2EsU0FBSCxHQUNLO0FBQUssV0FBSyxFQUFFO0FBQUVNLGlCQUFTLEVBQUUsT0FBYjtBQUFzQkMsY0FBTSxFQUFFO0FBQTlCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhLE1BQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRSxNQUFkO0FBQXNCQyx1QkFBZSxFQUFFLFNBQXZDO0FBQWtEQyxtQkFBVyxFQUFFO0FBQS9ELE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEcsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBekIsQ0FBMUcsQ0FBYixFQUNBLE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVMLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsQ0FERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlHdkIsUUFBUSxJQUFJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpmLENBREwsR0FPSyxrRUFSVixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWSixFQVdLSyxFQUFFLENBQUNhLFNBQUgsSUFBZ0IsQ0FBQ0wsZUFBakIsSUFBb0NKLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFDckIsSUFBRDtBQUFBLGFBQVUsTUFBQywrREFBRDtBQUFVLFdBQUcsRUFBRUEsSUFBSSxDQUFDc0IsRUFBcEI7QUFBd0IsWUFBSSxFQUFFdEIsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFWO0FBQUEsS0FBVixDQVh6QyxFQVlLSCxFQUFFLENBQUNhLFNBQUgsSUFBZ0JMLGVBQWhCLElBQW1DLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVp4QyxFQWFLUixFQUFFLENBQUNhLFNBQUgsSUFBZ0IsQ0FBQ0wsZUFBakIsSUFBbUMsTUFBQywrQ0FBRDtBQUFZLG9CQUFjLEVBQUUsQ0FBNUI7QUFBK0IsV0FBSyxFQUFFLEVBQXRDO0FBQTBDLGNBQVEsRUFBRU8sVUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJ4QyxDQURKO0FBaUJIO0FBQ0osQ0FsREQ7O0dBQU14QixJO1VBQ2VFLHVELEVBRUZJLHVELEVBQ21CQSx1RCxFQUNnREEsdUQ7OztLQUxoRk4sSTtBQW9EU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS43Y2RiZmU3ODQ3YWU5NWJmZGVmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXBGb3JtJztcclxuaW1wb3J0IHsgbG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZCdcclxuaW1wb3J0IERldGFpbFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWxQb3N0JztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgTG9sRmlsdGVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvbEZpbHRlckZvcm0nXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2lzRmlsdGVyLCBzZXRJc0ZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBsb2dJbkVycm9yLCBsb2dJbkRvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IHBvc3RzLCBsb2FkUG9zdExvYWRpbmcsIGxvYWRQb3N0RXJyb3IsIGRldGFpbExvbFBvc3QsIGRldGFpbExvbFBvc3RPbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGxpbWl0OiAxNSwgb2Zmc2V0OiAwLCB1c2VyVG9rZW46IG1lLnVzZXJUb2tlbiB9XHJcbiAgICAgICAgaWYgKGxvZ0luRG9uZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbG9nSW5Eb25lXSk7XHJcblxyXG4gICAgY29uc3Qgb25QYWdlbmF0ZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgbGltaXQ6IDE1LCBvZmZzZXQ6IChlLTEpKjE1LCB1c2VyVG9rZW46IG1lLnVzZXJUb2tlbiB9XHJcbiAgICAgICAgZGlzcGF0Y2gobG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uSXNGaWx0ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNGaWx0ZXIoIWlzRmlsdGVyKTtcclxuICAgIH0sW2lzRmlsdGVyXSk7XHJcblxyXG5cclxuICAgIGlmIChsb2dJbkVycm9yID09PSAtNDAxKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxTaWduVXBGb3JtIC8+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIHttZS51c2VyVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICA/IDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW46IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnI0ZBNUE1QScsIGJvcmRlckNvbG9yOiAnI0ZBNUE1QScgfX0+PExpbmsgaHJlZj1cIi4vbG9sX3dyaXRlXCI+PGE+6riA7JOw6riwPC9hPjwvTGluaz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbklzRmlsdGVyfT7tlYTthLA8L0J1dHRvbj48L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNGaWx0ZXIgJiYgPExvbEZpbHRlckZvcm0vPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6IDw+PC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiAhZGV0YWlsTG9sUG9zdE9uICYmIHBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiBkZXRhaWxMb2xQb3N0T24gJiYgPERldGFpbFBvc3QgLz59XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuICYmICFkZXRhaWxMb2xQb3N0T24gJiY8UGFnaW5hdGlvbiBkZWZhdWx0Q3VycmVudD17MX0gdG90YWw9ezUwfSBvbkNoYW5nZT17b25QYWdlbmF0ZX0gLz59XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=