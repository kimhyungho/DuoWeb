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
  }, "\uBAA8\uC9D1 \uD3EC\uC9C0\uC158"), detailLolPost.top, " ", detailLolPost.jungle, " ", detailLolPost.mid, " ", detailLolPost.bottom, " ", detailLolPost.support, __jsx("br", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWxQb3N0LmpzIl0sIm5hbWVzIjpbIkZyYW1lIiwic3R5bGVkIiwiZGl2IiwiRGV0YWlsUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwiZGV0YWlsTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJjb21tZW50IiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xvc2UiLCJkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uIiwiZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24iLCJvblVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiUm91dGVyIiwicHVzaCIsIm9uRGVsZXRlTG9sUG9zdCIsImRhdGEiLCJ1c2VyVG9rZW4iLCJ1c2VySWQiLCJwb3N0SWQiLCJpZCIsImRlbGV0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlVGllciIsInRpZXIiLCJ3aWR0aCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImNvbG9yIiwibmlja25hbWUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0aXRsZSIsIm1hcmdpblRvcCIsImdhbWVNb2RlIiwiaGVhZENvdW50Iiwic3RhcnRUaWVyIiwiZW5kVGllciIsInRvcCIsImp1bmdsZSIsIm1pZCIsImJvdHRvbSIsInN1cHBvcnQiLCJ0YWxrb24iLCJtYXJnaW5Cb3R0b20iLCJjb250ZW50IiwibG9hZGluZyIsImxlbmd0aCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtL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dUQsRUFDb0RBLHVELEVBRXpCQSx1RCxFQUN6QlksdUQ7OztNQU5mYixVO0FBaUxTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjUyMGE2MTQwN2NlNjY4YTBhZGZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgQ29tbWVudCwgUG9wb3ZlciwgUG9wY29uZmlybSwgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiwgZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy9jb21tZW50JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnYW50ZC9saWIvYXZhdGFyL2F2YXRhcic7XHJcblxyXG5cclxuY29uc3QgRnJhbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuYDtcclxuXHJcbmNvbnN0IERldGFpbFBvc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHsgZGV0YWlsTG9sUG9zdCwgZGVsZXRlTG9sUG9zdExvYWRpbmcsIGRlbGV0ZUxvbFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIGNvbnN0IHsgY29tbWVudHMsIGxvYWRDb21tZW50c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbWVudCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9sX3VwZGF0ZScpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25EZWxldGVMb2xQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJUb2tlbjogbWUudXNlclRva2VuLCB1c2VySWQ6IG1lLnVzZXJJZCwgcG9zdElkOiBkZXRhaWxMb2xQb3N0LmlkIH07XHJcbiAgICAgICAgZGlzcGF0Y2goZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24oZGF0YSkpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRpZXIgPSAodGllcikgPT4ge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRpZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7IOB6rSA7JeG7J2MXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLslYTsnbTslrg0XCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLslYTsnbTslrgzXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLslYTsnbTslrgyXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLslYTsnbTslrgxXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi67iM66Gg7KaINFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuu4jOuhoOymiDNcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLruIzroaDspogyXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi67iM66Gg7KaIMVwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyLpOuyhDRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLsi6TrsoQzXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI4OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7Iuk67KEMlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuyLpOuyhDFcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLqs6jrk5w0XCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi6rOo65OcM1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuqzqOuTnDJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLqs6jrk5wxXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ2OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7ZSM66CI7Yuw64SYNFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0NzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIu2UjOugiO2LsOuEmDNcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLtlIzroIjti7DrhJgyXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7ZSM66CI7Yuw64SYMVwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1NjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuuLpOydtOyVhDRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLri6TsnbTslYQzXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU4OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi64uk7J207JWEMlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIuuLpOydtOyVhDFcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLrp4jsiqTthLBcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLqt7jrnpzrk5zrp4jsiqTthLBcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCLssYzrprDsoIBcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi7IOB6rSA7JeG7J2MXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiBcIiNGQTVBNUFcIiwgYm9yZGVyQ29sb3I6IFwiI0ZGRkZGRlwiIH19IG9uQ2xpY2s9e29uQ2xvc2V9IHR5cGU9XCJwcmltYXJ5XCI+64ur6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHN0eWxlPXt7IGNvbG9yOiAnIzAwMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnIH19PntkZXRhaWxMb2xQb3N0Lm5pY2tuYW1lWzBdfTwvQXZhdGFyPiA8dGV4dCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2RldGFpbExvbFBvc3Qubmlja25hbWV9PC90ZXh0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogJ2JvbGQnIH19PntkZXRhaWxMb2xQb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8VGFnIHN0eWxlPXt7IG1hcmdpblRvcDogMyB9fSBjb2xvcj1cImdyYXlcIj7qsozsnoQg66qo65OcPC9UYWc+XHJcbiAgICAgICAgICAgIHtkZXRhaWxMb2xQb3N0LmdhbWVNb2RlfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRhZyBzdHlsZT17eyBtYXJnaW5Ub3A6IDMgfX0gY29sb3I9XCJncmF5XCI+66qo7KeRIOyduOybkDwvVGFnPlxyXG4gICAgICAgICAgICB7ZGV0YWlsTG9sUG9zdC5oZWFkQ291bnR966qFXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRhZyBzdHlsZT17eyBtYXJnaW5Ub3A6IDMgfX0gY29sb3I9XCJncmF5XCI+66qo7KeRIO2LsOyWtDwvVGFnPlxyXG4gICAgICAgICAgICB7Y2hhbmdlVGllcihkZXRhaWxMb2xQb3N0LnN0YXJ0VGllcil9fntjaGFuZ2VUaWVyKGRldGFpbExvbFBvc3QuZW5kVGllcil9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8VGFnIHN0eWxlPXt7IG1hcmdpblRvcDogMyB9fSBjb2xvcj1cImdyYXlcIj7rqqjsp5Eg7Y+s7KeA7IWYPC9UYWc+XHJcbiAgICAgICAgICAgIHtkZXRhaWxMb2xQb3N0LnRvcH0ge2RldGFpbExvbFBvc3QuanVuZ2xlfSB7ZGV0YWlsTG9sUG9zdC5taWR9IHtkZXRhaWxMb2xQb3N0LmJvdHRvbX0ge2RldGFpbExvbFBvc3Quc3VwcG9ydH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUYWcgc3R5bGU9e3sgbWFyZ2luVG9wOiAzIH19IGNvbG9yPVwiZ3JheVwiPuuniOydtO2BrCDsl6zrtoA8L1RhZz5cclxuICAgICAgICAgICAge2RldGFpbExvbFBvc3QudGFsa29ufVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PntkZXRhaWxMb2xQb3N0LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIHttZS51c2VySWQgPT09IGRldGFpbExvbFBvc3QudXNlcklkXHJcbiAgICAgICAgICAgICAgICAmJiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtIHRpdGxlPXsn7KCV66eQIOyImOygle2VmOyLnOqyoOyKteuLiOq5jD8nfSBvbkNvbmZpcm09e29uVXBkYXRlfSBva1RleHQ9XCLsiJjsoJVcIiBjYW5jZWxUZXh0PVwi7Leo7IaMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+7IiY7KCVPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybSB0aXRsZT17J+ygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/J30gb25Db25maXJtPXtvbkRlbGV0ZUxvbFBvc3R9IG9rVGV4dD1cIuyCreygnFwiIGNhbmNlbFRleHQ9XCLst6jshoxcIiBva0J1dHRvblByb3BzPXt7IGxvYWRpbmc6IGRlbGV0ZUxvbFBvc3RMb2FkaW5nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHN0eWxlPXt7IGNvbG9yOiAnI0ZBNUE1QScgfX0+7IKt7KCcPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkQ29tbWVudHNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtjb21tZW50cyA/IGNvbW1lbnRzLmxlbmd0aCA6IDB96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjb21tZW50c31cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0ubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3R5bGU9e3sgY29sb3I6ICcjMDAwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicgfX0+e2l0ZW0ubmlja25hbWVbMF19PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9GcmFtZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=