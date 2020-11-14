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
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_ALL_LOL_POSTS_REQUEST, LOAD_ALL_LOL_POSTS_SUCCESS, LOAD_ALL_LOL_POSTS_FAILURE, loadAllLolPostsRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_REQUEST", function() { return LOAD_ALL_LOL_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_SUCCESS", function() { return LOAD_ALL_LOL_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_LOL_POSTS_FAILURE", function() { return LOAD_ALL_LOL_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllLolPostsRequestAction", function() { return loadAllLolPostsRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  posts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null
};
const LOAD_ALL_LOL_POSTS_REQUEST = 'LOAD_ALL_LOL_POSTS_REQUEST';
const LOAD_ALL_LOL_POSTS_SUCCESS = 'LOAD_ALL_LOL_POSTS_SUCCESS';
const LOAD_ALL_LOL_POSTS_FAILURE = 'LOAD_ALL_LOL_POSTS_FAILURE';
const loadAllLolPostsRequestAction = data => ({
  type: LOAD_ALL_LOL_POSTS_REQUEST,
  data // userToken

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
      draft.posts = draft.posts.concat(action.data);
      break;

    case LOAD_ALL_LOL_POSTS_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, loginRequestAction, logoutRequestAction, signUpRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequestAction", function() { return signUpRequestAction; });
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

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      draft.me.accessToken = action.data;
      draft.me.platform = action.data;
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

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
 // redux-saga 는 비동기 action을 수행
// fork는 비동기 함수 호출, call은 동기 함수 호출, all은 동시 실행,
// takeEvery는 무한루프 take는 한번 실행하면 사라짐, takeLatest는 마지막 요청만 응답
// throttle nms 동안 한번만 요청 함


function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// root 사가 만들고 만들고 싶은 비동기 액션 넣어줌
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"])]);
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

function* signUp() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err.response.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
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

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJwb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCIsIkxPQURfQUxMX0xPTF9QT1NUU19TVUNDRVNTIiwiTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkUiLCJsb2FkQWxsTG9sUG9zdHNSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJlcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsInVzZXJJZCIsIm5pY2tuYW1lIiwidXNlclRva2VuIiwiYWNjZXNzVG9rZW4iLCJwbGF0Zm9ybSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWduVXBSZXF1ZXN0QWN0aW9uIiwibG9nT3V0RXJyb3IiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsImxvZ2luQVBJIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvZ0luIiwicmVzdWx0IiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImNvZGUiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvZ0luIiwidGFrZUxhdGVzdCIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJhcmdzIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzNCLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosQ0FESixFQUtJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FESjtBQVVILENBWEQ7O0FBYUFELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQjtBQUNaRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRHJCLENBQWhCO0FBR2VDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLEdBQUQsQ0FBL0IsQ0FBZixFLENBQXVELDZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ2RDtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1TLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNoQ0MsT0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDM0IsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBS0MsMERBQUw7QUFDSSwrQ0FBV0gsS0FBWCxHQUFxQkMsTUFBTSxDQUFDRyxPQUE1Qjs7QUFDSjtBQUNJLGVBQU9KLEtBQVA7QUFKUjtBQU1ILEdBUitCO0FBU2hDSyxxREFUZ0M7QUFVaENDLHFEQUFJQTtBQVY0QixDQUFELENBQW5DO0FBZWVULDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVUsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQUMsRUFEa0I7QUFFeEJDLGlCQUFlLEVBQUUsS0FGTztBQUd4QkMsY0FBWSxFQUFFLEtBSFU7QUFJeEJDLGVBQWEsRUFBRTtBQUpTLENBQXJCO0FBT0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBR0EsTUFBTUMsNEJBQTRCLEdBQUlDLElBQUQsS0FBVztBQUNuRGQsTUFBSSxFQUFFVSwwQkFENkM7QUFFbkRJLE1BRm1ELENBRTNDOztBQUYyQyxDQUFYLENBQXJDOztBQU1QLE1BQU1DLE9BQU8sR0FBRyxDQUFDakIsS0FBSyxHQUFHTyxZQUFULEVBQXVCTixNQUF2QixLQUFrQ2lCLDZEQUFPLENBQUNsQixLQUFELEVBQVNtQixLQUFELElBQVc7QUFDeEUsVUFBUWxCLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtVLDBCQUFMO0FBQ0lPLFdBQUssQ0FBQ1YsZUFBTixHQUF3QixJQUF4QjtBQUNBVSxXQUFLLENBQUNULFlBQU4sR0FBcUIsS0FBckI7QUFDQVMsV0FBSyxDQUFDUixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0osU0FBS0UsMEJBQUw7QUFDSU0sV0FBSyxDQUFDVixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FVLFdBQUssQ0FBQ1QsWUFBTixHQUFxQixJQUFyQjtBQUNBUyxXQUFLLENBQUNYLEtBQU4sR0FBY1csS0FBSyxDQUFDWCxLQUFOLENBQVlZLE1BQVosQ0FBbUJuQixNQUFNLENBQUNlLElBQTFCLENBQWQ7QUFDQTs7QUFDSixTQUFLRiwwQkFBTDtBQUNJSyxXQUFLLENBQUNWLGVBQU4sR0FBd0IsS0FBeEI7QUFDQVUsV0FBSyxDQUFDUixhQUFOLEdBQXNCVixNQUFNLENBQUNvQixLQUE3QjtBQUNBOztBQUNKO0FBQ0k7QUFoQlI7QUFrQkgsQ0FuQndELENBQXpEOztBQXFCZUosc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVYsWUFBWSxHQUFHO0FBQ3hCZSxjQUFZLEVBQUUsS0FEVTtBQUV4QkMsV0FBUyxFQUFFLEtBRmE7QUFHeEJDLFlBQVUsRUFBRSxJQUhZO0FBSXhCQyxlQUFhLEVBQUUsS0FKUztBQUt4QkMsWUFBVSxFQUFFLEtBTFk7QUFNeEJGLFlBQVUsRUFBRSxJQU5ZO0FBT3hCRyxlQUFhLEVBQUUsS0FQUztBQVF4QkMsWUFBVSxFQUFFLEtBUlk7QUFTeEJDLGFBQVcsRUFBRSxJQVRXO0FBVXhCQyxJQUFFLEVBQUU7QUFDQUMsVUFBTSxFQUFFLElBRFI7QUFFQUMsWUFBUSxFQUFFLElBRlY7QUFHQUMsYUFBUyxFQUFFLElBSFg7QUFJQUMsZUFBVyxFQUFFLElBSmI7QUFLQUMsWUFBUSxFQUFFO0FBTFY7QUFWb0IsQ0FBckI7QUFtQkEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBR0EsTUFBTUMsa0JBQWtCLEdBQUk3QixJQUFELEtBQVc7QUFDekNkLE1BQUksRUFBRWtDLGNBRG1DO0FBRXpDcEI7QUFGeUMsQ0FBWCxDQUEzQjtBQUtBLE1BQU04QixtQkFBbUIsR0FBRyxPQUFPO0FBQ3RDNUMsTUFBSSxFQUFFcUM7QUFEZ0MsQ0FBUCxDQUE1QjtBQUlBLE1BQU1RLG1CQUFtQixHQUFJL0IsSUFBRCxLQUFXO0FBQzFDZCxNQUFJLEVBQUV3QyxlQURvQztBQUUxQzFCO0FBRjBDLENBQVgsQ0FBNUI7O0FBS1AsTUFBTUMsT0FBTyxHQUFHLENBQUNqQixLQUFLLEdBQUdPLFlBQVQsRUFBdUJOLE1BQXZCLEtBQWtDaUIsNkRBQU8sQ0FBQ2xCLEtBQUQsRUFBU21CLEtBQUQsSUFBVztBQUN4RSxVQUFRbEIsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2tDLGNBQUw7QUFDSWpCLFdBQUssQ0FBQ0csWUFBTixHQUFxQixJQUFyQjtBQUNBSCxXQUFLLENBQUNLLFVBQU4sR0FBbUIsSUFBbkI7QUFDQUwsV0FBSyxDQUFDSSxTQUFOLEdBQWtCLEtBQWxCO0FBQ0FKLFdBQUssQ0FBQ1csRUFBTixDQUFTSSxXQUFULEdBQXVCakMsTUFBTSxDQUFDZSxJQUE5QjtBQUNBRyxXQUFLLENBQUNXLEVBQU4sQ0FBU0ssUUFBVCxHQUFvQmxDLE1BQU0sQ0FBQ2UsSUFBM0I7QUFDQTs7QUFDSixTQUFLcUIsY0FBTDtBQUNJbEIsV0FBSyxDQUFDRyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0FILFdBQUssQ0FBQ0ssVUFBTixHQUFtQixJQUFuQjtBQUNBTCxXQUFLLENBQUNJLFNBQU4sR0FBa0IsSUFBbEI7QUFDQUosV0FBSyxDQUFDVyxFQUFOLENBQVNDLE1BQVQsR0FBa0I5QixNQUFNLENBQUNlLElBQVAsQ0FBWWUsTUFBOUI7QUFDQVosV0FBSyxDQUFDVyxFQUFOLENBQVNFLFFBQVQsR0FBb0IvQixNQUFNLENBQUNlLElBQVAsQ0FBWWdCLFFBQWhDO0FBQ0FiLFdBQUssQ0FBQ1csRUFBTixDQUFTRyxTQUFULEdBQXFCaEMsTUFBTSxDQUFDZSxJQUFQLENBQVlpQixTQUFqQztBQUNBOztBQUNKLFNBQUtLLGNBQUw7QUFDSW5CLFdBQUssQ0FBQ0csWUFBTixHQUFxQixLQUFyQjtBQUNBSCxXQUFLLENBQUNLLFVBQU4sR0FBbUJ2QixNQUFNLENBQUNvQixLQUExQjtBQUNBOztBQUNKLFNBQUtrQixlQUFMO0FBQ0lwQixXQUFLLENBQUNNLGFBQU4sR0FBc0IsSUFBdEI7QUFDQU4sV0FBSyxDQUFDNkIsV0FBTixHQUFvQixJQUFwQjtBQUNBN0IsV0FBSyxDQUFDTyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7O0FBQ0osU0FBS2MsZUFBTDtBQUNJckIsV0FBSyxDQUFDTSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FOLFdBQUssQ0FBQ08sVUFBTixHQUFtQixJQUFuQjtBQUNBUCxXQUFLLENBQUNXLEVBQU4sQ0FBU0MsTUFBVCxHQUFrQixJQUFsQjtBQUNBWixXQUFLLENBQUNXLEVBQU4sQ0FBU0UsUUFBVCxHQUFvQixJQUFwQjtBQUNBYixXQUFLLENBQUNXLEVBQU4sQ0FBU0csU0FBVCxHQUFxQixJQUFyQjtBQUNBZCxXQUFLLENBQUNXLEVBQU4sQ0FBU0ksV0FBVCxHQUF1QixJQUF2QjtBQUNBZixXQUFLLENBQUNXLEVBQU4sQ0FBU0ssUUFBVCxHQUFvQixJQUFwQjtBQUNBOztBQUNKLFNBQUtPLGVBQUw7QUFDSXZCLFdBQUssQ0FBQ1csRUFBTixDQUFTQyxNQUFULEdBQWtCOUIsTUFBTSxDQUFDZSxJQUFQLENBQVllLE1BQTlCO0FBQ0FaLFdBQUssQ0FBQ1csRUFBTixDQUFTRSxRQUFULEdBQW9CL0IsTUFBTSxDQUFDZSxJQUFQLENBQVlnQixRQUFoQztBQUNBYixXQUFLLENBQUNXLEVBQU4sQ0FBU0csU0FBVCxHQUFxQmhDLE1BQU0sQ0FBQ2UsSUFBUCxDQUFZaUIsU0FBakM7QUFDQWQsV0FBSyxDQUFDUSxhQUFOLEdBQXNCLElBQXRCO0FBQ0FSLFdBQUssQ0FBQ1UsV0FBTixHQUFvQixJQUFwQjtBQUNBVixXQUFLLENBQUNTLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFDSixTQUFLZSxlQUFMO0FBQ0l4QixXQUFLLENBQUNLLFVBQU4sR0FBbUIsSUFBbkI7QUFDQUwsV0FBSyxDQUFDUSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FSLFdBQUssQ0FBQ1MsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNKLFNBQUtnQixlQUFMO0FBQ0l6QixXQUFLLENBQUNRLGFBQU4sR0FBc0IsS0FBdEI7QUFDQVIsV0FBSyxDQUFDVSxXQUFOLEdBQW9CNUIsTUFBTSxDQUFDb0IsS0FBM0I7QUFDQTs7QUFDSjtBQUNJO0FBcERSO0FBc0RILENBdkR3RCxDQUF6RDs7QUF5RGVKLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHZSxVQUFVZ0MsUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQThCO0FBQ3BDQyxpRUFBSSxDQUFDQyw2Q0FBRCxDQURFLENBQUQsQ0FBVDtBQUdILEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQVlBLFNBQVNDLFFBQVQsQ0FBa0JyQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPc0MsNENBQUssQ0FBQ2hELElBQU4sQ0FBWSx1RUFBc0VVLElBQUksQ0FBQ21CLFFBQVMsRUFBaEcsRUFDSCxFQURHLEVBQ0M7QUFBRW9CLFdBQU8sRUFBRTtBQUFFQyxtQkFBYSxFQUFFeEMsSUFBSSxDQUFDa0I7QUFBdEI7QUFBWCxHQURELENBQVA7QUFFSDs7QUFFRCxVQUFVdUIsS0FBVixDQUFnQnhELE1BQWhCLEVBQXdCO0FBQ3BCLE1BQUk7QUFDQSxVQUFNeUQsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNOLFFBQUQsRUFBV3BELE1BQU0sQ0FBQ2UsSUFBbEIsQ0FBekI7QUFDQTRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0EsVUFBTUksOERBQUcsQ0FBQztBQUNONUQsVUFBSSxFQUFFbUMsNkRBREE7QUFFTnJCLFVBQUksRUFBRTBDLE1BQU0sQ0FBQzFDO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FQRCxDQU9FLE9BQU8rQyxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ041RCxVQUFJLEVBQUVvQyw2REFEQTtBQUVOakIsV0FBSyxFQUFFMEMsR0FBRyxDQUFDQyxRQUFKLENBQWFoRCxJQUFiLENBQWtCaUQ7QUFGbkIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFHRCxVQUFVQyxNQUFWLEdBQW1CO0FBQ2YsTUFBSTtBQUNBLFVBQU1KLDhEQUFHLENBQUM7QUFDTjVELFVBQUksRUFBRXNDLDhEQUFlQTtBQURmLEtBQUQsQ0FBVDtBQUdILEdBSkQsQ0FJRSxPQUFPdUIsR0FBUCxFQUFZO0FBQ1YsVUFBTUQsOERBQUcsQ0FBQztBQUNONUQsVUFBSSxFQUFFdUMsOERBREE7QUFFTnBCLFdBQUssRUFBRTBDLEdBQUcsQ0FBQ0MsUUFBSixDQUFhaEQ7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNtRCxTQUFULENBQW1CbkQsSUFBbkIsRUFBeUI7QUFDckIsU0FBT3NDLDRDQUFLLENBQUNoRCxJQUFOLENBQVksdUVBQXNFVSxJQUFJLENBQUNtQixRQUFTLEVBQWhHLEVBQ0g7QUFBRUgsWUFBUSxFQUFFaEIsSUFBSSxDQUFDZ0I7QUFBakIsR0FERyxFQUMwQjtBQUFFdUIsV0FBTyxFQUFFO0FBQUVDLG1CQUFhLEVBQUV4QyxJQUFJLENBQUNrQjtBQUF0QjtBQUFYLEdBRDFCLENBQVA7QUFFSDs7QUFFRCxVQUFVa0MsTUFBVixHQUFtQjtBQUNmLE1BQUk7QUFDQSxVQUFNVixNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1EsU0FBRCxFQUFZbEUsTUFBTSxDQUFDZSxJQUFuQixDQUF6QjtBQUNBLFVBQU04Qyw4REFBRyxDQUFDO0FBQ041RCxVQUFJLEVBQUV5Qyw4REFEQTtBQUVOM0IsVUFBSSxFQUFFMEMsTUFBTSxDQUFDMUM7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTytDLEdBQVAsRUFBWTtBQUNWSCxXQUFPLENBQUN2QyxLQUFSLENBQWMwQyxHQUFHLENBQUNDLFFBQUosQ0FBYWhELElBQTNCO0FBQ0EsVUFBTThDLDhEQUFHLENBQUM7QUFDTjVELFVBQUksRUFBRTBDLDhEQURBO0FBRU52QixXQUFLLEVBQUUwQyxHQUFHLENBQUNDLFFBQUosQ0FBYWhEO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFJRCxVQUFVcUQsVUFBVixHQUF1QjtBQUNuQixRQUFNQyxxRUFBVSxDQUFDbEMsNkRBQUQsRUFBaUJxQixLQUFqQixDQUFoQjtBQUNIOztBQUVELFVBQVVjLFdBQVYsR0FBd0I7QUFDcEIsUUFBTUQscUVBQVUsQ0FBQy9CLDhEQUFELEVBQWtCMkIsTUFBbEIsQ0FBaEI7QUFDSDs7QUFFRCxVQUFVTSxXQUFWLEdBQXdCO0FBQ3BCLFFBQU1GLHFFQUFVLENBQUM1Qiw4REFBRCxFQUFrQjBCLE1BQWxCLENBQWhCO0FBQ0g7O0FBRWMsVUFBVWhCLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUYsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDa0IsVUFBRCxDQURFLEVBRU5sQiwrREFBSSxDQUFDb0IsV0FBRCxDQUZFLEVBR05wQiwrREFBSSxDQUFDcUIsV0FBRCxDQUhFLENBQUQsQ0FBVDtBQUtILEM7Ozs7Ozs7Ozs7OztBQzNGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxNQUFNO0FBQ3pCLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7QUFDQSxRQUFNRyxRQUFRLEdBQUcsUUFDWEMsU0FEVyxDQUNnQztBQURoQyxJQUVYQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnpCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDakUsaURBQUQsRUFBVTRELFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJuQyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPZ0MsS0FBUDtBQUNILENBVkQ7O0FBWUEsTUFBTXZGLE9BQU8sR0FBRzJGLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDMUNhLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZTVGLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGdFQUFDLEdBQUc2RixJQUFKLEtBQWE7QUFDMUJDLHlEQUFTO0FBQ1QsU0FBT3RFLHFEQUFPLENBQUMsR0FBR3FFLElBQUosQ0FBZDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkR1bzloYW08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59O1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoQXBwKSk7ICAvLyBuZXh07JeQ7IScIHByb3ZpZGVy66W8IOyViOyNqOuPhCDrkJjripQg7J207JygIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwb3N0czpbXSxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0FMTF9MT0xfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRBbGxMb2xQb3N0c1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNULFxyXG4gICAgZGF0YSwgICAvLyB1c2VyVG9rZW5cclxufSk7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfQUxMX0xPTF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5wb3N0cyA9IGRyYWZ0LnBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfTE9MX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgbWU6IHtcclxuICAgICAgICB1c2VySWQ6IG51bGwsXHJcbiAgICAgICAgbmlja25hbWU6IG51bGwsXHJcbiAgICAgICAgdXNlclRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgICAgIHBsYXRmb3JtOiBudWxsLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLmFjY2Vzc1Rva2VuID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gYWN0aW9uLmRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBhY3Rpb24uZGF0YS51c2VyVG9rZW47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS51c2VyVG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5hY2Nlc3NUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnBsYXRmb3JtID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLnVzZXJJZCA9IGFjdGlvbi5kYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQubWUudXNlclRva2VuID0gYWN0aW9uLmRhdGEudXNlclRva2VuO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuXHJcbi8vIHJlZHV4LXNhZ2Eg64qUIOu5hOuPmeq4sCBhY3Rpb27snYQg7IiY7ZaJXHJcbi8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpwsIGNhbGzsnYAg64+Z6riwIO2VqOyImCDtmLjstpwsIGFsbOydgCDrj5nsi5wg7Iuk7ZaJLFxyXG4vLyB0YWtlRXZlcnnripQg66y07ZWc66Oo7ZSEIHRha2XripQg7ZWc67KIIOyLpO2Wie2VmOuptCDsgqzrnbzsp5AsIHRha2VMYXRlc3TripQg66eI7KeA66eJIOyalOyyreunjCDsnZHri7VcclxuLy8gdGhyb3R0bGUgbm1zIOuPmeyViCDtlZzrsojrp4wg7JqU7LKtIO2VqFxyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvb3Qg7IKs6rCAIOunjOuTpOqzoCDrp4zrk6Tqs6Ag7Iu27J2AIOu5hOuPmeq4sCDslaHshZgg64Sj7Ja07KSMXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vZWMyLTE4LTIyMi0xNDMtMTU2LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206MzAwMC9hdXRoLyR7ZGF0YS5wbGF0Zm9ybX1gLFxyXG4gICAgICAgIHt9LCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogZGF0YS5hY2Nlc3NUb2tlbiB9IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YS5jb2RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2VjMi0xOC0yMjItMTQzLTE1Ni51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjMwMDAvYXV0aC8ke2RhdGEucGxhdGZvcm19YCxcclxuICAgICAgICB7IG5pY2tuYW1lOiBkYXRhLm5pY2tuYW1lIH0sIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBkYXRhLmFjY2Vzc1Rva2VuIH0gfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAgIC8vIOuwsO2PrOyaqeyXkOuKlCBkZXZ0b29sIOyXsOuPmSB4XHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9