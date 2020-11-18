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
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, ADD_LOL_POST_REQUEST, ADD_LOL_POST_SUCCESS, ADD_LOL_POST_FAILURE, DELETE_LOL_POST_REQUEST, DELETE_LOL_POST_SUCCESS, DELETE_LOL_POST_FAILURE, DETAIL_LOL_POST_ON, DETAIL_LOL_POST_OFF, loadAllLolPostsRequestAction, addLolPostRequestAction, deleteLolPostRequestAction, detailLolPostOnAction, detailLolPostOffAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_ON", function() { return DETAIL_LOL_POST_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAIL_LOL_POST_OFF", function() { return DETAIL_LOL_POST_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLolPostRequestAction", function() { return addLolPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLolPostRequestAction", function() { return deleteLolPostRequestAction; });
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

function* watchLoadAllLolPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_LOL_POSTS_REQUEST"], loadAllLolPosts);
}

function* watchAddLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_LOL_POST_REQUEST"], addLolPost);
}

function* watchDeleteLolPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_LOL_POST_REQUEST"], deleteLolPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadAllLolPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddLolPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteLolPost)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudHMiLCJsb2FkQ29tbWVudHNMb2FkaW5nIiwibG9hZENvbW1lbnRzRG9uZSIsImxvYWRDb21tZW50c0Vycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZUNvbW1lbnRMb2FkaW5nIiwicmVtb3ZlQ29tbWVudERvbmUiLCJyZW1vdmVDb21tZW50RXJyb3IiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyIsIlJFTU9WRV9DT01NRU5UX0ZBSUxVUkUiLCJFTVBUWV9DT01NRU5UU19SRVFVRVNUIiwibG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJyZW1vdmVDb21tZW50UmVxdWVzdEFjdGlvbiIsImVtcHR5Q29tbWVudHNSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImNvbW1lbnQiLCJwb3N0cyIsIm15TG9sUG9zdHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkTG9sUG9zdExvYWRpbmciLCJhZGRMb2xQb3N0RG9uZSIsImFkZExvbFBvc3RFcnJvciIsImRlbGV0ZUxvbFBvc3RMb2FkaW5nIiwiZGVsZXRlTG9sUG9zdERvbmUiLCJkZWxldGVMb2xQb3N0RXJyb3IiLCJkZXRhaWxMb2xQb3N0T24iLCJkZXRhaWxMb2xQb3N0IiwiTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyIsIkxPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFIiwiQUREX0xPTF9QT1NUX1JFUVVFU1QiLCJBRERfTE9MX1BPU1RfU1VDQ0VTUyIsIkFERF9MT0xfUE9TVF9GQUlMVVJFIiwiREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QiLCJERUxFVEVfTE9MX1BPU1RfU1VDQ0VTUyIsIkRFTEVURV9MT0xfUE9TVF9GQUlMVVJFIiwiREVUQUlMX0xPTF9QT1NUX09OIiwiREVUQUlMX0xPTF9QT1NUX09GRiIsImxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24iLCJhZGRMb2xQb3N0UmVxdWVzdEFjdGlvbiIsImRlbGV0ZUxvbFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9uQWN0aW9uIiwiZGV0YWlsTG9sUG9zdE9mZkFjdGlvbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJzaWduT3V0TG9hZGluZyIsInNpZ25PdXREb25lIiwic2lnbk91dEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwidXNlcklkIiwibmlja25hbWUiLCJ1c2VyVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInBsYXRmb3JtIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJzaWduT3V0UmVxdWVzdEFjdGlvbiIsImNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiIsImxvZ091dEVycm9yIiwibG9hZENvbW1lbnRzQVBJIiwiYXhpb3MiLCJnZXQiLCJwb3N0SWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvYWRDb21tZW50cyIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwiY29udGVudCIsImFkZENvbW1lbnQiLCJyZW1vdmVDb21tZW50QVBJIiwiZGVsZXRlIiwiY29tbWVudElkIiwicmVtb3ZlQ29tbWVudCIsIndhdGNoTG9hZENvbW1lbnRzIiwidGFrZUxhdGVzdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoUmVtb3ZlQ29tZW50IiwiY29tbWVudFNhZ2EiLCJhbGwiLCJmb3JrIiwicm9vdFNhZ2EiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwibG9hZEFsbExvbFBvc3RzQVBJIiwibG9hZEFsbExvbFBvc3RzIiwiYWRkTG9sUG9zdEFQSSIsInVzZXJOaWNrbmFtZSIsImdhbWVNb2RlIiwidGl0bGUiLCJzdGFydFRpZXIiLCJlbmRUaWVyIiwiZW5kVGltZSIsImhlYWRDb3VudCIsInRvcCIsImJvdHRvbSIsIm1pZCIsImp1bmdsZSIsInN1cHBvcnQiLCJ0YWxrb24iLCJ0YWxrT24iLCJhZGRMb2xQb3N0IiwiZGVsZXRlTG9sUG9zdEFQSSIsImRlbGV0ZUxvbFBvc3QiLCJ3YXRjaExvYWRBbGxMb2xQb3N0cyIsIndhdGNoQWRkTG9sUG9zdCIsIndhdGNoRGVsZXRlTG9sUG9zdCIsImxvZ2luQVBJIiwibG9nSW4iLCJjb2RlIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwic2lnbk91dEFQSSIsInNpZ25PdXQiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaFNpZ25PdXQiLCJ3YXRoY2hDaGFuZ2VOaWNrbmFtZSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFyZ3MiLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EdW85aGFtPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpOyAgLy8gbmV4dOyXkOyEnCBwcm92aWRlcuulvCDslYjsjajrj4Qg65CY64qUIOydtOycoCIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY29tbWVudHM6IFtdLFxyXG4gICAgbG9hZENvbW1lbnRzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkQ29tbWVudHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRDb21tZW50c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfUkVRVUVTVCA9ICdMT0FEX0NPTU1FTlRTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19TVUNDRVNTID0gJ0xPQURfQ09NTUVOVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUgPSAnTE9BRF9DT01NRU5UU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVNUFRZX0NPTU1FTlRTX1JFUVVFU1QgPSAnRU1QVFlfQ09NTUVOVFNfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENvbW1lbnRzUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eUNvbW1lbnRzUmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBFTVBUWV9DT01NRU5UU19SRVFVRVNUXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX0NPTU1FTlRTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0NPTU1FTlRTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNvbW1lbnRzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9DT01NRU5UU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRDb21tZW50c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZENvbW1lbnRzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkQ29tbWVudHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFTVBUWV9DT01NRU5UU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jb21tZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgY29tbWVudCBmcm9tICcuL2NvbW1lbnQnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbiAgICBjb21tZW50LFxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwb3N0czogW10sXHJcbiAgICBteUxvbFBvc3RzOiBbXSxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZExvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZExvbFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGRlbGV0ZUxvbFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3REb25lOiBmYWxzZSxcclxuICAgIGRlbGV0ZUxvbFBvc3RFcnJvcjogbnVsbCxcclxuXHJcblxyXG5cclxuICAgIGRldGFpbExvbFBvc3RPbjogZmFsc2UsXHJcbiAgICBkZXRhaWxMb2xQb3N0OiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUID0gJ0xPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTID0gJ0xPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFID0gJ0xPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfUkVRVUVTVCA9ICdBRERfTE9MX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfU1VDQ0VTUyA9ICdBRERfTE9MX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfTE9MX1BPU1RfRkFJTFVSRSA9ICdBRERfTE9MX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QgPSAnREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MgPSAnREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFVEFJTF9MT0xfUE9TVF9PTiA9ICdERVRBSUxfTE9MX1BPU1RfT04nO1xyXG5leHBvcnQgY29uc3QgREVUQUlMX0xPTF9QT1NUX09GRiA9ICdERVRBSUxfTE9MX1BPU1RfT0ZGJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExvbFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfTE9MX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVMb2xQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGV0YWlsTG9sUG9zdE9uQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBERVRBSUxfTE9MX1BPU1RfT04sXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXRhaWxMb2xQb3N0T2ZmQWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFVEFJTF9MT0xfUE9TVF9PRkYsXHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZExvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFTEVURV9MT0xfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5kZWxldGVMb2xQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUxvbFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZGVsZXRlTG9sUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PTjpcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZGV0YWlsTG9sUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIERFVEFJTF9MT0xfUE9TVF9PRkY6XHJcbiAgICAgICAgICAgIGRyYWZ0LmRldGFpbExvbFBvc3RPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5kZXRhaWxMb2xQb3N0ID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBzaWduT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduT3V0RG9uZTogZmFsc2UsXHJcbiAgICBzaWduT3V0RXJyb3I6IG51bGwsICAgIFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgbWU6IHtcclxuICAgICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9TVUNDRVNTID0gJ1NJR05fT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25PdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBTSUdOX09VVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IGFjdGlvbi5kYXRhLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wbGF0Zm9ybSA9IGFjdGlvbi5kYXRhLnBsYXRmb3JtO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUuYWNjZXNzVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5wbGF0Zm9ybSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VySWQgPSBhY3Rpb24uZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJUb2tlbiA9IGFjdGlvbi5kYXRhLnVzZXJUb2tlbjtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25PdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnbk91dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICAgIExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgIExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9jb21tZW50JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRDb21tZW50c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9jb21tZW50L2xvbD9wb3N0SWQ9JHtkYXRhLnBvc3RJZH1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDb21tZW50cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQ29tbWVudHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9jb21tZW50L2xvbGAsXHJcbiAgICAgICAgeyBjb250ZW50OiBkYXRhLmNvbnRlbnQsIHVzZXJJZDogZGF0YS51c2VySWQsIHBvc3RJZDogZGF0YS5wb3N0SWQsIG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvY29tbWVudC9sb2xgLFxyXG4gICAgICAgIHsgY29tbWVudElkOiBkYXRhLmNvbW1lbnRJZCwgdXNlcklkOiBkYXRhLnVzZXJJZCB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUNvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQ29tbWVudHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ09NTUVOVFNfUkVRVUVTVCwgbG9hZENvbW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUNvbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjb21tZW50U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRDb21tZW50cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVDb21lbnQpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5cclxuLy8gcmVkdXgtc2FnYSDripQg67mE64+Z6riwIGFjdGlvbuydhCDsiJjtlolcclxuLy8gZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nCwgY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nCwgYWxs7J2AIOuPmeyLnCDsi6TtloksXHJcbi8vIHRha2VFdmVyeeuKlCDrrLTtlZzro6jtlIQgdGFrZeuKlCDtlZzrsogg7Iuk7ZaJ7ZWY66m0IOyCrOudvOynkCwgdGFrZUxhdGVzdOuKlCDrp4jsp4Drp4kg7JqU7LKt66eMIOydkeuLtVxyXG4vLyB0aHJvdHRsZSBubXMg64+Z7JWIIO2VnOuyiOunjCDsmpTssq0g7ZWoXHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCBjb21tZW50U2FnYSBmcm9tICcuL2NvbW1lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb290IOyCrOqwgCDrp4zrk6Tqs6Ag66eM65Ok6rOgIOyLtuydgCDruYTrj5nquLAg7JWh7IWYIOuEo+yWtOykjFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsoY29tbWVudFNhZ2EpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCBmb3JrLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSxcclxuICAgIEFERF9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBBRERfTE9MX1BPU1RfRkFJTFVSRSxcclxuICAgIERFTEVURV9MT0xfUE9TVF9SRVFVRVNULFxyXG4gICAgREVMRVRFX0xPTF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBERUxFVEVfTE9MX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRBbGxMb2xQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge30sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbExvbFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRBbGxMb2xQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMb2xQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9wb3N0L2xvbGAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VyTmlja25hbWU6IGRhdGEudXNlck5pY2tuYW1lLCB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICBnYW1lTW9kZTogZGF0YS5nYW1lTW9kZSwgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHN0YXJ0VGllcjogZGF0YS5zdGFydFRpZXIsIGVuZFRpZXI6IGRhdGEuZW5kVGllcixcclxuICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLCBoZWFkQ291bnQ6IGRhdGEuaGVhZENvdW50LFxyXG4gICAgICAgICAgICB0b3A6IGRhdGEudG9wLCBib3R0b206IGRhdGEuYm90dG9tLFxyXG4gICAgICAgICAgICBtaWQ6IGRhdGEubWlkLCBqdW5nbGU6IGRhdGEuanVuZ2xlLFxyXG4gICAgICAgICAgICBzdXBwb3J0OiBkYXRhLnN1cHBvcnQsIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgdGFsa29uOiBkYXRhLnRhbGtPbixcclxuICAgICAgICB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBhZGRMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZExvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUxvbFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvcG9zdC9sb2xgLFxyXG4gICAgICAgIHsgcG9zdElkOiBkYXRhLnBvc3RJZCwgdXNlcklkOiBkYXRhLnVzZXJJZCB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVMb2xQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUxvbFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9MT0xfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0xPTF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQWxsTG9sUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULCBsb2FkQWxsTG9sUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRMb2xQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfTE9MX1BPU1RfUkVRVUVTVCwgYWRkTG9sUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZUxvbFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9MT0xfUE9TVF9SRVFVRVNULCBkZWxldGVMb2xQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEFsbExvbFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkTG9sUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbGV0ZUxvbFBvc3QpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBTSUdOX09VVF9SRVFVRVNULFxyXG4gICAgU0lHTl9PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fT1VUX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aC8ke2RhdGEucGxhdGZvcm19YCxcclxuICAgICAgICB7fSwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGRhdGEuYWNjZXNzVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLmNvZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9lYzItMTgtMjIyLTE0My0xNTYudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTozMDAwL2F1dGgvJHtkYXRhLnBsYXRmb3JtfWAsXHJcbiAgICAgICAgeyBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS5hY2Nlc3NUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5jb2RlKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25PdXRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSgnaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aCcsIHsgdXNlcklkOiBkYXRhLnVzZXJJZH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLnVzZXJUb2tlbiB9IH0pO1xyXG5cclxufVxyXG5mdW5jdGlvbiogc2lnbk91dChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduT3V0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9PVVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucHV0KCdodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoJywgeyB1c2VySWQ6IGRhdGEudXNlcklkLCBuaWNrbmFtZTogZGF0YS5uaWNrbmFtZSB9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS51c2VyVG9rZW4gfSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX09VVF9SRVFVRVNULCBzaWduT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGhjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25PdXQpLCAvLyBjaGVjayBlcnJvcixcclxuICAgICAgICBmb3JrKHdhdGhjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAgIC8vIOuwsO2PrOyaqeyXkOuKlCBkZXZ0b29sIOyXsOuPmSB4XHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9