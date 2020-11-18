webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DetailPost.js":
/*!**********************************!*\
  !*** ./components/DetailPost.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\components\\DetailPost.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border: 1px solid #000000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Frame = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = Frame;

var DetailPost = function DetailPost() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      detailLolPost = _useSelector2.detailLolPost;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.comment;
  }),
      comments = _useSelector3.comments,
      loadCommentsLoading = _useSelector3.loadCommentsLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var onClose = function onClose() {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["detailLolPostOffAction"])());
    dispatch(Object(_reducers_comment__WEBPACK_IMPORTED_MODULE_7__["emptyCommentsRequestAction"])());
  };

  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      width: '100%'
    },
    onClick: onClose,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    style: {
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, detailLolPost.title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, detailLolPost.content), me.userId === detailLolPost.userId && __jsx(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 52
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 65
    }
  }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "dashed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 84
    }
  }, "\uC0AD\uC81C")), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    loading: loadCommentsLoading,
    header: "".concat(comments ? comments.length : 0, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: comments,
    renderItem: function renderItem(item) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.nickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
};

_s(DetailPost, "LaNcPk02YZYcfu0fnN053+n23EQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c2 = DetailPost;
/* harmony default export */ __webpack_exports__["default"] = (DetailPost);

var _c, _c2;

$RefreshReg$(_c, "Frame");
$RefreshReg$(_c2, "DetailPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwiZGV0YWlsTG9sUG9zdCIsImNvbW1lbnQiLCJjb21tZW50cyIsImxvYWRDb21tZW50c0xvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbG9zZSIsImRldGFpbExvbFBvc3RPZmZBY3Rpb24iLCJlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbiIsIndpZHRoIiwicGFkZGluZyIsImZvbnRTaXplIiwidGl0bGUiLCJjb250ZW50IiwidXNlcklkIiwibGVuZ3RoIiwiaXRlbSIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtLQUFNRixLOztBQUlOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxxQkFFUkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGSDtBQUFBLE1BRWRDLEVBRmMsZ0JBRWRBLEVBRmM7O0FBQUEsc0JBR0tILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSGhCO0FBQUEsTUFHYkMsYUFIYSxpQkFHYkEsYUFIYTs7QUFBQSxzQkFJcUJMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ssT0FBakI7QUFBQSxHQUFELENBSmhDO0FBQUEsTUFJYkMsUUFKYSxpQkFJYkEsUUFKYTtBQUFBLE1BSUhDLG1CQUpHLGlCQUlIQSxtQkFKRzs7QUFLckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCRixZQUFRLENBQUNHLDZFQUFzQixFQUF2QixDQUFSO0FBQ0FILFlBQVEsQ0FBQ0ksb0ZBQTBCLEVBQTNCLENBQVI7QUFDSCxHQUhEOztBQU1BLFNBQ0ksTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyQ0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUFmO0FBQWtDLFdBQU8sRUFBRUgsT0FBM0M7QUFBb0QsUUFBSSxFQUFDLFNBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFLLFNBQUssRUFBRTtBQUFFSyxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JYLGFBQWEsQ0FBQ1ksS0FBN0MsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTVosYUFBYSxDQUFDYSxPQUFwQixDQUhKLEVBSUtmLEVBQUUsQ0FBQ2dCLE1BQUgsS0FBY2QsYUFBYSxDQUFDYyxNQUE1QixJQUFzQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWIsRUFBZ0MsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWhDLENBSjNDLEVBS0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSSxNQUFDLHlDQUFEO0FBQ0ksV0FBTyxFQUFFWCxtQkFEYjtBQUVJLFVBQU0sWUFBS0QsUUFBUSxHQUFHQSxRQUFRLENBQUNhLE1BQVosR0FBcUIsQ0FBbEMsOEJBRlY7QUFHSSxjQUFVLEVBQUMsWUFIZjtBQUlJLGNBQVUsRUFBRWIsUUFKaEI7QUFLSSxjQUFVLEVBQUUsb0JBQUNjLElBQUQ7QUFBQSxhQUNSLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDRDQUFEO0FBQ0ksY0FBTSxFQUFFQSxJQUFJLENBQUNDLFFBRGpCO0FBRUksZUFBTyxFQUFFRCxJQUFJLENBQUNILE9BRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBRFE7QUFBQSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESjtBQTJCSCxDQXhDRDs7R0FBTW5CLFU7VUFFV0MsdUQsRUFDYUEsdUQsRUFDZ0JBLHVELEVBQ3pCVSx1RDs7O01BTGZYLFU7QUEwQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3NDYzNmMwYTkwNzVmMDUwY2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIENvbW1lbnQsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvY29tbWVudCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdhbnRkL2xpYi9idXR0b24vYnV0dG9uLWdyb3VwJztcclxuXHJcbmNvbnN0IEZyYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBEZXRhaWxQb3N0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgZGV0YWlsTG9sUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IHsgY29tbWVudHMsIGxvYWRDb21tZW50c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbWVudCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtvbkNsb3NlfSB0eXBlPVwicHJpbWFyeVwiPuuLq+q4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT57ZGV0YWlsTG9sUG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57ZGV0YWlsTG9sUG9zdC5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICB7bWUudXNlcklkID09PSBkZXRhaWxMb2xQb3N0LnVzZXJJZCAmJiA8QnV0dG9uR3JvdXA+PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj48QnV0dG9uIHR5cGU9XCJkYXNoZWRcIj7sgq3soJw8L0J1dHRvbj48L0J1dHRvbkdyb3VwPn1cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkQ29tbWVudHNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtjb21tZW50cyA/IGNvbW1lbnRzLmxlbmd0aCA6IDB96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==