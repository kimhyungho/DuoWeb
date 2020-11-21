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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button/button-group */ "./node_modules/antd/lib/button/button-group.js");
/* harmony import */ var antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_button_group__WEBPACK_IMPORTED_MODULE_9__);


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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      detailLolPost = _useSelector2.detailLolPost,
      deleteLolPostLoading = _useSelector2.deleteLolPostLoading,
      deleteLolPostDone = _useSelector2.deleteLolPostDone;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.comment;
  }),
      comments = _useSelector3.comments,
      loadCommentsLoading = _useSelector3.loadCommentsLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var onClose = function onClose() {
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_7__["detailLolPostOffAction"])());
    dispatch(Object(_reducers_comment__WEBPACK_IMPORTED_MODULE_8__["emptyCommentsRequestAction"])());
  };

  var onDeleteLolPost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var data = {
      userToken: me.userToken,
      userId: me.userId,
      postId: detailLolPost.id
    };
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_7__["deleteLolPostRequestAction"])(data));
  }, []);
  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("div", {
    style: {
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, detailLolPost.title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, detailLolPost.content), me.userId === detailLolPost.userId && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 20
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lol_update",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 50
    }
  }, "\uC218\uC815"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
    title: '정말 삭제하시겠습니까?',
    onConfirm: onDeleteLolPost,
    okText: "\uC0AD\uC81C",
    cancelText: "\uCDE8\uC18C",
    okButtonProps: {
      loading: deleteLolPostLoading
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
          lineNumber: 57,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.nickname,
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }));
};

_s(DetailPost, "PMLShcd/nQ6jfytX9npUgzM+ciI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwiZGV0YWlsTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJjb21tZW50IiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xvc2UiLCJkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIiwiZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJvbkRlbGV0ZUxvbFBvc3QiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ1c2VyVG9rZW4iLCJ1c2VySWQiLCJwb3N0SWQiLCJpZCIsImRlbGV0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwid2lkdGgiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJ0aXRsZSIsImNvbnRlbnQiLCJsb2FkaW5nIiwibGVuZ3RoIiwiaXRlbSIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVg7S0FBTUYsSzs7QUFJTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEscUJBRU5DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkw7QUFBQSxNQUViQyxFQUZhLGdCQUViQSxFQUZhOztBQUFBLHNCQUc4Q0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIekQ7QUFBQSxNQUdiQyxhQUhhLGlCQUdiQSxhQUhhO0FBQUEsTUFHRUMsb0JBSEYsaUJBR0VBLG9CQUhGO0FBQUEsTUFHd0JDLGlCQUh4QixpQkFHd0JBLGlCQUh4Qjs7QUFBQSxzQkFLcUJQLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ08sT0FBakI7QUFBQSxHQUFELENBTGhDO0FBQUEsTUFLYkMsUUFMYSxpQkFLYkEsUUFMYTtBQUFBLE1BS0hDLG1CQUxHLGlCQUtIQSxtQkFMRzs7QUFNckIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCRixZQUFRLENBQUNHLDZFQUFzQixFQUF2QixDQUFSO0FBQ0FILFlBQVEsQ0FBQ0ksb0ZBQTBCLEVBQTNCLENBQVI7QUFDSCxHQUhEOztBQUtBLE1BQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDLFFBQU1DLElBQUksR0FBRztBQUFFQyxlQUFTLEVBQUVoQixFQUFFLENBQUNnQixTQUFoQjtBQUEyQkMsWUFBTSxFQUFFakIsRUFBRSxDQUFDaUIsTUFBdEM7QUFBOENDLFlBQU0sRUFBRWhCLGFBQWEsQ0FBQ2lCO0FBQXBFLEtBQWI7QUFDQVgsWUFBUSxDQUFDWSxpRkFBMEIsQ0FBQ0wsSUFBRCxDQUEzQixDQUFSO0FBQ0gsR0FIa0MsRUFHaEMsRUFIZ0MsQ0FBbkM7QUFNQSxTQUNJLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRTtBQUFFTSxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUFrQyxXQUFPLEVBQUVYLE9BQTNDO0FBQW9ELFFBQUksRUFBQyxTQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBSyxTQUFLLEVBQUU7QUFBRWEsY0FBUSxFQUFFO0FBQVosS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCckIsYUFBYSxDQUFDc0IsS0FBN0MsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXRCLGFBQWEsQ0FBQ3VCLE9BQXBCLENBSEosRUFJS3pCLEVBQUUsQ0FBQ2lCLE1BQUgsS0FBY2YsYUFBYSxDQUFDZSxNQUE1QixJQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF6QixDQURKLENBREQsRUFLQyxNQUFDLCtDQUFEO0FBQVksU0FBSyxFQUFFLGNBQW5CO0FBQW1DLGFBQVMsRUFBRUosZUFBOUM7QUFBK0QsVUFBTSxFQUFDLGNBQXRFO0FBQTJFLGNBQVUsRUFBQyxjQUF0RjtBQUEyRixpQkFBYSxFQUFFO0FBQUVhLGFBQU8sRUFBRXZCO0FBQVgsS0FBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBTFgsRUFhSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWNJLE1BQUMseUNBQUQ7QUFDSSxXQUFPLEVBQUVJLG1CQURiO0FBRUksVUFBTSxZQUFLRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ3FCLE1BQVosR0FBcUIsQ0FBbEMsOEJBRlY7QUFHSSxjQUFVLEVBQUMsWUFIZjtBQUlJLGNBQVUsRUFBRXJCLFFBSmhCO0FBS0ksY0FBVSxFQUFFLG9CQUFDc0IsSUFBRDtBQUFBLGFBQ1IsbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNENBQUQ7QUFDSSxjQUFNLEVBQUVBLElBQUksQ0FBQ0MsUUFEakI7QUFFSSxlQUFPLEVBQUVELElBQUksQ0FBQ0gsT0FGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosQ0FEUTtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixDQURKO0FBbUNILENBdEREOztHQUFNN0IsVTtVQUVhQyx1RCxFQUNvREEsdUQsRUFFekJBLHVELEVBQ3pCWSx1RDs7O01BTmZiLFU7QUF3RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlYWRiZjA0N2EwYmY2MGUyYmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBDb21tZW50LCBQb3BvdmVyLCBQb3Bjb25maXJtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiwgZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jb21tZW50JztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAnO1xyXG5cclxuXHJcbmNvbnN0IEZyYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBEZXRhaWxQb3N0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IGRldGFpbExvbFBvc3QsIGRlbGV0ZUxvbFBvc3RMb2FkaW5nLCBkZWxldGVMb2xQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICBjb25zdCB7IGNvbW1lbnRzLCBsb2FkQ29tbWVudHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1lbnQpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZGV0YWlsTG9sUG9zdE9mZkFjdGlvbigpKTtcclxuICAgICAgICBkaXNwYXRjaChlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZUxvbFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlclRva2VuOiBtZS51c2VyVG9rZW4sIHVzZXJJZDogbWUudXNlcklkLCBwb3N0SWQ6IGRldGFpbExvbFBvc3QuaWQgfTtcclxuICAgICAgICBkaXNwYXRjaChkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbihkYXRhKSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhbWUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gb25DbGljaz17b25DbG9zZX0gdHlwZT1cInByaW1hcnlcIj7ri6vquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+e2RldGFpbExvbFBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2RldGFpbExvbFBvc3QuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAge21lLnVzZXJJZCA9PT0gZGV0YWlsTG9sUG9zdC51c2VySWRcclxuICAgICAgICAgICAgICAgICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvbF91cGRhdGUnPjxhPuyImOyglTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtIHRpdGxlPXsn7KCV66eQIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD8nfSBvbkNvbmZpcm09e29uRGVsZXRlTG9sUG9zdH0gb2tUZXh0PVwi7IKt7KCcXCIgY2FuY2VsVGV4dD1cIuy3qOyGjFwiIG9rQnV0dG9uUHJvcHM9e3sgbG9hZGluZzogZGVsZXRlTG9sUG9zdExvYWRpbmcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRDb21tZW50c0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake2NvbW1lbnRzID8gY29tbWVudHMubGVuZ3RoIDogMH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRnJhbWU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9