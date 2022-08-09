/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/dataContext.tsx":
/*!*********************************!*\
  !*** ./context/dataContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": () => (/* binding */ DataContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DataContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);\nconst defaultState = {\n    beautifyCode: false,\n    deleteLogs: false,\n    isSolutionCorrect: false,\n    currentProblem: {},\n    problemsList: [],\n    currentLanguage: \"javaScript\",\n    displayBadge: false,\n    runCode: false,\n    codeValue: \"\",\n    resultCode: \"\",\n    isFullScreen: false,\n    isFullEditor: false,\n    displaySettings: false,\n    displayProblems: false,\n    displayCodeResultModal: false,\n    SyntaxHighlighting: true,\n    testData: {},\n    resetCode: false,\n    isDarkTheme: true,\n    fontSize: \"18px\",\n    currentTheme: {\n        primary: \"#ffff\",\n        secondary: \"#f8fcff\",\n        tertiary: \"#f5f5f5\",\n        color: \"#6d6e6d\",\n        button_color: \"#255461\",\n        secondary_color: \"#028ebd\",\n        invertLogo: 0,\n        isDarkTheme: false,\n        borderShadow: \"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)\"\n    },\n    darkTheme: {\n        tertiary: \"#001E26\",\n        secondary: \"#012A35\",\n        primary: \"#003543\",\n        button_color: \"#255461\",\n        color: \"#999999\",\n        secondary_color: \"#028ebd\",\n        invertLogo: 1,\n        isDarkTheme: true,\n        borderShadow: \"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)\"\n    },\n    lightTheme: {\n        primary: \"#ffff\",\n        secondary: \"#f8fcff\",\n        tertiary: \"#f5f5f5\",\n        color: \"#6d6e6d\",\n        secondary_color: \"#028ebd\",\n        button_color: \"#255461\",\n        invertLogo: 0,\n        isDarkTheme: false,\n        borderShadow: \"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)\"\n    }\n};\nconst DataProvider2 = ({ children  })=>{\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultState);\n    function updateData(payload) {\n        setData((data)=>{\n            return {\n                ...data,\n                ...payload\n            };\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            data,\n            updateData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/context/dataContext.tsx\",\n        lineNumber: 74,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataProvider2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2RhdGFDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUd4QixNQUFNQyxXQUFXLGlCQUFHRCxnREFBbUIsQ0FBeUIsSUFBSSxDQUFDLENBQUM7QUFFN0UsTUFBTUcsWUFBWSxHQUFVO0lBQ3hCQyxZQUFZLEVBQUUsS0FBSztJQUNuQkMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLGlCQUFpQixFQUFFLEtBQUs7SUFDeEJDLGNBQWMsRUFBRSxFQUFFO0lBQ2xCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsZUFBZSxFQUFFLFlBQVk7SUFDN0JDLFlBQVksRUFBRSxLQUFLO0lBQ25CQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxZQUFZLEVBQUUsS0FBSztJQUNuQkMsWUFBWSxFQUFFLEtBQUs7SUFDbkJDLGVBQWUsRUFBRSxLQUFLO0lBQ3RCQyxlQUFlLEVBQUUsS0FBSztJQUN0QkMsc0JBQXNCLEVBQUUsS0FBSztJQUM3QkMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxRQUFRLEVBQUUsTUFBTTtJQUNoQkMsWUFBWSxFQUFFO1FBQ1ZDLE9BQU8sRUFBRSxPQUFPO1FBQ2hCQyxTQUFTLEVBQUUsU0FBUztRQUNwQkMsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLEtBQUssRUFBRSxTQUFTO1FBQ2hCQyxZQUFZLEVBQUUsU0FBUztRQUN2QkMsZUFBZSxFQUFFLFNBQVM7UUFDMUJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JULFdBQVcsRUFBRSxLQUFLO1FBQ2xCVSxZQUFZLEVBQUUsb0dBQW9HO0tBQ3JIO0lBQ0RDLFNBQVMsRUFBRTtRQUNQTixRQUFRLEVBQUUsU0FBUztRQUNuQkQsU0FBUyxFQUFFLFNBQVM7UUFDcEJELE9BQU8sRUFBRSxTQUFTO1FBQ2xCSSxZQUFZLEVBQUUsU0FBUztRQUN2QkQsS0FBSyxFQUFFLFNBQVM7UUFDaEJFLGVBQWUsRUFBRSxTQUFTO1FBQzFCQyxVQUFVLEVBQUUsQ0FBQztRQUNiVCxXQUFXLEVBQUUsSUFBSTtRQUNqQlUsWUFBWSxFQUFFLG9HQUFvRztLQUNySDtJQUNERSxVQUFVLEVBQUU7UUFDUlQsT0FBTyxFQUFFLE9BQU87UUFDaEJDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJFLGVBQWUsRUFBRSxTQUFTO1FBQzFCRCxZQUFZLEVBQUUsU0FBUztRQUN2QkUsVUFBVSxFQUFFLENBQUM7UUFDYlQsV0FBVyxFQUFFLEtBQUs7UUFDbEJVLFlBQVksRUFBQyxvR0FBb0c7S0FDcEg7Q0FDSjtBQUVELE1BQU1HLGFBQWEsR0FBOEIsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUMvRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd0QywyQ0FBYyxDQUFRRyxZQUFZLENBQUM7SUFFM0QsU0FBU3FDLFVBQVUsQ0FBQ0MsT0FBYyxFQUFFO1FBQ2hDSCxPQUFPLENBQUNELENBQUFBLElBQUksR0FBSTtZQUNaLE9BQU87Z0JBQ0gsR0FBR0EsSUFBSTtnQkFDUCxHQUFHSSxPQUFPO2FBQ2I7U0FDSixDQUFDO0tBQ0w7SUFFRCxxQkFBTyw4REFBQ3hDLFdBQVcsQ0FBQ3lDLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVOLElBQUk7WUFBRUcsVUFBVTtTQUFFO2tCQUFHSixRQUFROzs7OztpQkFBd0IsQ0FBQztDQUMvRjtBQUVELGlFQUFlRCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb250ZXh0L2RhdGFDb250ZXh0LnRzeD85ZTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFDb250ZXh0VHlwZSwgSURhdGEgfSBmcm9tICcuL0B0eXBlcy5kYXRhJztcblxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxEYXRhQ29udGV4dFR5cGUgfCBudWxsPihudWxsKTtcblxuY29uc3QgZGVmYXVsdFN0YXRlOiBJRGF0YSA9IHtcbiAgICBiZWF1dGlmeUNvZGU6IGZhbHNlLFxuICAgIGRlbGV0ZUxvZ3M6IGZhbHNlLFxuICAgIGlzU29sdXRpb25Db3JyZWN0OiBmYWxzZSxcbiAgICBjdXJyZW50UHJvYmxlbToge30sXG4gICAgcHJvYmxlbXNMaXN0OiBbXSxcbiAgICBjdXJyZW50TGFuZ3VhZ2U6IFwiamF2YVNjcmlwdFwiLFxuICAgIGRpc3BsYXlCYWRnZTogZmFsc2UsXG4gICAgcnVuQ29kZTogZmFsc2UsXG4gICAgY29kZVZhbHVlOiBcIlwiLFxuICAgIHJlc3VsdENvZGU6IFwiXCIsXG4gICAgaXNGdWxsU2NyZWVuOiBmYWxzZSxcbiAgICBpc0Z1bGxFZGl0b3I6IGZhbHNlLFxuICAgIGRpc3BsYXlTZXR0aW5nczogZmFsc2UsXG4gICAgZGlzcGxheVByb2JsZW1zOiBmYWxzZSxcbiAgICBkaXNwbGF5Q29kZVJlc3VsdE1vZGFsOiBmYWxzZSxcbiAgICBTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXG4gICAgdGVzdERhdGE6IHt9LFxuICAgIHJlc2V0Q29kZTogZmFsc2UsXG4gICAgaXNEYXJrVGhlbWU6IHRydWUsXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIGN1cnJlbnRUaGVtZToge1xuICAgICAgICBwcmltYXJ5OiBcIiNmZmZmXCIsXG4gICAgICAgIHNlY29uZGFyeTogXCIjZjhmY2ZmXCIsXG4gICAgICAgIHRlcnRpYXJ5OiBcIiNmNWY1ZjVcIixcbiAgICAgICAgY29sb3I6IFwiIzZkNmU2ZFwiLFxuICAgICAgICBidXR0b25fY29sb3I6IFwiIzI1NTQ2MVwiLFxuICAgICAgICBzZWNvbmRhcnlfY29sb3I6IFwiIzAyOGViZFwiLFxuICAgICAgICBpbnZlcnRMb2dvOiAwLFxuICAgICAgICBpc0RhcmtUaGVtZTogZmFsc2UsXG4gICAgICAgIGJvcmRlclNoYWRvdzogXCIwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiLFxuICAgIH0sXG4gICAgZGFya1RoZW1lOiB7XG4gICAgICAgIHRlcnRpYXJ5OiBcIiMwMDFFMjZcIixcbiAgICAgICAgc2Vjb25kYXJ5OiBcIiMwMTJBMzVcIixcbiAgICAgICAgcHJpbWFyeTogXCIjMDAzNTQzXCIsXG4gICAgICAgIGJ1dHRvbl9jb2xvcjogXCIjMjU1NDYxXCIsXG4gICAgICAgIGNvbG9yOiBcIiM5OTk5OTlcIixcbiAgICAgICAgc2Vjb25kYXJ5X2NvbG9yOiBcIiMwMjhlYmRcIixcbiAgICAgICAgaW52ZXJ0TG9nbzogMSxcbiAgICAgICAgaXNEYXJrVGhlbWU6IHRydWUsXG4gICAgICAgIGJvcmRlclNoYWRvdzogXCIwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEyKVwiLFxuICAgIH0sXG4gICAgbGlnaHRUaGVtZToge1xuICAgICAgICBwcmltYXJ5OiBcIiNmZmZmXCIsXG4gICAgICAgIHNlY29uZGFyeTogXCIjZjhmY2ZmXCIsXG4gICAgICAgIHRlcnRpYXJ5OiBcIiNmNWY1ZjVcIixcbiAgICAgICAgY29sb3I6IFwiIzZkNmU2ZFwiLFxuICAgICAgICBzZWNvbmRhcnlfY29sb3I6IFwiIzAyOGViZFwiLFxuICAgICAgICBidXR0b25fY29sb3I6IFwiIzI1NTQ2MVwiLFxuICAgICAgICBpbnZlcnRMb2dvOiAwLFxuICAgICAgICBpc0RhcmtUaGVtZTogZmFsc2UsXG4gICAgICAgIGJvcmRlclNoYWRvdzpcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMTIpXCIsXG4gICAgfVxufVxuXG5jb25zdCBEYXRhUHJvdmlkZXIyOiBSZWFjdC5GQzxSZWFjdC5SZWFjdE5vZGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPElEYXRhPihkZWZhdWx0U3RhdGUpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGF0YShwYXlsb2FkOm9iamVjdCkge1xuICAgICAgICBzZXREYXRhKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBkYXRhLCB1cGRhdGVEYXRhIH19PntjaGlsZHJlbn08L0RhdGFDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aWRlcjI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdFN0YXRlIiwiYmVhdXRpZnlDb2RlIiwiZGVsZXRlTG9ncyIsImlzU29sdXRpb25Db3JyZWN0IiwiY3VycmVudFByb2JsZW0iLCJwcm9ibGVtc0xpc3QiLCJjdXJyZW50TGFuZ3VhZ2UiLCJkaXNwbGF5QmFkZ2UiLCJydW5Db2RlIiwiY29kZVZhbHVlIiwicmVzdWx0Q29kZSIsImlzRnVsbFNjcmVlbiIsImlzRnVsbEVkaXRvciIsImRpc3BsYXlTZXR0aW5ncyIsImRpc3BsYXlQcm9ibGVtcyIsImRpc3BsYXlDb2RlUmVzdWx0TW9kYWwiLCJTeW50YXhIaWdobGlnaHRpbmciLCJ0ZXN0RGF0YSIsInJlc2V0Q29kZSIsImlzRGFya1RoZW1lIiwiZm9udFNpemUiLCJjdXJyZW50VGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGVydGlhcnkiLCJjb2xvciIsImJ1dHRvbl9jb2xvciIsInNlY29uZGFyeV9jb2xvciIsImludmVydExvZ28iLCJib3JkZXJTaGFkb3ciLCJkYXJrVGhlbWUiLCJsaWdodFRoZW1lIiwiRGF0YVByb3ZpZGVyMiIsImNoaWxkcmVuIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVwZGF0ZURhdGEiLCJwYXlsb2FkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/dataContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/createEmotionCache */ \"./utility/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme_lightTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme/lightTheme */ \"./styles/theme/lightTheme.ts\");\n/* harmony import */ var _context_dataContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/dataContext */ \"./context/dataContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_utility_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst MyApp = (props)=>{\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, {\n        value: emotionCache,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: _styles_theme_lightTheme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_dataContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/pages/_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jsanchez/Desktop/projects/JavaScript-challenges/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3FCO0FBQ1k7QUFFSTtBQUNYO0FBQ0g7QUFDbEI7QUFFL0IsTUFBTU8sc0JBQXNCLEdBQUdILHVFQUFrQixFQUFFO0FBRW5ELE1BQU1JLEtBQUssR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDdkIsTUFBTSxFQUFFQyxTQUFTLEdBQUVDLFlBQVksRUFBR0osc0JBQXNCLEdBQUVLLFNBQVMsR0FBRSxHQUFHSCxLQUFLO0lBRTdFLHFCQUNFLDhEQUFDUix5REFBYTtRQUFDWSxLQUFLLEVBQUVGLFlBQVk7a0JBQ2hDLDRFQUFDVCx3REFBYTtZQUFDWSxLQUFLLEVBQUVULGdFQUFVOzs4QkFDOUIsOERBQUNGLHNEQUFXOzs7OzZCQUFHOzhCQUNmLDhEQUFDRyw0REFBWTs4QkFDYiw0RUFBQ0ksU0FBUzt3QkFBRSxHQUFHRSxTQUFTOzs7OztpQ0FBSTs7Ozs7NkJBQ2I7Ozs7OztxQkFFRDs7Ozs7aUJBQ0YsQ0FDaEI7Q0FDSDtBQUVELGlFQUFlSixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgbGlnaHRUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUvbGlnaHRUaGVtZSc7XG5pbXBvcnQgRGF0YVByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvZGF0YUNvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxuY29uc3QgTXlBcHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtsaWdodFRoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxEYXRhUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9EYXRhUHJvdmlkZXI+XG4gICAgICAgIFxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FjaGVQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImxpZ2h0VGhlbWUiLCJEYXRhUHJvdmlkZXIiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsInZhbHVlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/theme/lightTheme.ts":
/*!************************************!*\
  !*** ./styles/theme/lightTheme.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst lightTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: \"light\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUvbGlnaHRUaGVtZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUMsVUFBVSxHQUFHRCxpRUFBVyxDQUFDO0lBQzdCRSxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUM7QUFFRixpRUFBZUYsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL3RoZW1lL2xpZ2h0VGhlbWUudHM/MDRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuY29uc3QgbGlnaHRUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6ICdsaWdodCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRUaGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsImxpZ2h0VGhlbWUiLCJwYWxldHRlIiwibW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/theme/lightTheme.ts\n");

/***/ }),

/***/ "./utility/createEmotionCache.ts":
/*!***************************************!*\
  !*** ./utility/createEmotionCache.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createEmotionCache = ()=>{\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"css\",\n        prepend: true\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsaXR5L2NyZWF0ZUVtb3Rpb25DYWNoZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsTUFBTUMsa0JBQWtCLEdBQUcsSUFBTTtJQUMvQixPQUFPRCxxREFBVyxDQUFDO1FBQUVFLEdBQUcsRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQ25EO0FBRUQsaUVBQWVGLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vdXRpbGl0eS9jcmVhdGVFbW90aW9uQ2FjaGUudHM/MGE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5jb25zdCBjcmVhdGVFbW90aW9uQ2FjaGUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbW90aW9uQ2FjaGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utility/createEmotionCache.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();