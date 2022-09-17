"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./utility/createEmotionCache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css",
        prepend: true
    });
};
/* harmony default export */ const utility_createEmotionCache = (createEmotionCache);

;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./styles/theme/lightTheme.ts

const lightTheme = (0,styles_namespaceObject.createTheme)({
    palette: {
        mode: "light"
    }
});
/* harmony default export */ const theme_lightTheme = (lightTheme);

// EXTERNAL MODULE: ./context/dataContext.tsx
var dataContext = __webpack_require__(858);
;// CONCATENATED MODULE: ./pages/_app.tsx








const clientSideEmotionCache = utility_createEmotionCache();
const MyApp = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.ThemeProvider, {
            theme: theme_lightTheme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CssBaseline, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(dataContext/* default */.Z, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [858], () => (__webpack_exec__(1745)));
module.exports = __webpack_exports__;

})();