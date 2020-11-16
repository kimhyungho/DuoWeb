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

  var responseKakao = function responseKakao(response) {
    console.log(response.response.access_token);
    var data = {
      accessToken: response.response.access_token,
      platform: 'kakao'
    };
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])(data));
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  }; // const responseNaver = (response) => {
  //     if (typeof window !== 'undefined') {
  //         if ((window.location.origin + '/') != window.location.href) {
  //             const location = window.location.href.split('=')[1];
  //             const accessToken = location.split('&')[0];
  //             const data = { accessToken: accessToken, platform: 'naver' };
  //             dispatch(loginRequestAction(data));
  //         }
  //     }
  // }
  // const responseGoogle = (response) => {
  //     console.log(response.accessToken)
  //     const data = { accessToken: response.accessToken, platform: 'google' };
  //     dispatch(loginRequestAction(data));
  // };


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
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\uB124\uC774\uBC84 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "\uAD6C\uAE00 \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "\uD648\uD398\uC774\uC9C0")), "\uB85C \uB3CC\uC544\uAC00\uAE30"));
};

_s(LoginFrom, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlcnJvciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJPcmlnaW5hbF9sb2dvIiwiaGVpZ2h0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDQSxRQUFULENBQWtCRyxZQUE5QjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUFFQyxpQkFBVyxFQUFFTCxRQUFRLENBQUNBLFFBQVQsQ0FBa0JHLFlBQWpDO0FBQStDRyxjQUFRLEVBQUU7QUFBekQsS0FBYjtBQUNBVCxZQUFRLENBQUNVLHlFQUFrQixDQUFDSCxJQUFELENBQW5CLENBQVI7QUFDQUksdURBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUxELENBSG9CLENBVXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO0FBQzFCVixXQUFPLENBQUNXLEtBQVIsQ0FBY0QsR0FBZDtBQUNBSCx1REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNILEdBSEQ7O0FBS0EsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFSSxxQkFBZSxFQUFFLFNBQW5CO0FBQThCQyxhQUFPLEVBQUUsRUFBdkM7QUFBMkNDLGVBQVMsRUFBRTtBQUF0RCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUMsZ0VBQVY7QUFBeUIsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFDSSxTQUFLLEVBQUUsa0NBRFg7QUFFSSxjQUFVLEVBQUMsZ0VBRmY7QUFHSSxhQUFTLEVBQUVuQixhQUhmO0FBSUksYUFBUyxFQUFFVyxZQUpmO0FBS0ksY0FBVSxFQUFFLElBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLEVBWUk7QUFBSyxTQUFLLEVBQUU7QUFBRVEsZUFBUyxFQUFFO0FBQWIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQURKLENBWkosRUFlSTtBQUFLLFNBQUssRUFBRTtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBREosQ0FmSixFQWtCSTtBQUFLLFNBQUssRUFBRTtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFoQixDQURKLG9DQWxCSixDQURKO0FBMENILENBMUVEOztHQUFNdEIsUztVQUNlRSx1RDs7O0tBRGZGLFM7QUE0RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNTU4YWYyMWEzNWU0MTllMDU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIFJlc3VsdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgS2FrYW9Mb2dpbiBmcm9tICdyZWFjdC1rYWthby1sb2dpbic7XHJcbmltcG9ydCBOYXZlckxvZ2luIGZyb20gJ3JlYWN0LWxvZ2luLWJ5LW5hdmVyJztcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBPcmlnaW5hbF9sb2dvIGZyb20gJy4uL2ltYWdlcy9PcmlnaW5hbF9sb2dvLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luRnJvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2VLYWthbyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgYWNjZXNzVG9rZW46IHJlc3BvbnNlLnJlc3BvbnNlLmFjY2Vzc190b2tlbiwgcGxhdGZvcm06ICdrYWthbycgfTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJyk7ICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25zdCByZXNwb25zZU5hdmVyID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICgod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvJykgIT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz0nKVsxXTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYXRpb24uc3BsaXQoJyYnKVswXTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcGxhdGZvcm06ICduYXZlcicgfTtcclxuICAgIC8vICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5hY2Nlc3NUb2tlbilcclxuICAgIC8vICAgICBjb25zdCBkYXRhID0geyBhY2Nlc3NUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sIHBsYXRmb3JtOiAnZ29vZ2xlJyB9O1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbihkYXRhKSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTsgXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJywgcGFkZGluZzogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e09yaWdpbmFsX2xvZ299IHN0eWxlPXt7IGhlaWdodDogNDAgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8S2FrYW9Mb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGpzS2V5PXsnNTkzMjQ2MDY5YzdiN2E0MjM0NDcxMGE5NTFjMDM5ZWUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLsubTsubTsmKQg6rOE7KCV7Jy866GcIOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUtha2FvfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGdldFByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+PC9LYWthb0xvZ2luPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj7rhKTsnbTrsoQg6rOE7KCV7Jy866GcIOuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj7qtazquIAg6rOE7KCV7Jy866GcIOuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgPjxhPu2ZiO2OmOydtOyngDwvYT48L0xpbms+66GcIOuPjOyVhOqwgOq4sFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TmF2ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIweGU1QmFEd2RBNlVOZGJvQ1huN1wiXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1VybD1cImh0dHA6Ly8xMjcuMC4wLjE6MzAwMC9cIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxCdXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+64Sk7J2067KEIOuhnOq3uOyduDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17KHJlcykgPT4gY29uc29sZS5sb2coJ+yEseqztScpfVxyXG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXsoKSA9PiBjb25zb2xlLmxvZygnbmF2ZXIgbG9naW4gZmFpbCcpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17JzM5NDk2MDM1MzE3LXIxNGlyZm5vdmppbGQ3am92ZmY1bjBncnB0aGtiMjA2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLqtazquIDroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICA+PC9Hb29nbGVMb2dpbj5cclxuICAgICAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRnJvbTsiXSwic291cmNlUm9vdCI6IiJ9