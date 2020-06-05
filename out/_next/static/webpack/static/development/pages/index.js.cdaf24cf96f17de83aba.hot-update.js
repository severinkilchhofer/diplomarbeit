webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ShopItem/ShopItem.js":
/*!*****************************************!*\
  !*** ./components/ShopItem/ShopItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/components/ShopItem/ShopItem.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar ShopItem = function ShopItem(props) {\n  _s();\n\n  var customStyles = {\n    content: {\n      top: '50%',\n      left: '50%',\n      right: 'auto',\n      bottom: 'auto',\n      marginRight: '-50%',\n      transform: 'translate(-50%, -50%)'\n    }\n  };\n  var subtitle;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      modalIsOpen = _React$useState2[0],\n      setIsOpen = _React$useState2[1];\n\n  function openModal() {\n    setIsOpen(true);\n  }\n\n  function afterOpenModal() {\n    // references are now sync'd and can be accessed.\n    subtitle.style.color = '#f00';\n  }\n\n  function closeModal() {\n    setIsOpen(false);\n  }\n\n  return __jsx(\"section\", {\n    className: \"m-2 leading-normal w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"bg-white shadow-2xl rounded overflow-hidden m-4 sm:flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"flex justify-center bg-gray m-5 p-5 rounded h-48 sm:h-auto sm:w-56 md:w-1/3 flex-none rounded overflow-hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, props.kleidungsstueck), __jsx(\"div\", {\n    className: \"px-6 py-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"mb-2 font-bold text-gray\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, props.brand), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }, props.name), __jsx(\"p\", {\n    className: \"mb-4 text-black text-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, props.description), __jsx(\"p\", {\n    className: \"mb-2 font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"CHF \", props.price, \".-\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    className: \"rating\".concat(props.rating, \" w-16 h-16 rounded-tl-full rounded-bl-full rounded-br-full\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    className: \"font-bold text-lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }, props.rating))))), __jsx(\"button\", {\n    onClick: openModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Open Modal\"), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: closeModal,\n    style: customStyles,\n    contentLabel: \"Example Modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, \"Hello\"), __jsx(\"button\", {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"close\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"I am a modal\")));\n};\n\n_s(ShopItem, \"XZX7L5xMKk49A2d0CQqEXgdgCDw=\");\n\n_c = ShopItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShopItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3BJdGVtL1Nob3BJdGVtLmpzPzIyZTgiXSwibmFtZXMiOlsiU2hvcEl0ZW0iLCJwcm9wcyIsImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsInN1YnRpdGxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0SXNPcGVuIiwib3Blbk1vZGFsIiwiYWZ0ZXJPcGVuTW9kYWwiLCJzdHlsZSIsImNvbG9yIiwiY2xvc2VNb2RhbCIsImtsZWlkdW5nc3N0dWVjayIsImJyYW5kIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJyYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV4QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFdBQU8sRUFBRztBQUNOQyxTQUFHLEVBQXFCLEtBRGxCO0FBRU5DLFVBQUksRUFBb0IsS0FGbEI7QUFHTkMsV0FBSyxFQUFtQixNQUhsQjtBQUlOQyxZQUFNLEVBQWtCLE1BSmxCO0FBS05DLGlCQUFXLEVBQWEsTUFMbEI7QUFNTkMsZUFBUyxFQUFlO0FBTmxCO0FBRE8sR0FBckI7QUFXQSxNQUFJQyxRQUFKOztBQWJ3Qix3QkFjUUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FkUjtBQUFBO0FBQUEsTUFjakJDLFdBZGlCO0FBQUEsTUFjTEMsU0FkSzs7QUFleEIsV0FBU0MsU0FBVCxHQUFxQjtBQUNqQkQsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIOztBQUVELFdBQVNFLGNBQVQsR0FBMEI7QUFDdEI7QUFDQU4sWUFBUSxDQUFDTyxLQUFULENBQWVDLEtBQWYsR0FBdUIsTUFBdkI7QUFDSDs7QUFFRCxXQUFTQyxVQUFULEdBQXFCO0FBQ2pCTCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0g7O0FBRUQsU0FDSTtBQUFTLGFBQVMsRUFBQywyQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQywrR0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUtiLEtBQUssQ0FBQ21CLGVBRlgsQ0FESixFQU1JO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDBCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNuQixLQUFLLENBQUNvQixLQUEvQyxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLcEIsS0FBSyxDQUFDcUIsSUFBWCxDQUZKLEVBR0k7QUFBRyxhQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q3JCLEtBQUssQ0FBQ3NCLFdBQTlDLENBSEosRUFJSTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW1DdEIsS0FBSyxDQUFDdUIsS0FBekMsT0FKSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsa0JBQVd2QixLQUFLLENBQUN3QixNQUFqQiwrREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0N4QixLQUFLLENBQUN3QixNQUF4QyxDQURKLENBREosQ0FOSixDQU5KLENBREosRUFzQkk7QUFBUSxXQUFPLEVBQUVWLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJKLEVBdUJJLE1BQUMsa0RBQUQ7QUFDSSxVQUFNLEVBQUVGLFdBRFo7QUFFSSxrQkFBYyxFQUFFTSxVQUZwQjtBQUdJLFNBQUssRUFBRWpCLFlBSFg7QUFJSSxnQkFBWSxFQUFDLGVBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosRUFRSTtBQUFRLFdBQU8sRUFBRWlCLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEosQ0F2QkosQ0FESjtBQXFDSCxDQWpFRDs7R0FBTW5CLFE7O0tBQUFBLFE7QUFtRVNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaG9wSXRlbS9TaG9wSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmNvbnN0IFNob3BJdGVtID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gICAgICAgIGNvbnRlbnQgOiB7XG4gICAgICAgICAgICB0b3AgICAgICAgICAgICAgICAgICAgOiAnNTAlJyxcbiAgICAgICAgICAgIGxlZnQgICAgICAgICAgICAgICAgICA6ICc1MCUnLFxuICAgICAgICAgICAgcmlnaHQgICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tICAgICAgICAgICAgICAgIDogJ2F1dG8nLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQgICAgICAgICAgIDogJy01MCUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtICAgICAgICAgICAgIDogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgc3VidGl0bGU7XG4gICAgY29uc3QgW21vZGFsSXNPcGVuLHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJPcGVuTW9kYWwoKSB7XG4gICAgICAgIC8vIHJlZmVyZW5jZXMgYXJlIG5vdyBzeW5jJ2QgYW5kIGNhbiBiZSBhY2Nlc3NlZC5cbiAgICAgICAgc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnI2YwMCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpe1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm0tMiBsZWFkaW5nLW5vcm1hbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LTJ4bCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBtLTQgc206ZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5IG0tNSBwLTUgcm91bmRlZCBoLTQ4IHNtOmgtYXV0byBzbTp3LTU2IG1kOnctMS8zIGZsZXgtbm9uZSByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMua2xlaWR1bmdzc3R1ZWNrfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBmb250LWJvbGQgdGV4dC1ncmF5XCI+e3Byb3BzLmJyYW5kfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9wcy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1ibGFjayB0ZXh0LXNtXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBmb250LWJvbGRcIj5DSEYge3Byb3BzLnByaWNlfS4tPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHJhdGluZyR7cHJvcHMucmF0aW5nfSB3LTE2IGgtMTYgcm91bmRlZC10bC1mdWxsIHJvdW5kZWQtYmwtZnVsbCByb3VuZGVkLWJyLWZ1bGxgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPntwcm9wcy5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9Pk9wZW4gTW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxoMj5IZWxsbzwvaDI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+SSBhbSBhIG1vZGFsPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ShopItem/ShopItem.js\n");

/***/ })

})