webpackHotUpdate("static/development/pages/finalproduct.js",{

/***/ "./pages/finalproduct.js":
/*!*******************************!*\
  !*** ./pages/finalproduct.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./components/Nav/Nav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Rating_GeneratedProduct_GeneratedProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Rating/GeneratedProduct/GeneratedProduct */ \"./components/Rating/GeneratedProduct/GeneratedProduct.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/pages/finalproduct.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction FinalProduct() {\n  function removeProduct() {\n    localStorage.removeItem('ratingData');\n    localStorage.removeItem('selectedClothing');\n    localStorage.removeItem('flowData');\n  } // onClick={() => removeProduct()}\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    currentOpen: 'rating',\n    bgColor: 'blue',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"w-screen h-screen bg-blue\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"row pb-8 pt-24\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:col-8 text-white sm:pl-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 25\n    }\n  }, __jsx(\"h1\", {\n    className: \"font-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 29\n    }\n  }, \"Herzliche Gratulation zu deinem Rating!\"), __jsx(\"p\", {\n    className: \"pt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 29\n    }\n  }, \"Hier siehst du dein erstelltes Produkt inklusive dem berechneten Rating. Auf dem Ratingbatch findest du die Inforamtionen wie dein Rating berechnet wurde.\"))), __jsx(_components_Rating_GeneratedProduct_GeneratedProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"flex items-center justify-end pt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 21\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: '/rating',\n    as: \"/rating\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    className: \"p-4 m-4 bg-transparent text-white font-bold rounded border-2 border-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }, \"Zu Rating erstellen zur\\xFCck\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: '/',\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    className: \"p-4 m-4 bg-white text-blue font-bold rounded border-2 border-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, \"Zur Startseite\"))))));\n}\n\n_c = FinalProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FinalProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"FinalProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maW5hbHByb2R1Y3QuanM/YTMyMCJdLCJuYW1lcyI6WyJGaW5hbFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUVwQixXQUFTQyxhQUFULEdBQXlCO0FBQ3JCQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLFlBQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0Isa0JBQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsVUFBeEI7QUFDSCxHQU5tQixDQVNwQjs7O0FBRUEsU0FDSSxtRUFDSSxNQUFDLDJEQUFEO0FBQUssZUFBVyxFQUFFLFFBQWxCO0FBQTRCLFdBQU8sRUFBRSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREosRUFFSTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0tBRkosQ0FESixDQURKLEVBU0ksTUFBQyw0RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFXSTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxTQUFaO0FBQXVCLE1BQUUsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLDJFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREosQ0FESixFQVFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixNQUFFLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBQyxvRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixDQVJKLENBWEosQ0FESixDQUhKLENBREo7QUFrQ0g7O0tBN0NRSCxZO0FBK0NNQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZpbmFscHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L05hdlwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdlbmVyYXRlZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmF0aW5nL0dlbmVyYXRlZFByb2R1Y3QvR2VuZXJhdGVkUHJvZHVjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBGaW5hbFByb2R1Y3QoKSB7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmF0aW5nRGF0YScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2VsZWN0ZWRDbG90aGluZycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmxvd0RhdGEnKTtcbiAgICB9XG5cblxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHJlbW92ZVByb2R1Y3QoKX1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2IGN1cnJlbnRPcGVuPXsncmF0aW5nJ30gYmdDb2xvcj17J2JsdWUnfS8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctYmx1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiLTggcHQtMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLTggdGV4dC13aGl0ZSBzbTpwbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYmxhY2tcIj5IZXJ6bGljaGUgR3JhdHVsYXRpb24genUgZGVpbmVtIFJhdGluZyE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTRcIj5IaWVyIHNpZWhzdCBkdSBkZWluIGVyc3RlbGx0ZXMgUHJvZHVrdCBpbmtsdXNpdmUgZGVtIGJlcmVjaG5ldGVuIFJhdGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVmIGRlbSBSYXRpbmdiYXRjaCBmaW5kZXN0IGR1IGRpZSBJbmZvcmFtdGlvbmVuIHdpZSBkZWluIFJhdGluZyBiZXJlY2huZXQgd3VyZGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHZW5lcmF0ZWRQcm9kdWN0Lz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmF0aW5nJ30gYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9yYXRpbmcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCBtLTQgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBmb250LWJvbGQgcm91bmRlZCBib3JkZXItMiBib3JkZXItd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWnUgUmF0aW5nIGVyc3RlbGxlbiB6dXLDvGNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy8nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtNCBtLTQgYmctd2hpdGUgdGV4dC1ibHVlIGZvbnQtYm9sZCByb3VuZGVkIGJvcmRlci0yIGJvcmRlci13aGl0ZVwiPlp1clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydHNlaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmluYWxQcm9kdWN0O1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/finalproduct.js\n");

/***/ })

})