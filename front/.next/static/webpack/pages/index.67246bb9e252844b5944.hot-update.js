webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_kakao_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-kakao-login */ "./node_modules/react-kakao-login/dist/index.es.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_login_by_naver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-login-by-naver */ "./node_modules/react-login-by-naver/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    height: 50px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    height: 50px;\n    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    height: 50px;\n    background-color: #10cc23;\n    font-weight: 1000;\n    color: #ffffff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    height: 50px;\n    background-color: #f7f30c;\n    font-weight: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var KaKaoBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_kakao_login__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject());
_c = KaKaoBtn;
var NaverBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject2());
_c2 = NaverBtn;
var GoogleBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_google_login__WEBPACK_IMPORTED_MODULE_4___default.a)(_templateObject3());
var TemporaryBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject4());
var LoginWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject5());
_c3 = LoginWrapper;

var LoginFrom = function LoginFrom() {
  _s();

  var userId = 1;
  var nickname = '임시 닉네임';
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])(); // const [id, setId] = useState('');

  var responseKakao = function responseKakao(response) {
    console.log(response.response.access_token);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["socailLoginRequest"])(response.response.access_token, 'kakao'));
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

  return __jsx(LoginWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(KaKaoBtn, {
    jsKey: '593246069c7b7a42344710a951c039ee',
    buttonText: "\uCE74\uCE74\uC624\uB85C\uADF8\uC778",
    onSuccess: responseKakao,
    onFailure: responseFail,
    getProfile: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx(react_login_by_naver__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clientId: "0xe5BaDwdA6UNdboCXn7",
    callbackUrl: "http://127.0.0.1:3000",
    render: function render(props) {
      return __jsx(NaverBtn, {
        onClick: props.onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 36
        }
      }, "\uB124\uC774\uBC84\uB85C\uADF8\uC778");
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
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }));
};

_s(LoginFrom, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c4 = LoginFrom;
/* harmony default export */ __webpack_exports__["default"] = (LoginFrom);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "KaKaoBtn");
$RefreshReg$(_c2, "NaverBtn");
$RefreshReg$(_c3, "LoginWrapper");
$RefreshReg$(_c4, "LoginFrom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiS2FLYW9CdG4iLCJzdHlsZWQiLCJLYWthb0xvZ2luIiwiTmF2ZXJCdG4iLCJCdXR0b24iLCJHb29nbGVCdG4iLCJHb29nbGVMb2dpbiIsIlRlbXBvcmFyeUJ0biIsIkxvZ2luV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZyb20iLCJ1c2VySWQiLCJuaWNrbmFtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZXNwb25zZUtha2FvIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiYWNjZXNzX3Rva2VuIiwic29jYWlsTG9naW5SZXF1ZXN0IiwicmVzcG9uc2VOYXZlciIsInJlc3BvbnNlR29vZ2xlIiwidG9rZW5JZCIsInJlc3BvbnNlRmFpbCIsImVyciIsImVycm9yIiwicHJvcHMiLCJvbkNsaWNrIiwibmF2ZXJVc2VyIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxRQUFRLEdBQUdDLGlFQUFNLENBQUNDLHlEQUFELENBQVQsbUJBQWQ7S0FBTUYsUTtBQU9OLElBQU1HLFFBQVEsR0FBR0YsaUVBQU0sQ0FBQ0csMkNBQUQsQ0FBVCxvQkFBZDtNQUFNRCxRO0FBUU4sSUFBTUUsU0FBUyxHQUFHSixpRUFBTSxDQUFDSyx5REFBRCxDQUFULG9CQUFmO0FBTUEsSUFBTUMsWUFBWSxHQUFHTixpRUFBTSxDQUFDRywyQ0FBRCxDQUFULG9CQUFsQjtBQU1BLElBQU1JLFlBQVksR0FBR1AsaUVBQU0sQ0FBQ1EseUNBQUQsQ0FBVCxvQkFBbEI7TUFBTUQsWTs7QUFJTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFFBQWpCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUpvQixDQU9wQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0EsUUFBVCxDQUFrQkcsWUFBOUI7QUFDQU4sWUFBUSxDQUFDTyx5RUFBa0IsQ0FBQ0osUUFBUSxDQUFDQSxRQUFULENBQWtCRyxZQUFuQixFQUFpQyxPQUFqQyxDQUFuQixDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNMLFFBQUQsRUFBYztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1NLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ04sUUFBRCxFQUFjO0FBQ2pDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDTyxPQUFyQjtBQUVILEdBSEQ7O0FBS0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO0FBQzFCUixXQUFPLENBQUNTLEtBQVIsQ0FBY0QsR0FBZDtBQUNILEdBRkQ7O0FBSUEsU0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsUUFBRDtBQUNJLFNBQUssRUFBRSxrQ0FEWDtBQUVJLGNBQVUsRUFBQyxzQ0FGZjtBQUdJLGFBQVMsRUFBRVYsYUFIZjtBQUlJLGFBQVMsRUFBRVMsWUFKZjtBQUtJLGNBQVUsRUFBRSxJQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSSxNQUFDLDREQUFEO0FBQ0ksWUFBUSxFQUFDLHNCQURiO0FBRUksZUFBVyxFQUFDLHVCQUZoQjtBQUdJLFVBQU0sRUFBRSxnQkFBQ0csS0FBRDtBQUFBLGFBQVcsTUFBQyxRQUFEO0FBQVUsZUFBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBQVg7QUFBQSxLQUhaO0FBSUksYUFBUyxFQUFFLG1CQUFDQyxTQUFEO0FBQUEsYUFBZVosT0FBTyxDQUFDQyxHQUFSLENBQVlXLFNBQVosQ0FBZjtBQUFBLEtBSmY7QUFLSSxhQUFTLEVBQUU7QUFBQSxhQUFNWixPQUFPLENBQUNTLEtBQVIsQ0FBY0ksTUFBZCxDQUFOO0FBQUEsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixFQXVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJKLENBREo7QUEyQkgsQ0F0REQ7O0dBQU1wQixTO1VBSWVJLHVEOzs7TUFKZkosUztBQXdEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjcyNDZiYjllMjUyODQ0YjU5NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgS2FrYW9Mb2dpbiBmcm9tICdyZWFjdC1rYWthby1sb2dpbic7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgTmF2ZXJMb2dpbiBmcm9tICdyZWFjdC1sb2dpbi1ieS1uYXZlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNvY2FpbExvZ2luUmVxdWVzdCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmNvbnN0IEthS2FvQnRuID0gc3R5bGVkKEtha2FvTG9naW4pYFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjMwYztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2ZXJCdG4gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGNjMjM7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgR29vZ2xlQnRuID0gc3R5bGVkKEdvb2dsZUxvZ2luKWBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIFxyXG5gO1xyXG5cclxuY29uc3QgVGVtcG9yYXJ5QnRuID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgTG9naW5XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRnJvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IDE7XHJcbiAgICBjb25zdCBuaWNrbmFtZSA9ICfsnoTsi5wg64uJ64Sk7J6EJztcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlS2FrYW8gPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIGRpc3BhdGNoKHNvY2FpbExvZ2luUmVxdWVzdChyZXNwb25zZS5yZXNwb25zZS5hY2Nlc3NfdG9rZW4sICdrYWthbycpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VOYXZlciA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS50b2tlbklkKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExvZ2luV3JhcHBlcj5cclxuICAgICAgICAgICAgPEthS2FvQnRuXHJcbiAgICAgICAgICAgICAgICBqc0tleT17JzU5MzI0NjA2OWM3YjdhNDIzNDQ3MTBhOTUxYzAzOWVlJ31cclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLsubTsubTsmKTroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUtha2FvfVxyXG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgICAgICBnZXRQcm9maWxlPXt0cnVlfVxyXG4gICAgICAgICAgICA+PC9LYUthb0J0bj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxOYXZlckxvZ2luXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjB4ZTVCYUR3ZEE2VU5kYm9DWG43XCJcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrVXJsPVwiaHR0cDovLzEyNy4wLjAuMTozMDAwXCJcclxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8TmF2ZXJCdG4gb25DbGljaz17cHJvcHMub25DbGlja30+64Sk7J2067KE66Gc6re47J24PC9OYXZlckJ0bj59XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9eyhuYXZlclVzZXIpID0+IGNvbnNvbGUubG9nKG5hdmVyVXNlcil9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9eygpID0+IGNvbnNvbGUuZXJyb3IocmVzdWx0KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiA8R29vZ2xlQnRuXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJZD17JzYyODMxNTE4OTAzOS1raXJhMDc1ajBmb2c4MWtiMmt1YTI3bDh1YnRsZzBhNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwi6rWs6riA66Gc6re47J24XCJcclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgPjwvR29vZ2xlQnRuPiAqL31cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9Mb2dpbldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gcm9tOyJdLCJzb3VyY2VSb290IjoiIn0=