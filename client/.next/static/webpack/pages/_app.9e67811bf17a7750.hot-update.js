"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\n\nconst AppComponent = (param)=>{\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/breldanmuthaka/Desktop/Courses/Microservices with Node JS and React/ticketing/client/pages/_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n_c = AppComponent;\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__.buildClient)(appContext.ctx);\n    const { data  } = await client.get(\"/api/users/currentuser\");\n    const pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    console.log(data);\n    return data;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\nvar _c;\n$RefreshReg$(_c, \"AppComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDUTtBQUVsRCxNQUFNQyxlQUFlLFNBQThCO1FBQTdCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFO0lBQzVDLHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztLQUZNRjtBQUlOQSxhQUFhRyxlQUFlLEdBQUcsT0FBT0MsYUFBZTtJQUNuRCxNQUFNQyxTQUFTTiw4REFBV0EsQ0FBQ0ssV0FBV0UsR0FBRztJQUN6QyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1GLE9BQU9HLEdBQUcsQ0FBQztJQUNsQyxNQUFNTixZQUFZLE1BQU1FLFdBQVdILFNBQVMsQ0FBQ0UsZUFBZSxDQUFDQyxXQUFXRSxHQUFHO0lBQzNFRyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osT0FBT0E7QUFDVDtBQUVBLCtEQUFlUCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IHsgYnVpbGRDbGllbnQgfSBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xuXG5jb25zdCBBcHBDb21wb25lbnQgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQuY3R4KTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImN0eCIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});