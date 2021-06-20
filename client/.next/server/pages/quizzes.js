(function() {
var exports = {};
exports.id = "pages/quizzes";
exports.ids = ["pages/quizzes"];
exports.modules = {

/***/ "./pages/quizzes.js":
/*!**************************!*\
  !*** ./pages/quizzes.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_pages_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pages/MainPage */ "./src/pages/MainPage.js");


var _jsxFileName = "C:\\Users\\Admin\\code\\lexi\\client\\pages\\quizzes.js";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Lexi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_pages_MainPage__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/CustomButton.js":
/*!****************************************!*\
  !*** ./src/components/CustomButton.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Admin\\code\\lexi\\client\\src\\components\\CustomButton.js";





const useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  customButton: {
    margin: '10px',
    minHeight: '7rem',
    height: '10rem',
    width: '100%',
    textTransform: 'capitalize',
    background: 'linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(46,46,57,1) 45%, rgba(29,107,130,1) 100%, rgba(0,212,255,1) 100%)'
  },
  customButtonCorrect: {
    background: 'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(85,255,127,1) 0%, rgba(41,163,53,1) 100%)'
  },
  customButtonIncorrect: {
    background: 'linear-gradient(50deg, rgba(230,230,230,1) 0%, rgba(255,95,85,1) 0%, rgba(190,22,22,1) 100%)'
  },
  buttonText: {
    color: '#fceceb',
    fontWeight: '600',
    fontSize: '2rem'
  }
}));
function CustomButton(props) {
  const classes = useStyles();
  const {
    children,
    handleClick,
    isCorrect,
    isDisabled
  } = props;
  const {
    0: correct,
    1: setCorrect
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleAnswer = () => {
    setCorrect(isCorrect);
    handleClick();
  }; // using answered from parent to determine isDisabled


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isDisabled == false) {
      setCorrect(null);
    }
  }, [isDisabled]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 6,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "contained",
      className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.customButton, {
        [classes.customButtonCorrect]: correct == true
      }, {
        [classes.customButtonIncorrect]: correct == false
      }),
      onClick: handleAnswer,
      disabled: isDisabled,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        className: classes.buttonText,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "./src/pages/MainPage.js":
/*!*******************************!*\
  !*** ./src/pages/MainPage.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomButton */ "./src/components/CustomButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Details */ "@material-ui/icons/Details");
/* harmony import */ var _material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Admin\\code\\lexi\\client\\src\\pages\\MainPage.js";








const buttons = [1, 2, 3, 4];
const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  container: {
    position: 'absolute',
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContainer: {
    display: 'flex',
    minHeight: '33%',
    justifyContent: 'center' // border: '5px solid pink',

  },
  question: {
    fontWeight: 600,
    fontSize: '3rem'
  },
  buttonContainer: {
    alignSelf: 'flex-end'
  },
  next: {
    fontSize: '4rem',
    color: 'black',
    transform: 'rotate(-90deg)'
  },
  nextButton: {
    position: 'absolute',
    left: '91%',
    top: '3%'
  }
}));

function getRandomInt(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MainPage() {
  const classes = useStyles();
  const {
    0: currentQuestion,
    1: setCurrentQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: answer,
    1: setAnswer
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: answered,
    1: setAnswered
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleClick = event => {
    setAnswered(true);
  };

  const setNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswer(getRandomInt(1, 4));
    setAnswered(false);
  };

  async function fetchData() {
    const {
      0: questions,
      1: setQuestions
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().get('https://opentdb.com/api.php?amount=10&type=multiple');
    const {
      data
    } = response;
    setQuestions(data.results);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      hidden: !answered,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        className: classes.nextButton,
        onClick: setNextQuestion,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Details__WEBPACK_IMPORTED_MODULE_4___default()), {
          className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.next)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.textContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        className: classes.question,
        children: "Pick a random number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
      className: classes.buttonContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        container: true,
        spacing: 5,
        children: buttons.map((d, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomButton__WEBPACK_IMPORTED_MODULE_2__.default, {
          isCorrect: d == answer,
          handleClick: handleClick,
          isDisabled: answered,
          children: d
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/icons/Details":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Details" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Details");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/quizzes.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXhpLy4vcGFnZXMvcXVpenplcy5qcyIsIndlYnBhY2s6Ly9sZXhpLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uLmpzIiwid2VicGFjazovL2xleGkvLi9zcmMvcGFnZXMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vbGV4aS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vbGV4aS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EZXRhaWxzXCIiLCJ3ZWJwYWNrOi8vbGV4aS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9sZXhpL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9sZXhpL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL2xleGkvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9sZXhpL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sZXhpL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImN1c3RvbUJ1dHRvbiIsIm1hcmdpbiIsIm1pbkhlaWdodCIsImhlaWdodCIsIndpZHRoIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmQiLCJjdXN0b21CdXR0b25Db3JyZWN0IiwiY3VzdG9tQnV0dG9uSW5jb3JyZWN0IiwiYnV0dG9uVGV4dCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiQ3VzdG9tQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJoYW5kbGVDbGljayIsImlzQ29ycmVjdCIsImlzRGlzYWJsZWQiLCJjb3JyZWN0Iiwic2V0Q29ycmVjdCIsInVzZVN0YXRlIiwiaGFuZGxlQW5zd2VyIiwidXNlRWZmZWN0IiwiY2xzeCIsImJ1dHRvbnMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInRleHRDb250YWluZXIiLCJxdWVzdGlvbiIsImJ1dHRvbkNvbnRhaW5lciIsImFsaWduU2VsZiIsIm5leHQiLCJ0cmFuc2Zvcm0iLCJuZXh0QnV0dG9uIiwibGVmdCIsInRvcCIsImdldFJhbmRvbUludCIsIm1heCIsIm1pbiIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJNYWluUGFnZSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImFuc3dlciIsInNldEFuc3dlciIsImFuc3dlcmVkIiwic2V0QW5zd2VyZWQiLCJldmVudCIsInNldE5leHRRdWVzdGlvbiIsImZldGNoRGF0YSIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsImQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDOUIsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUMsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUEsa0JBREQ7QUFRQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsU0FBUyxHQUFHQywrREFBVSxDQUFFQyxLQUFELEtBQVk7QUFDeENDLGNBQVksRUFBRTtBQUNiQyxVQUFNLEVBQUUsTUFESztBQUViQyxhQUFTLEVBQUUsTUFGRTtBQUdiQyxVQUFNLEVBQUUsT0FISztBQUliQyxTQUFLLEVBQUUsTUFKTTtBQUtiQyxpQkFBYSxFQUFFLFlBTEY7QUFNYkMsY0FB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O0FBQUEsb0JBTUVZO0FBTkYsV0FDTUMsQ0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTRCQSxDOzs7Ozs7Ozs7OztBQ3BHRCwrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9xdWl6emVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uL3NyYy9wYWdlcy9NYWluUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+TGV4aTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PE1haW5QYWdlIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGN1c3RvbUJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiAnMTBweCcsXHJcblx0XHRtaW5IZWlnaHQ6ICc3cmVtJyxcclxuXHRcdGhlaWdodDogJzEwcmVtJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg0Niw0Niw1NywxKSA0NSUsIHJnYmEoMjksMTA3LDEzMCwxKSAxMDAlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKScsXHJcblx0fSxcclxuXHRjdXN0b21CdXR0b25Db3JyZWN0OiB7XHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDIzMCwyMzAsMjMwLDEpIDAlLCByZ2JhKDg1LDI1NSwxMjcsMSkgMCUsIHJnYmEoNDEsMTYzLDUzLDEpIDEwMCUpJyxcclxuXHR9LFxyXG5cdGN1c3RvbUJ1dHRvbkluY29ycmVjdDoge1xyXG5cdFx0YmFja2dyb3VuZDpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgyMzAsMjMwLDIzMCwxKSAwJSwgcmdiYSgyNTUsOTUsODUsMSkgMCUsIHJnYmEoMTkwLDIyLDIyLDEpIDEwMCUpJyxcclxuXHR9LFxyXG5cdGJ1dHRvblRleHQ6IHtcclxuXHRcdGNvbG9yOiAnI2ZjZWNlYicsXHJcblx0XHRmb250V2VpZ2h0OiAnNjAwJyxcclxuXHRcdGZvbnRTaXplOiAnMnJlbScsXHJcblx0fSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21CdXR0b24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjaGlsZHJlbiwgaGFuZGxlQ2xpY2ssIGlzQ29ycmVjdCwgaXNEaXNhYmxlZCB9ID0gcHJvcHM7XHJcblx0Y29uc3QgW2NvcnJlY3QsIHNldENvcnJlY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgaGFuZGxlQW5zd2VyID0gKCkgPT4ge1xyXG5cdFx0c2V0Q29ycmVjdChpc0NvcnJlY3QpO1xyXG5cdFx0aGFuZGxlQ2xpY2soKTtcclxuXHR9O1xyXG5cdC8vIHVzaW5nIGFuc3dlcmVkIGZyb20gcGFyZW50IHRvIGRldGVybWluZSBpc0Rpc2FibGVkXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc0Rpc2FibGVkID09IGZhbHNlKSB7XHJcblx0XHRcdHNldENvcnJlY3QobnVsbCk7XHJcblx0XHR9XHJcblx0fSwgW2lzRGlzYWJsZWRdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5jdXN0b21CdXR0b24sXHJcblx0XHRcdFx0XHR7IFtjbGFzc2VzLmN1c3RvbUJ1dHRvbkNvcnJlY3RdOiBjb3JyZWN0ID09IHRydWUgfSxcclxuXHRcdFx0XHRcdHsgW2NsYXNzZXMuY3VzdG9tQnV0dG9uSW5jb3JyZWN0XTogY29ycmVjdCA9PSBmYWxzZSB9XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVBbnN3ZXJ9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uVGV4dH0+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L0dyaWQ+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbic7XHJcbmltcG9ydCB7IEljb25CdXR0b24sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IERldGFpbHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZXRhaWxzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGJ1dHRvbnMgPSBbMSwgMiwgMywgNF07XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGNvbnRhaW5lcjoge1xyXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRtaW5XaWR0aDogJzEwMCUnLFxyXG5cdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuXHR9LFxyXG5cclxuXHR0ZXh0Q29udGFpbmVyOiB7XHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRtaW5IZWlnaHQ6ICczMyUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0Ly8gYm9yZGVyOiAnNXB4IHNvbGlkIHBpbmsnLFxyXG5cdH0sXHJcblx0cXVlc3Rpb246IHtcclxuXHRcdGZvbnRXZWlnaHQ6IDYwMCxcclxuXHRcdGZvbnRTaXplOiAnM3JlbScsXHJcblx0fSxcclxuXHRidXR0b25Db250YWluZXI6IHtcclxuXHRcdGFsaWduU2VsZjogJ2ZsZXgtZW5kJyxcclxuXHR9LFxyXG5cdG5leHQ6IHtcclxuXHRcdGZvbnRTaXplOiAnNHJlbScsXHJcblx0XHRjb2xvcjogJ2JsYWNrJyxcclxuXHRcdHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyxcclxuXHR9LFxyXG5cdG5leHRCdXR0b246IHtcclxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0bGVmdDogJzkxJScsXHJcblx0XHR0b3A6ICczJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCwgbWluKSB7XHJcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XHJcblx0bWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZSgxKTtcclxuXHRjb25zdCBbYW5zd2VyZWQsIHNldEFuc3dlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0QW5zd2VyZWQodHJ1ZSk7XHJcblx0fTtcclxuXHRjb25zdCBzZXROZXh0UXVlc3Rpb24gPSAoKSA9PiB7XHJcblx0XHRzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XHJcblx0XHRzZXRBbnN3ZXIoZ2V0UmFuZG9tSW50KDEsIDQpKTtcclxuXHRcdHNldEFuc3dlcmVkKGZhbHNlKTtcclxuXHR9O1xyXG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuXHRcdGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuXHRcdFx0J2h0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9MTAmdHlwZT1tdWx0aXBsZSdcclxuXHRcdCk7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG5cdFx0c2V0UXVlc3Rpb25zKGRhdGEucmVzdWx0cyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGRpdiBoaWRkZW49eyFhbnN3ZXJlZH0+XHJcblx0XHRcdFx0PEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5leHRCdXR0b259IG9uQ2xpY2s9e3NldE5leHRRdWVzdGlvbn0+XHJcblx0XHRcdFx0XHQ8RGV0YWlsc0ljb24gY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubmV4dCl9IC8+XHJcblx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRhaW5lcn0+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnF1ZXN0aW9ufT5cclxuXHRcdFx0XHRcdFBpY2sgYSByYW5kb20gbnVtYmVyXHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcblx0XHRcdFx0XHR7YnV0dG9ucy5tYXAoKGQsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0PEN1c3RvbUJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0XHRpc0NvcnJlY3Q9e2QgPT0gYW5zd2VyfVxyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuXHRcdFx0XHRcdFx0XHRpc0Rpc2FibGVkPXthbnN3ZXJlZH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtkfVxyXG5cdFx0XHRcdFx0XHQ8L0N1c3RvbUJ1dHRvbj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGV0YWlsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==