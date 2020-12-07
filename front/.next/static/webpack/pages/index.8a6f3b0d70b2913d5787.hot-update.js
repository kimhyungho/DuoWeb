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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Original_logo.png */ "./images/Original_logo.png");
/* harmony import */ var _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_Original_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var LoginFrom = function LoginFrom() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
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
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["loginRequestAction"])(data));
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
          dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["loginRequestAction"])(data));
        }
      }
    }

    if (logInDone) {
      console.log(logInDone);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/home');
    }

    if (logInError === -401) {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/sign_up');
    }
  }, [logInDone, logInError]);

  var responseFail = function responseFail(err) {
    console.error(err);
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/home');
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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _images_Original_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      height: 40
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
          lineNumber: 73,
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
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, "\uD648\uD398\uC774\uC9C0")), "\uB85C \uB3CC\uC544\uAC00\uAE30"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }));
};

_s(LoginFrom, "WJacCieQmSQm2ey+9p34hR+i8Aw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Eb25lIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInJlc3BvbnNlTG9naW4iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImhyZWYiLCJzcGxpdCIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlcnJvciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJPcmlnaW5hbF9sb2dvIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwicHJvcHMiLCJvbkNsaWNrIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG9CLHFCQUc0QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIdkM7QUFBQSxNQUdaQyxTQUhZLGdCQUdaQSxTQUhZO0FBQUEsTUFHREMsWUFIQyxnQkFHREEsWUFIQztBQUFBLE1BR2FDLFVBSGIsZ0JBR2FBLFVBSGI7O0FBS3BCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2hD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QUFHSSxVQUFNLEVBQUUsZ0JBQUNTLEtBQUQ7QUFBQSxhQUFXLE1BQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWDtBQUFBLEtBSFo7QUFLSSxhQUFTLEVBQUUsbUJBQUNDLEdBQUQ7QUFBQSxhQUFTcEIsYUFBYSxDQUFDb0IsR0FBRCxFQUFNLE9BQU4sQ0FBdEI7QUFBQSxLQUxmO0FBTUksYUFBUyxFQUFFO0FBQUEsYUFBTTNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLENBQU47QUFBQSxLQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJKLENBSEosRUFzQkk7QUFBSyxTQUFLLEVBQUU7QUFBRXVCLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQWhCLENBREosb0NBdEJKLEVBZ0NJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0osQ0FESjtBQW9DSCxDQWpGRDs7R0FBTW5DLFM7VUFDZUUsdUQsRUFFK0JDLHVEOzs7S0FIOUNILFM7QUFtRlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhhNmYzYjBkNzBiMjkxM2Q1Nzg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgUmVzdWx0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBLYWthb0xvZ2luIGZyb20gJ3JlYWN0LWtha2FvLWxvZ2luJztcclxuaW1wb3J0IE5hdmVyTG9naW4gZnJvbSAncmVhY3QtbG9naW4tYnktbmF2ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgT3JpZ2luYWxfbG9nbyBmcm9tICcuLi9pbWFnZXMvT3JpZ2luYWxfbG9nby5wbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBMb2dpbkZyb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyBsb2dJbkRvbmUsIGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUtha2FvID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBhY2Nlc3NUb2tlbjogcmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBwbGF0Zm9ybTogJ2tha2FvJyB9O1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlTG9naW4gPSAocmVzcG9uc2UsIHBsYXRmb3JtKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIHBsYXRmb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnLycpICE9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz0nKVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYXRpb24uc3BsaXQoJyYnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sIHBsYXRmb3JtOiAnbmF2ZXInIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb2dJbkRvbmUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nSW5Eb25lKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihsb2dJbkVycm9yID09PSAtNDAxKXtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduX3VwJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2xvZ0luRG9uZSwgbG9nSW5FcnJvcl0pO1xyXG5cclxuXHJcbiAgICBjb25zdCByZXNwb25zZUZhaWwgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvaG9tZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsIHBhZGRpbmc6IDUwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtPcmlnaW5hbF9sb2dvfSBzdHlsZT17eyBoZWlnaHQ6IDQwIH19PjwvaW1nPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPEtha2FvTG9naW5cclxuICAgICAgICAgICAgICAgICAgICBqc0tleT17JzU5MzI0NjA2OWM3YjdhNDIzNDQ3MTBhOTUxYzAzOWVlJ31cclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwi7Lm07Lm07JikIOqzhOygleycvOuhnCDroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VLYWthb31cclxuICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgICAgICAgICBnZXRQcm9maWxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPjwvS2FrYW9Mb2dpbj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPE5hdmVyTG9naW5cclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjB4ZTVCYUR3ZEE2VU5kYm9DWG43XCJcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1VybD1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxCdXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuEpOydtOuyhOuhnOq3uOyduDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9eyhyZXMpID0+IHJlc3BvbnNlTG9naW4ocmVzLCAnbmF2ZXInKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9eygpID0+IGNvbnNvbGUubG9nKCduYXZlciBsb2dpbiBmYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyA+PGE+7ZmI7Y6Y7J207KeAPC9hPjwvTGluaz7roZwg64+M7JWE6rCA6riwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPXsnMzk0OTYwMzUzMTctcjE0aXJmbm92amlsZDdqb3ZmZjVuMGdycHRoa2IyMDYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuq1rOq4gOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgID48L0dvb2dsZUxvZ2luPiAqL31cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gcm9tOyJdLCJzb3VyY2VSb290IjoiIn0=