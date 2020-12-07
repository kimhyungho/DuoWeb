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
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Duo9ham")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwibG9hZENvbW1lbnRzRG9uZSIsImxvYWRDb21tZW50c0Vycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFTVBUWV9DT01NRU5UU19SRVFVRVNUIiwibG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJyZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiIsImVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImNvbW1lbnQiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJ1cGRhdGVMb2xQb3N0TG9hZGluZyIsInVwZGF0ZUxvbFBvc3REb25lIiwidXBkYXRlTG9sUG9zdEVycm9yIiwiZmlsdGVyTG9sUG9zdExvYWRpbmciLCJmaWx0ZXJMb2xQb3N0RG9uZSIsImZpbHRlckxvbFBvc3RFcnJvciIsImRldGFpbExvbFBvc3RPbiIsImRldGFpbExvbFBvc3QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJBRERfTE9MX1BPU1RfUkVRVUVTVCIsIkFERF9MT0xfUE9TVF9TVUNDRVNTIiwiQUREX0xPTF9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCIsIkRFTEVURV9MT0xfUE9TVF9TVUNDRVNTIiwiREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCIsIlVQREFURV9MT0xfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUiLCJGSUxURVJfTE9MX1BPU1RfUkVRVUVTVCIsIkZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTIiwiRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUiLCJERVRBSUxfTE9MX1BPU1RfT04iLCJERVRBSUxfTE9MX1BPU1RfT0ZGIiwibG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiIsImFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24iLCJ1cGRhdGVMb2xQb3N0UmVxdWVzdEFjdGlvbiIsImZpbHRlckxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsInRvcCIsImRhdGEyIiwianVuZ2xlIiwibWlkIiwiYm90dG9tIiwic3VwcG9ydCIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJnYW1lTW9kZSIsInRpdGxlIiwiY29udGVudCIsInRhbGtPbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduT3V0TG9hZGluZyIsInNpZ25PdXREb25lIiwic2lnbk91dEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlcklkIiwibmlja25hbWUiLCJ1c2VyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJzaWduT3V0UmVxdWVzdEFjdGlvbiIsImNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiIsImxvZ091dEVycm9yIiwibG9hZENvbW1lbnRzQVBJIiwiYXhpb3MiLCJnZXQiLCJwb3N0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvYWRDb21tZW50cyIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxldGUiLCJjb21tZW50SWQiLCJyZW1vdmVDb21tZW50Iiwid2F0Y2hMb2FkQ29tbWVudHMiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21lbnQiLCJjb21tZW50U2FnYSIsImFsbCIsImZvcmsiLCJyb290U2FnYSIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJsaW1pdCIsIm9mZnNldCIsImxvYWRBbGxMb2xQb3N0cyIsImFkZExvbFBvc3RBUEkiLCJ1c2VyTmlja25hbWUiLCJzdGFydFRpZXIiLCJlbmRUaWVyIiwidGFsa29uIiwiYWRkTG9sUG9zdCIsImRlbGV0ZUxvbFBvc3RBUEkiLCJkZWxldGVMb2xQb3N0IiwidXBkYXRlTG9sUG9zdEFQSSIsInVwZGF0ZUxvbFBvc3QiLCJmaWx0ZXJMb2xQb3N0QVBJIiwid2FudFRpZXIiLCJmaWx0ZXJMb2xQb3N0Iiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaEFkZExvbFBvc3QiLCJ3YXRjaERlbGV0ZUxvbFBvc3QiLCJ3YXRjaFVwZGF0ZUxvbFBvc3QiLCJ3YXRjaEZpbHRlckxvbFBvc3QiLCJsb2dpbkFQSSIsImxvZ0luIiwiY29kZSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsInNpZ25PdXRBUEkiLCJzaWduT3V0IiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hTaWduT3V0Iiwid2F0aGNoQ2hhbmdlTmlja25hbWUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3Jl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LGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RHVvOWhhbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTsgIC8vIG5leHTsl5DshJwgcHJvdmlkZXLrpbwg7JWI7I2o64+EIOuQmOuKlCDsnbTsnKAiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNvbW1lbnRzOiBbXSxcclxuICAgIGxvYWRDb21tZW50c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZENvbW1lbnRzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkQ29tbWVudHNFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTVBUWV9DT01NRU5UU19SRVFVRVNUID0gJ0VNUFRZX0NPTU1FTlRTX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRDb21tZW50c1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZW1wdHlDb21tZW50c1JlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogRU1QVFlfQ09NTUVOVFNfUkVRVUVTVFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jb21tZW50cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQ09NTUVOVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRU1QVFlfQ09NTUVOVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY29tbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi9jb21tZW50JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG4gICAgY29tbWVudCxcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcG9zdHM6IFtdLFxyXG4gICAgbXlMb2xQb3N0czogW10sXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBkZWxldGVMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBkZWxldGVMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICB1cGRhdGVMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGRhdGVMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1cGRhdGVMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBmaWx0ZXJMb2xQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBmaWx0ZXJMb2xQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBmaWx0ZXJMb2xQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBkZXRhaWxMb2xQb3N0T246IGZhbHNlLFxyXG4gICAgZGV0YWlsTG9sUG9zdDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1JFUVVFU1QgPSAnQUREX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX1NVQ0NFU1MgPSAnQUREX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0xPTF9QT1NUX0ZBSUxVUkUgPSAnQUREX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9MT0xfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTID0gJ0RFTEVURV9MT0xfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MT0xfUE9TVF9GQUlMVVJFID0gJ0RFTEVURV9MT0xfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSA9ICdVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QgPSAnRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MgPSAnRklMVEVSX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUgPSAnRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogVVBEQVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXRhaWxMb2xQb3N0T25BY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IERFVEFJTF9MT0xfUE9TVF9PTixcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbExvbFBvc3RPZmZBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogREVUQUlMX0xPTF9QT1NUX09GRixcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LnRvcCA9IGFjdGlvbi5kYXRhMi50b3A7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuanVuZ2xlID0gYWN0aW9uLmRhdGEyLmp1bmdsZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5taWQgPSBhY3Rpb24uZGF0YTIubWlkO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LmJvdHRvbSA9IGFjdGlvbi5kYXRhMi5ib3R0b207XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3Quc3VwcG9ydCA9IGFjdGlvbi5kYXRhMi5zdXBwb3J0O1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LmVuZFRpbWUgPSBhY3Rpb24uZGF0YTIuZW5kVGltZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5oZWFkQ291bnQgPSBhY3Rpb24uZGF0YTIuaGVhZENvdW50O1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LmdhbWVNb2RlID0gYWN0aW9uLmRhdGEyLmdhbWVNb2RlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LnRpdGxlID0gYWN0aW9uLmRhdGEyLnRpdGxlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LmNvbnRlbnQgPSBhY3Rpb24uZGF0YTIuY29udGVudDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC50YWxrT24gPSBhY3Rpb24uZGF0YTIudGFsa09uO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQREFURV9MT0xfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRklMVEVSX0xPTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZpbHRlckxvbFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGSUxURVJfTE9MX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZmlsdGVyTG9sUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5wb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZJTFRFUl9MT0xfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5maWx0ZXJMb2xQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PTjpcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PRkY6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0ID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBzaWduT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduT3V0RG9uZTogZmFsc2UsXHJcbiAgICBzaWduT3V0RXJyb3I6IG51bGwsICAgIFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHtcclxuICAgICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9TVUNDRVNTID0gJ1NJR05fT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25PdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBTSUdOX09VVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IGFjdGlvbi5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wbGF0Zm9ybSA9IGFjdGlvbi5kYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QsIGZvcmssIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gICAgTE9BRF9DT01NRU5UU19TVUNDRVNTLFxyXG4gICAgTE9BRF9DT01NRU5UU19GQUlMVVJFLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2NvbW1lbnQnO1xyXG5cclxuZnVuY3Rpb24gbG9hZENvbW1lbnRzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2NvbW1lbnQvbG9sP3Bvc3RJZD0ke2RhdGEucG9zdElkfWAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZENvbW1lbnRzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRDb21tZW50c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9DT01NRU5UU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9DT01NRU5UU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2NvbW1lbnQvbG9sYCxcclxuICAgICAgICB7IGNvbnRlbnQ6IGRhdGEuY29udGVudCwgdXNlcklkOiBkYXRhLnVzZXJJZCwgcG9zdElkOiBkYXRhLnBvc3RJZCwgbmlja25hbWU6IGRhdGEubmlja25hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhMikge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2xgLFxyXG4gICAge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBkYXRhMi51c2VyVG9rZW59LCBkYXRhOiB7IGNvbW1lbnRJZDogZGF0YTIuY29tbWVudElkLCB1c2VySWQ6IGRhdGEyLnVzZXJJZH19XHJcbiAgICApfTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZENvbW1lbnRzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NPTU1FTlRTX1JFUVVFU1QsIGxvYWRDb21tZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY29tbWVudFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQ29tbWVudHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tZW50KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuXHJcbi8vIHJlZHV4LXNhZ2Eg64qUIOu5hOuPmeq4sCBhY3Rpb27snYQg7IiY7ZaJXHJcbi8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwsIGNhbGzsnYAg64+Z6riwIO2VqOyImCDtmLjstpwsIGFsbOydgCDrj5nsi5wg7Iuk7ZaJLFxyXG4vLyB0YWtlRXZlcnnripQg66y07ZWc66Oo7ZSEIHRha2XripQg7ZWc67KIIOyLpO2Wie2VmOuptCDsgqzrnbzsp5AsIHRha2VMYXRlc3TripQg66eI7KeA66eJIOyalOyyreunjCDsnZHri7VcclxuLy8gdGhyb3R0bGUgbm1zIOuPmeyViCDtlZzrsojrp4wg7JqU7LKtIO2VqFxyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY29tbWVudFNhZ2EgZnJvbSAnLi9jb21tZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm9vdCDsgqzqsIAg66eM65Ok6rOgIOunjOuTpOqzoCDsi7bsnYAg67mE64+Z6riwIOyVoeyFmCDrhKPslrTspIxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKGNvbW1lbnRTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIFVQREFURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBGSUxURVJfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIEZJTFRFUl9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgRklMVEVSX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWxsTG9sUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2w/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRBbGxMb2xQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsTG9sUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWU6IGRhdGEudXNlck5pY2tuYW1lLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLFxyXG4gICAgICAgICAgICBzdXBwb3J0OiBkYXRhLnN1cHBvcnQsIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgdGFsa29uOiBkYXRhLnRhbGtPbixcclxuICAgICAgICB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZExvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlTG9sUG9zdEFQSShkYXRhMikge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAge2hlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YTIudXNlclRva2VufSwgZGF0YSA6IHtwb3N0SWQ6IGRhdGEyLnBvc3RJZCwgdXNlcklkOiBkYXRhMi51c2VySWR9fVxyXG4pfTtcclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wdXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc3RJZDogZGF0YS5wb3N0SWQsIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgIGdhbWVNb2RlOiBkYXRhLmdhbWVNb2RlLCB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgc3RhcnRUaWVyOiBkYXRhLnN0YXJ0VGllciwgZW5kVGllcjogZGF0YS5lbmRUaWVyLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBkYXRhLmVuZFRpbWUsIGhlYWRDb3VudDogZGF0YS5oZWFkQ291bnQsXHJcbiAgICAgICAgICAgIHRvcDogZGF0YS50b3AsIGJvdHRvbTogZGF0YS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pZDogZGF0YS5taWQsIGp1bmdsZTogZGF0YS5qdW5nbGUsXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6IGRhdGEuc3VwcG9ydCwgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa09uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZUxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhMjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQREFURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTG9sUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbC9maWx0ZXI/Z2FtZU1vZGU9JHtkYXRhLmdhbWVNb2RlfSZoZWFkQ291bnQ9JHtkYXRhLmhlYWRDb3VudH0md2FudFRpZXI9JHtkYXRhLndhbnRUaWVyfSZ0b3A9JHtkYXRhLnRvcH0mYm90dG9tPSR7ZGF0YS5ib3R0b219Jm1pZD0ke2RhdGEubWlkfSZqdW5nbGU9JHtkYXRhLmp1bmdsZX0mc3VwcG9ydD0ke2RhdGEuc3VwcG9ydH0mdGFsa29uPSR7ZGF0YS50YWxrT259JmxpbWl0PSR7ZGF0YS5saW1pdH0mb2Zmc2V0PSR7ZGF0YS5vZmZzZXR9YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogZmlsdGVyTG9sUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmaWx0ZXJMb2xQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGSUxURVJfTE9MX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZJTFRFUl9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEFsbExvbFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCwgbG9hZEFsbExvbFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0xPTF9QT1NUX1JFUVVFU1QsIGFkZExvbFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCwgZGVsZXRlTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZUxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQREFURV9MT0xfUE9TVF9SRVFVRVNULCB1cGRhdGVMb2xQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRmlsdGVyTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRklMVEVSX0xPTF9QT1NUX1JFUVVFU1QsIGZpbHRlckxvbFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQWxsTG9sUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRMb2xQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwZGF0ZUxvbFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGaWx0ZXJMb2xQb3N0KVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBTSUdOX09VVF9SRVFVRVNULFxyXG4gICAgU0lHTl9PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fT1VUX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aC8ke2RhdGEucGxhdGZvcm19YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEuYWNjZXNzVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLmNvZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgvJHtkYXRhLnBsYXRmb3JtfWAsXHJcbiAgICAgICAgeyBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS5hY2Nlc3NUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5jb2RlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25PdXRBUEkoZGF0YTIpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJ2h0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhMi51c2VyVG9rZW4gfSwgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhMi51c2VySWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiogc2lnbk91dChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduT3V0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9PVVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucHV0KCdodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoJywgeyB1c2VySWQ6IGRhdGEudXNlcklkLCBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX09VVF9SRVFVRVNULCBzaWduT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGhjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25PdXQpLCAvLyBjaGVjayBlcnJvcixcclxuICAgICAgICBmb3JrKHdhdGhjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAgIC8vIOuwsO2PrOyaqeyXkOuKlCBkZXZ0b29sIOyXsOuPmSB4XHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9