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
      style: {
        borderColor: '#FA5A5A'
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNGaWx0ZXIiLCJzZXRJc0ZpbHRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwicG9zdCIsInBvc3RzIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3RFcnJvciIsImRldGFpbExvbFBvc3QiLCJkZXRhaWxMb2xQb3N0T24iLCJ1c2VFZmZlY3QiLCJkYXRhIiwibGltaXQiLCJvZmZzZXQiLCJ1c2VyVG9rZW4iLCJsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIiwib25QYWdlbmF0ZSIsInVzZUNhbGxiYWNrIiwiZSIsIm9uSXNGaWx0ZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEZSxrQkFFaUJDLHNEQUFRLENBQUMsS0FBRCxDQUZ6QjtBQUFBLE1BRVJDLFFBRlE7QUFBQSxNQUVFQyxXQUZGOztBQUFBLHFCQUdBQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhYO0FBQUEsTUFHUEMsRUFITyxnQkFHUEEsRUFITzs7QUFBQSxzQkFJbUJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFE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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmYsQ0FETCxHQU9LLGtFQVJWLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZKLEVBV0tLLEVBQUUsQ0FBQ2EsU0FBSCxJQUFnQixDQUFDTCxlQUFqQixJQUFvQ0osS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNyQixJQUFEO0FBQUEsYUFBVSxNQUFDLCtEQUFEO0FBQVUsV0FBRyxFQUFFQSxJQUFJLENBQUNzQixFQUFwQjtBQUF3QixZQUFJLEVBQUV0QixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFBQSxLQUFWLENBWHpDLEVBWUtILEVBQUUsQ0FBQ2EsU0FBSCxJQUFnQkwsZUFBaEIsSUFBbUMsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWnhDLEVBYUtSLEVBQUUsQ0FBQ2EsU0FBSCxJQUFnQixDQUFDTCxlQUFqQixJQUFtQyxNQUFDLCtDQUFEO0FBQVksb0JBQWMsRUFBRSxDQUE1QjtBQUErQixXQUFLLEVBQUUsRUFBdEM7QUFBMEMsY0FBUSxFQUFFTyxVQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYnhDLENBREo7QUFpQkg7QUFDSixDQWxERDs7R0FBTXhCLEk7VUFDZUUsdUQsRUFFRkksdUQsRUFDbUJBLHVELEVBQ2dEQSx1RDs7O0tBTGhGTixJO0FBb0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmNiZTAyN2NiY2MzOTg1MDkzMDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25VcEZvcm0nO1xyXG5pbXBvcnQgeyBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xvbFBvc3RDYXJkJ1xyXG5pbXBvcnQgRGV0YWlsUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL0RldGFpbFBvc3QnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cCc7XHJcbmltcG9ydCBMb2xGaWx0ZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9sRmlsdGVyRm9ybSdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbaXNGaWx0ZXIsIHNldElzRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IGxvZ0luRXJyb3IsIGxvZ0luRG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgcG9zdHMsIGxvYWRQb3N0TG9hZGluZywgbG9hZFBvc3RFcnJvciwgZGV0YWlsTG9sUG9zdCwgZGV0YWlsTG9sUG9zdE9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgbGltaXQ6IDE1LCBvZmZzZXQ6IDAsIHVzZXJUb2tlbjogbWUudXNlclRva2VuIH1cclxuICAgICAgICBpZiAobG9nSW5Eb25lKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtsb2dJbkRvbmVdKTtcclxuXHJcbiAgICBjb25zdCBvblBhZ2VuYXRlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBsaW1pdDogMTUsIG9mZnNldDogKGUtMSkqMTUsIHVzZXJUb2tlbjogbWUudXNlclRva2VuIH1cclxuICAgICAgICBkaXNwYXRjaChsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25Jc0ZpbHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc0ZpbHRlcighaXNGaWx0ZXIpO1xyXG4gICAgfSxbaXNGaWx0ZXJdKTtcclxuXHJcblxyXG4gICAgaWYgKGxvZ0luRXJyb3IgPT09IC00MDEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25VcEZvcm0gLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgID8gPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcsIG1hcmdpbjogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD48QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRkE1QTVBJywgYm9yZGVyQ29sb3I6ICcjRkE1QTVBJyB9fT48TGluayBocmVmPVwiLi9sb2xfd3JpdGVcIj48YT7quIDsk7DquLA8L2E+PC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uSXNGaWx0ZXJ9IHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICcjRkE1QTVBJ319Pu2VhO2EsDwvQnV0dG9uPjwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZpbHRlciAmJiA8TG9sRmlsdGVyRm9ybS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDogPD48Lz59XHJcblxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuICYmICFkZXRhaWxMb2xQb3N0T24gJiYgcG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuICYmIGRldGFpbExvbFBvc3RPbiAmJiA8RGV0YWlsUG9zdCAvPn1cclxuICAgICAgICAgICAgICAgIHttZS51c2VyVG9rZW4gJiYgIWRldGFpbExvbFBvc3RPbiAmJjxQYWdpbmF0aW9uIGRlZmF1bHRDdXJyZW50PXsxfSB0b3RhbD17NTB9IG9uQ2hhbmdlPXtvblBhZ2VuYXRlfSAvPn1cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==