webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ShopItem/ShopItem.js":
/*!*****************************************!*\
  !*** ./components/ShopItem/ShopItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/components/ShopItem/ShopItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ShopItem = function ShopItem(props) {\n  return __jsx(\"section\", {\n    className: \"m-2 leading-normal w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"bg-white shadow-2xl rounded overflow-hidden m-4 sm:flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex justify-center bg-gray m-5 p-5 rounded h-48 sm:h-auto sm:w-56 md:w-1/3 flex-none rounded overflow-hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 17\n    }\n  }, props.kleidungsstueck), __jsx(\"div\", {\n    className: \"px-6 py-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"mb-2 font-bold text-gray\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, props.brand), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, props.name), __jsx(\"p\", {\n    className: \"mb-4 text-black text-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, props.description), __jsx(\"p\", {\n    className: \"mb-2 font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }, \"CHF \", props.price, \".-\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    className: \"rating\".concat(props.rating, \" w-16 h-16 rounded-tl-full rounded-bl-full rounded-br-full\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"font-bold text-lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 29\n    }\n  }, props.rating))))), __jsx(\"button\", {\n    onClick: openModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Open Modal\"), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    isOpen: modalIsOpen,\n    onAfterOpen: afterOpenModal,\n    onRequestClose: closeModal,\n    style: customStyles,\n    contentLabel: \"Example Modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    ref: function ref(_subtitle) {\n      return subtitle = _subtitle;\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"Hello\"), __jsx(\"button\", {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \"close\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"I am a modal\"), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }, \"tab navigation\"), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, \"stays\"), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"inside\"), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, \"the modal\"))));\n};\n\n_c = ShopItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShopItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3BJdGVtL1Nob3BJdGVtLmpzPzIyZTgiXSwibmFtZXMiOlsiU2hvcEl0ZW0iLCJwcm9wcyIsImtsZWlkdW5nc3N0dWVjayIsImJyYW5kIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciLCJvcGVuTW9kYWwiLCJtb2RhbElzT3BlbiIsImFmdGVyT3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImN1c3RvbVN0eWxlcyIsIl9zdWJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QixTQUNJO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMseURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLCtHQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFS0EsS0FBSyxDQUFDQyxlQUZYLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQywwQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDRCxLQUFLLENBQUNFLEtBQS9DLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtGLEtBQUssQ0FBQ0csSUFBWCxDQUZKLEVBR0k7QUFBRyxhQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q0gsS0FBSyxDQUFDSSxXQUE5QyxDQUhKLEVBSUk7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFtQ0osS0FBSyxDQUFDSyxLQUF6QyxPQUpKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxrQkFBV0wsS0FBSyxDQUFDTSxNQUFqQiwrREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NOLEtBQUssQ0FBQ00sTUFBeEMsQ0FESixDQURKLENBTkosQ0FOSixDQURKLEVBc0JJO0FBQVEsV0FBTyxFQUFFQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRCSixFQXVCSSxNQUFDLGtEQUFEO0FBQ0ksVUFBTSxFQUFFQyxXQURaO0FBRUksZUFBVyxFQUFFQyxjQUZqQjtBQUdJLGtCQUFjLEVBQUVDLFVBSHBCO0FBSUksU0FBSyxFQUFFQyxZQUpYO0FBS0ksZ0JBQVksRUFBQyxlQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFBSSxPQUFHLEVBQUUsYUFBQUMsU0FBUztBQUFBLGFBQUtDLFFBQVEsR0FBR0QsU0FBaEI7QUFBQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosRUFTSTtBQUFRLFdBQU8sRUFBRUYsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixDQVhKLENBdkJKLENBREo7QUE2Q0gsQ0E5Q0Q7O0tBQU1YLFE7QUFnRFNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaG9wSXRlbS9TaG9wSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmNvbnN0IFNob3BJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0yIGxlYWRpbmctbm9ybWFsIHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctMnhsIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIG0tNCBzbTpmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGJnLWdyYXkgbS01IHAtNSByb3VuZGVkIGgtNDggc206aC1hdXRvIHNtOnctNTYgbWQ6dy0xLzMgZmxleC1ub25lIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5rbGVpZHVuZ3NzdHVlY2t9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZCB0ZXh0LWdyYXlcIj57cHJvcHMuYnJhbmR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb3BzLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWJsYWNrIHRleHQtc21cIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIGZvbnQtYm9sZFwiPkNIRiB7cHJvcHMucHJpY2V9Li08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcmF0aW5nJHtwcm9wcy5yYXRpbmd9IHctMTYgaC0xNiByb3VuZGVkLXRsLWZ1bGwgcm91bmRlZC1ibC1mdWxsIHJvdW5kZWQtYnItZnVsbGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3Byb3BzLnJhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH0+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgICAgICAgICBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxoMiByZWY9e19zdWJ0aXRsZSA9PiAoc3VidGl0bGUgPSBfc3VidGl0bGUpfT5IZWxsbzwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+SSBhbSBhIG1vZGFsPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPnRhYiBuYXZpZ2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+c3RheXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5pbnNpZGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj50aGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ShopItem/ShopItem.js\n");

/***/ })

})