webpackHotUpdate("static/development/pages/rating.js",{

/***/ "./components/Rating/CreateMuA/CreateMuA.js":
/*!**************************************************!*\
  !*** ./components/Rating/CreateMuA/CreateMuA.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/components/Rating/CreateMuA/CreateMuA.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar CreateMuA = function CreateMuA() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(function () {\n    if (true) {\n      var value = localStorage.getItem('muaData');\n      return value !== null ? JSON.parse(value) : '';\n    }\n  }),\n      productState = _useState[0],\n      setProductState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem('muaData', JSON.stringify(productState));\n  }, [productState]);\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(data) {\n    setProductState(data);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:col-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, \"Menschen und Arbeitsrechte\"))), __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"row pt-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:col-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 25\n    }\n  }, __jsx(\"label\", {\n    className: \"block text-black text-sm font-bold mb-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }, \"Name des Herstellers\"), __jsx(\"input\", {\n    onChange: handleSubmit(onSubmit),\n    defaultValue: productState ? productState.name : '',\n    name: \"name\",\n    ref: register,\n    min: \"1\",\n    max: \"10\",\n    step: \"1\",\n    defaultChecked: \"5\",\n    className: \"rounded-lg overflow-hidden appearance-none bg-gray h-5 w-12\",\n    type: \"range\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 29\n    }\n  }))))));\n};\n\n_s(CreateMuA, \"YSg/BhApH4YuWf0eWDqk8IHv9JQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = CreateMuA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateMuA);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateMuA\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhdGluZy9DcmVhdGVNdUEvQ3JlYXRlTXVBLmpzPzAwNTYiXSwibmFtZXMiOlsiQ3JlYXRlTXVBIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0U3RhdGUiLCJzZXRQcm9kdWN0U3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUMsWUFBTTtBQUMvQyxjQUFtQztBQUMvQixVQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFkO0FBQ0EsYUFBT0YsS0FBSyxLQUFLLElBQVYsR0FBaUJHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBQWpCLEdBQXFDLEVBQTVDO0FBQ0g7QUFDSixHQUwyQyxDQUY1QjtBQUFBLE1BRWJLLFlBRmE7QUFBQSxNQUVDQyxlQUZEOztBQVVwQkMseURBQVMsQ0FDTCxZQUFNO0FBQ0ZOLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NMLElBQUksQ0FBQ00sU0FBTCxDQUFlSixZQUFmLENBQWhDO0FBQ0gsR0FISSxFQUdGLENBQUNBLFlBQUQsQ0FIRSxDQUFUOztBQVZvQixpQkFnQjRCSywrREFBTyxFQWhCbkM7QUFBQSxNQWdCYkMsUUFoQmEsWUFnQmJBLFFBaEJhO0FBQUEsTUFnQkhDLFlBaEJHLFlBZ0JIQSxZQWhCRztBQUFBLE1BZ0JXQyxLQWhCWCxZQWdCV0EsS0FoQlg7QUFBQSxNQWdCa0JDLE1BaEJsQixZQWdCa0JBLE1BaEJsQjs7QUFpQnBCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLElBQUksRUFBSTtBQUNyQlYsbUJBQWUsQ0FBQ1UsSUFBRCxDQUFmO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLG1FQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosQ0FESixDQURKLEVBTUk7QUFBTSxZQUFRLEVBQUVKLFlBQVksQ0FBQ0csUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUMseUNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFJSTtBQUNJLFlBQVEsRUFBRUgsWUFBWSxDQUFDRyxRQUFELENBRDFCO0FBRUksZ0JBQVksRUFBRVYsWUFBWSxHQUFHQSxZQUFZLENBQUNZLElBQWhCLEdBQXVCLEVBRnJEO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFJSSxPQUFHLEVBQUVOLFFBSlQ7QUFLSSxPQUFHLEVBQUMsR0FMUjtBQUtZLE9BQUcsRUFBQyxJQUxoQjtBQUtxQixRQUFJLEVBQUMsR0FMMUI7QUFLOEIsa0JBQWMsRUFBQyxHQUw3QztBQU1JLGFBQVMsRUFBQyw2REFOZDtBQU9JLFFBQUksRUFBQyxPQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLENBREosQ0FGSixDQU5KLENBREo7QUErQkgsQ0FwREQ7O0dBQU1iLFM7VUFnQjhDWSx1RDs7O0tBaEI5Q1osUztBQXNEU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhdGluZy9DcmVhdGVNdUEvQ3JlYXRlTXVBLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUZvcm19IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuY29uc3QgQ3JlYXRlTXVBID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Byb2R1Y3RTdGF0ZSwgc2V0UHJvZHVjdFN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211YURhdGEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgPyBKU09OLnBhcnNlKHZhbHVlKSA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxuXG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVhRGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RTdGF0ZSkpXG4gICAgICAgIH0sIFtwcm9kdWN0U3RhdGVdXG4gICAgKVxuXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBlcnJvcnN9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XG4gICAgICAgIHNldFByb2R1Y3RTdGF0ZShkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPk1lbnNjaGVuIHVuZCBBcmJlaXRzcmVjaHRlPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgZGVzIEhlcnN0ZWxsZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvZHVjdFN0YXRlID8gcHJvZHVjdFN0YXRlLm5hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCIgbWF4PVwiMTBcIiBzdGVwPVwiMVwiIGRlZmF1bHRDaGVja2VkPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGFwcGVhcmFuY2Utbm9uZSBiZy1ncmF5IGgtNSB3LTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVNdUE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Rating/CreateMuA/CreateMuA.js\n");

/***/ })

})