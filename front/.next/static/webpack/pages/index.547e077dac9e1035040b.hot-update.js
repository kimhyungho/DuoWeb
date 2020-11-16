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
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      logInError = _useSelector2.logInError;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      posts = _useSelector3.posts,
      loadPostLoading = _useSelector3.loadPostLoading,
      loadPostError = _useSelector3.loadPostError;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!me.userToken) {
      console.log("kkk");
      var data = {
        userToken: me.userToken
      };
      dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["loadAllLolPostsRequestAction"])(data));
    }
  }, []);

  if (logInError === -401) {
    return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }));
  } else {
    return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, me.userToken && __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 34
      }
    }), __jsx("div", {
      style: {
        textAlign: 'right',
        margin: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "primary",
      style: {
        marginLeft: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "./lol_write",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 75
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 100
      }
    }, "\uAE00\uC4F0\uAE30")))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }), me.userToken && posts.map(function (post) {
      return __jsx(_components_LolPostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: post.id,
        post: post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 54
        }
      });
    }));
  }
};

_s(Home, "Lza8QrDDTmnKxYTriufJBdmeV2c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9nSW5FcnJvciIsInBvc3QiLCJwb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEZSxxQkFFQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGWDtBQUFBLE1BRVBDLEVBRk8sZ0JBRVBBLEVBRk87O0FBQUEsc0JBR1FILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSG5CO0FBQUEsTUFHUEUsVUFITyxpQkFHUEEsVUFITzs7QUFBQSxzQkFJbUNKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksSUFBakI7QUFBQSxHQUFELENBSjlDO0FBQUEsTUFJUEMsS0FKTyxpQkFJUEEsS0FKTztBQUFBLE1BSUFDLGVBSkEsaUJBSUFBLGVBSkE7QUFBQSxNQUlpQkMsYUFKakIsaUJBSWlCQSxhQUpqQjs7QUFNZkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDTixFQUFFLENBQUNPLFNBQVIsRUFBbUI7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBLFVBQU1DLElBQUksR0FBRztBQUFFSCxpQkFBUyxFQUFFUCxFQUFFLENBQUNPO0FBQWhCLE9BQWI7QUFDQVosY0FBUSxDQUFDZ0IsbUZBQTRCLENBQUNELElBQUQsQ0FBN0IsQ0FBUjtBQUNIO0FBQ0osR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFTQSxNQUFJVCxVQUFVLEtBQUssQ0FBQyxHQUFwQixFQUF5QjtBQUNyQixXQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREo7QUFLSCxHQU5ELE1BTU87QUFDSCxXQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxFQUFFLENBQUNPLFNBQUgsSUFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURyQixFQUVJO0FBQUssV0FBSyxFQUFFO0FBQUNLLGlCQUFTLEVBQUUsT0FBWjtBQUFxQkMsY0FBTSxFQUFFO0FBQTdCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0QsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBekIsQ0FBdEQsQ0FESixDQUZKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxKLEVBTUtkLEVBQUUsQ0FBQ08sU0FBSCxJQUFnQkosS0FBSyxDQUFDWSxHQUFOLENBQVUsVUFBQ2IsSUFBRDtBQUFBLGFBQVUsTUFBQywrREFBRDtBQUFVLFdBQUcsRUFBRUEsSUFBSSxDQUFDYyxFQUFwQjtBQUF3QixZQUFJLEVBQUVkLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBVjtBQUFBLEtBQVYsQ0FOckIsQ0FESjtBQVVIO0FBQ0osQ0FqQ0Q7O0dBQU1SLEk7VUFDZUUsdUQsRUFDRkMsdUQsRUFDUUEsdUQsRUFDMkJBLHVEOzs7S0FKaERILEk7QUFtQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0N2UwNzdkYWM5ZTEwMzUwNDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXBGb3JtJztcclxuaW1wb3J0IHsgbG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2xQb3N0Q2FyZCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBwb3N0cywgbG9hZFBvc3RMb2FkaW5nLCBsb2FkUG9zdEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZS51c2VyVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJra2tcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJUb2tlbjogbWUudXNlclRva2VuIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBpZiAobG9nSW5FcnJvciA9PT0gLTQwMSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U2lnblVwRm9ybSAvPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICB7bWUudXNlclRva2VuICYmIDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luOiAyMH19PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwcHgnIH19PjxMaW5rIGhyZWY9XCIuL2xvbF93cml0ZVwiPjxhPuq4gOyTsOq4sDwvYT48L0xpbms+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbiAmJiBwb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==