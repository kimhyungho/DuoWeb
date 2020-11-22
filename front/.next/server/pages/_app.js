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
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DELETE_LOL_POST_REQUEST, DELETE_LOL_POST_SUCCESS, DELETE_LOL_POST_FAILURE, UPDATE_LOL_POST_REQUEST, UPDATE_LOL_POST_SUCCESS, UPDATE_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, addLolPostRequestAction, deleteLolPostRequestAction, updateLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_ON", function() { return DETAIL_LOL_POST_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_OFF", function() { return DETAIL_LOL_POST_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLolPostRequestAction", function() { return addLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLolPostRequestAction", function() { return deleteLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLolPostRequestAction", function() { return updateLolPostRequestAction; });
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

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/comment/lol`, {
    commentId: data.commentId,
    userId: data.userId
  }, {
    headers: {
      Authorization: data.userToken
    }
  });
}

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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`, {}, {
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

function deleteLolPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/post/lol`, {
    postId: data.postId,
    userId: data.userId
  }, {
    headers: {
      Authorization: data.userToken
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

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateLolPost)]);
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

function signOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('http://ec2-18-222-143-156.us-east-2.compute.amazonaws.com:3000/auth', {
    userId: data.userId
  }, {
    headers: {
      Authorization: data.userToken
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwibG9hZENvbW1lbnRzRG9uZSIsImxvYWRDb21tZW50c0Vycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFTVBUWV9DT01NRU5UU19SRVFVRVNUIiwibG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJyZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiIsImVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImNvbW1lbnQiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJ1cGRhdGVMb2xQb3N0TG9hZGluZyIsInVwZGF0ZUxvbFBvc3REb25lIiwidXBkYXRlTG9sUG9zdEVycm9yIiwiZGV0YWlsTG9sUG9zdE9uIiwiZGV0YWlsTG9sUG9zdCIsIkxPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUIiwiTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSIsIkFERF9MT0xfUE9TVF9SRVFVRVNUIiwiQUREX0xPTF9QT1NUX1NVQ0NFU1MiLCJBRERfTE9MX1BPU1RfRkFJTFVSRSIsIkRFTEVURV9MT0xfUE9TVF9SRVFVRVNUIiwiREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSIsIlVQREFURV9MT0xfUE9TVF9SRVFVRVNUIiwiVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfTE9MX1BPU1RfRkFJTFVSRSIsIkRFVEFJTF9MT0xfUE9TVF9PTiIsIkRFVEFJTF9MT0xfUE9TVF9PRkYiLCJsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIiwiYWRkTG9sUG9zdFJlcXVlc3RBY3Rpb24iLCJkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiIsInVwZGF0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsInRvcCIsImRhdGEyIiwianVuZ2xlIiwibWlkIiwiYm90dG9tIiwic3VwcG9ydCIsImVuZFRpbWUiLCJoZWFkQ291bnQiLCJnYW1lTW9kZSIsInRpdGxlIiwiY29udGVudCIsInRhbGtPbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduT3V0TG9hZGluZyIsInNpZ25PdXREb25lIiwic2lnbk91dEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlcklkIiwibmlja25hbWUiLCJ1c2VyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJzaWduT3V0UmVxdWVzdEFjdGlvbiIsImNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiIsImxvZ091dEVycm9yIiwibG9hZENvbW1lbnRzQVBJIiwiYXhpb3MiLCJnZXQiLCJwb3N0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvYWRDb21tZW50cyIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwiYWRkQ29tbWVudCIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxldGUiLCJjb21tZW50SWQiLCJyZW1vdmVDb21tZW50Iiwid2F0Y2hMb2FkQ29tbWVudHMiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21lbnQiLCJjb21tZW50U2FnYSIsImFsbCIsImZvcmsiLCJyb290U2FnYSIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkQWxsTG9sUG9zdHNBUEkiLCJsb2FkQWxsTG9sUG9zdHMiLCJhZGRMb2xQb3N0QVBJIiwidXNlck5pY2tuYW1lIiwic3RhcnRUaWVyIiwiZW5kVGllciIsInRhbGtvbiIsImFkZExvbFBvc3QiLCJkZWxldGVMb2xQb3N0QVBJIiwiZGVsZXRlTG9sUG9zdCIsInVwZGF0ZUxvbFBvc3RBUEkiLCJ1cGRhdGVMb2xQb3N0Iiwid2F0Y2hMb2FkQWxsTG9sUG9zdHMiLCJ3YXRjaEFkZExvbFBvc3QiLCJ3YXRjaERlbGV0ZUxvbFBvc3QiLCJ3YXRjaFVwZGF0ZUxvbFBvc3QiLCJsb2dpbkFQSSIsImxvZ0luIiwiY29kZSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsInNpZ25PdXRBUEkiLCJzaWduT3V0IiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hTaWduT3V0Iiwid2F0aGNoQ2hhbmdlTmlja25hbWUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJhcmdzIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUI3Qyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPMEMsS0FBUDtBQUNILENBVkQ7O0FBWUEsTUFBTTFNLE9BQU8sR0FBRzhNLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDMUNhLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZS9NLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGdFQUFDLEdBQUdnTixJQUFKLEtBQWE7QUFDMUJDLHlEQUFTO0FBQ1QsU0FBT2hMLHFEQUFPLENBQUMsR0FBRytLLElBQUosQ0FBZDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkR1bzloYW08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoQXBwKSk7ICAvLyBuZXh07JeQ7IScIHByb3ZpZGVy66W8IOyViOyNqOuPhCDrkJjripQg7J207JygIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb21tZW50czogW10sXHJcbiAgICBsb2FkQ29tbWVudHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRDb21tZW50c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZENvbW1lbnRzRXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19SRVFVRVNUID0gJ0xPQURfQ09NTUVOVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MgPSAnTE9BRF9DT01NRU5UU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfRkFJTFVSRSA9ICdMT0FEX0NPTU1FTlRTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRU1QVFlfQ09NTUVOVFNfUkVRVUVTVCA9ICdFTVBUWV9DT01NRU5UU19SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ29tbWVudHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0NPTU1FTlRTX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IEVNUFRZX0NPTU1FTlRTX1JFUVVFU1RcclxufSk7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfQ09NTUVOVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfQ09NTUVOVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY29tbWVudHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0NPTU1FTlRTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVNUFRZX0NPTU1FTlRTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCBjb21tZW50IGZyb20gJy4vY29tbWVudCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxuICAgIGNvbW1lbnQsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBvc3RzOiBbXSxcclxuICAgIG15TG9sUG9zdHM6IFtdLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkTG9sUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkTG9sUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkTG9sUG9zdEVycm9yOiBudWxsLFxyXG4gICAgZGVsZXRlTG9sUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGVsZXRlTG9sUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgZGVsZXRlTG9sUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdXBkYXRlTG9sUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBkYXRlTG9sUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdXBkYXRlTG9sUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGRldGFpbExvbFBvc3RPbjogZmFsc2UsXHJcbiAgICBkZXRhaWxMb2xQb3N0OiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUID0gJ0xPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTID0gJ0xPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFID0gJ0xPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfUkVRVUVTVCA9ICdBRERfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfU1VDQ0VTUyA9ICdBRERfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfRkFJTFVSRSA9ICdBRERfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QgPSAnREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9MT0xfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9MT0xfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9MT0xfUE9TVF9TVUNDRVNTID0gJ1VQREFURV9MT0xfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9MT0xfUE9TVF9GQUlMVVJFID0gJ1VQREFURV9MT0xfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERVRBSUxfTE9MX1BPU1RfT04gPSAnREVUQUlMX0xPTF9QT1NUX09OJztcclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PRkYgPSAnREVUQUlMX0xPTF9QT1NUX09GRic7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEFsbExvbFBvc3RzUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9sUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFVQREFURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGV0YWlsTG9sUG9zdE9uQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBERVRBSUxfTE9MX1BPU1RfT04sXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFVEFJTF9MT0xfUE9TVF9PRkYsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQREFURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51cGRhdGVMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZUxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC50b3AgPSBhY3Rpb24uZGF0YTIudG9wO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0Lmp1bmdsZSA9IGFjdGlvbi5kYXRhMi5qdW5nbGU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QubWlkID0gYWN0aW9uLmRhdGEyLm1pZDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5ib3R0b20gPSBhY3Rpb24uZGF0YTIuYm90dG9tO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0LnN1cHBvcnQgPSBhY3Rpb24uZGF0YTIuc3VwcG9ydDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5lbmRUaW1lID0gYWN0aW9uLmRhdGEyLmVuZFRpbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QuaGVhZENvdW50ID0gYWN0aW9uLmRhdGEyLmhlYWRDb3VudDtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5nYW1lTW9kZSA9IGFjdGlvbi5kYXRhMi5nYW1lTW9kZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC50aXRsZSA9IGFjdGlvbi5kYXRhMi50aXRsZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdC5jb250ZW50ID0gYWN0aW9uLmRhdGEyLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3QudGFsa09uID0gYWN0aW9uLmRhdGEyLnRhbGtPbjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBkYXRlTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PTjpcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PRkY6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0ID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBzaWduT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduT3V0RG9uZTogZmFsc2UsXHJcbiAgICBzaWduT3V0RXJyb3I6IG51bGwsICAgIFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHtcclxuICAgICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9TVUNDRVNTID0gJ1NJR05fT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25PdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBTSUdOX09VVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IGFjdGlvbi5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wbGF0Zm9ybSA9IGFjdGlvbi5kYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUucGxhdGZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0NPTU1FTlRTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvY29tbWVudCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29tbWVudHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2w/cG9zdElkPSR7ZGF0YS5wb3N0SWR9YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ29tbWVudHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZENvbW1lbnRzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2xgLFxyXG4gICAgICAgIHsgY29udGVudDogZGF0YS5jb250ZW50LCB1c2VySWQ6IGRhdGEudXNlcklkLCBwb3N0SWQ6IGRhdGEucG9zdElkLCBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2NvbW1lbnQvbG9sYCxcclxuICAgICAgICB7IGNvbW1lbnRJZDogZGF0YS5jb21tZW50SWQsIHVzZXJJZDogZGF0YS51c2VySWQgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZENvbW1lbnRzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NPTU1FTlRTX1JFUVVFU1QsIGxvYWRDb21tZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY29tbWVudFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQ29tbWVudHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQ29tZW50KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuXHJcbi8vIHJlZHV4LXNhZ2Eg64qUIOu5hOuPmeq4sCBhY3Rpb27snYQg7IiY7ZaJXHJcbi8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwsIGNhbGzsnYAg64+Z6riwIO2VqOyImCDtmLjstpwsIGFsbOydgCDrj5nsi5wg7Iuk7ZaJLFxyXG4vLyB0YWtlRXZlcnnripQg66y07ZWc66Oo7ZSEIHRha2XripQg7ZWc67KIIOyLpO2Wie2VmOuptCDsgqzrnbzsp5AsIHRha2VMYXRlc3TripQg66eI7KeA66eJIOyalOyyreunjCDsnZHri7VcclxuLy8gdGhyb3R0bGUgbm1zIOuPmeyViCDtlZzrsojrp4wg7JqU7LKtIO2VqFxyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY29tbWVudFNhZ2EgZnJvbSAnLi9jb21tZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoWyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm9vdCDsgqzqsIAg66eM65Ok6rOgIOunjOuTpOqzoCDsi7bsnYAg67mE64+Z6riwIOyVoeyFmCDrhKPslrTspIxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKGNvbW1lbnRTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUxhdGVzdCwgZm9yaywgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVUERBVEVfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIFVQREFURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBEQVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQWxsTG9sUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRBbGxMb2xQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsTG9sUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWU6IGRhdGEudXNlck5pY2tuYW1lLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLFxyXG4gICAgICAgICAgICBzdXBwb3J0OiBkYXRhLnN1cHBvcnQsIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgdGFsa29uOiBkYXRhLnRhbGtPbixcclxuICAgICAgICB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZExvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHsgcG9zdElkOiBkYXRhLnBvc3RJZCwgdXNlcklkOiBkYXRhLnVzZXJJZCB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wdXQoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL3Bvc3QvbG9sYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc3RJZDogZGF0YS5wb3N0SWQsIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgIGdhbWVNb2RlOiBkYXRhLmdhbWVNb2RlLCB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgc3RhcnRUaWVyOiBkYXRhLnN0YXJ0VGllciwgZW5kVGllcjogZGF0YS5lbmRUaWVyLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBkYXRhLmVuZFRpbWUsIGhlYWRDb3VudDogZGF0YS5oZWFkQ291bnQsXHJcbiAgICAgICAgICAgIHRvcDogZGF0YS50b3AsIGJvdHRvbTogZGF0YS5ib3R0b20sXHJcbiAgICAgICAgICAgIG1pZDogZGF0YS5taWQsIGp1bmdsZTogZGF0YS5qdW5nbGUsXHJcbiAgICAgICAgICAgIHN1cHBvcnQ6IGRhdGEuc3VwcG9ydCwgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgICAgICAgICB0YWxrb246IGRhdGEudGFsa09uLFxyXG4gICAgICAgIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZUxvbFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlTG9sUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhMjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQREFURV9MT0xfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEFsbExvbFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCwgbG9hZEFsbExvbFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkTG9sUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0xPTF9QT1NUX1JFUVVFU1QsIGFkZExvbFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfTE9MX1BPU1RfUkVRVUVTVCwgZGVsZXRlTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZUxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQREFURV9MT0xfUE9TVF9SRVFVRVNULCB1cGRhdGVMb2xQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEFsbExvbFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbGV0ZUxvbFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGRhdGVMb2xQb3N0KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgU0lHTl9PVVRfUkVRVUVTVCxcclxuICAgIFNJR05fT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX09VVF9GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgvJHtkYXRhLnBsYXRmb3JtfWAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLmFjY2Vzc1Rva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YS5jb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoLyR7ZGF0YS5wbGF0Zm9ybX1gLFxyXG4gICAgICAgIHsgbmlja25hbWU6IGRhdGEubmlja25hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEuYWNjZXNzVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEuY29kZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaWduT3V0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJ2h0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgnLCB7IHVzZXJJZDogZGF0YS51c2VySWR9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIHNpZ25PdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbk91dEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dCgnaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aCcsIHsgdXNlcklkOiBkYXRhLnVzZXJJZCwgbmlja25hbWU6IGRhdGEubmlja25hbWUgfSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEudXNlclRva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnbk91dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9PVVRfUkVRVUVTVCwgc2lnbk91dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRoY2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduT3V0KSwgLy8gY2hlY2sgZXJyb3IsXHJcbiAgICAgICAgZm9yayh3YXRoY2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgICAvLyDrsLDtj6zsmqnsl5DripQgZGV2dG9vbCDsl7Drj5kgeFxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==