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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/*! exports provided: aboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aboutPage\", function() { return aboutPage; });\nconst aboutPage = function() {\n    const content = document.getElementById('content');\n    const infoTitle = document.createElement('h2');\n    const imgContainer = document.createElement('div');\n    const infoContainer = document.createElement('div');\n    const infoParagraph = document.createElement('p');\n    const image = document.createElement('img');\n\n    imgContainer.appendChild(image);\n    infoContainer.appendChild(infoTitle);\n    infoContainer.appendChild(infoParagraph);\n    imgContainer.appendChild(infoContainer);\n    content.appendChild(imgContainer);\n\n    const body = document.querySelector('body');\n\n    infoTitle.textContent = \"About\";\n    infoParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +  \n                                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure' + \n                                'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +\n                                'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\n\n    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');\n    image.src = \"https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80\";\n    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');\n    infoContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; margin-left: 23em; margin-right: 23em;' + \n                                'font-size: 1.2em; background-color: rgba(0,0,0,0.5); margin-top: 8.6em; padding-left: 1em; padding-right: 1em');\n    infoTitle.setAttribute('style', 'font-family: \\'Rock Salt\\', cursive;');\n}\n\n\n\n\n//# sourceURL=webpack:///./src/aboutPage.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\nconst contactPage = function() {\n    const content = document.getElementById('content');\n    const image = document.createElement('img');\n    const imgContainer = document.createElement('div');\n    const contactContainer = document.createElement('div');\n    const contactHeader = document.createElement('h2');\n    const emailHeader = document.createElement('h3');\n    const email = document.createElement('p');\n    const phoneHeader = document.createElement('h3');\n    const phoneNum = document.createElement('p');\n    const addressHeader = document.createElement('h3');\n    const address = document.createElement('p');\n    const googleImg = document.createElement('img');\n\n    contactContainer.appendChild(contactHeader);\n    contactContainer.appendChild(emailHeader);\n    contactContainer.appendChild(email);\n    contactContainer.appendChild(phoneHeader);\n    contactContainer.appendChild(phoneNum);\n    contactContainer.appendChild(addressHeader);\n    contactContainer.appendChild(address);\n    contactContainer.appendChild(googleImg);\n    imgContainer.appendChild(contactContainer);\n    imgContainer.appendChild(image);\n    content.appendChild(imgContainer);\n\n    contactHeader.textContent = 'Contact';\n    emailHeader.textContent = 'Email us:';\n    email.innerHTML = '<em> enquires@cantonplace.com </em>';\n    phoneHeader.textContent = 'Call us:';\n    phoneNum.innerHTML = '<em> 123-456-7891 </em>';\n    addressHeader.textContent = 'Address:';\n    address.innerHTML = '<em>12 Somewhere Street, SomePlace, 000000 </em>';\n    image.src = \"https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80\";\n    googleImg.src = \"https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1\";\n\n    \n    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');\n    contactContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; font-size: 1.2em; background-color: rgba(0,0,0,0.5);' + \n                                'margin-top: 1.6em; padding-left: .1em; padding-right: .1em; margin-left: 22em; margin-right: 22em;left: 0; right: 0');\n    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');\n    googleImg.setAttribute('style', ' position: relative; height: 17em; margin-bottom: 1em; margin-top: .5em');\n    address.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');\n    email.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');\n    phoneNum.setAttribute('style', 'margin-top: -.8em; margin-bottom: -.1em');\n    contactHeader.setAttribute('style', 'margin-bottom: -.5em; margin-top: -.1em');\n}\n\n\n\n//# sourceURL=webpack:///./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\nconst aboutLi = document.getElementById('about');\nconst menuLi = document.getElementById('menu');\nconst contactLi = document.getElementById ('contact');\nconst content = document.getElementById('content');\n\nmenuLi.addEventListener('click', function() {\n    content.removeChild(content.childNodes[3]);\n    Object(_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"menuPage\"])();\n    menuLi.style.textDecoration = 'underline';\n    aboutLi.style.textDecoration = 'none';\n    contactLi.style.textDecoration = 'none';\n});\n\naboutLi.addEventListener('click', function() {\n    content.removeChild(content.childNodes[3]);\n    Object(_aboutPage__WEBPACK_IMPORTED_MODULE_0__[\"aboutPage\"])();\n    aboutLi.style.textDecoration = 'underline';\n    menuLi.style.textDecoration = 'none';\n    contactLi.style.textDecoration = 'none';\n});\n\ncontactLi.addEventListener('click', function() {\n    content.removeChild(content.childNodes[3]);\n    Object(_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"contactPage\"])();\n    contactLi.style.textDecoration = 'underline';\n    menuLi.style.textDecoration = 'none';\n    aboutLi.style.textDecoration = 'none';\n});\n\nwindow.onload = function() {\n    Object(_aboutPage__WEBPACK_IMPORTED_MODULE_0__[\"aboutPage\"])();\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nconst menuPage = function() {\n    const content = document.getElementById('content');\n    const image = document.createElement('img');\n    const imgContainer = document.createElement('div');\n    const menuContainer = document.createElement('div');\n    const menuHeader = document.createElement('h2');\n    const menuItemHeaderOne = document.createElement('h3');\n    const menuItemHeaderTwo = document.createElement('h3');\n    const menuItemHeaderThree = document.createElement('h3');\n    const menuItemHeaderFour = document.createElement('h3');\n    const menuItemHeaderFive = document.createElement('h3');\n    const menuItemDescOne = document.createElement('p');\n    const menuItemDescTwo = document.createElement('p');\n    const menuItemDescThree = document.createElement('p');\n    const menuItemDescFour = document.createElement('p');\n    const menuItemDescFive = document.createElement('p');\n    const body = document.querySelector('body');\n\n    menuContainer.appendChild(menuHeader);\n    menuContainer.appendChild(menuItemHeaderOne);\n    menuContainer.appendChild(menuItemDescOne);\n    menuContainer.appendChild(menuItemHeaderTwo);\n    menuContainer.appendChild(menuItemDescTwo);\n    menuContainer.appendChild(menuItemHeaderThree);\n    menuContainer.appendChild(menuItemDescThree);\n    menuContainer.appendChild(menuItemHeaderFour);\n    menuContainer.appendChild(menuItemDescFour);\n    menuContainer.appendChild(menuItemHeaderFive);\n    menuContainer.appendChild(menuItemDescFive);\n    imgContainer.appendChild(menuContainer);\n    imgContainer.appendChild(image);\n    content.appendChild(imgContainer);\n\n    menuHeader.textContent = 'Menu';\n    menuItemHeaderOne.textContent = 'Deep Fried Crispy Chicken (Half)';\n    menuItemDescOne.innerHTML = '<em>Colonel Sanders would have taken up an alternative career if he\\'d ever tried' +\n                                'our way with chicken! Crispy, crunchy & an explosion of taste.</em>'\n    menuItemHeaderTwo.textContent = 'Char Siu';\n    menuItemDescTwo.innerHTML = '<em>Slices of pork, don\\'t be alarmed at the colour - the famous Hoi Sin sauce in' +\n                                'which it is marinated makes it go red, barbecued & exceedingly good.</em>';\n    menuItemHeaderThree.textContent = 'Classic steamed dim sum';\n    menuItemDescThree.innerHTML = '<em>Scallop shui mai, seafood black truffle dumpling, har gau, wild mushroom dumpling</em>';\n    menuItemHeaderFour.textContent = 'Classic sweet and sour pork';\n    menuItemDescFour.innerHTML = '<em>Pineapple, bell pepper, tomato</em>';\n    menuItemHeaderFive.textContent = 'Stir-fry soybean with cloud ear mushroom';\n    menuItemDescFive.innerHTML = 'Shimeji, cloud ear mushroom';\n\n    imgContainer.setAttribute('style', 'overflow: hidden; height: 700px; position: relative');\n    image.src = \"https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1129&q=80\";\n    image.setAttribute('style', 'display: block; width: 100%; height: auto; position: absolute; bottom: 0');\n    menuContainer.setAttribute('style', 'z-index: 1; position: absolute; text-align: center; font-size: 1.2em; background-color: rgba(0,0,0,0.5);' +\n                                'margin-top: 2.3em; padding-left: 1em; padding-right: 1em; margin-left: 7em; margin-right: 7em');\n    menuHeader.setAttribute('style', 'font-family: \\'Rock Salt\\', cursive;');\n}\n\n\n\n//# sourceURL=webpack:///./src/menuPage.js?");

/***/ })

/******/ });