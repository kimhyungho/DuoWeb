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
  var userNickname = '임시 닉네임';
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var onClickLogin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginAction"])({
      userId: userId,
      userNickname: userNickname
    }));
  }, [userId, userNickname]); // const [id, setId] = useState('');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiS2FLYW9CdG4iLCJzdHlsZWQiLCJLYWthb0xvZ2luIiwiTmF2ZXJCdG4iLCJCdXR0b24iLCJHb29nbGVCdG4iLCJHb29nbGVMb2dpbiIsIlRlbXBvcmFyeUJ0biIsIkxvZ2luV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZyb20iLCJ1c2VySWQiLCJ1c2VyTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0xvZ2luIiwidXNlQ2FsbGJhY2siLCJsb2dpbkFjdGlvbiIsInJlc3BvbnNlS2FrYW8iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJyZXNwb25zZU5hdmVyIiwicmVzcG9uc2VHb29nbGUiLCJ0b2tlbklkIiwicmVzcG9uc2VGYWlsIiwiZXJyIiwiZXJyb3IiLCJwcm9wcyIsIm9uQ2xpY2siLCJuYXZlclVzZXIiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFFBQVEsR0FBR0MsaUVBQU0sQ0FBQ0MseURBQUQsQ0FBVCxtQkFBZDtLQUFNRixRO0FBT04sSUFBTUcsUUFBUSxHQUFHRixpRUFBTSxDQUFDRywyQ0FBRCxDQUFULG9CQUFkO01BQU1ELFE7QUFRTixJQUFNRSxTQUFTLEdBQUdKLGlFQUFNLENBQUNLLHlEQUFELENBQVQsb0JBQWY7TUFBTUQsUztBQU1OLElBQU1FLFlBQVksR0FBR04saUVBQU0sQ0FBQ0csMkNBQUQsQ0FBVCxvQkFBbEI7TUFBTUcsWTtBQU1OLElBQU1DLFlBQVksR0FBR1AsaUVBQU0sQ0FBQ1EseUNBQUQsQ0FBVCxvQkFBbEI7TUFBTUQsWTs7QUFJ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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEtha2FvTG9naW4gZnJvbSAncmVhY3Qta2FrYW8tbG9naW4nO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0IE5hdmVyTG9naW4gZnJvbSAncmVhY3QtbG9naW4tYnktbmF2ZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dpbkFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5cclxuY29uc3QgS2FLYW9CdG4gPSBzdHlsZWQoS2FrYW9Mb2dpbilgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmMzBjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZlckJ0biA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwY2MyMztcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBHb29nbGVCdG4gPSBzdHlsZWQoR29vZ2xlTG9naW4pYFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgXHJcbmA7XHJcblxyXG5jb25zdCBUZW1wb3JhcnlCdG4gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuYDtcclxuXHJcblxyXG5jb25zdCBMb2dpbldyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gcm9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gMTtcclxuICAgIGNvbnN0IHVzZXJOaWNrbmFtZSA9ICfsnoTsi5wg64uJ64Sk7J6EJztcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0xvZ2luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luQWN0aW9uKHt1c2VySWQsIHVzZXJOaWNrbmFtZX0pKTtcclxuICAgIH0sIFt1c2VySWQsIHVzZXJOaWNrbmFtZV0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZUtha2FvID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VOYXZlciA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS50b2tlbklkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VGYWlsID0gKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TG9naW5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8S2FLYW9CdG5cclxuICAgICAgICAgICAgICAgIGpzS2V5PXsnNTkzMjQ2MDY5YzdiN2E0MjM0NDcxMGE5NTFjMDM5ZWUnfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuy5tOy5tOyYpOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlS2FrYW99XHJcbiAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgICAgIGdldFByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgID48L0thS2FvQnRuPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPE5hdmVyTG9naW5cclxuICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMHhlNUJhRHdkQTZVTmRib0NYbjdcIlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw9XCJodHRwOi8vMTI3LjAuMC4xOjMwMDBcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxOYXZlckJ0biBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT7rhKTsnbTrsoTroZzqt7jsnbg8L05hdmVyQnRuPn1cclxuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17KG5hdmVyVXNlcikgPT4gY29uc29sZS5sb2cobmF2ZXJVc2VyKX1cclxuICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17KCkgPT4gY29uc29sZS5lcnJvcihyZXN1bHQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdvb2dsZUJ0blxyXG4gICAgICAgICAgICAgICAgY2xpZW50SWQ9eyc2MjgzMTUxODkwMzkta2lyYTA3NWowZm9nODFrYjJrdWEyN2w4dWJ0bGcwYTQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIuq1rOq4gOuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgID48L0dvb2dsZUJ0bj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUZW1wb3JhcnlCdG4gb25DbGljaz17b25DbGlja0xvZ2lufT7snoTsi5wg66Gc6re47J24PC9UZW1wb3JhcnlCdG4+XHJcbiAgICAgICAgPC9Mb2dpbldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gcm9tOyJdLCJzb3VyY2VSb290IjoiIn0=