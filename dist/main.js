/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById(\"addPost\").addEventListener(\"click\", () => {\r\n  const postInput = document.getElementById(\"postInput\").value;\r\n  if (postInput) {\r\n    navigator.geolocation.getCurrentPosition(\r\n      (position) => {\r\n        const { latitude, longitude } = position.coords;\r\n        addPost(postInput, latitude, longitude);\r\n      },\r\n      () => {\r\n        alert(\r\n          \"Не удалось получить координаты. Пожалуйста, введите их вручную.\"\r\n        );\r\n        // Здесь можно добавить логику для ввода координат вручную\r\n      }\r\n    );\r\n  }\r\n});\r\n\r\nfunction addPost(text, latitude, longitude) {\r\n  const timeline = document.getElementById(\"timeline\");\r\n  const postElement = document.createElement(\"div\");\r\n  postElement.textContent = `${text} (Координаты: ${latitude}, ${longitude})`;\r\n  timeline.prepend(postElement);\r\n}\r\n\r\nfunction parseCoordinates(input) {\r\n  const regex = /^\\s*\\[?\\s*(-?\\d+\\.\\d+)\\s*,\\s*(-?\\d+\\.\\d+)\\s*\\]?\\s*$/;\r\n  const match = input.match(regex);\r\n\r\n  if (!match) {\r\n    throw new Error(\"Неверный формат координат\");\r\n  }\r\n\r\n  return {\r\n    latitude: parseFloat(match[1]),\r\n    longitude: parseFloat(match[2]),\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://timeline-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;