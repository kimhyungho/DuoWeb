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

    if (logInError === -401) {
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/sign_up');
    }
  }, [logInDone, logInError]);

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
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
          lineNumber: 75,
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
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, "\uD648\uD398\uC774\uC9C0")), "\uB85C \uB3CC\uC544\uAC00\uAE30"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Eb25lIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInJlc3BvbnNlTG9naW4iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImhyZWYiLCJzcGxpdCIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlcnJvciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJPcmlnaW5hbF9sb2dvIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwicHJvcHMiLCJvbkNsaWNrIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURvQixxQkFHNEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSHZDO0FBQUEsTUFHWkMsU0FIWSxnQkFHWkEsU0FIWTtBQUFBLE1BR0RDLFlBSEMsZ0JBR0RBLFlBSEM7QUFBQSxNQUdhQyxVQUhiLGdCQUdhQSxVQUhiOztBQUtwQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFB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LEVBQUMsNkJBRmhCO0FBR0ksVUFBTSxFQUFFLGdCQUFDUyxLQUFEO0FBQUEsYUFBVyxNQUFDLDJDQUFEO0FBQVEsZUFBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBQVg7QUFBQSxLQUhaO0FBS0ksYUFBUyxFQUFFLG1CQUFDQyxHQUFEO0FBQUEsYUFBU3BCLGFBQWEsQ0FBQ29CLEdBQUQsRUFBTSxPQUFOLENBQXRCO0FBQUEsS0FMZjtBQU1JLGFBQVMsRUFBRTtBQUFBLGFBQU0zQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixDQUFOO0FBQUEsS0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFpQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQUhKLEVBc0JJO0FBQUssU0FBSyxFQUFFO0FBQUV1QixlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFoQixDQURKLG9DQXRCSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENKLENBREo7QUFvQ0gsQ0FqRkQ7O0dBQU1uQyxTO1VBQ2VFLHVELEVBRStCQyx1RDs7O0tBSDlDSCxTO0FBbUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NTg2OGQwYzA3ZDk1NzNjMDIxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIFJlc3VsdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgS2FrYW9Mb2dpbiBmcm9tICdyZWFjdC1rYWthby1sb2dpbic7XHJcbmltcG9ydCBOYXZlckxvZ2luIGZyb20gJ3JlYWN0LWxvZ2luLWJ5LW5hdmVyJztcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgT3JpZ2luYWxfbG9nbyBmcm9tICcuLi9pbWFnZXMvT3JpZ2luYWxfbG9nby5wbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBMb2dpbkZyb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyBsb2dJbkRvbmUsIGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUtha2FvID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICBjb25zdCBkYXRhID0geyBhY2Nlc3NUb2tlbjogcmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBwbGF0Zm9ybTogJ2tha2FvJyB9O1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlTG9naW4gPSAocmVzcG9uc2UsIHBsYXRmb3JtKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIHBsYXRmb3JtKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnLycpICE9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz0nKVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYXRpb24uc3BsaXQoJyYnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sIHBsYXRmb3JtOiAnbmF2ZXInIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb2dJbkRvbmUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nSW5Eb25lKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGxvZ0luRXJyb3IgPT09IC00MDEpe1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25fdXAnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbbG9nSW5Eb25lLCBsb2dJbkVycm9yXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLCBwYWRkaW5nOiA1MCwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17T3JpZ2luYWxfbG9nb30gc3R5bGU9e3sgaGVpZ2h0OiA0MCB9fT48L2ltZz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxLYWthb0xvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAganNLZXk9eyc1OTMyNDYwNjljN2I3YTQyMzQ0NzEwYTk1MWMwMzllZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuy5tOy5tOyYpCDqs4TsoJXsnLzroZwg66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlS2FrYW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvZmlsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgID48L0tha2FvTG9naW4+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxOYXZlckxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIweGU1QmFEd2RBNlVOZGJvQ1huN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrhKTsnbTrsoTroZzqt7jsnbg8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXsocmVzKSA9PiByZXNwb25zZUxvZ2luKHJlcywgJ25hdmVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXsoKSA9PiBjb25zb2xlLmxvZygnbmF2ZXIgbG9naW4gZmFpbCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgPjxhPu2ZiO2OmOydtOyngDwvYT48L0xpbms+66GcIOuPjOyVhOqwgOq4sFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17JzM5NDk2MDM1MzE3LXIxNGlyZm5vdmppbGQ3am92ZmY1bjBncnB0aGtiMjA2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLqtazquIDroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICA+PC9Hb29nbGVMb2dpbj4gKi99XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRnJvbTsiXSwic291cmNlUm9vdCI6IiJ9