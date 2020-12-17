module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\k\\Desktop\\DUO\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Duo9ham")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(App))); // next에서 provider를 안써도 되는 이유

/***/ }),

/***/ "./reducers/comment.js":
/*!*****************************!*\
  !*** ./reducers/comment.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, EMPTY_COMMENTS_REQUEST, loadCommentsRequestAction, addCommentRequestAction, removeCommentRequestAction, emptyCommentsRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_REQUEST", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_SUCCESS", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_FAILURE", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_COMMENTS_REQUEST", function() { return EMPTY_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommentsRequestAction", function() { return loadCommentsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCommentRequestAction", function() { return removeCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCommentsRequestAction", function() { return emptyCommentsRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null
};
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const REMOVE_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const EMPTY_COMMENTS_REQUEST = 'EMPTY_COMMENTS_REQUEST';
const loadCommentsRequestAction = data => ({
  type: LOAD_COMMENTS_REQUEST,
  data
});
const addCommentRequestAction = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const removeCommentRequestAction = data => ({
  type: REMOVE_COMMENT_REQUEST,
  data
});
const emptyCommentsRequestAction = () => ({
  type: EMPTY_COMMENTS_REQUEST
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case LOAD_COMMENTS_REQUEST:
      draft.loadCommentsLoading = true;
      draft.loadCommentsDone = false;
      draft.loadCommentsError = null;
      break;

    case LOAD_COMMENTS_SUCCESS:
      draft.loadCommentsLoading = false;
      draft.loadCommentsDone = true;
      draft.comments = action.data;
      break;

    case LOAD_COMMENTS_FAILURE:
      draft.loadCommentsLoading = false;
      draft.loadCommentsError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.loadCommentsError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case REMOVE_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.loadCommentsError = null;
      break;

    case REMOVE_COMMENT_SUCCESS:
      draft.removeCommentLoading = false;
      draft.removeCommentDone = true;
      break;

    case REMOVE_COMMENT_FAILURE:
      draft.removeCommentLoading = false;
      draft.removeCommentError = action.error;
      break;

    case EMPTY_COMMENTS_REQUEST:
      draft.comments = [];
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./reducers/comment.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"],
  comment: _comment__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DELETE_LOL_POST_REQUEST, DELETE_LOL_POST_SUCCESS, DELETE_LOL_POST_FAILURE, UPDATE_LOL_POST_REQUEST, UPDATE_LOL_POST_SUCCESS, UPDATE_LOL_POST_FAILURE, FILTER_LOL_POST_REQUEST, FILTER_LOL_POST_SUCCESS, FILTER_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, addLolPostRequestAction, deleteLolPostRequestAction, updateLolPostRequestAction, filterLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_REQUEST", function() { return LOAD_ALL_LOL_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_SUCCESS", function() { return LOAD_ALL_LOL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_FAILURE", function() { return LOAD_ALL_LOL_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_REQUEST", function() { return ADD_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_SUCCESS", function() { return ADD_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LOL_POST_FAILURE", function() { return ADD_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_REQUEST", function() { return DELETE_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_SUCCESS", function() { return DELETE_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_LOL_POST_FAILURE", function() { return DELETE_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOL_POST_REQUEST", function() { return UPDATE_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOL_POST_SUCCESS", function() { return UPDATE_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOL_POST_FAILURE", function() { return UPDATE_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LOL_POST_REQUEST", function() { return FILTER_LOL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LOL_POST_SUCCESS", function() { return FILTER_LOL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LOL_POST_FAILURE", function() { return FILTER_LOL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_ON", function() { return DETAIL_LOL_POST_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_OFF", function() { return DETAIL_LOL_POST_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLolPostRequestAction", function() { return addLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLolPostRequestAction", function() { return deleteLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLolPostRequestAction", function() { return updateLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLolPostRequestAction", function() { return filterLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailLolPostOnAction", function() { return detailLolPostOnAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailLolPostOffAction", function() { return detailLolPostOffAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  posts: [],
  myLolPosts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addLolPostLoading: false,
  addLolPostDone: false,
  addLolPostError: null,
  deleteLolPostLoading: false,
  deleteLolPostDone: false,
  deleteLolPostError: null,
  updateLolPostLoading: false,
  updateLolPostDone: false,
  updateLolPostError: null,
  filterLolPostLoading: false,
  filterLolPostDone: false,
  filterLolPostError: null,
  detailLolPostOn: false,
  detailLolPost: null
};
const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';
const ADD_LOL_POST_REQUEST = 'ADD_LOL_POST_REQUEST';
const ADD_LOL_POST_SUCCESS = 'ADD_LOL_POST_SUCCESS';
const ADD_LOL_POST_FAILURE = 'ADD_LOL_POST_FAILURE';
const DELETE_LOL_POST_REQUEST = 'DELETE_LOL_POST_REQUEST';
const DELETE_LOL_POST_SUCCESS = 'DELETE_LOL_POST_SUCCESS';
const DELETE_LOL_POST_FAILURE = 'DELETE_LOL_POST_FAILURE';
const UPDATE_LOL_POST_REQUEST = 'UPDATE_LOL_POST_REQUEST';
const UPDATE_LOL_POST_SUCCESS = 'UPDATE_LOL_POST_SUCCESS';
const UPDATE_LOL_POST_FAILURE = 'UPDATE_LOL_POST_FAILURE';
const FILTER_LOL_POST_REQUEST = 'FILTER_LOL_POST_REQUEST';
const FILTER_LOL_POST_SUCCESS = 'FILTER_LOL_POST_SUCCESS';
const FILTER_LOL_POST_FAILURE = 'FILTER_LOL_POST_FAILURE';
const DETAIL_LOL_POST_ON = 'DETAIL_LOL_POST_ON';
const DETAIL_LOL_POST_OFF = 'DETAIL_LOL_POST_OFF';
const loadAllLolPostsRequestAction = data => ({
  type: LOAD_ALL_LOL_POSTS_REQUEST,
  data
});
const addLolPostRequestAction = data => ({
  type: ADD_LOL_POST_REQUEST,
  data
});
const deleteLolPostRequestAction = data => ({
  type: DELETE_LOL_POST_REQUEST,
  data
});
const updateLolPostRequestAction = data => ({
  type: UPDATE_LOL_POST_REQUEST,
  data
});
const filterLolPostRequestAction = data => ({
  type: FILTER_LOL_POST_REQUEST,
  data
});
const detailLolPostOnAction = data => ({
  type: DETAIL_LOL_POST_ON,
  data
});
const detailLolPostOffAction = () => ({
  type: DETAIL_LOL_POST_OFF
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case LOAD_ALL_LOL_POSTS_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_ALL_LOL_POSTS_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.posts = action.data;
      break;

    case LOAD_ALL_LOL_POSTS_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case ADD_LOL_POST_REQUEST:
      draft.addLolPostLoading = true;
      draft.addLolPostDone = false;
      draft.addLolPostError = null;
      break;

    case ADD_LOL_POST_SUCCESS:
      draft.addLolPostLoading = false;
      draft.addLolPostDone = true;
      break;

    case ADD_LOL_POST_FAILURE:
      draft.addLolPostLoading = false;
      draft.addLolPostError = action.error;
      break;

    case DELETE_LOL_POST_REQUEST:
      draft.deleteLolPostLoading = true;
      draft.deleteLolPostDone = false;
      draft.deleteLolPostError = null;
      break;

    case DELETE_LOL_POST_SUCCESS:
      draft.detailLolPostOn = false;
      draft.deleteLolPostLoading = false;
      draft.deleteLolPostDone = true;
      break;

    case DELETE_LOL_POST_FAILURE:
      draft.deleteLolPostLoading = false;
      draft.deleteLolPostError = action.error;
      break;

    case UPDATE_LOL_POST_REQUEST:
      draft.updateLolPostLoading = true;
      draft.updateLolPostDone = false;
      draft.updateLolPostError = null;
      break;

    case UPDATE_LOL_POST_SUCCESS:
      draft.updateLolPostLoading = false;
      draft.updateLolPostDone = true;
      draft.detailLolPost.top = action.data2.top;
      draft.detailLolPost.jungle = action.data2.jungle;
      draft.detailLolPost.mid = action.data2.mid;
      draft.detailLolPost.bottom = action.data2.bottom;
      draft.detailLolPost.support = action.data2.support;
      draft.detailLolPost.endTime = action.data2.endTime;
      draft.detailLolPost.headCount = action.data2.headCount;
      draft.detailLolPost.gameMode = action.data2.gameMode;
      draft.detailLolPost.title = action.data2.title;
      draft.detailLolPost.content = action.data2.content;
      draft.detailLolPost.talkOn = action.data2.talkOn;
      break;

    case UPDATE_LOL_POST_FAILURE:
      draft.updateLolPostLoading = false;
      draft.updateLolPostError = action.error;
      break;

    case FILTER_LOL_POST_REQUEST:
      draft.filterLolPostLoading = true;
      draft.filterLolPostDone = false;
      draft.filterLolPostError = null;
      break;

    case FILTER_LOL_POST_SUCCESS:
      draft.filterLolPostLoading = false;
      draft.filterLolPostDone = true;
      draft.posts = action.data;
      break;

    case FILTER_LOL_POST_FAILURE:
      draft.filterLolPostLoading = false;
      draft.filterLolPostError = action.error;
      break;

    case DETAIL_LOL_POST_ON:
      draft.detailLolPostOn = true;
      draft.detailLolPost = action.data;
      break;

    case DETAIL_LOL_POST_OFF:
      draft.detailLolPostOn = false;
      draft.detailLolPost = null;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, loginRequestAction, logoutRequestAction, signUpRequestAction, signOutRequestAction, changeNicknameRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_REQUEST", function() { return SIGN_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return SIGN_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_FAILURE", function() { return SIGN_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequestAction", function() { return signUpRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutRequestAction", function() { return signOutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNicknameRequestAction", function() { return changeNicknameRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logInError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  signOutLoading: false,
  signOutDone: false,
  signOutError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: {
    userId: null,
    nickname: null,
    userToken: null,
    accessToken: null,
    platform: null
  }
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
const signUpRequestAction = data => ({
  type: SIGN_UP_REQUEST,
  data
});
const signOutRequestAction = data => ({
  type: SIGN_OUT_REQUEST,
  data
});
const changeNicknameRequestAction = data => ({
  type: CHANGE_NICKNAME_REQUEST,
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      draft.me.accessToken = action.data.accessToken;
      draft.me.platform = action.data.platform;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInError = null;
      draft.logInDone = true;
      draft.me.userId = action.data.userId;
      draft.me.nickname = action.data.nickname;
      draft.me.userToken = action.data.userToken;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logInDone = false;
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me.userId = null;
      draft.me.nickname = null;
      draft.me.userToken = null;
      draft.me.accessToken = null;
      draft.me.platform = null;
      break;

    case SIGN_UP_REQUEST:
      draft.me.userId = action.data.userId;
      draft.me.nickname = action.data.nickname;
      draft.me.userToken = action.data.userToken;
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.logInError = null;
      draft.signUpLoading = false;
      draft.signUpDone = true;
      draft.logInDone = true;
      draft.me.userId = action.data.userId;
      draft.me.nickname = action.data.nickname;
      draft.me.userToken = action.data.userToken;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case SIGN_OUT_REQUEST:
      draft.signOutLoading = true;
      draft.signOutError = null;
      draft.signOutDone = false;
      break;

    case SIGN_OUT_SUCCESS:
      draft.signOutLoading = false;
      draft.signOutDone = true;
      break;

    case SIGN_OUT_FAILURE:
      draft.signOutLoading = false;
      draft.signOutError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      draft.me.nickname = action.data.nickname;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/comment.js":
/*!**************************!*\
  !*** ./sagas/comment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return commentSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/comment */ "./reducers/comment.js");




function loadCommentsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol?postId=${data.postId}`, {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function* loadComments(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadCommentsAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol`, {
    content: data.content,
    userId: data.userId,
    postId: data.postId,
    nickname: data.nickname
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"]
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function removeCommentAPI(data2) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol`, {
    headers: {
      Authorization: data2.userToken
    },
    data: {
      commentId: data2.commentId,
      userId: data2.userId
    }
  });
}

;

function* removeComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeCommentAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"]
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_comment__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadComments() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_comment__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_REQUEST"], loadComments);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_comment__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemoveComent() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_comment__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);
}

function* commentSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadComments), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveComent)]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./sagas/comment.js");
 // redux-saga 는 비동기 action을 수행
// fork는 비동기 함수 호출, call은 동기 함수 호출, all은 동시 실행,
// takeEvery는 무한루프 take는 한번 실행하면 사라짐, takeLatest는 마지막 요청만 응답
// throttle nms 동안 한번만 요청 함




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// root 사가 만들고 만들고 싶은 비동기 액션 넣어줌
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_comment__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




function loadAllLolPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol?limit=${data.limit}&offset=${data.offset}`, {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function* loadAllLolPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadAllLolPostsAPI, action.data);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_LOL_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_LOL_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`, {
    userNickname: data.userNickname,
    userId: data.userId,
    gameMode: data.gameMode,
    title: data.title,
    startTier: data.startTier,
    endTier: data.endTier,
    endTime: data.endTime,
    headCount: data.headCount,
    top: data.top,
    bottom: data.bottom,
    mid: data.mid,
    jungle: data.jungle,
    support: data.support,
    content: data.content,
    talkon: data.talkOn
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

function* addLolPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addLolPostAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_LOL_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_LOL_POST_FAILURE"],
      error: err.response
    });
  }
}

function deleteLolPostAPI(data2) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`, {
    headers: {
      Authorization: data2.userToken
    },
    data: {
      postId: data2.postId,
      userId: data2.userId
    }
  });
}

;

function* deleteLolPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deleteLolPostAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_LOL_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_LOL_POST_FAILURE"],
      error: err.response
    });
  }
}

function updateLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`, {
    postId: data.postId,
    userId: data.userId,
    gameMode: data.gameMode,
    title: data.title,
    startTier: data.startTier,
    endTier: data.endTier,
    endTime: data.endTime,
    headCount: data.headCount,
    top: data.top,
    bottom: data.bottom,
    mid: data.mid,
    jungle: data.jungle,
    support: data.support,
    content: data.content,
    talkon: data.talkOn
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

function* updateLolPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updateLolPostAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_LOL_POST_SUCCESS"],
      data: result.data,
      data2: action.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_LOL_POST_FAILURE"],
      error: err.response
    });
  }
}

function filterLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol/filter?gameMode=${data.gameMode}&headCount=${data.headCount}&wantTier=${data.wantTier}&top=${data.top}&bottom=${data.bottom}&mid=${data.mid}&jungle=${data.jungle}&support=${data.support}&talkon=${data.talkOn}&limit=${data.limit}&offset=${data.offset}`, {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

function* filterLolPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(filterLolPostAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["FILTER_LOL_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["FILTER_LOL_POST_FAILURE"],
      error: err.response
    });
  }
}

function* watchLoadAllLolPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_LOL_POSTS_REQUEST"], loadAllLolPosts);
}

function* watchAddLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_LOL_POST_REQUEST"], addLolPost);
}

function* watchDeleteLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_LOL_POST_REQUEST"], deleteLolPost);
}

function* watchUpdateLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_LOL_POST_REQUEST"], updateLolPost);
}

function* watchFilterLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["FILTER_LOL_POST_REQUEST"], filterLolPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFilterLolPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/${data.platform}`, {}, {
    headers: {
      Authorization: data.accessToken
    }
  });
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data.code
    });
  }
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth/${data.platform}`, {
    nickname: data.nickname
  }, {
    headers: {
      Authorization: data.accessToken
    }
  });
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response.data.code);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function signOutAPI(data2) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth', {
    headers: {
      Authorization: data2.userToken
    },
    data: {
      userId: data2.userId
    }
  });
}

function* signOut(action) {
  try {
    console.log(action.data);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signOutAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_OUT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_OUT_FAILURE"],
      error: err.response
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth', {
    userId: data.userId,
    nickname: data.nickname
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchSignOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_OUT_REQUEST"], signOut);
}

function* wathchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignOut), // check error,
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(wathchChangeNickname)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined // 배포용에는 devtool 연동 x
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwibG9hZENvbW1lbnRzRG9uZSIsImxvYWRDb21tZW50c0Vycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFTVBUWV9DT01NRU5UU19SRVFVRVNUIiwibG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJyZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiIsImVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImNvbW1lbnQiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJ1cGRhdGVMb2xQb3N0TG9hZGluZyIsInVwZGF0ZUxvbFBvc3REb25lIiwidXBkYXRlTG9sUG9zdEVycm9yIiwiZmlsdGVyTG9sUG9zdExvYWRpbmciLCJmaWx0ZXJMb2xQb3N0RG9uZSIsImZpbHRlckxvbFBvc3RFcnJvciIsImRldGFpbExvbFBvc3RPbiIsImRldGFpbExvbFBvc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJBRERfTE9MX1BPU1RfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCIsIkRFTEVURV9MT0xfUE9TVF9TVUNDRVNTIiwiREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCIsIlVQREFURV9MT0xfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJGSUxURVJfTE9MX1BPU1RfUkVRVUVTVCIsIkZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTIiwiRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUiLCJERVRBSUxfTE9MX1BPU1RfT04iLCJERVRBSUxfTE9MX1BPU1RfT0ZGIiwibG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiIsImFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24iLCJ1cGRhdGVMb2xQb3N0UmVxdWVzdEFjdGlvbiIsImZpbHRlckxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsInRvcCIsImRhdGEyIiwianVuZ2xlIiwibWlkIiwiYm90dG9tIiwic3VwcG9ydCIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJnYW1lTW9kZSIsInRpdGxlIiwiY29udGVudCIsInRhbGtPbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduT3V0TG9hZGluZyIsInNpZ25PdXREb25lIiwic2lnbk91dEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlcklkIiwibmlja25hbWUiLCJ1c2VyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJzaWduT3V0UmVxdWVzdEFjdGlvbiIsImNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiIsImxvZ091dEVycm9yIiwibG9hZENvbW1lbnRzQVBJIiwiYXhpb3MiLCJnZXQiLCJwb3N0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvYWRDb21tZW50cyIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxldGUiLCJjb21tZW50SWQiLCJyZW1vdmVDb21tZW50Iiwid2F0Y2hMb2FkQ29tbWVudHMiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21lbnQiLCJjb21tZW50U2FnYSIsImFsbCIsImZvcmsiLCJyb290U2FnYSIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJsaW1pdCIsIm9mZnNldCIsImxvYWRBbGxMb2xQb3N0cyIsImFkZExvbFBvc3RBUEkiLCJ1c2VyTmlja25hbWUiLCJzdGFydFRpZXIiLCJlbmRUaWVyIiwidGFsa29uIiwiYWRkTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RBUEkiLCJkZWxldGVMb2xQb3N0IiwidXBkYXRlTG9sUG9zdEFQSSIsInVwZGF0ZUxvbFBvc3QiLCJmaWx0ZXJMb2xQb3N0QVBJIiwid2FudFRpZXIiLCJmaWx0ZXJMb2xQb3N0Iiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaEFkZExvbFBvc3QiLCJ3YXRjaERlbGV0ZUxvbFBvc3QiLCJ3YXRjaFVwZGF0ZUxvbFBvc3QiLCJ3YXRjaEZpbHRlckxvbFBvc3QiLCJsb2dpbkFQSSIsImxvZ0luIiwiY29kZSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsInNpZ25PdXRBUEkiLCJzaWduT3V0IiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hTaWduT3V0Iiwid2F0aGNoQ2hhbmdlTmlja25hbWUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3Jl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Nk4sSUFBSixLQUFhO0FBQzFCQyx5REFBUztBQUNULFNBQU83TCxxREFBTyxDQUFDLEdBQUc0TCxJQUFKLENBQWQ7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RHVvOWhhbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTsgIC8vIG5leHTsl5DshJwgcHJvdmlkZXLrpbwg7JWI7I2o64+EIOuQmOuKlCDsnbTsnKAiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvbW1lbnRzOiBbXSxcclxuICAgIGxvYWRDb21tZW50c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZENvbW1lbnRzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkQ29tbWVudHNFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTVBUWV9DT01NRU5UU19SRVFVRVNUID0gJ0VNUFRZX0NPTU1FTlRTX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogRU1QVFlfQ09NTUVOVFNfUkVRVUVTVFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jb21tZW50cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQ09NTUVOVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRU1QVFlfQ09NTUVOVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY29tbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG4gICAgY29tbWVudCxcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcG9zdHM6IFtdLFxyXG4gICAgbXlMb2xQb3N0czogW10sXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBkZWxldGVMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICB1cGRhdGVMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGRhdGVMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1cGRhdGVMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBmaWx0ZXJMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBmaWx0ZXJMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBmaWx0ZXJMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBkZXRhaWxMb2xQb3N0T246IGZhbHNlLFxyXG4gICAgZGV0YWlsTG9sUG9zdDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1JFUVVFU1QgPSAnQUREX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1NVQ0NFU1MgPSAnQUREX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX0ZBSUxVUkUgPSAnQUREX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9MT0xfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTID0gJ0RFTEVURV9MT0xfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9MT0xfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSA9ICdVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QgPSAnRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MgPSAnRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUgPSAnRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogVVBEQVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXRhaWxMb2xQb3N0T25BY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IERFVEFJTF9MT0xfUE9TVF9PTixcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbExvbFBvc3RPZmZBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogREVUQUlMX0xPTF9QT1NUX09GRixcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdE9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQREFURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC50b3AgPSBhY3Rpb24uZGF0YTIudG9wO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0Lmp1bmdsZSA9IGFjdGlvbi5kYXRhMi5qdW5nbGU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QubWlkID0gYWN0aW9uLmRhdGEyLm1pZDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5ib3R0b20gPSBhY3Rpb24uZGF0YTIuYm90dG9tO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LnN1cHBvcnQgPSBhY3Rpb24uZGF0YTIuc3VwcG9ydDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5lbmRUaW1lID0gYWN0aW9uLmRhdGEyLmVuZFRpbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuaGVhZENvdW50ID0gYWN0aW9uLmRhdGEyLmhlYWRDb3VudDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5nYW1lTW9kZSA9IGFjdGlvbi5kYXRhMi5nYW1lTW9kZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC50aXRsZSA9IGFjdGlvbi5kYXRhMi50aXRsZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5jb250ZW50ID0gYWN0aW9uLmRhdGEyLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QudGFsa09uID0gYWN0aW9uLmRhdGEyLnRhbGtPbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZJTFRFUl9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGSUxURVJfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT046XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERVRBSUxfTE9MX1BPU1RfT0ZGOlxyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0T24gPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgc2lnbk91dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnbk91dERvbmU6IGZhbHNlLFxyXG4gICAgc2lnbk91dEVycm9yOiBudWxsLCAgICBcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIG1lOiB7XHJcbiAgICAgICAgdXNlcklkOiBudWxsLFxyXG4gICAgICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgICAgIHVzZXJUb2tlbjogbnVsbCxcclxuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgICBwbGF0Zm9ybTogbnVsbCxcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9SRVFVRVNUID0gJ1NJR05fT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfU1VDQ0VTUyA9ICdTSUdOX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX0ZBSUxVUkUgPSAnU0lHTl9PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduT3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTl9PVVRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuYWNjZXNzVG9rZW4gPSBhY3Rpb24uZGF0YS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBhY3Rpb24uZGF0YS5wbGF0Zm9ybTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICAgIExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgIExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9jb21tZW50JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRDb21tZW50c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9jb21tZW50L2xvbD9wb3N0SWQ9JHtkYXRhLnBvc3RJZH1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDb21tZW50cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQ29tbWVudHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9jb21tZW50L2xvbGAsXHJcbiAgICAgICAgeyBjb250ZW50OiBkYXRhLmNvbnRlbnQsIHVzZXJJZDogZGF0YS51c2VySWQsIHBvc3RJZDogZGF0YS5wb3N0SWQsIG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YTIpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2NvbW1lbnQvbG9sYCxcclxuICAgIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogZGF0YTIudXNlclRva2VufSwgZGF0YTogeyBjb21tZW50SWQ6IGRhdGEyLmNvbW1lbnRJZCwgdXNlcklkOiBkYXRhMi51c2VySWR9fVxyXG4gICAgKX07XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRDb21tZW50cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DT01NRU5UU19SRVFVRVNULCBsb2FkQ29tbWVudHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ29tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCByZW1vdmVDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbW1lbnRTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZENvbW1lbnRzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUNvbWVudCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcblxyXG4vLyByZWR1eC1zYWdhIOuKlCDruYTrj5nquLAgYWN0aW9u7J2EIOyImO2WiVxyXG4vLyBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47LacLCBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacLCBhbGzsnYAg64+Z7IucIOyLpO2WiSxcclxuLy8gdGFrZUV2ZXJ564qUIOustO2VnOujqO2UhCB0YWtl64qUIO2VnOuyiCDsi6TtlontlZjrqbQg7IKs65287KeQLCB0YWtlTGF0ZXN064qUIOuniOyngOuniSDsmpTssq3rp4wg7J2R64u1XHJcbi8vIHRocm90dGxlIG5tcyDrj5nslYgg7ZWc67KI66eMIOyalOyyrSDtlahcclxuXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IGNvbW1lbnRTYWdhIGZyb20gJy4vY29tbWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvb3Qg7IKs6rCAIOunjOuTpOqzoCDrp4zrk6Tqs6Ag7Iu27J2AIOu5hOuPmeq4sCDslaHshZgg64Sj7Ja07KSMXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayhjb21tZW50U2FnYSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QsIGZvcmssIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgQUREX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIERFTEVURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgVVBEQVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVQREFURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBGSUxURVJfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgIEZJTFRFUl9MT0xfUE9TVF9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZEFsbExvbFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sP2xpbWl0PSR7ZGF0YS5saW1pdH0mb2Zmc2V0PSR7ZGF0YS5vZmZzZXR9YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQWxsTG9sUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEFsbExvbFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTG9sUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlck5pY2tuYW1lOiBkYXRhLnVzZXJOaWNrbmFtZSwgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgZ2FtZU1vZGU6IGRhdGEuZ2FtZU1vZGUsIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBzdGFydFRpZXI6IGRhdGEuc3RhcnRUaWVyLCBlbmRUaWVyOiBkYXRhLmVuZFRpZXIsXHJcbiAgICAgICAgICAgIGVuZFRpbWU6IGRhdGEuZW5kVGltZSwgaGVhZENvdW50OiBkYXRhLmhlYWRDb3VudCxcclxuICAgICAgICAgICAgdG9wOiBkYXRhLnRvcCwgYm90dG9tOiBkYXRhLmJvdHRvbSxcclxuICAgICAgICAgICAgbWlkOiBkYXRhLm1pZCwganVuZ2xlOiBkYXRhLmp1bmdsZSxcclxuICAgICAgICAgICAgc3VwcG9ydDogZGF0YS5zdXBwb3J0LCBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIHRhbGtvbjogZGF0YS50YWxrT24sXHJcbiAgICAgICAgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogYWRkTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxvbFBvc3RBUEkoZGF0YTIpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgIHtoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEyLnVzZXJUb2tlbn0sIGRhdGEgOiB7cG9zdElkOiBkYXRhMi5wb3N0SWQsIHVzZXJJZDogZGF0YTIudXNlcklkfX1cclxuKX07XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTG9sUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucHV0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwb3N0SWQ6IGRhdGEucG9zdElkLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLFxyXG4gICAgICAgICAgICBzdXBwb3J0OiBkYXRhLnN1cHBvcnQsIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgdGFsa29uOiBkYXRhLnRhbGtPbixcclxuICAgICAgICB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZUxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQREFURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgZGF0YTI6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2wvZmlsdGVyP2dhbWVNb2RlPSR7ZGF0YS5nYW1lTW9kZX0maGVhZENvdW50PSR7ZGF0YS5oZWFkQ291bnR9JndhbnRUaWVyPSR7ZGF0YS53YW50VGllcn0mdG9wPSR7ZGF0YS50b3B9JmJvdHRvbT0ke2RhdGEuYm90dG9tfSZtaWQ9JHtkYXRhLm1pZH0manVuZ2xlPSR7ZGF0YS5qdW5nbGV9JnN1cHBvcnQ9JHtkYXRhLnN1cHBvcnR9JnRhbGtvbj0ke2RhdGEudGFsa09ufSZsaW1pdD0ke2RhdGEubGltaXR9Jm9mZnNldD0ke2RhdGEub2Zmc2V0fWAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGZpbHRlckxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZmlsdGVyTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGSUxURVJfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRBbGxMb2xQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsIGxvYWRBbGxMb2xQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZExvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9MT0xfUE9TVF9SRVFVRVNULCBhZGRMb2xQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsIGRlbGV0ZUxvbFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCwgdXBkYXRlTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZpbHRlckxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZJTFRFUl9MT0xfUE9TVF9SRVFVRVNULCBmaWx0ZXJMb2xQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEFsbExvbFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbGV0ZUxvbFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGRhdGVMb2xQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRmlsdGVyTG9sUG9zdClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgU0lHTl9PVVRfUkVRVUVTVCxcclxuICAgIFNJR05fT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX09VVF9GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgvJHtkYXRhLnBsYXRmb3JtfWAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLmFjY2Vzc1Rva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YS5jb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoLyR7ZGF0YS5wbGF0Zm9ybX1gLFxyXG4gICAgICAgIHsgbmlja25hbWU6IGRhdGEubmlja25hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEuYWNjZXNzVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEuY29kZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaWduT3V0QVBJKGRhdGEyKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCdodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YTIudXNlclRva2VuIH0sIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YTIudXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIHNpZ25PdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbk91dEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dCgnaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aCcsIHsgdXNlcklkOiBkYXRhLnVzZXJJZCwgbmlja25hbWU6IGRhdGEubmlja25hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnbk91dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9PVVRfUkVRVUVTVCwgc2lnbk91dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRoY2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduT3V0KSwgLy8gY2hlY2sgZXJyb3IsXHJcbiAgICAgICAgZm9yayh3YXRoY2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgICAvLyDrsLDtj6zsmqnsl5DripQgZGV2dG9vbCDsl7Drj5kgeFxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==