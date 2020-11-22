webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_kakao_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-kakao-login */ "./node_modules/react-kakao-login/dist/index.es.js");
/* harmony import */ var react_login_by_naver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-login-by-naver */ "./node_modules/react-login-by-naver/dist/index.es.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Original_logo.png */ "./images/Original_logo.png");
/* harmony import */ var _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_Original_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var LoginFrom = function LoginFrom() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      logInDone = _useSelector.logInDone,
      logInLoading = _useSelector.logInLoading,
      logInError = _useSelector.logInError;

  var responseKakao = function responseKakao(response) {
    console.log(response.response.access_token);
    var data = {
      accessToken: response.response.access_token,
      platform: 'kakao'
    };
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])(data));
  };

  var responseLogin = function responseLogin(response, platform) {
    console.log(response, platform);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if ( true && window.location.origin + '/' != window.location.href) {
      {
        var location = window.location.href.split('=')[1];

        if (location) {
          var accessToken = location.split('&')[0];
          var data = {
            accessToken: accessToken,
            platform: 'naver'
          };
          console.log(accessToken);
          dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])(data));
        }
      }
    }

    if (logInDone) {
      console.log(logInDone);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
    }
  }, [logInDone]);

  var responseFail = function responseFail(err) {
    console.error(err);
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  };

  return __jsx("div", {
    style: {
      backgroundColor: '#FFFFFF',
      padding: 50,
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    style: {
      height: 40
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(react_kakao_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    jsKey: '593246069c7b7a42344710a951c039ee',
    buttonText: "\uCE74\uCE74\uC624 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778",
    onSuccess: responseKakao,
    onFailure: responseFail,
    getProfile: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx(react_login_by_naver__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clientId: "0xe5BaDwdA6UNdboCXn7",
    callbackUrl: "http://localhost:3000/login",
    render: function render(props) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: props.onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 40
        }
      }, "\uB124\uC774\uBC84\uB85C\uADF8\uC778");
    },
    onSuccess: function onSuccess(res) {
      return responseLogin(res, 'naver');
    },
    onFailure: function onFailure() {
      return console.log('naver login fail');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, "\uD648\uD398\uC774\uC9C0")), "\uB85C \uB3CC\uC544\uAC00\uAE30"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }));
};

_s(LoginFrom, "WJacCieQmSQm2ey+9p34hR+i8Aw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Eb25lIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInJlc3BvbnNlTG9naW4iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImhyZWYiLCJzcGxpdCIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlcnJvciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJPcmlnaW5hbF9sb2dvIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwicHJvcHMiLCJvbkNsaWNrIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURvQixxQkFHNEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSHZDO0FBQUEsTUFHWkMsU0FIWSxnQkFHWkEsU0FIWTtBQUFBLE1BR0RDLFlBSEMsZ0JBR0RBLFlBSEM7QUFBQSxNQUdhQyxVQUhiLGdCQUdhQSxVQUhiOztBQUtwQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFB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dkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWDtBQUFBLEtBSFo7QUFLSSxhQUFTLEVBQUUsbUJBQUNDLEdBQUQ7QUFBQSxhQUFTcEIsYUFBYSxDQUFDb0IsR0FBRCxFQUFNLE9BQU4sQ0FBdEI7QUFBQSxLQUxmO0FBTUksYUFBUyxFQUFFO0FBQUEsYUFBTTNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLENBQU47QUFBQSxLQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJKLENBSEosRUFzQkk7QUFBSyxTQUFLLEVBQUU7QUFBRXVCLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQWhCLENBREosb0NBdEJKLEVBZ0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0osQ0FESjtBQW9DSCxDQTdFRDs7R0FBTW5DLFM7VUFDZUUsdUQsRUFFK0JDLHVEOzs7S0FIOUNILFM7QUErRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxZDM1N2U2YzZhODgyN2Q1OWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgUmVzdWx0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBLYWthb0xvZ2luIGZyb20gJ3JlYWN0LWtha2FvLWxvZ2luJztcclxuaW1wb3J0IE5hdmVyTG9naW4gZnJvbSAncmVhY3QtbG9naW4tYnktbmF2ZXInO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBPcmlnaW5hbF9sb2dvIGZyb20gJy4uL2ltYWdlcy9PcmlnaW5hbF9sb2dvLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luRnJvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IGxvZ0luRG9uZSwgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlS2FrYW8gPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY2Vzc1Rva2VuOiByZXNwb25zZS5yZXNwb25zZS5hY2Nlc3NfdG9rZW4sIHBsYXRmb3JtOiAna2FrYW8nIH07XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VMb2dpbiA9IChyZXNwb25zZSwgcGxhdGZvcm0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgcGxhdGZvcm0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvJykgIT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPScpWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhdGlvbi5zcGxpdCgnJicpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcGxhdGZvcm06ICduYXZlcicgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvZ0luRG9uZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dJbkRvbmUpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbbG9nSW5Eb25lXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLCBwYWRkaW5nOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17T3JpZ2luYWxfbG9nb30gc3R5bGU9e3sgaGVpZ2h0OiA0MCB9fT48L2ltZz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxLYWthb0xvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAganNLZXk9eyc1OTMyNDYwNjljN2I3YTQyMzQ0NzEwYTk1MWMwMzllZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuy5tOy5tOyYpCDqs4TsoJXsnLzroZwg66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlS2FrYW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvZmlsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID48L0tha2FvTG9naW4+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxOYXZlckxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIweGU1QmFEd2RBNlVOZGJvQ1huN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrhKTsnbTrsoTroZzqt7jsnbg8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXsocmVzKSA9PiByZXNwb25zZUxvZ2luKHJlcywgJ25hdmVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXsoKSA9PiBjb25zb2xlLmxvZygnbmF2ZXIgbG9naW4gZmFpbCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgPjxhPu2ZiO2OmOydtOyngDwvYT48L0xpbms+66GcIOuPjOyVhOqwgOq4sFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17JzM5NDk2MDM1MzE3LXIxNGlyZm5vdmppbGQ3am92ZmY1bjBncnB0aGtiMjA2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLqtazquIDroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICA+PC9Hb29nbGVMb2dpbj4gKi99XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRnJvbTsiXSwic291cmNlUm9vdCI6IiJ9