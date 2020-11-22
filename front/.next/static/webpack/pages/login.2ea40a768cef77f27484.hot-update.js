webpackHotUpdate_N_E("pages/login",{

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
      logInLoading = _useSelector.logInLoading;

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
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (logInDone) {
      console.log(logInDone);
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
    }
  }, []);

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
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
          lineNumber: 77,
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
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "\uD648\uD398\uC774\uC9C0")), "\uB85C \uB3CC\uC544\uAC00\uAE30"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }));
};

_s(LoginFrom, "Qdz3djKPH74sdPwFJ5zUrbW0WH8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gcm9tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Eb25lIiwibG9nSW5Mb2FkaW5nIiwicmVzcG9uc2VLYWthbyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsImRhdGEiLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwicmVzcG9uc2VMb2dpbiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaHJlZiIsInNwbGl0IiwiUm91dGVyIiwicHVzaCIsInJlc3BvbnNlRmFpbCIsImVyciIsImVycm9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsIk9yaWdpbmFsX2xvZ28iLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJwcm9wcyIsIm9uQ2xpY2siLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG9CLHFCQUdnQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIM0I7QUFBQSxNQUdaQyxTQUhZLGdCQUdaQSxTQUhZO0FBQUEsTUFHREMsWUFIQyxnQkFHREEsWUFIQzs7QUFLcEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxRQUFELEVBQWM7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFR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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUFYO0FBQUEsS0FIWjtBQUtJLGFBQVMsRUFBRSxtQkFBQ0MsR0FBRDtBQUFBLGFBQVNwQixhQUFhLENBQUNvQixHQUFELEVBQU0sT0FBTixDQUF0QjtBQUFBLEtBTGY7QUFNSSxhQUFTLEVBQUU7QUFBQSxhQUFNM0IsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosQ0FBTjtBQUFBLEtBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FISixFQXNCSTtBQUFLLFNBQUssRUFBRTtBQUFFdUIsZUFBUyxFQUFFO0FBQWIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBaEIsQ0FESixvQ0F0QkosRUFnQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDSixDQURKO0FBb0NILENBbkZEOztHQUFNbEMsUztVQUNlRSx1RCxFQUVtQkMsdUQ7OztLQUhsQ0gsUztBQXFGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMmVhNDBhNzY4Y2VmNzdmMjc0ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBSZXN1bHQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEtha2FvTG9naW4gZnJvbSAncmVhY3Qta2FrYW8tbG9naW4nO1xyXG5pbXBvcnQgTmF2ZXJMb2dpbiBmcm9tICdyZWFjdC1sb2dpbi1ieS1uYXZlcic7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IE9yaWdpbmFsX2xvZ28gZnJvbSAnLi4vaW1hZ2VzL09yaWdpbmFsX2xvZ28ucG5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgTG9naW5Gcm9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgbG9nSW5Eb25lLCBsb2dJbkxvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VLYWthbyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgYWNjZXNzVG9rZW46IHJlc3BvbnNlLnJlc3BvbnNlLmFjY2Vzc190b2tlbiwgcGxhdGZvcm06ICdrYWthbycgfTtcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oZGF0YSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VMb2dpbiA9IChyZXNwb25zZSwgcGxhdGZvcm0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgcGxhdGZvcm0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvJykgIT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPScpWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhdGlvbi5zcGxpdCgnJicpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcGxhdGZvcm06ICduYXZlcicgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ0luRG9uZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dJbkRvbmUpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZXNwb25zZUZhaWwgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJywgcGFkZGluZzogNTAsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e09yaWdpbmFsX2xvZ299IHN0eWxlPXt7IGhlaWdodDogNDAgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICA8S2FrYW9Mb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGpzS2V5PXsnNTkzMjQ2MDY5YzdiN2E0MjM0NDcxMGE5NTFjMDM5ZWUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLsubTsubTsmKQg6rOE7KCV7Jy866GcIOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUtha2FvfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIGdldFByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+PC9LYWthb0xvZ2luPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TmF2ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMHhlNUJhRHdkQTZVTmRib0NYbjdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVXJsPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg64Sk7J2067KE66Gc6re47J24PC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17KHJlcykgPT4gcmVzcG9uc2VMb2dpbihyZXMsICduYXZlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17KCkgPT4gY29uc29sZS5sb2coJ25hdmVyIGxvZ2luIGZhaWwnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nID48YT7tmYjtjpjsnbTsp4A8L2E+PC9MaW5rPuuhnCDrj4zslYTqsIDquLBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9eyczOTQ5NjAzNTMxNy1yMTRpcmZub3ZqaWxkN2pvdmZmNW4wZ3JwdGhrYjIwNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwi6rWs6riA66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgPjwvR29vZ2xlTG9naW4+ICovfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZyb207Il0sInNvdXJjZVJvb3QiOiIifQ==