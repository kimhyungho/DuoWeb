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
    }, me.userToken, __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9nSW5FcnJvciIsInBvc3QiLCJwb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VyVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEZSxxQkFFQUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGWDtBQUFBLE1BRVBDLEVBRk8sZ0JBRVBBLEVBRk87O0FBQUEsc0JBR1FILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSG5CO0FBQUEsTUFHUEUsVUFITyxpQkFHUEEsVUFITzs7QUFBQSxzQkFJbUNKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksSUFBakI7QUFBQSxHQUFELENBSjlDO0FBQUEsTUFJUEMsS0FKTyxpQkFJUEEsS0FKTztBQUFBLE1BSUFDLGVBSkEsaUJBSUFBLGVBSkE7QUFBQSxNQUlpQkMsYUFKakIsaUJBSWlCQSxhQUpqQjs7QUFNZkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDTixFQUFFLENBQUNPLFNBQVIsRUFBbUI7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBLFVBQU1DLElBQUksR0FBRztBQUFFSCxpQkFBUyxFQUFFUCxFQUFFLENBQUNPO0FBQWhCLE9BQWI7QUFDQVosY0FBUSxDQUFDZ0IsbUZBQTRCLENBQUNELElBQUQsQ0FBN0IsQ0FBUjtBQUNIO0FBQ0osR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFTQSxNQUFJVCxVQUFVLEtBQUssQ0FBQyxHQUFwQixFQUF5QjtBQUNyQixXQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREo7QUFLSCxHQU5ELE1BTU87QUFDSCxXQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxFQUFFLENBQUNPLFNBRFIsRUFFSTtBQUFLLFdBQUssRUFBRTtBQUFDSyxpQkFBUyxFQUFFLE9BQVo7QUFBcUJDLGNBQU0sRUFBRTtBQUE3QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNELE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXpCLENBQXRELENBREosQ0FGSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixFQU1LZCxFQUFFLENBQUNPLFNBQUgsSUFBZ0JKLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNiLElBQUQ7QUFBQSxhQUFVLE1BQUMsK0RBQUQ7QUFBVSxXQUFHLEVBQUVBLElBQUksQ0FBQ2MsRUFBcEI7QUFBd0IsWUFBSSxFQUFFZCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFBQSxLQUFWLENBTnJCLENBREo7QUFVSDtBQUNKLENBakNEOztHQUFNUixJO1VBQ2VFLHVELEVBQ0ZDLHVELEVBQ1FBLHVELEVBQzJCQSx1RDs7O0tBSmhESCxJO0FBbUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZDc5MzBiN2VjYjNmMWFhNDI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwRm9ybSc7XHJcbmltcG9ydCB7IGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTG9sUG9zdENhcmQnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgcG9zdHMsIGxvYWRQb3N0TG9hZGluZywgbG9hZFBvc3RFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWUudXNlclRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2trXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0geyB1c2VyVG9rZW46IG1lLnVzZXJUb2tlbiB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgaWYgKGxvZ0luRXJyb3IgPT09IC00MDEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFNpZ25VcEZvcm0gLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge21lLnVzZXJUb2tlbn1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdyaWdodCcsIG1hcmdpbjogMjB9fT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMHB4JyB9fT48TGluayBocmVmPVwiLi9sb2xfd3JpdGVcIj48YT7quIDsk7DquLA8L2E+PC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHttZS51c2VyVG9rZW4gJiYgcG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=