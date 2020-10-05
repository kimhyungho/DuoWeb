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
/* harmony import */ var react_naver_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-naver-login */ "./node_modules/react-naver-login/index.js");
/* harmony import */ var react_naver_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_naver_login__WEBPACK_IMPORTED_MODULE_4__);
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
    console.log(response);
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
  }, __jsx(react_kakao_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    jsKey: '593246069c7b7a42344710a951c039ee',
    buttonText: "\uCE74\uCE74\uC624\uB85C\uADF8\uC778",
    onSuccess: responseKakao,
    onFailure: responseFail,
    getProfile: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(react_naver_login__WEBPACK_IMPORTED_MODULE_4___default.a, {
    clientId: "0xe5BaDwdA6UNdboCXn7",
    callbackUrl: "http://localhost:3000/login",
    isPopup: true,
    callbackHandle: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 14
    }
  }, "\uB124\uC774\uBC84\uB85C\uADF8\uC778")), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clientId: '628315189039-kira075j0fog81kb2kua27l8ubtlg0a4.apps.googleusercontent.com',
    buttonText: "\uAD6C\uAE00\uB85C\uADF8\uC778",
    onSuccess: responseGoogle,
    onFailure: responseFail,
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

/***/ }),

/***/ "./node_modules/react-login-by-naver/dist/index.es.js":
false,

/***/ "./node_modules/react-naver-login/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-naver-login/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var NAVER_ID_SDK_URL = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
var isServer = function () { return typeof window === undefined; };
/**
 * 이 함수는 브라우저 환경에서만 호출이 되야 한다. window 객체에 직접 접근한다.
 * @param props
 */
var initLoginButton = function (props) {
    if (isServer()) {
        return;
    }
    var clientId = props.clientId, callbackUrl = props.callbackUrl, onSuccess = props.onSuccess, onFailure = props.onFailure;
    var naver = window["naver"];
    var naverLogin = new naver.LoginWithNaverId({
        callbackUrl: callbackUrl,
        clientId: clientId,
        isPopup: true,
        loginButton: { color: "green", type: 3, height: 60 },
    });
    naverLogin.init();
    if (!window.opener) {
        naver.successCallback = function (data) { return onSuccess(data); };
        naver.failureCallback = onFailure;
    }
    else {
        naverLogin.getLoginStatus(function (status) {
            if (status) {
                window.opener.naver.successCallback(naverLogin.user);
            }
            else {
                window.opener.failureCallback();
            }
            window.close();
        });
    }
};
var appendNaverButton = function () {
    if (document && document.querySelectorAll("#naverIdLogin").length === 0) {
        var naverId = document.createElement("div");
        naverId.id = "naverIdLogin";
        naverId.style.position = "absolute";
        naverId.style.top = "-10000px";
        document.body.appendChild(naverId);
    }
};
var loadScript = function (props) {
    if (document && document.querySelectorAll("#naver-login-sdk").length === 0) {
        var script = document.createElement("script");
        script.id = "naver-login-sdk";
        script.src = NAVER_ID_SDK_URL;
        script.onload = function () { return initLoginButton(props); };
        document.head.appendChild(script);
    }
};
var LoginNaver = /** @class */ (function (_super) {
    __extends(LoginNaver, _super);
    function LoginNaver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginNaver.prototype.componentDidMount = function () {
        if (isServer()) {
            return;
        }
        appendNaverButton();
        loadScript(this.props);
    };
    LoginNaver.prototype.render = function () {
        var render = this.props.render;
        return render({
            onClick: function () {
                if (!document ||
                    !document.querySelector("#naverIdLogin").firstChild)
                    return;
                var naverLoginButton = document.querySelector("#naverIdLogin").firstChild;
                naverLoginButton.click();
            },
        });
    };
    return LoginNaver;
}(React.Component));

exports.default = LoginNaver;
//# sourceMappingURL=index.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZyb20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1uYXZlci1sb2dpbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2dpbkZyb20iLCJyZXNwb25zZUtha2FvIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYWNjZXNzX3Rva2VuIiwicmVzcG9uc2VOYXZlciIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2VGYWlsIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUVwQjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDQSxRQUFULENBQWtCRyxZQUE5QjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixRQUFELEVBQWM7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNMLFFBQUQsRUFBYztBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUMxQk4sV0FBTyxDQUFDTyxLQUFSLENBQWNELEdBQWQ7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFDSSxTQUFLLEVBQUUsa0NBRFg7QUFFSSxjQUFVLEVBQUMsc0NBRmY7QUFHSSxhQUFTLEVBQUVSLGFBSGY7QUFJSSxhQUFTLEVBQUVPLFlBSmY7QUFLSSxjQUFVLEVBQUUsSUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBUUksTUFBQyx3REFBRDtBQUNJLFlBQVEsRUFBQyxzQkFEYjtBQUVJLGVBQVcsRUFBQyw2QkFGaEI7QUFHSSxXQUFPLEVBQUUsSUFIYjtBQUlJLGtCQUFjLEVBQUUsSUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FMRCxDQVJKLEVBY0ksTUFBQyx5REFBRDtBQUNJLFlBQVEsRUFBRSwwRUFEZDtBQUVJLGNBQVUsRUFBQyxnQ0FGZjtBQUdJLGFBQVMsRUFBRUQsY0FIZjtBQUlJLGFBQVMsRUFBRUMsWUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosQ0FESjtBQXVCSCxDQTNDRDs7S0FBTVIsUztBQTZDU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGE7O0FBRWIsOENBQThDLGNBQWM7O0FBRTVELFlBQVksbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFM0I7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0NBQW9DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQXNDO0FBQzVELEtBQUs7QUFDTDtBQUNBO0FBQ0EsaURBQWlELHdCQUF3QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLCtCQUErQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTAyYTgzMzQwM2ViNWU2NGY3NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgS2FrYW9Mb2dpbiBmcm9tICdyZWFjdC1rYWthby1sb2dpbic7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgTmF2ZXJMb2dpbiBmcm9tICdyZWFjdC1uYXZlci1sb2dpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luRnJvbSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUtha2FvID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VOYXZlciA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEtha2FvTG9naW5cclxuICAgICAgICAgICAgICAgIGpzS2V5PXsnNTkzMjQ2MDY5YzdiN2E0MjM0NDcxMGE5NTFjMDM5ZWUnfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuy5tOy5tOyYpOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlS2FrYW99XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgICAgIGdldFByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgID48L0tha2FvTG9naW4+XHJcbiAgICAgICAgICAgIDxOYXZlckxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD0nMHhlNUJhRHdkQTZVTmRib0NYbjcnXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1VybD0naHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgaXNQb3B1cD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlPXt0cnVlfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPjxCdXR0b24+64Sk7J2067KE66Gc6re47J24PC9CdXR0b24+PC9OYXZlckxvZ2luPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPXsnNjI4MzE1MTg5MDM5LWtpcmEwNzVqMGZvZzgxa2Iya3VhMjdsOHVidGxnMGE0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLqtazquIDroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VGYWlsfVxyXG4gICAgICAgICAgICA+PC9Hb29nbGVMb2dpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZyb207IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbnZhciBOQVZFUl9JRF9TREtfVVJMID0gXCJodHRwczovL3N0YXRpYy5uaWQubmF2ZXIuY29tL2pzL25hdmVyaWRsb2dpbl9qc19zZGtfMi4wLjAuanNcIjtcclxudmFyIGlzU2VydmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkOyB9O1xyXG4vKipcclxuICog7J20IO2VqOyImOuKlCDruIzrnbzsmrDsoIAg7ZmY6rK97JeQ7ISc66eMIO2YuOy2nOydtCDrkJjslbwg7ZWc64ukLiB3aW5kb3cg6rCd7LK07JeQIOyngeygkSDsoJHqt7ztlZzri6QuXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKi9cclxudmFyIGluaXRMb2dpbkJ1dHRvbiA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgaWYgKGlzU2VydmVyKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY2xpZW50SWQgPSBwcm9wcy5jbGllbnRJZCwgY2FsbGJhY2tVcmwgPSBwcm9wcy5jYWxsYmFja1VybCwgb25TdWNjZXNzID0gcHJvcHMub25TdWNjZXNzLCBvbkZhaWx1cmUgPSBwcm9wcy5vbkZhaWx1cmU7XHJcbiAgICB2YXIgbmF2ZXIgPSB3aW5kb3dbXCJuYXZlclwiXTtcclxuICAgIHZhciBuYXZlckxvZ2luID0gbmV3IG5hdmVyLkxvZ2luV2l0aE5hdmVySWQoe1xyXG4gICAgICAgIGNhbGxiYWNrVXJsOiBjYWxsYmFja1VybCxcclxuICAgICAgICBjbGllbnRJZDogY2xpZW50SWQsXHJcbiAgICAgICAgaXNQb3B1cDogdHJ1ZSxcclxuICAgICAgICBsb2dpbkJ1dHRvbjogeyBjb2xvcjogXCJncmVlblwiLCB0eXBlOiAzLCBoZWlnaHQ6IDYwIH0sXHJcbiAgICB9KTtcclxuICAgIG5hdmVyTG9naW4uaW5pdCgpO1xyXG4gICAgaWYgKCF3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgbmF2ZXIuc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIG9uU3VjY2VzcyhkYXRhKTsgfTtcclxuICAgICAgICBuYXZlci5mYWlsdXJlQ2FsbGJhY2sgPSBvbkZhaWx1cmU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBuYXZlckxvZ2luLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW5lci5uYXZlci5zdWNjZXNzQ2FsbGJhY2sobmF2ZXJMb2dpbi51c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuZXIuZmFpbHVyZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBhcHBlbmROYXZlckJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25hdmVySWRMb2dpblwiKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB2YXIgbmF2ZXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbmF2ZXJJZC5pZCA9IFwibmF2ZXJJZExvZ2luXCI7XHJcbiAgICAgICAgbmF2ZXJJZC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBuYXZlcklkLnN0eWxlLnRvcCA9IFwiLTEwMDAwcHhcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmVySWQpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgbG9hZFNjcmlwdCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmF2ZXItbG9naW4tc2RrXCIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdC5pZCA9IFwibmF2ZXItbG9naW4tc2RrXCI7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IE5BVkVSX0lEX1NES19VUkw7XHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluaXRMb2dpbkJ1dHRvbihwcm9wcyk7IH07XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgTG9naW5OYXZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMb2dpbk5hdmVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTG9naW5OYXZlcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBMb2dpbk5hdmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaXNTZXJ2ZXIoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcGVuZE5hdmVyQnV0dG9uKCk7XHJcbiAgICAgICAgbG9hZFNjcmlwdCh0aGlzLnByb3BzKTtcclxuICAgIH07XHJcbiAgICBMb2dpbk5hdmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlbmRlciA9IHRoaXMucHJvcHMucmVuZGVyO1xyXG4gICAgICAgIHJldHVybiByZW5kZXIoe1xyXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2ZXJJZExvZ2luXCIpLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hdmVyTG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmVySWRMb2dpblwiKS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgbmF2ZXJMb2dpbkJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dpbk5hdmVyO1xyXG59KFJlYWN0LkNvbXBvbmVudCkpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpbk5hdmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9