webpackHotUpdate("static/development/pages/sff.js",{

/***/ "./components/SFF/RatingTabs/RatingTabs.js":
/*!*************************************************!*\
  !*** ./components/SFF/RatingTabs/RatingTabs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/severinkilchhofer/git/diplomarbeit/components/SFF/RatingTabs/RatingTabs.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar RatingTabs = function RatingTabs(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.data[0].id),\n      visibleTab = _useState[0],\n      setVisibleTab = _useState[1];\n\n  var listTitles = props.data.map(function (item) {\n    return __jsx(\"li\", {\n      id: item.id,\n      onClick: function onClick() {\n        return setVisibleTab(item.id);\n      },\n      className: \"\".concat(visibleTab === item.id ? \"border-b-2 border-blue \" : \"border-b-2 border-gray\", \" flex-1 mr-2 hover:border-border-b-2 hover:border-blue cursor-pointer\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      className: \"text-center block py-2 px-4 font-bold sm:text-lg\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"button\", {\n      className: \"rating\".concat(item.ratingBegin, \" w-6 h-6 mx-4 sm:w-12 sm:h-12 rounded-tl-full rounded-bl-full rounded-br-full focus:outline-none\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 21\n      }\n    }, __jsx(\"p\", {\n      className: \"font-bold text-xs sm:text-base\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 25\n      }\n    }, item.ratingBegin)), \"\\xA0-\\xA0\", __jsx(\"button\", {\n      className: \"rating\".concat(item.ratingEnd, \" w-6 h-6 sm:w-12 sm:h-12 rounded-tl-full rounded-bl-full rounded-br-full focus:outline-none\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 21\n      }\n    }, __jsx(\"p\", {\n      className: \"font-bold text-xs sm:text-base\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 25\n      }\n    }, item.ratingEnd)))));\n  });\n  var listContent = props.data.map(function (item) {\n    return __jsx(\"div\", {\n      id: item.id,\n      style: visibleTab === item.id ? {} : {\n        display: 'none'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }\n    }, item.tabContent.textList.map(function (el) {\n      return __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }\n      }, __jsx(\"h3\", {\n        className: \"pt-4\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }\n      }, el.title), __jsx(\"p\", {\n        className: \"pb-4\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }\n      }, el.text));\n    }));\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"tabs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"flex pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, listTitles), __jsx(\"div\", {\n    className: \"tab-content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, listContent)));\n};\n\n_s(RatingTabs, \"JzdvMxIV2syBBA8iQMnzH1hEm38=\");\n\n_c = RatingTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RatingTabs);\n\nvar _c;\n\n$RefreshReg$(_c, \"RatingTabs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NGRi9SYXRpbmdUYWJzL1JhdGluZ1RhYnMuanM/N2VjNCJdLCJuYW1lcyI6WyJSYXRpbmdUYWJzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRhdGEiLCJpZCIsInZpc2libGVUYWIiLCJzZXRWaXNpYmxlVGFiIiwibGlzdFRpdGxlcyIsIm1hcCIsIml0ZW0iLCJyYXRpbmdCZWdpbiIsInJhdGluZ0VuZCIsImxpc3RDb250ZW50IiwiZGlzcGxheSIsInRhYkNvbnRlbnQiLCJ0ZXh0TGlzdCIsImVsIiwidGl0bGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVVQyxzREFBUSxDQUFDRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNDLEVBQWYsQ0FGbEI7QUFBQSxNQUVuQkMsVUFGbUI7QUFBQSxNQUVQQyxhQUZPOztBQUkxQixNQUFNQyxVQUFVLEdBQUdOLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLFdBQzlCO0FBQUksUUFBRSxFQUFFQSxJQUFJLENBQUNMLEVBQWI7QUFDSSxhQUFPLEVBQUU7QUFBQSxlQUFNRSxhQUFhLENBQUNHLElBQUksQ0FBQ0wsRUFBTixDQUFuQjtBQUFBLE9BRGI7QUFFSSxlQUFTLFlBQUtDLFVBQVUsS0FBS0ksSUFBSSxDQUFDTCxFQUFwQix1REFBTCwwRUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBRyxlQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLGVBQVMsa0JBQVdLLElBQUksQ0FBQ0MsV0FBaEIscUdBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJO0FBQUcsZUFBUyxFQUFDLGdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0NELElBQUksQ0FBQ0MsV0FBcEQsQ0FGSixDQURKLGVBS0k7QUFDSSxlQUFTLGtCQUFXRCxJQUFJLENBQUNFLFNBQWhCLGdHQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSTtBQUFHLGVBQVMsRUFBQyxnQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStDRixJQUFJLENBQUNFLFNBQXBELENBRkosQ0FMSixDQURKLENBSEosQ0FEOEI7QUFBQSxHQUFmLENBQW5CO0FBbUJBLE1BQU1DLFdBQVcsR0FBR1gsS0FBSyxDQUFDRSxJQUFOLENBQVdLLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsV0FDL0I7QUFBSyxRQUFFLEVBQUVBLElBQUksQ0FBQ0wsRUFBZDtBQUFrQixXQUFLLEVBQUVDLFVBQVUsS0FBS0ksSUFBSSxDQUFDTCxFQUFwQixHQUF5QixFQUF6QixHQUE4QjtBQUFDUyxlQUFPLEVBQUU7QUFBVixPQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tKLElBQUksQ0FBQ0ssVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJQLEdBQXpCLENBQTZCLFVBQUFRLEVBQUU7QUFBQSxhQUM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFzQkEsRUFBRSxDQUFDQyxLQUF6QixDQURKLEVBRUk7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQkQsRUFBRSxDQUFDRSxJQUF4QixDQUZKLENBRDRCO0FBQUEsS0FBL0IsQ0FETCxDQUQrQjtBQUFBLEdBQWYsQ0FBcEI7QUFXQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1gsVUFETCxDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tLLFdBREwsQ0FKSixDQURKLENBREo7QUFhSCxDQS9DRDs7R0FBTVosVTs7S0FBQUEsVTtBQWlEU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NGRi9SYXRpbmdUYWJzL1JhdGluZ1RhYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgUmF0aW5nVGFicyA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3Zpc2libGVUYWIsIHNldFZpc2libGVUYWJdID0gdXNlU3RhdGUocHJvcHMuZGF0YVswXS5pZClcblxuICAgIGNvbnN0IGxpc3RUaXRsZXMgPSBwcm9wcy5kYXRhLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgPGxpIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZVRhYihpdGVtLmlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dmlzaWJsZVRhYiA9PT0gaXRlbS5pZCA/IGBib3JkZXItYi0yIGJvcmRlci1ibHVlIGAgOiBgYm9yZGVyLWItMiBib3JkZXItZ3JheWB9IGZsZXgtMSBtci0yIGhvdmVyOmJvcmRlci1ib3JkZXItYi0yIGhvdmVyOmJvcmRlci1ibHVlIGN1cnNvci1wb2ludGVyYH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBibG9jayBweS0yIHB4LTQgZm9udC1ib2xkIHNtOnRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYXRpbmcke2l0ZW0ucmF0aW5nQmVnaW59IHctNiBoLTYgbXgtNCBzbTp3LTEyIHNtOmgtMTIgcm91bmRlZC10bC1mdWxsIHJvdW5kZWQtYmwtZnVsbCByb3VuZGVkLWJyLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14cyBzbTp0ZXh0LWJhc2VcIj57aXRlbS5yYXRpbmdCZWdpbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiZuYnNwOy0mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmF0aW5nJHtpdGVtLnJhdGluZ0VuZH0gdy02IGgtNiBzbTp3LTEyIHNtOmgtMTIgcm91bmRlZC10bC1mdWxsIHJvdW5kZWQtYmwtZnVsbCByb3VuZGVkLWJyLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14cyBzbTp0ZXh0LWJhc2VcIj57aXRlbS5yYXRpbmdFbmR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICApXG5cbiAgICBjb25zdCBsaXN0Q29udGVudCA9IHByb3BzLmRhdGEubWFwKChpdGVtKSA9PlxuICAgICAgICA8ZGl2IGlkPXtpdGVtLmlkfSBzdHlsZT17dmlzaWJsZVRhYiA9PT0gaXRlbS5pZCA/IHt9IDoge2Rpc3BsYXk6ICdub25lJ319PlxuICAgICAgICAgICAge2l0ZW0udGFiQ29udGVudC50ZXh0TGlzdC5tYXAoZWwgPT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHQtNFwiPntlbC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi00XCI+e2VsLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAge2xpc3RUaXRsZXN9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Q29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nVGFicztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SFF/RatingTabs/RatingTabs.js\n");

/***/ })

})