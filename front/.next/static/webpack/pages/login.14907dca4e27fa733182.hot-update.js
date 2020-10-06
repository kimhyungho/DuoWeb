webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginFrom.js":
/*!*********************************!*\
  !*** ./components/LoginFrom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_kakao_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-kakao-login */ "./node_modules/react-kakao-login/dist/index.es.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_login_by_naver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-login-by-naver */ "./node_modules/react-login-by-naver/dist/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LoginFrom.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var LoginFrom = function LoginFrom() {
  // const [id, setId] = useState('');
  var responseKakao = function responseKakao(response) {
    console.log(response.response.access_token);
  };

  var responseNaver = function responseNaver(response) {
    console.log(response);
  };

  var responseGoogle = function responseGoogle(response) {
    console.log(response.tokenId);
  };

  var responseFail = function responseFail(err) {
    console.error(err);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_login_by_naver__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientId: "sdffdNNFDSjsddiosd",
    callbackUrl: "http://localhost:3000/login",
    render: function render(props) {
      return __jsx("div", {
        onClick: props.onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 36
        }
      }, "Naver Login");
    },
    onSuccess: function onSuccess(naverUser) {
      return console.log(naverUser);
    },
    onFailure: function onFailure() {
      return console.error(result);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
};

_c = LoginFrom;
/* harmony default export */ __webpack_exports__["default"] = (LoginFrom);

var _c;

$RefreshReg$(_c, "LoginFrom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZyb20uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwicmVzcG9uc2VLYWthbyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsInJlc3BvbnNlTmF2ZXIiLCJyZXNwb25zZUdvb2dsZSIsInRva2VuSWQiLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlcnJvciIsInByb3BzIiwib25DbGljayIsIm5hdmVyVXNlciIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFFcEI7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0EsUUFBVCxDQUFrQkcsWUFBOUI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osUUFBRCxFQUFjO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxRQUFELEVBQWM7QUFDakNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNNLE9BQXJCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDMUJQLFdBQU8sQ0FBQ1EsS0FBUixDQUFjRCxHQUFkO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjSSxNQUFDLDREQUFEO0FBQ0ksWUFBUSxFQUFDLG9CQURiO0FBRUksZUFBVyxFQUFDLDZCQUZoQjtBQUdJLFVBQU0sRUFBRSxnQkFBQ0UsS0FBRDtBQUFBLGFBQVc7QUFBSyxlQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBWDtBQUFBLEtBSFo7QUFJSSxhQUFTLEVBQUUsbUJBQUNDLFNBQUQ7QUFBQSxhQUFlWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsU0FBWixDQUFmO0FBQUEsS0FKZjtBQUtJLGFBQVMsRUFBRTtBQUFBLGFBQU1YLE9BQU8sQ0FBQ1EsS0FBUixDQUFjSSxNQUFkLENBQU47QUFBQSxLQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURKO0FBd0JILENBNUNEOztLQUFNZixTO0FBOENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4xNDkwN2RjYTRlMjdmYTczMzE4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBLYWthb0xvZ2luIGZyb20gJ3JlYWN0LWtha2FvLWxvZ2luJztcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCBOYXZlckxvZ2luIGZyb20gJ3JlYWN0LWxvZ2luLWJ5LW5hdmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5cclxuY29uc3QgTG9naW5Gcm9tID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlS2FrYW8gPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZU5hdmVyID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRva2VuSWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUZhaWwgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8S2FrYW9Mb2dpblxyXG4gICAgICAgICAgICAgICAganNLZXk9eyc1OTMyNDYwNjljN2I3YTQyMzQ0NzEwYTk1MWMwMzllZSd9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwi7Lm07Lm07Jik66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VLYWthb31cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICAgICAgZ2V0UHJvZmlsZT17dHJ1ZX1cclxuICAgICAgICAgICAgPjwvS2FrYW9Mb2dpbj5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17JzYyODMxNTE4OTAzOS1raXJhMDc1ajBmb2c4MWtiMmt1YTI3bDh1YnRsZzBhNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwi6rWs6riA66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgPjwvR29vZ2xlTG9naW4+ICovfVxyXG4gICAgICAgICAgICA8TmF2ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCJzZGZmZE5ORkRTanNkZGlvc2RcIlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxkaXYgb25DbGljaz17cHJvcHMub25DbGlja30+TmF2ZXIgTG9naW48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9eyhuYXZlclVzZXIpID0+IGNvbnNvbGUubG9nKG5hdmVyVXNlcil9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9eygpID0+IGNvbnNvbGUuZXJyb3IocmVzdWx0KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZyb207Il0sInNvdXJjZVJvb3QiOiIifQ==