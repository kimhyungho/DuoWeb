webpackHotUpdate_N_E("pages/lol_write",{

/***/ "./components/LolWriteForm.js":
/*!************************************!*\
  !*** ./components/LolWriteForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\LolWriteForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function onChange(value) {
  console.log("selected ".concat(value));
}

function onSearch(val) {
  console.log('search:', val);
}

var LolWriteFrom = function LolWriteFrom() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var onSubmit = function onSubmit() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, me.userId ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 200
    },
    placeholder: "\uAC8C\uC784 \uBAA8\uB4DC",
    optionFilterProp: "gameMode",
    onChange: onChange,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: "\uC194\uB7C9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, "\uC194\uB7AD"), __jsx(Option, {
    value: "\uC790\uB7AD",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "\uC790\uB7AD"), __jsx(Option, {
    value: "\uC77C\uBC18",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "\uC77C\uBC18"), __jsx(Option, {
    value: "\uCE7C\uBC14\uB78C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "\uCE7C\uBC14\uB78C"), __jsx(Option, {
    value: "\uCEE4\uC2A4\uD140",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "\uCEE4\uC2A4\uD140")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 200
    },
    placeholder: "\uC778\uC6D0 \uC218",
    optionFilterProp: "headcount",
    onChange: onChange,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "1\uBA85"), __jsx(Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "2\uBA85"), __jsx(Option, {
    value: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "3\uBA85"), __jsx(Option, {
    value: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "4\uBA85")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 200
    },
    placeholder: "\uCD5C\uC800 \uD2F0\uC5B4",
    optionFilterProp: "startTier",
    onChange: onChange,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "\uC0C1\uAD00\uC5C6\uC74C"), __jsx(Option, {
    value: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Iron4"), __jsx(Option, {
    value: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "Iron3"), __jsx(Option, {
    value: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Iron2"), __jsx(Option, {
    value: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Iron1"), __jsx(Option, {
    value: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "Bronze4"), __jsx(Option, {
    value: 17,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, "Bronze3"), __jsx(Option, {
    value: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Bronze2"), __jsx(Option, {
    value: 19,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "Bronze1"), __jsx(Option, {
    value: 26,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Silver4"), __jsx(Option, {
    value: 27,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "Silver3"), __jsx(Option, {
    value: 28,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "Silver2"), __jsx(Option, {
    value: 29,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "Silver1"), __jsx(Option, {
    value: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Gold4"), __jsx(Option, {
    value: 37,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Gold3"), __jsx(Option, {
    value: 38,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "Gold2"), __jsx(Option, {
    value: 39,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, "Gold1"), __jsx(Option, {
    value: 46,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "Platinum4"), __jsx(Option, {
    value: 47,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "Platinum3"), __jsx(Option, {
    value: 48,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "Platinum2"), __jsx(Option, {
    value: 49,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, "Platinum1"), __jsx(Option, {
    value: 56,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, "Diamond4"), __jsx(Option, {
    value: 57,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, "Diamond3"), __jsx(Option, {
    value: 58,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, "Diamond2"), __jsx(Option, {
    value: 59,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "Diamond1"), __jsx(Option, {
    value: 70,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, "Master"), __jsx(Option, {
    value: 80,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "GrandMaster"), __jsx(Option, {
    value: 90,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Challenger")), "~", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 200
    },
    placeholder: "\uCD5C\uACE0 \uD2F0\uC5B4",
    optionFilterProp: "EndTier",
    onChange: onChange,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: 100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, "\uC0C1\uAD00\uC5C6\uC74C"), __jsx(Option, {
    value: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, "Iron4"), __jsx(Option, {
    value: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, "Iron3"), __jsx(Option, {
    value: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, "Iron2"), __jsx(Option, {
    value: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "Iron1"), __jsx(Option, {
    value: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "Bronze4"), __jsx(Option, {
    value: 17,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "Bronze3"), __jsx(Option, {
    value: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, "Bronze2"), __jsx(Option, {
    value: 19,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, "Bronze1"), __jsx(Option, {
    value: 26,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "Silver4"), __jsx(Option, {
    value: 27,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, "Silver3"), __jsx(Option, {
    value: 28,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, "Silver2"), __jsx(Option, {
    value: 29,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, "Silver1"), __jsx(Option, {
    value: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "Gold4"), __jsx(Option, {
    value: 37,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, "Gold3"), __jsx(Option, {
    value: 38,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, "Gold2"), __jsx(Option, {
    value: 39,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, "Gold1"), __jsx(Option, {
    value: 46,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, "Platinum4"), __jsx(Option, {
    value: 47,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "Platinum3"), __jsx(Option, {
    value: 48,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Platinum2"), __jsx(Option, {
    value: 49,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Platinum1"), __jsx(Option, {
    value: 56,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, "Diamond4"), __jsx(Option, {
    value: 57,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, "Diamond3"), __jsx(Option, {
    value: 58,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, "Diamond2"), __jsx(Option, {
    value: 59,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, "Diamond1"), __jsx(Option, {
    value: 70,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, "Master"), __jsx(Option, {
    value: 80,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, "GrandMaster"), __jsx(Option, {
    value: 90,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, "Challenger")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 410
    },
    placeholder: "\uB9CC\uB8CC\uC2DC\uAC04",
    optionFilterProp: "endTime",
    onChange: onChange,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx(Option, {
    value: 15,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, "15\uBD84 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 30,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, "30\uBD84 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, "1\uC2DC\uAC04 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 120,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, "2\uC2DC\uAC04 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 180,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, "3\uC2DC\uAC04 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 360,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, "6\uC2DC\uAC04 \uB4A4 \uB9CC\uB8CC"), __jsx(Option, {
    value: 1440,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 25
    }
  }, "24\uC2DC\uAC04 \uB4A4 \uB9CC\uB8CC")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: '제목',
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    placeholder: '내용',
    style: {
      height: '200px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, "\uC81C\uCD9C")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, "\uAE00\uC4F0\uAE30 - \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD55C \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"));
};

_s(LolWriteFrom, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = LolWriteFrom;
/* harmony default export */ __webpack_exports__["default"] = (LolWriteFrom);

var _c;

$RefreshReg$(_c, "LolWriteFrom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2xXcml0ZUZvcm0uanMiXSwibmFtZXMiOlsib25DaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaCIsInZhbCIsIkxvbFdyaXRlRnJvbSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJvblN1Ym1pdCIsInVzZXJJZCIsIm1hcmdpbiIsIndpZHRoIiwiaW5wdXQiLCJvcHRpb24iLCJjaGlsZHJlbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixvQkFBd0JGLEtBQXhCO0FBQ0g7O0FBRUQsU0FBU0csUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkJILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLEdBQXZCO0FBQ0g7O0FBR0QsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLHFCQUVSQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZIO0FBQUEsTUFFZkMsRUFGZSxnQkFFZkEsRUFGZTs7QUFLdkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTSxDQUd0QixDQUhEOztBQUtBLFNBQ0ksbUVBQ0tELEVBQUUsQ0FBQ0UsTUFBSCxHQUNLLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNJLGNBQVUsTUFEZDtBQUVJLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxL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ZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQWhCSixFQWlCSSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQWpCSixDQXhIRixFQTJJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0lGLEVBNElFLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUUsSUFBcEI7QUFBMEIsU0FBSyxFQUFFO0FBQUVFLGtCQUFZLEVBQUU7QUFBaEIsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVJRixFQTZJRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixlQUFXLEVBQUUsSUFBN0I7QUFBbUMsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3SUYsRUE4SUUsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFdBQU8sRUFBRVYsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5SUYsQ0FETCxHQWlKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZHQWxKVixDQURKO0FBd0pILENBbEtEOztHQUFNTCxZO1VBRWFDLHVEOzs7S0FGYkQsWTtBQXNLU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9sX3dyaXRlLjFiMTIwYTI5MGI5OTdiMzlhNDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5mdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2VhcmNoKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ3NlYXJjaDonLCB2YWwpO1xyXG59XHJcblxyXG5cclxuY29uc3QgTG9sV3JpdGVGcm9tID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge21lLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgPyA8Rm9ybSBzdHlsZT17eyBtYXJnaW46ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuqyjOyehCDrqqjrk5xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiZ2FtZU1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi7IaU65+JXCI+7IaU656tPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLsnpDrnq1cIj7snpDrnq08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIuydvOuwmFwiPuydvOuwmDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwi7Lm867CU656MXCI+7Lm867CU656MPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCLsu6TsiqTthYBcIj7su6TsiqTthYA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J247JuQIOyImFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJoZWFkY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiMVwiPjHrqoU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIjJcIj4y66qFPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCIzXCI+M+uqhTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiNFwiPjTrqoU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuy1nOyggCDti7DslrRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwic3RhcnRUaWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2hpbGRyZW4udG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17MX0+7IOB6rSA7JeG7J2MPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezZ9Pklyb240PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezd9Pklyb24zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezh9Pklyb24yPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezl9Pklyb24xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE2fT5Ccm9uemU0PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE3fT5Ccm9uemUzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE4fT5Ccm9uemUyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE5fT5Ccm9uemUxPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI2fT5TaWx2ZXI0PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI3fT5TaWx2ZXIzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI4fT5TaWx2ZXIyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI5fT5TaWx2ZXIxPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezM2fT5Hb2xkNDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXszN30+R29sZDM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Mzh9PkdvbGQyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezM5fT5Hb2xkMTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs0Nn0+UGxhdGludW00PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezQ3fT5QbGF0aW51bTM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17NDh9PlBsYXRpbnVtMjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs0OX0+UGxhdGludW0xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezU2fT5EaWFtb25kNDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs1N30+RGlhbW9uZDM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17NTh9PkRpYW1vbmQyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezU5fT5EaWFtb25kMTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs3MH0+TWFzdGVyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezgwfT5HcmFuZE1hc3RlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs5MH0+Q2hhbGxlbmdlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIH5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuy1nOqzoCDti7DslrRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiRW5kVGllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNoaWxkcmVuLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezEwMH0+7IOB6rSA7JeG7J2MPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezZ9Pklyb240PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezd9Pklyb24zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezh9Pklyb24yPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezl9Pklyb24xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE2fT5Ccm9uemU0PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE3fT5Ccm9uemUzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE4fT5Ccm9uemUyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE5fT5Ccm9uemUxPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI2fT5TaWx2ZXI0PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI3fT5TaWx2ZXIzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI4fT5TaWx2ZXIyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezI5fT5TaWx2ZXIxPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezM2fT5Hb2xkNDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXszN30+R29sZDM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Mzh9PkdvbGQyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezM5fT5Hb2xkMTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs0Nn0+UGxhdGludW00PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezQ3fT5QbGF0aW51bTM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17NDh9PlBsYXRpbnVtMjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs0OX0+UGxhdGludW0xPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezU2fT5EaWFtb25kNDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs1N30+RGlhbW9uZDM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17NTh9PkRpYW1vbmQyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezU5fT5EaWFtb25kMTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs3MH0+TWFzdGVyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezgwfT5HcmFuZE1hc3RlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs5MH0+Q2hhbGxlbmdlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNDEwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66eM66OM7Iuc6rCEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImVuZFRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXsxNX0+MTXrtoQg65KkIOunjOujjDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXszMH0+MzDrtoQg65KkIOunjOujjDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXs2MH0+MeyLnOqwhCDrkqQg66eM66OMPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezEyMH0+MuyLnOqwhCDrkqQg66eM66OMPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE4MH0+M+yLnOqwhCDrkqQg66eM66OMPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezM2MH0+NuyLnOqwhCDrkqQg66eM66OMPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9ezE0NDB9PjI07Iuc6rCEIOuSpCDrp4zro4w8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9eyfsoJzrqqknfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBwbGFjZWhvbGRlcj17J+uCtOyaqSd9IHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JyB9fT48L0lucHV0LlRleHRBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtvblN1Ym1pdH0+7KCc7LacPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA6IDxkaXY+6riA7JOw6riwIC0g66Gc6re47J247J20IO2VhOyalO2VnCDtjpjsnbTsp4DsnoXri4jri6Q8L2Rpdj59XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9sV3JpdGVGcm9tOyJdLCJzb3VyY2VSb290IjoiIn0=