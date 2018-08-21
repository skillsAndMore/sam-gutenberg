/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(138);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(139);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss__ = __webpack_require__(140);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__editor_scss__);\n/**\n * Block dependencies\n */\n\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType(\"sam/alert\", {\n\ttitle: __(\"Alert Box\", \"sam-gutenberg\"),\n\tdescription: __(\"Un semplice alert box.\", \"sam-gutenberg\"),\n\tcategory: \"common\",\n\ticon: {\n\t\t//   background: 'rgba(254, 243, 224, 0.52)',\n\t\tsrc: __WEBPACK_IMPORTED_MODULE_0__icon__[\"a\" /* default */]\n\t},\n\tkeywords: [__(\"Alert\", \"sam-gutenberg\"), __(\"Message\", \"sam-gutenberg\"), __(\"Shout Out\", \"sam-gutenberg\")],\n\tattributes: {\n\t\tmessage: {\n\t\t\ttype: \"array\",\n\t\t\tsource: \"children\",\n\t\t\tselector: \".message-body\"\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar message = props.attributes.message,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar onChangeMessage = function onChangeMessage(message) {\n\t\t\tsetAttributes({ message: message });\n\t\t};\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: \"div\",\n\t\t\t\tmultiline: \"p\",\n\t\t\t\tplaceholder: __(\"Crea il tuo avviso...\", \"sam-gutenberg\"),\n\t\t\t\tonChange: onChangeMessage,\n\t\t\t\tvalue: message\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar message = props.attributes.message;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ \"class\": \"info\" },\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ \"class\": \"message-body box-inside\" },\n\t\t\t\tmessage\n\t\t\t)\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2FsZXJ0cy9pbmRleC5qcz8wOTFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmxvY2sgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb25cIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG4vKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIFJpY2hUZXh0ID0gd3AuZWRpdG9yLlJpY2hUZXh0O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXCJzYW0vYWxlcnRcIiwge1xuXHR0aXRsZTogX18oXCJBbGVydCBCb3hcIiwgXCJzYW0tZ3V0ZW5iZXJnXCIpLFxuXHRkZXNjcmlwdGlvbjogX18oXCJVbiBzZW1wbGljZSBhbGVydCBib3guXCIsIFwic2FtLWd1dGVuYmVyZ1wiKSxcblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cdGljb246IHtcblx0XHQvLyAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NCwgMjQzLCAyMjQsIDAuNTIpJyxcblx0XHRzcmM6IGljb25cblx0fSxcblx0a2V5d29yZHM6IFtfXyhcIkFsZXJ0XCIsIFwic2FtLWd1dGVuYmVyZ1wiKSwgX18oXCJNZXNzYWdlXCIsIFwic2FtLWd1dGVuYmVyZ1wiKSwgX18oXCJTaG91dCBPdXRcIiwgXCJzYW0tZ3V0ZW5iZXJnXCIpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdG1lc3NhZ2U6IHtcblx0XHRcdHR5cGU6IFwiYXJyYXlcIixcblx0XHRcdHNvdXJjZTogXCJjaGlsZHJlblwiLFxuXHRcdFx0c2VsZWN0b3I6IFwiLm1lc3NhZ2UtYm9keVwiXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPSBwcm9wcy5hdHRyaWJ1dGVzLm1lc3NhZ2UsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblx0XHR2YXIgb25DaGFuZ2VNZXNzYWdlID0gZnVuY3Rpb24gb25DaGFuZ2VNZXNzYWdlKG1lc3NhZ2UpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuXHRcdH07XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0dGFnTmFtZTogXCJkaXZcIixcblx0XHRcdFx0bXVsdGlsaW5lOiBcInBcIixcblx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKFwiQ3JlYSBpbCB0dW8gYXZ2aXNvLi4uXCIsIFwic2FtLWd1dGVuYmVyZ1wiKSxcblx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlTWVzc2FnZSxcblx0XHRcdFx0dmFsdWU6IG1lc3NhZ2Vcblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBtZXNzYWdlID0gcHJvcHMuYXR0cmlidXRlcy5tZXNzYWdlO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IFwiY2xhc3NcIjogXCJpbmZvXCIgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBcImNsYXNzXCI6IFwibWVzc2FnZS1ib2R5IGJveC1pbnNpZGVcIiB9LFxuXHRcdFx0XHRtZXNzYWdlXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvYWxlcnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///137\n");

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n\t\"svg\",\n\t{\n\t\twidth: \"20px\",\n\t\theight: \"20px\",\n\t\tviewBox: \"0 0 20 20\",\n\t\txmlns: \"http://www.w3.org/2000/svg\",\n\t\tfillRule: \"evenodd\",\n\t\tclipRule: \"evenodd\",\n\t\tstrokeLinejoin: \"round\",\n\t\tstrokeMiterlimit: \"1.414\"\n\t},\n\twp.element.createElement(\n\t\t\"g\",\n\t\t{ fillRule: \"nonzero\" },\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M15.846,16.179l0,1.301l-11.708,0l0,-1.301c0,-0.359 0.291,-0.65 0.65,-0.65c0.359,0 10.041,0 10.407,0c0.36,0 0.651,0.291 0.651,0.65Z\",\n\t\t\tfill: \"#57555c\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M13.428,9.326l1.106,6.203l-9.085,0l1.107,-6.203c0.168,-0.928 0.977,-1.602 1.92,-1.602l3.032,0c0.943,0 1.751,0.674 1.92,1.602Z\",\n\t\t\tfill: \"#ed5151\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M12.602,10.325c0,-0.179 -0.146,-0.325 -0.326,-0.325c-0.179,0 -0.325,0.146 -0.325,0.325c0,0.18 0.146,0.325 0.325,0.325c0.18,0 0.326,-0.145 0.326,-0.325Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M15.203,15.203l-0.388,0l-1.059,-5.935c-0.197,-1.084 -1.139,-1.87 -2.24,-1.87l-3.032,0c-1.101,0 -2.043,0.787 -2.24,1.871l-1.059,5.934l-0.388,0c-0.538,0 -0.976,0.438 -0.976,0.976l0,1.301c0,0.179 0.146,0.325 0.325,0.325l11.708,0c0.179,0 0.325,-0.146 0.325,-0.325l0,-1.301c0,-0.538 -0.438,-0.976 -0.976,-0.976Zm-8.319,-5.819c0.141,-0.774 0.813,-1.335 1.6,-1.335l3.032,0c0.787,0 1.459,0.561 1.6,1.334l1.038,5.82l-8.308,0l1.038,-5.819Zm8.645,7.771l-11.058,0l0,-0.976c0,-0.179 0.146,-0.325 0.326,-0.325c0.73,0 9.964,0 10.406,0c0.18,0 0.326,0.146 0.326,0.325l0,0.976Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M13.325,14.17l-0.477,-2.626c-0.032,-0.177 -0.202,-0.295 -0.378,-0.262c-0.177,0.032 -0.294,0.201 -0.262,0.378l0.477,2.626c0.032,0.178 0.203,0.294 0.378,0.262c0.177,-0.032 0.294,-0.202 0.262,-0.378Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M18,10l-2.797,0c-0.179,0 -0.325,0.146 -0.325,0.325c0,0.18 0.146,0.325 0.325,0.325l2.797,0c0.18,0 0.325,-0.145 0.325,-0.325c0,-0.179 -0.145,-0.325 -0.325,-0.325Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M1.675,10.325c0,0.18 0.145,0.325 0.325,0.325l2.797,0c0.179,0 0.325,-0.145 0.325,-0.325c0,-0.179 -0.146,-0.325 -0.325,-0.325l-2.797,0c-0.18,0 -0.325,0.146 -0.325,0.325Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M15.749,4.576c-0.127,-0.127 -0.333,-0.127 -0.46,0l-1.84,1.84c-0.127,0.127 -0.127,0.333 0,0.46c0.128,0.127 0.333,0.127 0.46,0l1.84,-1.84c0.127,-0.127 0.127,-0.333 0,-0.46Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M4.251,4.576c-0.127,0.127 -0.127,0.333 0,0.46l1.84,1.84c0.127,0.127 0.333,0.127 0.46,0c0.127,-0.127 0.127,-0.333 0,-0.46l-1.84,-1.84c-0.127,-0.127 -0.333,-0.127 -0.46,0Z\",\n\t\t\tfill: \"#333\"\n\t\t}),\n\t\twp.element.createElement(\"path\", {\n\t\t\td: \"M10.325,5.122l0,-2.602c0,-0.179 -0.145,-0.325 -0.325,-0.325c-0.18,0 -0.325,0.146 -0.325,0.325l0,2.602c0,0.179 0.145,0.325 0.325,0.325c0.18,0 0.325,-0.146 0.325,-0.325Z\",\n\t\t\tfill: \"#333\"\n\t\t})\n\t)\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2FsZXJ0cy9pY29uLmpzPzg1NzkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGljb24gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFwic3ZnXCIsXG5cdHtcblx0XHR3aWR0aDogXCIyMHB4XCIsXG5cdFx0aGVpZ2h0OiBcIjIwcHhcIixcblx0XHR2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuXHRcdHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0ZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuXHRcdGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcblx0XHRzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuXHRcdHN0cm9rZU1pdGVybGltaXQ6IFwiMS40MTRcIlxuXHR9LFxuXHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJnXCIsXG5cdFx0eyBmaWxsUnVsZTogXCJub256ZXJvXCIgfSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTE1Ljg0NiwxNi4xNzlsMCwxLjMwMWwtMTEuNzA4LDBsMCwtMS4zMDFjMCwtMC4zNTkgMC4yOTEsLTAuNjUgMC42NSwtMC42NWMwLjM1OSwwIDEwLjA0MSwwIDEwLjQwNywwYzAuMzYsMCAwLjY1MSwwLjI5MSAwLjY1MSwwLjY1WlwiLFxuXHRcdFx0ZmlsbDogXCIjNTc1NTVjXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTEzLjQyOCw5LjMyNmwxLjEwNiw2LjIwM2wtOS4wODUsMGwxLjEwNywtNi4yMDNjMC4xNjgsLTAuOTI4IDAuOTc3LC0xLjYwMiAxLjkyLC0xLjYwMmwzLjAzMiwwYzAuOTQzLDAgMS43NTEsMC42NzQgMS45MiwxLjYwMlpcIixcblx0XHRcdGZpbGw6IFwiI2VkNTE1MVwiXG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0xMi42MDIsMTAuMzI1YzAsLTAuMTc5IC0wLjE0NiwtMC4zMjUgLTAuMzI2LC0wLjMyNWMtMC4xNzksMCAtMC4zMjUsMC4xNDYgLTAuMzI1LDAuMzI1YzAsMC4xOCAwLjE0NiwwLjMyNSAwLjMyNSwwLjMyNWMwLjE4LDAgMC4zMjYsLTAuMTQ1IDAuMzI2LC0wLjMyNVpcIixcblx0XHRcdGZpbGw6IFwiIzMzM1wiXG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0xNS4yMDMsMTUuMjAzbC0wLjM4OCwwbC0xLjA1OSwtNS45MzVjLTAuMTk3LC0xLjA4NCAtMS4xMzksLTEuODcgLTIuMjQsLTEuODdsLTMuMDMyLDBjLTEuMTAxLDAgLTIuMDQzLDAuNzg3IC0yLjI0LDEuODcxbC0xLjA1OSw1LjkzNGwtMC4zODgsMGMtMC41MzgsMCAtMC45NzYsMC40MzggLTAuOTc2LDAuOTc2bDAsMS4zMDFjMCwwLjE3OSAwLjE0NiwwLjMyNSAwLjMyNSwwLjMyNWwxMS43MDgsMGMwLjE3OSwwIDAuMzI1LC0wLjE0NiAwLjMyNSwtMC4zMjVsMCwtMS4zMDFjMCwtMC41MzggLTAuNDM4LC0wLjk3NiAtMC45NzYsLTAuOTc2Wm0tOC4zMTksLTUuODE5YzAuMTQxLC0wLjc3NCAwLjgxMywtMS4zMzUgMS42LC0xLjMzNWwzLjAzMiwwYzAuNzg3LDAgMS40NTksMC41NjEgMS42LDEuMzM0bDEuMDM4LDUuODJsLTguMzA4LDBsMS4wMzgsLTUuODE5Wm04LjY0NSw3Ljc3MWwtMTEuMDU4LDBsMCwtMC45NzZjMCwtMC4xNzkgMC4xNDYsLTAuMzI1IDAuMzI2LC0wLjMyNWMwLjczLDAgOS45NjQsMCAxMC40MDYsMGMwLjE4LDAgMC4zMjYsMC4xNDYgMC4zMjYsMC4zMjVsMCwwLjk3NlpcIixcblx0XHRcdGZpbGw6IFwiIzMzM1wiXG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0xMy4zMjUsMTQuMTdsLTAuNDc3LC0yLjYyNmMtMC4wMzIsLTAuMTc3IC0wLjIwMiwtMC4yOTUgLTAuMzc4LC0wLjI2MmMtMC4xNzcsMC4wMzIgLTAuMjk0LDAuMjAxIC0wLjI2MiwwLjM3OGwwLjQ3NywyLjYyNmMwLjAzMiwwLjE3OCAwLjIwMywwLjI5NCAwLjM3OCwwLjI2MmMwLjE3NywtMC4wMzIgMC4yOTQsLTAuMjAyIDAuMjYyLC0wLjM3OFpcIixcblx0XHRcdGZpbGw6IFwiIzMzM1wiXG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0xOCwxMGwtMi43OTcsMGMtMC4xNzksMCAtMC4zMjUsMC4xNDYgLTAuMzI1LDAuMzI1YzAsMC4xOCAwLjE0NiwwLjMyNSAwLjMyNSwwLjMyNWwyLjc5NywwYzAuMTgsMCAwLjMyNSwtMC4xNDUgMC4zMjUsLTAuMzI1YzAsLTAuMTc5IC0wLjE0NSwtMC4zMjUgLTAuMzI1LC0wLjMyNVpcIixcblx0XHRcdGZpbGw6IFwiIzMzM1wiXG5cdFx0fSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG5cdFx0XHRkOiBcIk0xLjY3NSwxMC4zMjVjMCwwLjE4IDAuMTQ1LDAuMzI1IDAuMzI1LDAuMzI1bDIuNzk3LDBjMC4xNzksMCAwLjMyNSwtMC4xNDUgMC4zMjUsLTAuMzI1YzAsLTAuMTc5IC0wLjE0NiwtMC4zMjUgLTAuMzI1LC0wLjMyNWwtMi43OTcsMGMtMC4xOCwwIC0wLjMyNSwwLjE0NiAtMC4zMjUsMC4zMjVaXCIsXG5cdFx0XHRmaWxsOiBcIiMzMzNcIlxuXHRcdH0pLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuXHRcdFx0ZDogXCJNMTUuNzQ5LDQuNTc2Yy0wLjEyNywtMC4xMjcgLTAuMzMzLC0wLjEyNyAtMC40NiwwbC0xLjg0LDEuODRjLTAuMTI3LDAuMTI3IC0wLjEyNywwLjMzMyAwLDAuNDZjMC4xMjgsMC4xMjcgMC4zMzMsMC4xMjcgMC40NiwwbDEuODQsLTEuODRjMC4xMjcsLTAuMTI3IDAuMTI3LC0wLjMzMyAwLC0wLjQ2WlwiLFxuXHRcdFx0ZmlsbDogXCIjMzMzXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTQuMjUxLDQuNTc2Yy0wLjEyNywwLjEyNyAtMC4xMjcsMC4zMzMgMCwwLjQ2bDEuODQsMS44NGMwLjEyNywwLjEyNyAwLjMzMywwLjEyNyAwLjQ2LDBjMC4xMjcsLTAuMTI3IDAuMTI3LC0wLjMzMyAwLC0wLjQ2bC0xLjg0LC0xLjg0Yy0wLjEyNywtMC4xMjcgLTAuMzMzLC0wLjEyNyAtMC40NiwwWlwiLFxuXHRcdFx0ZmlsbDogXCIjMzMzXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcblx0XHRcdGQ6IFwiTTEwLjMyNSw1LjEyMmwwLC0yLjYwMmMwLC0wLjE3OSAtMC4xNDUsLTAuMzI1IC0wLjMyNSwtMC4zMjVjLTAuMTgsMCAtMC4zMjUsMC4xNDYgLTAuMzI1LDAuMzI1bDAsMi42MDJjMCwwLjE3OSAwLjE0NSwwLjMyNSAwLjMyNSwwLjMyNWMwLjE4LDAgMC4zMjUsLTAuMTQ2IDAuMzI1LC0wLjMyNVpcIixcblx0XHRcdGZpbGw6IFwiIzMzM1wiXG5cdFx0fSlcblx0KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9hbGVydHMvaWNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///138\n");

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2FsZXJ0cy9zdHlsZS5zY3NzPzEwZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9hbGVydHMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///139\n");

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2FsZXJ0cy9lZGl0b3Iuc2Nzcz85OTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ibG9ja3MvYWxlcnRzL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///140\n");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(50);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__i18n_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alerts__ = __webpack_require__(137);\n\n\n/**\n * Import example blocks\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvaW5kZXguanM/ODE5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2kxOG4uanNcIjtcblxuLyoqXG4gKiBJbXBvcnQgZXhhbXBsZSBibG9ja3NcbiAqL1xuaW1wb3J0IFwiLi9hbGVydHNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///49\n");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

eval("wp.i18n.setLocaleData({ '': {} }, 'sam-gutenberg');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvaTE4bi5qcz9iNDE0Il0sInNvdXJjZXNDb250ZW50IjpbIndwLmkxOG4uc2V0TG9jYWxlRGF0YSh7ICcnOiB7fSB9LCAnc2FtLWd1dGVuYmVyZycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2kxOG4uanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ })

/******/ });