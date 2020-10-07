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
_c3 = GoogleBtn;
var TemporaryBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject4());
_c4 = TemporaryBtn;
var LoginWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject5());
_c5 = LoginWrapper;

var LoginFrom = function LoginFrom() {
  _s();

  var userId = 1;
  var userNickname = 'kim';
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onClickLogin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginAction"])({}));
  }, []); // const [id, setId] = useState('');

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

  return __jsx(LoginWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
          lineNumber: 85,
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
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(GoogleBtn, {
    clientId: '628315189039-kira075j0fog81kb2kua27l8ubtlg0a4.apps.googleusercontent.com',
    buttonText: "\uAD6C\uAE00\uB85C\uADF8\uC778",
    onSuccess: responseGoogle,
    onFailure: responseFail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(TemporaryBtn, {
    onClick: onClickLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "\uC784\uC2DC \uB85C\uADF8\uC778"));
};

_s(LoginFrom, "p0j94heeZqM1ibSCXnBE23wTxxo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c6 = LoginFrom;
/* harmony default export */ __webpack_exports__["default"] = (LoginFrom);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "KaKaoBtn");
$RefreshReg$(_c2, "NaverBtn");
$RefreshReg$(_c3, "GoogleBtn");
$RefreshReg$(_c4, "TemporaryBtn");
$RefreshReg$(_c5, "LoginWrapper");
$RefreshReg$(_c6, "LoginFrom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiS2FLYW9CdG4iLCJzdHlsZWQiLCJLYWthb0xvZ2luIiwiTmF2ZXJCdG4iLCJCdXR0b24iLCJHb29nbGVCdG4iLCJHb29nbGVMb2dpbiIsIlRlbXBvcmFyeUJ0biIsIkxvZ2luV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZyb20iLCJ1c2VySWQiLCJ1c2VyTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0xvZ2luIiwidXNlQ2FsbGJhY2siLCJsb2dpbkFjdGlvbiIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJyZXNwb25zZU5hdmVyIiwicmVzcG9uc2VHb29nbGUiLCJ0b2tlbklkIiwicmVzcG9uc2VGYWlsIiwiZXJyIiwiZXJyb3IiLCJwcm9wcyIsIm9uQ2xpY2siLCJuYXZlclVzZXIiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFFBQVEsR0FBR0MsaUVBQU0sQ0FBQ0MseURBQUQsQ0FBVCxtQkFBZDtLQUFNRixRO0FBT04sSUFBTUcsUUFBUSxHQUFHRixpRUFBTSxDQUFDRywyQ0FBRCxDQUFULG9CQUFkO01BQU1ELFE7QUFRTixJQUFNRSxTQUFTLEdBQUdKLGlFQUFNLENBQUNLLHlEQUFELENBQVQsb0JBQWY7TUFBTUQsUztBQU1OLElBQU1FLFlBQVksR0FBR04saUVBQU0sQ0FBQ0csMkNBQUQsQ0FBVCxvQkFBbEI7TUFBTUcsWTtBQU1OLElBQU1DLFlBQVksR0FBR1AsaUVBQU0sQ0FBQ1EseUNBQUQsQ0FBVCxvQkFBbEI7TUFBTUQsWTs7QUFJTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEtBQXJCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ25DSCxZQUFRLENBQUNJLGtFQUFXLENBQUMsRUFBRCxDQUFaLENBQVI7QUFDSCxHQUYrQixFQUU3QixFQUY2QixDQUFoQyxDQU5vQixDQVlwQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0EsUUFBVCxDQUFrQkcsWUFBOUI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osUUFBRCxFQUFjO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxRQUFELEVBQWM7QUFDakNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNNLE9BQXJCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDMUJQLFdBQU8sQ0FBQ1EsS0FBUixDQUFjRCxHQUFkO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQ0ksU0FBSyxFQUFFLGtDQURYO0FBRUksY0FBVSxFQUFDLHNDQUZmO0FBR0ksYUFBUyxFQUFFVCxhQUhmO0FBSUksYUFBUyxFQUFFUSxZQUpmO0FBS0ksY0FBVSxFQUFFLElBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsNERBQUQ7QUFDSSxZQUFRLEVBQUMsc0JBRGI7QUFFSSxlQUFXLEVBQUMsdUJBRmhCO0FBR0ksVUFBTSxFQUFFLGdCQUFDRyxLQUFEO0FBQUEsYUFBVyxNQUFDLFFBQUQ7QUFBVSxlQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFBWDtBQUFBLEtBSFo7QUFJSSxhQUFTLEVBQUUsbUJBQUNDLFNBQUQ7QUFBQSxhQUFlWCxPQUFPLENBQUNDLEdBQVIsQ0FBWVUsU0FBWixDQUFmO0FBQUEsS0FKZjtBQUtJLGFBQVMsRUFBRTtBQUFBLGFBQU1YLE9BQU8sQ0FBQ1EsS0FBUixDQUFjSSxNQUFkLENBQU47QUFBQSxLQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLEVBaUJJLE1BQUMsU0FBRDtBQUNJLFlBQVEsRUFBRSwwRUFEZDtBQUVJLGNBQVUsRUFBQyxnQ0FGZjtBQUdJLGFBQVMsRUFBRVIsY0FIZjtBQUlJLGFBQVMsRUFBRUUsWUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJKLEVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkosRUF3QkksTUFBQyxZQUFEO0FBQWMsV0FBTyxFQUFFWCxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQXhCSixDQURKO0FBNEJILENBMUREOztHQUFNTCxTO1VBSWVJLHVEOzs7TUFKZkosUztBQTREU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmY0ZmM1YjkzMTUxZWQ5MzZiODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgS2FrYW9Mb2dpbiBmcm9tICdyZWFjdC1rYWthby1sb2dpbic7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgTmF2ZXJMb2dpbiBmcm9tICdyZWFjdC1sb2dpbi1ieS1uYXZlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ2luQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcblxyXG5jb25zdCBLYUthb0J0biA9IHN0eWxlZChLYWthb0xvZ2luKWBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2YzMGM7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuYDtcclxuXHJcbmNvbnN0IE5hdmVyQnRuID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBjYzIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IEdvb2dsZUJ0biA9IHN0eWxlZChHb29nbGVMb2dpbilgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBcclxuYDtcclxuXHJcbmNvbnN0IFRlbXBvcmFyeUJ0biA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZyb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VySWQgPSAxO1xyXG4gICAgY29uc3QgdXNlck5pY2tuYW1lID0gJ2tpbSc7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tMb2dpbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbih7fSkpO1xyXG4gICAgfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUtha2FvID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VOYXZlciA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS50b2tlbklkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VGYWlsID0gKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TG9naW5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8S2FLYW9CdG5cclxuICAgICAgICAgICAgICAgIGpzS2V5PXsnNTkzMjQ2MDY5YzdiN2E0MjM0NDcxMGE5NTFjMDM5ZWUnfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuy5tOy5tOyYpOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlS2FrYW99XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgICAgIGdldFByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgID48L0thS2FvQnRuPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPE5hdmVyTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMHhlNUJhRHdkQTZVTmRib0NYbjdcIlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw9XCJodHRwOi8vMTI3LjAuMC4xOjMwMDBcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxOYXZlckJ0biBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT7rhKTsnbTrsoTroZzqt7jsnbg8L05hdmVyQnRuPn1cclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17KG5hdmVyVXNlcikgPT4gY29uc29sZS5sb2cobmF2ZXJVc2VyKX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17KCkgPT4gY29uc29sZS5lcnJvcihyZXN1bHQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdvb2dsZUJ0blxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9eyc2MjgzMTUxODkwMzkta2lyYTA3NWowZm9nODFrYjJrdWEyN2w4dWJ0bGcwYTQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuq1rOq4gOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgID48L0dvb2dsZUJ0bj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUZW1wb3JhcnlCdG4gb25DbGljaz17b25DbGlja0xvZ2lufT7snoTsi5wg66Gc6re47J24PC9UZW1wb3JhcnlCdG4+XHJcbiAgICAgICAgPC9Mb2dpbldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gcm9tOyJdLCJzb3VyY2VSb290IjoiIn0=