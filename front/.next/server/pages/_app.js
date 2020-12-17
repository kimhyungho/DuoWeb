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
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, LOAD_ALL_MY_LOL_POSTS_REQUEST, LOAD_ALL_MY_LOL_POSTS_SUCCESS, LOAD_ALL_MY_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DELETE_LOL_POST_REQUEST, DELETE_LOL_POST_SUCCESS, DELETE_LOL_POST_FAILURE, UPDATE_LOL_POST_REQUEST, UPDATE_LOL_POST_SUCCESS, UPDATE_LOL_POST_FAILURE, FILTER_LOL_POST_REQUEST, FILTER_LOL_POST_SUCCESS, FILTER_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, loadAllMyLolPostsRequestAction, addLolPostRequestAction, deleteLolPostRequestAction, updateLolPostRequestAction, filterLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_REQUEST", function() { return LOAD_ALL_LOL_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_SUCCESS", function() { return LOAD_ALL_LOL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_FAILURE", function() { return LOAD_ALL_LOL_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_MY_LOL_POSTS_REQUEST", function() { return LOAD_ALL_MY_LOL_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_MY_LOL_POSTS_SUCCESS", function() { return LOAD_ALL_MY_LOL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_MY_LOL_POSTS_FAILURE", function() { return LOAD_ALL_MY_LOL_POSTS_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllMyLolPostsRequestAction", function() { return loadAllMyLolPostsRequestAction; });
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
const LOAD_ALL_MY_LOL_POSTS_REQUEST = 'LOAD_ALL_MY_LOL_POSTS_REQUEST';
const LOAD_ALL_MY_LOL_POSTS_SUCCESS = 'LOAD_ALL_MY_LOL_POSTS_SUCCESS';
const LOAD_ALL_MY_LOL_POSTS_FAILURE = 'LOAD_ALL_MY_LOL_POSTS_FAILURE';
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
const loadAllMyLolPostsRequestAction = data => ({
  type: LOAD_ALL_MY_LOL_POSTS_REQUEST,
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

    case LOAD_ALL_MY_LOL_POSTS_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_ALL_MY_LOL_POSTS_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.myLolPosts = action.data;
      break;

    case LOAD_ALL_MY_LOL_POSTS_FAILURE:
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

function loadMyLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/me?userId=${data.userId}`, {}, {
    headers: {
      Authorization: data.userToken
    }
  });
}

;

function* loadAllMyLolPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyLolPostAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_MY_LOL_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_MY_LOL_POSTS_FAILURE"],
      error: err.response
    });
  }
}

function* watchLoadAllLolPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_LOL_POSTS_REQUEST"], loadAllLolPosts);
}

function* watchLoadMyLolPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_MY_LOL_POSTS_REQUEST"], loadAllMyLolPosts);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFilterLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyLolPosts)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwibG9hZENvbW1lbnRzRG9uZSIsImxvYWRDb21tZW50c0Vycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFTVBUWV9DT01NRU5UU19SRVFVRVNUIiwibG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJyZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiIsImVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImNvbW1lbnQiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJ1cGRhdGVMb2xQb3N0TG9hZGluZyIsInVwZGF0ZUxvbFBvc3REb25lIiwidXBkYXRlTG9sUG9zdEVycm9yIiwiZmlsdGVyTG9sUG9zdExvYWRpbmciLCJmaWx0ZXJMb2xQb3N0RG9uZSIsImZpbHRlckxvbFBvc3RFcnJvciIsImRldGFpbExvbFBvc3RPbiIsImRldGFpbExvbFBvc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0FMTF9NWV9MT0xfUE9TVFNfUkVRVUVTVCIsIkxPQURfQUxMX01ZX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTVlfTE9MX1BPU1RTX0ZBSUxVUkUiLCJBRERfTE9MX1BPU1RfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCIsIkRFTEVURV9MT0xfUE9TVF9TVUNDRVNTIiwiREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCIsIlVQREFURV9MT0xfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJGSUxURVJfTE9MX1BPU1RfUkVRVUVTVCIsIkZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTIiwiRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUiLCJERVRBSUxfTE9MX1BPU1RfT04iLCJERVRBSUxfTE9MX1BPU1RfT0ZGIiwibG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiIsImxvYWRBbGxNeUxvbFBvc3RzUmVxdWVzdEFjdGlvbiIsImFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24iLCJ1cGRhdGVMb2xQb3N0UmVxdWVzdEFjdGlvbiIsImZpbHRlckxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsInRvcCIsImRhdGEyIiwianVuZ2xlIiwibWlkIiwiYm90dG9tIiwic3VwcG9ydCIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJnYW1lTW9kZSIsInRpdGxlIiwiY29udGVudCIsInRhbGtPbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduT3V0TG9hZGluZyIsInNpZ25PdXREb25lIiwic2lnbk91dEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlcklkIiwibmlja25hbWUiLCJ1c2VyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJzaWduT3V0UmVxdWVzdEFjdGlvbiIsImNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiIsImxvZ091dEVycm9yIiwibG9hZENvbW1lbnRzQVBJIiwiYXhpb3MiLCJnZXQiLCJwb3N0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvYWRDb21tZW50cyIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxldGUiLCJjb21tZW50SWQiLCJyZW1vdmVDb21tZW50Iiwid2F0Y2hMb2FkQ29tbWVudHMiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21lbnQiLCJjb21tZW50U2FnYSIsImFsbCIsImZvcmsiLCJyb290U2FnYSIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJsaW1pdCIsIm9mZnNldCIsImxvYWRBbGxMb2xQb3N0cyIsImFkZExvbFBvc3RBUEkiLCJ1c2VyTmlja25hbWUiLCJzdGFydFRpZXIiLCJlbmRUaWVyIiwidGFsa29uIiwiYWRkTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RBUEkiLCJkZWxldGVMb2xQb3N0IiwidXBkYXRlTG9sUG9zdEFQSSIsInVwZGF0ZUxvbFBvc3QiLCJmaWx0ZXJMb2xQb3N0QVBJIiwid2FudFRpZXIiLCJmaWx0ZXJMb2xQb3N0IiwibG9hZE15TG9sUG9zdEFQSSIsImxvYWRBbGxNeUxvbFBvc3RzIiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaExvYWRNeUxvbFBvc3RzIiwid2F0Y2hBZGRMb2xQb3N0Iiwid2F0Y2hEZWxldGVMb2xQb3N0Iiwid2F0Y2hVcGRhdGVMb2xQb3N0Iiwid2F0Y2hGaWx0ZXJMb2xQb3N0IiwibG9naW5BUEkiLCJsb2dJbiIsImNvZGUiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJzaWduT3V0QVBJIiwic2lnbk91dCIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoU2lnbk91dCIsIndhdGhjaENoYW5nZU5pY2tuYW1lIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUMz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bGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EdW85aGFtPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpOyAgLy8gbmV4dOyXkOyEnCBwcm92aWRlcuulvCDslYjsjajrj4Qg65CY64qUIOydtOycoCIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY29tbWVudHM6IFtdLFxyXG4gICAgbG9hZENvbW1lbnRzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkQ29tbWVudHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRDb21tZW50c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfUkVRVUVTVCA9ICdMT0FEX0NPTU1FTlRTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19TVUNDRVNTID0gJ0xPQURfQ09NTUVOVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUgPSAnTE9BRF9DT01NRU5UU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVNUFRZX0NPTU1FTlRTX1JFUVVFU1QgPSAnRU1QVFlfQ09NTUVOVFNfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBFTVBUWV9DT01NRU5UU19SRVFVRVNUXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX0NPTU1FTlRTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0NPTU1FTlRTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNvbW1lbnRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFTVBUWV9DT01NRU5UU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1lbnQnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbiAgICBjb21tZW50LFxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwb3N0czogW10sXHJcbiAgICBteUxvbFBvc3RzOiBbXSxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZExvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGRlbGV0ZUxvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHVwZGF0ZUxvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVwZGF0ZUxvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIHVwZGF0ZUxvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGZpbHRlckxvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGZpbHRlckxvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGZpbHRlckxvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGRldGFpbExvbFBvc3RPbjogZmFsc2UsXHJcbiAgICBkZXRhaWxMb2xQb3N0OiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUID0gJ0xPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTID0gJ0xPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFID0gJ0xPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9NWV9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9NWV9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9NWV9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9NWV9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9NWV9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9NWV9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1JFUVVFU1QgPSAnQUREX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1NVQ0NFU1MgPSAnQUREX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX0ZBSUxVUkUgPSAnQUREX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9MT0xfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTID0gJ0RFTEVURV9MT0xfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9MT0xfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSA9ICdVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QgPSAnRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MgPSAnRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUgPSAnRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRBbGxNeUxvbFBvc3RzUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9BTExfTVlfTE9MX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTG9sUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckxvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBGSUxURVJfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbExvbFBvc3RPbkFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVUQUlMX0xPTF9QT1NUX09OLFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERVRBSUxfTE9MX1BPU1RfT0ZGLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX01ZX0xPTF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTVlfTE9MX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5teUxvbFBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTVlfTE9MX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQREFURV9MT0xfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QudG9wID0gYWN0aW9uLmRhdGEyLnRvcDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5qdW5nbGUgPSBhY3Rpb24uZGF0YTIuanVuZ2xlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0Lm1pZCA9IGFjdGlvbi5kYXRhMi5taWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuYm90dG9tID0gYWN0aW9uLmRhdGEyLmJvdHRvbTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5zdXBwb3J0ID0gYWN0aW9uLmRhdGEyLnN1cHBvcnQ7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuZW5kVGltZSA9IGFjdGlvbi5kYXRhMi5lbmRUaW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LmhlYWRDb3VudCA9IGFjdGlvbi5kYXRhMi5oZWFkQ291bnQ7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuZ2FtZU1vZGUgPSBhY3Rpb24uZGF0YTIuZ2FtZU1vZGU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QudGl0bGUgPSBhY3Rpb24uZGF0YTIudGl0bGU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuY29udGVudCA9IGFjdGlvbi5kYXRhMi5jb250ZW50O1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LnRhbGtPbiA9IGFjdGlvbi5kYXRhMi50YWxrT247XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGSUxURVJfTE9MX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgREVUQUlMX0xPTF9QT1NUX09OOlxyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0T24gPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVUQUlMX0xPTF9QT1NUX09GRjpcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdE9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIHNpZ25PdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNpZ25PdXREb25lOiBmYWxzZSxcclxuICAgIHNpZ25PdXRFcnJvcjogbnVsbCwgICAgXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBtZToge1xyXG4gICAgICAgIHVzZXJJZDogbnVsbCxcclxuICAgICAgICBuaWNrbmFtZTogbnVsbCxcclxuICAgICAgICB1c2VyVG9rZW46IG51bGwsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICAgICAgcGxhdGZvcm06IG51bGwsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfUkVRVUVTVCA9ICdTSUdOX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1NVQ0NFU1MgPSAnU0lHTl9PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9GQUlMVVJFID0gJ1NJR05fT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbk91dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fT1VUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VOaWNrbmFtZVJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGEuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gYWN0aW9uLmRhdGEucGxhdGZvcm07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUuYWNjZXNzVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wbGF0Zm9ybSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0NPTU1FTlRTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvY29tbWVudCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29tbWVudHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2w/cG9zdElkPSR7ZGF0YS5wb3N0SWR9YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ29tbWVudHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZENvbW1lbnRzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2xgLFxyXG4gICAgICAgIHsgY29udGVudDogZGF0YS5jb250ZW50LCB1c2VySWQ6IGRhdGEudXNlcklkLCBwb3N0SWQ6IGRhdGEucG9zdElkLCBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGEyKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9jb21tZW50L2xvbGAsXHJcbiAgICB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGRhdGEyLnVzZXJUb2tlbn0sIGRhdGE6IHsgY29tbWVudElkOiBkYXRhMi5jb21tZW50SWQsIHVzZXJJZDogZGF0YTIudXNlcklkfX1cclxuICAgICl9O1xyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUNvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQ29tbWVudHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ09NTUVOVFNfUkVRVUVTVCwgbG9hZENvbW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjb21tZW50U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRDb21tZW50cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVDb21lbnQpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5cclxuLy8gcmVkdXgtc2FnYSDripQg67mE64+Z6riwIGFjdGlvbuydhCDsiJjtlolcclxuLy8gZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nCwgY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nCwgYWxs7J2AIOuPmeyLnCDsi6TtloksXHJcbi8vIHRha2VFdmVyeeuKlCDrrLTtlZzro6jtlIQgdGFrZeuKlCDtlZzrsogg7Iuk7ZaJ7ZWY66m0IOyCrOudvOynkCwgdGFrZUxhdGVzdOuKlCDrp4jsp4Drp4kg7JqU7LKt66eMIOydkeuLtVxyXG4vLyB0aHJvdHRsZSBubXMg64+Z7JWIIO2VnOuyiOunjCDsmpTssq0g7ZWoXHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCBjb21tZW50U2FnYSBmcm9tICcuL2NvbW1lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb290IOyCrOqwgCDrp4zrk6Tqs6Ag66eM65Ok6rOgIOyLtuydgCDruYTrj5nquLAg7JWh7IWYIOuEo+yWtOykjFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsoY29tbWVudFNhZ2EpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgIEFERF9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBBRERfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIERFTEVURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIFVQREFURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIEZJTFRFUl9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBGSUxURVJfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIExPQURfQUxMX01ZX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfTVlfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9NWV9MT0xfUE9TVFNfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRBbGxMb2xQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbD9saW1pdD0ke2RhdGEubGltaXR9Jm9mZnNldD0ke2RhdGEub2Zmc2V0fWAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbExvbFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRBbGxMb2xQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJOaWNrbmFtZTogZGF0YS51c2VyTmlja25hbWUsIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgIGdhbWVNb2RlOiBkYXRhLmdhbWVNb2RlLCB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgc3RhcnRUaWVyOiBkYXRhLnN0YXJ0VGllciwgZW5kVGllcjogZGF0YS5lbmRUaWVyLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBkYXRhLmVuZFRpbWUsIGhlYWRDb3VudDogZGF0YS5oZWFkQ291bnQsXHJcbiAgICAgICAgICAgIHRvcDogZGF0YS50b3AsIGJvdHRvbTogZGF0YS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pZDogZGF0YS5taWQsIGp1bmdsZTogZGF0YS5qdW5nbGUsXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6IGRhdGEuc3VwcG9ydCwgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa09uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZExvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVMb2xQb3N0QVBJKGRhdGEyKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICB7aGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhMi51c2VyVG9rZW59LCBkYXRhIDoge3Bvc3RJZDogZGF0YTIucG9zdElkLCB1c2VySWQ6IGRhdGEyLnVzZXJJZH19XHJcbil9O1xyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcG9zdElkOiBkYXRhLnBvc3RJZCwgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgZ2FtZU1vZGU6IGRhdGEuZ2FtZU1vZGUsIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBzdGFydFRpZXI6IGRhdGEuc3RhcnRUaWVyLCBlbmRUaWVyOiBkYXRhLmVuZFRpZXIsXHJcbiAgICAgICAgICAgIGVuZFRpbWU6IGRhdGEuZW5kVGltZSwgaGVhZENvdW50OiBkYXRhLmhlYWRDb3VudCxcclxuICAgICAgICAgICAgdG9wOiBkYXRhLnRvcCwgYm90dG9tOiBkYXRhLmJvdHRvbSxcclxuICAgICAgICAgICAgbWlkOiBkYXRhLm1pZCwganVuZ2xlOiBkYXRhLmp1bmdsZSxcclxuICAgICAgICAgICAgc3VwcG9ydDogZGF0YS5zdXBwb3J0LCBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIHRhbGtvbjogZGF0YS50YWxrT24sXHJcbiAgICAgICAgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGRhdGVMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGEyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sL2ZpbHRlcj9nYW1lTW9kZT0ke2RhdGEuZ2FtZU1vZGV9JmhlYWRDb3VudD0ke2RhdGEuaGVhZENvdW50fSZ3YW50VGllcj0ke2RhdGEud2FudFRpZXJ9JnRvcD0ke2RhdGEudG9wfSZib3R0b209JHtkYXRhLmJvdHRvbX0mbWlkPSR7ZGF0YS5taWR9Jmp1bmdsZT0ke2RhdGEuanVuZ2xlfSZzdXBwb3J0PSR7ZGF0YS5zdXBwb3J0fSZ0YWxrb249JHtkYXRhLnRhbGtPbn0mbGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBmaWx0ZXJMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZpbHRlckxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTXlMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbWU/dXNlcklkPSR7ZGF0YS51c2VySWR9YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbE15TG9sUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15TG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9NWV9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX01ZX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEFsbExvbFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCwgbG9hZEFsbExvbFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15TG9sUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX01ZX0xPTF9QT1NUU19SRVFVRVNULCBsb2FkQWxsTXlMb2xQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZExvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9MT0xfUE9TVF9SRVFVRVNULCBhZGRMb2xQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsIGRlbGV0ZUxvbFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCwgdXBkYXRlTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZpbHRlckxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZJTFRFUl9MT0xfUE9TVF9SRVFVRVNULCBmaWx0ZXJMb2xQb3N0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRBbGxMb2xQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZExvbFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hEZWxldGVMb2xQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBkYXRlTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZpbHRlckxvbFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlMb2xQb3N0cyksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fT1VUX1JFUVVFU1QsXHJcbiAgICBTSUdOX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9PVVRfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoLyR7ZGF0YS5wbGF0Zm9ybX1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS5hY2Nlc3NUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEuY29kZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aC8ke2RhdGEucGxhdGZvcm19YCxcclxuICAgICAgICB7IG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLmFjY2Vzc1Rva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLmNvZGUpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2lnbk91dEFQSShkYXRhMikge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSgnaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEyLnVzZXJUb2tlbiB9LCBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEyLnVzZXJJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG59XHJcbmZ1bmN0aW9uKiBzaWduT3V0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25PdXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX09VVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wdXQoJ2h0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgnLCB7IHVzZXJJZDogZGF0YS51c2VySWQsIG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25PdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fT1VUX1JFUVVFU1QsIHNpZ25PdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0aGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnbk91dCksIC8vIGNoZWNrIGVycm9yLFxyXG4gICAgICAgIGZvcmsod2F0aGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpICAgLy8g67Cw7Y+s7Jqp7JeQ64qUIGRldnRvb2wg7Jew64+ZIHhcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gIGVuYWJsZUVTNSgpO1xyXG4gIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=