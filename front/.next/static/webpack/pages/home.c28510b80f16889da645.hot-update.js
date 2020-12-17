webpackHotUpdate_N_E("pages/home",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/avatar/avatar */ "./node_modules/antd/lib/avatar/avatar.js");
/* harmony import */ var antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_9__);


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
      detailLolPost = _useSelector2.detailLolPost,
      deleteLolPostLoading = _useSelector2.deleteLolPostLoading,
      deleteLolPostDone = _useSelector2.deleteLolPostDone;

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

  var onUpdate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/lol_update');
  }, []);
  var onDeleteLolPost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var data = {
      userToken: me.userToken,
      userId: me.userId,
      postId: detailLolPost.id
    };
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["deleteLolPostRequestAction"])(data));
  }, []);

  var changeTier = function changeTier(tier) {
    switch (tier) {
      case 1:
        return "상관없음";
        break;

      case 6:
        return "아이언4";
        break;

      case 7:
        return "아이언3";
        break;

      case 8:
        return "아이언2";
        break;

      case 9:
        return "아이언1";
        break;

      case 16:
        return "브론즈4";
        break;

      case 17:
        return "브론즈3";
        break;

      case 18:
        return "브론즈2";
        break;

      case 19:
        return "브론즈1";
        break;

      case 26:
        return "실버4";
        break;

      case 27:
        return "실버3";
        break;

      case 28:
        return "실버2";
        break;

      case 29:
        return "실버1";
        break;

      case 36:
        return "골드4";
        break;

      case 37:
        return "골드3";
        break;

      case 38:
        return "골드2";
        break;

      case 39:
        return "골드1";
        break;

      case 46:
        return "플레티넘4";
        break;

      case 47:
        return "플레티넘3";
        break;

      case 48:
        return "플레티넘2";
        break;

      case 49:
        return "플레티넘1";
        break;

      case 56:
        return "다이아4";
        break;

      case 57:
        return "다이아3";
        break;

      case 58:
        return "다이아2";
        break;

      case 59:
        return "다이아1";
        break;

      case 70:
        return "마스터";
        break;

      case 80:
        return "그랜드마스터";
        break;

      case 90:
        return "챌린저";
        break;

      case 100:
        return "상관없음";
        break;
    }
  };

  return __jsx(Frame, {
    style: {
      width: '100%',
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      width: '100%',
      backgroundColor: "#FA5A5A",
      borderColor: "#FFFFFF"
    },
    onClick: onClose,
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "\uB2EB\uAE30"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: '#000000',
      backgroundColor: '#FFFFFF'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, detailLolPost.nickname[0]), " ", __jsx("text", {
    style: {
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 115
    }
  }, detailLolPost.nickname), __jsx("div", {
    style: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, detailLolPost.title), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      marginTop: 3
    },
    color: "gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "\uAC8C\uC784 \uBAA8\uB4DC"), detailLolPost.gameMode, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      marginTop: 3
    },
    color: "gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "\uBAA8\uC9D1 \uC778\uC6D0"), detailLolPost.headCount, "\uBA85", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      marginTop: 3
    },
    color: "gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "\uBAA8\uC9D1 \uD2F0\uC5B4"), changeTier(detailLolPost.startTier), "~", changeTier(detailLolPost.endTier), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      marginTop: 3
    },
    color: "gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "\uBAA8\uC9D1 \uD3EC\uC9C0\uC158"), "if(", detailLolPost.top, "==1)", "탑", " ", detailLolPost.jungle, " ", detailLolPost.mid, " ", detailLolPost.bottom, " ", detailLolPost.support, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      marginTop: 3
    },
    color: "gray",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, "\uB9C8\uC774\uD06C \uC5EC\uBD80"), detailLolPost.talkon, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginBottom: 30
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, detailLolPost.content), me.userId === detailLolPost.userId && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 20
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
    title: '정말 수정하시겠습니까?',
    onConfirm: onUpdate,
    okText: "\uC218\uC815",
    cancelText: "\uCDE8\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, "\uC218\uC815")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
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
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    style: {
      color: '#FA5A5A'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, "\uC0AD\uC81C"))), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
          lineNumber: 174,
          columnNumber: 25
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
        author: item.nickname,
        content: item.content,
        avatar: __jsx(antd_lib_avatar_avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
          style: {
            color: '#000000',
            backgroundColor: '#FFFFFF'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 37
          }
        }, item.nickname[0]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 29
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }));
};

_s(DetailPost, "1I5PGlZCNWhun5RXe/ZF+MJZTQU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwiZGV0YWlsTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJjb21tZW50IiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xvc2UiLCJkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIiwiZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJvblVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsIm9uRGVsZXRlTG9sUG9zdCIsImRhdGEiLCJ1c2VyVG9rZW4iLCJ1c2VySWQiLCJwb3N0SWQiLCJpZCIsImRlbGV0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlVGllciIsInRpZXIiLCJ3aWR0aCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImNvbG9yIiwibmlja25hbWUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0aXRsZSIsIm1hcmdpblRvcCIsImdhbWVNb2RlIiwiaGVhZENvdW50Iiwic3RhcnRUaWVyIiwiZW5kVGllciIsInRvcCIsImp1bmdsZSIsIm1pZCIsImJvdHRvbSIsInN1cHBvcnQiLCJ0YWxrb24iLCJtYXJnaW5Cb3R0b20iLCJjb250ZW50IiwibG9hZGluZyIsImxlbmd0aCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtL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QUFNbkMsVTtVQUVhQyx1RCxFQUNvREEsdUQsRUFFekJBLHVELEVBQ3pCWSx1RDs7O01BTmZiLFU7QUFpTFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuYzI4NTEwYjgwZjE2ODg5ZGE2NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBDb21tZW50LCBQb3BvdmVyLCBQb3Bjb25maXJtLCBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uLCBkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL2NvbW1lbnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdhbnRkL2xpYi9hdmF0YXIvYXZhdGFyJztcclxuXHJcblxyXG5jb25zdCBGcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGV0YWlsUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBkZXRhaWxMb2xQb3N0LCBkZWxldGVMb2xQb3N0TG9hZGluZywgZGVsZXRlTG9sUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgY29uc3QgeyBjb21tZW50cywgbG9hZENvbW1lbnRzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tZW50KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGRldGFpbExvbFBvc3RPZmZBY3Rpb24oKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2xfdXBkYXRlJylcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkRlbGV0ZUxvbFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgdXNlclRva2VuOiBtZS51c2VyVG9rZW4sIHVzZXJJZDogbWUudXNlcklkLCBwb3N0SWQ6IGRldGFpbExvbFBvc3QuaWQgfTtcclxuICAgICAgICBkaXNwYXRjaChkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbihkYXRhKSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGllciA9ICh0aWVyKSA9PiB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGllcikge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLsg4HqtIDsl4bsnYxcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyVhOydtOyWuDRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyVhOydtOyWuDNcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyVhOydtOyWuDJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyVhOydtOyWuDFcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLruIzroaDspog0XCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE3OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi67iM66Gg7KaIM1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuu4jOuhoOymiDJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLruIzroaDspogxXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI2OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7Iuk67KENFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyLpOuyhDNcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLsi6TrsoQyXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7Iuk67KEMVwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzNjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuqzqOuTnDRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLqs6jrk5wzXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi6rOo65OcMlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuqzqOuTnDFcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLtlIzroIjti7DrhJg0XCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ3OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7ZSM66CI7Yuw64SYM1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0ODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIu2UjOugiO2LsOuEmDJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLtlIzroIjti7DrhJgxXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU2OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi64uk7J207JWENFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1NzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuuLpOydtOyVhDNcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLri6TsnbTslYQyXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi64uk7J207JWEMVwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuuniOyKpO2EsFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuq3uOuenOuTnOuniOyKpO2EsFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5MDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyxjOumsOyggFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLsg4HqtIDsl4bsnYxcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZBNUE1QVwiLCBib3JkZXJDb2xvcjogXCIjRkZGRkZGXCIgfX0gb25DbGljaz17b25DbG9zZX0gdHlwZT1cInByaW1hcnlcIj7ri6vquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3R5bGU9e3sgY29sb3I6ICcjMDAwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicgfX0+e2RldGFpbExvbFBvc3Qubmlja25hbWVbMF19PC9BdmF0YXI+IDx0ZXh0IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57ZGV0YWlsTG9sUG9zdC5uaWNrbmFtZX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2RldGFpbExvbFBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxUYWcgc3R5bGU9e3sgbWFyZ2luVG9wOiAzIH19IGNvbG9yPVwiZ3JheVwiPuqyjOyehCDrqqjrk5w8L1RhZz5cclxuICAgICAgICAgICAge2RldGFpbExvbFBvc3QuZ2FtZU1vZGV9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8VGFnIHN0eWxlPXt7IG1hcmdpblRvcDogMyB9fSBjb2xvcj1cImdyYXlcIj7rqqjsp5Eg7J247JuQPC9UYWc+XHJcbiAgICAgICAgICAgIHtkZXRhaWxMb2xQb3N0LmhlYWRDb3VudH3rqoVcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGFnIHN0eWxlPXt7IG1hcmdpblRvcDogMyB9fSBjb2xvcj1cImdyYXlcIj7rqqjsp5Eg7Yuw7Ja0PC9UYWc+XHJcbiAgICAgICAgICAgIHtjaGFuZ2VUaWVyKGRldGFpbExvbFBvc3Quc3RhcnRUaWVyKX1+e2NoYW5nZVRpZXIoZGV0YWlsTG9sUG9zdC5lbmRUaWVyKX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUYWcgc3R5bGU9e3sgbWFyZ2luVG9wOiAzIH19IGNvbG9yPVwiZ3JheVwiPuuqqOynkSDtj6zsp4DshZg8L1RhZz5cclxuICAgICAgICAgICAgaWYoe2RldGFpbExvbFBvc3QudG9wfT09MSl7XCLtg5FcIn0ge2RldGFpbExvbFBvc3QuanVuZ2xlfSB7ZGV0YWlsTG9sUG9zdC5taWR9IHtkZXRhaWxMb2xQb3N0LmJvdHRvbX0ge2RldGFpbExvbFBvc3Quc3VwcG9ydH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUYWcgc3R5bGU9e3sgbWFyZ2luVG9wOiAzIH19IGNvbG9yPVwiZ3JheVwiPuuniOydtO2BrCDsl6zrtoA8L1RhZz5cclxuICAgICAgICAgICAge2RldGFpbExvbFBvc3QudGFsa29ufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PntkZXRhaWxMb2xQb3N0LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIHttZS51c2VySWQgPT09IGRldGFpbExvbFBvc3QudXNlcklkXHJcbiAgICAgICAgICAgICAgICAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtIHRpdGxlPXsn7KCV66eQIOyImOygle2VmOyLnOqyoOyKteuLiOq5jD8nfSBvbkNvbmZpcm09e29uVXBkYXRlfSBva1RleHQ9XCLsiJjsoJVcIiBjYW5jZWxUZXh0PVwi7Leo7IaMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+7IiY7KCVPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSB0aXRsZT17J+ygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/J30gb25Db25maXJtPXtvbkRlbGV0ZUxvbFBvc3R9IG9rVGV4dD1cIuyCreygnFwiIGNhbmNlbFRleHQ9XCLst6jshoxcIiBva0J1dHRvblByb3BzPXt7IGxvYWRpbmc6IGRlbGV0ZUxvbFBvc3RMb2FkaW5nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHN0eWxlPXt7IGNvbG9yOiAnI0ZBNUE1QScgfX0+7IKt7KCcPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkQ29tbWVudHNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtjb21tZW50cyA/IGNvbW1lbnRzLmxlbmd0aCA6IDB96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3R5bGU9e3sgY29sb3I6ICcjMDAwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicgfX0+e2l0ZW0ubmlja25hbWVbMF19PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9GcmFtZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=