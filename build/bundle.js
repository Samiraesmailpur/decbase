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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _js_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/loader */ \"./src/js/loader.js\");\n/* harmony import */ var _js_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_loader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_getYear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/getYear */ \"./src/js/getYear.js\");\n/* harmony import */ var _js_getYear__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_getYear__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/progressBar */ \"./src/js/progressBar.js\");\n/* harmony import */ var _js_progressBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_progressBar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_modalActivation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modalActivation */ \"./src/js/modalActivation.js\");\n/* harmony import */ var _js_modalActivation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_modalActivation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_showNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/showNews */ \"./src/js/showNews.js\");\n/* harmony import */ var _js_showNews__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_showNews__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_fetchProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/fetchProducts */ \"./src/js/fetchProducts.js\");\n/* harmony import */ var _js_fetchProducts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_fetchProducts__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_getFormData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/getFormData */ \"./src/js/getFormData.js\");\n/* harmony import */ var _js_getFormData__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_getFormData__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/swiper */ \"./src/js/swiper.js\");\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _js_getData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/getData */ \"./src/js/getData.js\");\n/* harmony import */ var _js_getData__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_getData__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://decbase/./src/index.js?");

/***/ }),

/***/ "./src/js/fetchProducts.js":
/*!*********************************!*\
  !*** ./src/js/fetchProducts.js ***!
  \*********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://decbase/./src/js/fetchProducts.js?");

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/***/ (() => {

eval("let btnContainer = document.querySelector('.services__btn-box');\nlet postContainer = document.querySelector('.services__content');\nlet users = [];\nasync function fetchUsers() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    const fetchUsers = await response.json();\n    users = fetchUsers.slice(0, 3);\n    return users;\n  } catch (error) {\n    console.error(error);\n  }\n}\nasync function fetchPosts(id) {\n  try {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);\n    const posts = await response.json();\n    return posts;\n  } catch (error) {\n    console.error(error);\n  }\n}\nasync function fetchPostsForAllUsers(users) {\n  try {\n    const postsForAllUsers = await Promise.all(users.map(user => fetchPosts(user.id).then(posts => posts[0])));\n    return postsForAllUsers;\n  } catch (error) {\n    console.error(error);\n  }\n}\nasync function createPostsForAllUsers() {\n  const users = await fetchUsers();\n  const postsForAllUsers = await fetchPostsForAllUsers(users);\n  createPost(postsForAllUsers);\n}\nfunction createPost(posts) {\n  postContainer.innerHTML = '';\n  posts.slice(0, 3).forEach(item => {\n    postContainer.innerHTML += `<div class=\"services__block\"><p class=\"services__text\">${item.title}</p><p class=\"services__desc\">${item.body}</p></div>`;\n  });\n}\nconst createUserBtn = user => `<button class=\"services__btn\" data-id=\"${user.id}\">${user.name}</button>`;\nbtnContainer.addEventListener('click', e => {\n  if (e.target.classList.contains('services__btn')) {\n    if (e.target.classList.contains('services__btn-all')) {\n      createPostsForAllUsers();\n    } else {}\n    let userId = e.target.dataset.id;\n    console.log(userId);\n    fetchPosts(userId).then(post => createPost(post));\n  }\n});\nfetchUsers().then(() => {\n  users.forEach(item => {\n    btnContainer.insertAdjacentHTML('beforeend', createUserBtn(item));\n  });\n});\ncreatePostsForAllUsers();\n\n//# sourceURL=webpack://decbase/./src/js/getData.js?");

/***/ }),

/***/ "./src/js/getFormData.js":
/*!*******************************!*\
  !*** ./src/js/getFormData.js ***!
  \*******************************/
/***/ (() => {

eval("const name = document.querySelector('.name');\nconst surname = document.querySelector('.surname');\nconst email = document.querySelector('.email');\nconst form = document.querySelector('.subscribe__form');\nconst errorName = document.querySelector('#error-name');\nconst errorSurname = document.querySelector('#error-surname');\nconst errorEmail = document.querySelector('#error-email');\nconst emailRegex = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\nconst fullNameRegex = /^[A-Z][a-zA-Z]*$/;\nlet messagesFullName = 'Only Latin letters are allowed. The first letter must be capitalized. Numbers and spaces are not allowed.';\nlet messagesEmail = 'Please enter a valid email address';\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  let isValidForm = true;\n  if (name.value === '') {\n    errorName.textContent = messagesFullName;\n    isValidForm = false;\n  } else if (!fullNameRegex.test(name.value)) {\n    errorName.textContent = messagesFullName;\n    isValidForm = false;\n  } else {\n    errorName.textContent = '';\n  }\n  if (surname.value === '') {\n    errorSurname.textContent = messagesFullName;\n    isValidForm = false;\n  } else if (!fullNameRegex.test(surname.value)) {\n    errorSurname.textContent = messagesFullName;\n    isValidForm = false;\n  } else {\n    errorSurname.textContent = '';\n  }\n  if (email.value === '') {\n    errorEmail.textContent = messagesEmail;\n    isValidForm = false;\n  } else if (!emailRegex.test(email.value)) {\n    errorEmail.textContent = messagesEmail;\n    isValidForm = false;\n  } else {\n    errorEmail.textContent = '';\n  }\n  if (isValidForm) {\n    const formData = {\n      name: name.value,\n      surname: surname.value,\n      email: email.value\n    };\n    localStorage.setItem('formData', JSON.stringify(formData));\n    form.reset();\n    const data = JSON.parse(localStorage.getItem('formData'));\n    if (data.name === 'Sigma') {\n      getDiscount(data.name);\n    }\n  }\n});\nfunction getDiscount(name) {\n  const date = new Date().toLocaleDateString('uk-UA');\n  document.querySelector('body').classList.add('is-hidden');\n  document.querySelector('.confetti').style.display = 'block';\n  document.querySelector('.confetti__content').textContent = `Hello, ${name}! Today, ${date}, you have a special offer: 120% Discount on your order =)`;\n  setTimeout(() => {\n    document.querySelector('.confetti__content').style.textContent = '';\n    document.querySelector('.confetti').style.display = 'none';\n    document.querySelector('body').classList.remove('is-hidden');\n  }, 5000);\n}\n\n//# sourceURL=webpack://decbase/./src/js/getFormData.js?");

/***/ }),

/***/ "./src/js/getYear.js":
/*!***************************!*\
  !*** ./src/js/getYear.js ***!
  \***************************/
/***/ (() => {

eval("const yearEl = document.querySelector('.copyrights__year');\nyearEl.textContent = new Date().toLocaleDateString('uk-UA', {\n  year: 'numeric'\n});\n\n//# sourceURL=webpack://decbase/./src/js/getYear.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ (() => {

eval("const loaderEl = document.querySelector('.loader');\nconst body = document.querySelector('body');\nwindow.addEventListener('load', () => {\n  body.classList.add('is-hidden');\n  setTimeout(() => {\n    body.classList.remove('is-hidden');\n    loaderEl.style.display = 'none';\n  }, 5000);\n});\n\n//# sourceURL=webpack://decbase/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/modalActivation.js":
/*!***********************************!*\
  !*** ./src/js/modalActivation.js ***!
  \***********************************/
/***/ (() => {

eval("const modalEl = document.querySelector('.modal');\nconst body = document.querySelector('body');\nconst btnEl = document.querySelector('.modal__btn');\nconst timeToOpenModal = 60000;\nconst timeToClosePage = 5000;\nlet isBtnClicked = false;\nlet closeTimer;\nfunction closeModal() {\n  modalEl.style.display = 'none';\n  body.classList.remove('is-load');\n}\nfunction openModal() {\n  modalEl.style.display = 'block';\n  body.classList.add('is-load');\n}\nfunction resetTimer() {\n  clearTimeout(closeTimer);\n  closeTimer = setTimeout(() => {\n    openModal();\n    setTimeout(() => {\n      closeModalAndClosePage();\n    }, timeToClosePage);\n  }, timeToOpenModal);\n}\nfunction closeModalAndClosePage() {\n  if (!isBtnClicked) {\n    console.log(!isBtnClicked);\n    window.close();\n  }\n  isBtnClicked = false;\n}\nbtnEl.addEventListener('click', () => {\n  closeModal();\n  isBtnClicked = true;\n});\ndocument.addEventListener('mousemove', resetTimer);\ndocument.addEventListener('keydown', resetTimer);\nresetTimer();\n\n//# sourceURL=webpack://decbase/./src/js/modalActivation.js?");

/***/ }),

/***/ "./src/js/progressBar.js":
/*!*******************************!*\
  !*** ./src/js/progressBar.js ***!
  \*******************************/
/***/ (() => {

eval("const progressContainerEl = document.querySelector('.nav__progress-container');\nconst progressBarEl = document.querySelector('.nav__progress-bar');\nfunction getScrollPercentage() {\n  return window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;\n}\nfunction updateProgressBar() {\n  progressBarEl.style.width = `${getScrollPercentage()}%`;\n  requestAnimationFrame(updateProgressBar);\n}\nupdateProgressBar();\n\n//# sourceURL=webpack://decbase/./src/js/progressBar.js?");

/***/ }),

/***/ "./src/js/showNews.js":
/*!****************************!*\
  !*** ./src/js/showNews.js ***!
  \****************************/
/***/ (() => {

eval("const newsBlock = document.querySelectorAll('.news__block');\nconst options = {\n  rootMargin: '500px',\n  threshold: 1\n};\nlet firstEl = false;\nconst trueCallback = function (entries, observer) {\n  entries.forEach(entry => {\n    Array.from(newsBlock).forEach((item, index) => {\n      if (entry.isIntersecting) {\n        item.classList.add('show');\n        item.classList.remove('hide', 'hide--delay');\n      } else {\n        item.classList.remove('show');\n        item.classList.add(index === 0 ? 'hide' : 'hide--delay');\n      }\n    });\n  });\n};\nconst observer = new IntersectionObserver(trueCallback, options);\nnewsBlock.forEach(item => {\n  observer.observe(item);\n});\n\n//# sourceURL=webpack://decbase/./src/js/showNews.js?");

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/***/ (() => {

eval("let swiper = new Swiper('.mySwiper', {\n  slidesPerView: 2,\n  spaceBetween: 50,\n  speed: 800,\n  slidesPerGroup: 2,\n  loop: true,\n  navigation: {\n    nextEl: '.testimonials__btn-next',\n    prevEl: '.testimonials__btn-prev'\n  }\n});\n\n//# sourceURL=webpack://decbase/./src/js/swiper.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://decbase/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;