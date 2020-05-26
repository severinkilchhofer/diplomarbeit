webpackHotUpdate("static/development/pages/rating.js",{

/***/ "./components/Rating/CreateRating/CreateRating.js":
/*!********************************************************!*\
  !*** ./components/Rating/CreateRating/CreateRating.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/components/Rating/CreateRating/CreateRating.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar CreateRating = function CreateRating() {\n  _s();\n\n  // const initialState = () => {\n  //         JSON.parse(localStorage.getItem('ratingData') || '');\n  //     }\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(function () {\n    if (true) {\n      var value = localStorage.getItem('ratingData');\n      return value !== null ? JSON.parse(value) : 'nada';\n    }\n  }),\n      productState = _useState[0],\n      setProductState = _useState[1]; // const saveName = (data) => setName(name);\n  //\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem('ratingData', JSON.stringify(productState));\n  }, [productState]);\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n    setProductState(data);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full max-w-xs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"form\", {\n    className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  }, __jsx(\"label\", {\n    className: \"block text-black text-sm font-bold mb-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, \"Name\"), __jsx(\"input\", {\n    defaultValue: productState ? productState.name : '',\n    name: \"name\",\n    ref: register,\n    className: \"shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n    type: \"text\",\n    placeholder: \"Username\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  })), __jsx(\"div\", {\n    className: \"flex items-center justify-between\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, __jsx(\"input\", {\n    className: \"bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 29\n    }\n  }), __jsx(\"a\", {\n    className: \"inline-block align-baseline font-bold text-sm text-blue hover:text-blue\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 29\n    }\n  }, \"Forgot Password?\")))), __jsx(\"div\", {\n    className: \"container pt-64\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(CreateRating, \"tIaQXfXKeTQ+dlXzaTsnai1kKqA=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = CreateRating;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateRating);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateRating\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JhdGluZy9DcmVhdGVSYXRpbmcvQ3JlYXRlUmF0aW5nLmpzPzExNmIiXSwibmFtZXMiOlsiQ3JlYXRlUmF0aW5nIiwidXNlU3RhdGUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0U3RhdGUiLCJzZXRQcm9kdWN0U3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBR3ZCO0FBQ0E7QUFDQTtBQUx1QixrQkFRaUJDLHNEQUFRLENBQUMsWUFBTTtBQUMvQyxjQUFtQztBQUMvQixVQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUFkO0FBQ0EsYUFBT0YsS0FBSyxLQUFLLElBQVYsR0FBaUJHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBQWpCLEdBQXFDLE1BQTVDO0FBQ0g7QUFDSixHQUwyQyxDQVJ6QjtBQUFBLE1BUWhCSyxZQVJnQjtBQUFBLE1BUUZDLGVBUkUsaUJBaUJ2QjtBQUNBOzs7QUFDQUMseURBQVMsQ0FDTCxZQUFNO0FBQ0ZOLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNMLElBQUksQ0FBQ00sU0FBTCxDQUFlSixZQUFmLENBQW5DO0FBQ0gsR0FISSxFQUdGLENBQUNBLFlBQUQsQ0FIRSxDQUFUOztBQW5CdUIsaUJBeUJ5QkssK0RBQU8sRUF6QmhDO0FBQUEsTUF5QmhCQyxRQXpCZ0IsWUF5QmhCQSxRQXpCZ0I7QUFBQSxNQXlCTkMsWUF6Qk0sWUF5Qk5BLFlBekJNO0FBQUEsTUF5QlFDLEtBekJSLFlBeUJRQSxLQXpCUjtBQUFBLE1BeUJlQyxNQXpCZixZQXlCZUEsTUF6QmY7O0FBMEJ2QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxJQUFJLEVBQUk7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FWLG1CQUFlLENBQUNVLElBQUQsQ0FBZjtBQUNILEdBSEQ7O0FBTUEsU0FDSSxtRUFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsZ0RBQWhCO0FBQWlFLFlBQVEsRUFBRUosWUFBWSxDQUFDRyxRQUFELENBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQyx5Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBSUk7QUFDSSxnQkFBWSxFQUFFVixZQUFZLEdBQUdBLFlBQVksQ0FBQ2MsSUFBaEIsR0FBdUIsRUFEckQ7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLE9BQUcsRUFBRVIsUUFIVDtBQUlJLGFBQVMsRUFBQyxxSEFKZDtBQUtJLFFBQUksRUFBQyxNQUxUO0FBTUksZUFBVyxFQUFDLFVBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBYUk7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLHNHQURkO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBS0k7QUFBRyxhQUFTLEVBQUMseUVBQWI7QUFDRyxRQUFJLEVBQUMsR0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxKLENBYkosQ0FESixDQURKLEVBMkJJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkosQ0FESixDQURKO0FBaUNILENBakVEOztHQUFNYixZO1VBeUI4Q1ksdUQ7OztLQXpCOUNaLFk7QUFtRVNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SYXRpbmcvQ3JlYXRlUmF0aW5nL0NyZWF0ZVJhdGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VGb3JtLCBDb250cm9sbGVyfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmNvbnN0IENyZWF0ZVJhdGluZyA9ICgpID0+IHtcblxuXG4gICAgLy8gY29uc3QgaW5pdGlhbFN0YXRlID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmF0aW5nRGF0YScpIHx8ICcnKTtcbiAgICAvLyAgICAgfVxuXG5cbiAgICBjb25zdCBbcHJvZHVjdFN0YXRlLCBzZXRQcm9kdWN0U3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmF0aW5nRGF0YScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCA/IEpTT04ucGFyc2UodmFsdWUpIDogJ25hZGEnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxuXG5cbiAgICAvLyBjb25zdCBzYXZlTmFtZSA9IChkYXRhKSA9PiBzZXROYW1lKG5hbWUpO1xuICAgIC8vXG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmF0aW5nRGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RTdGF0ZSkpXG4gICAgICAgIH0sIFtwcm9kdWN0U3RhdGVdXG4gICAgKVxuXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBlcnJvcnN9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRQcm9kdWN0U3RhdGUoZGF0YSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkIHB4LTggcHQtNiBwYi04IG1iLTRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2R1Y3RTdGF0ZSA/IHByb2R1Y3RTdGF0ZS5uYW1lIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZSBob3ZlcjpiZy1ibHVlIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhbGlnbi1iYXNlbGluZSBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LWJsdWUgaG92ZXI6dGV4dC1ibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC02NFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUmF0aW5nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Rating/CreateRating/CreateRating.js\n");

/***/ })

})