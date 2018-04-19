webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

var $ = __webpack_require__(0);

// ----- Path to main SCSS file
var css = __webpack_require__(2);

// ----- Require modules here
var nav = __webpack_require__(4);
var searchHandler = __webpack_require__(5);

// ----- Call modules here
$(document).ready(function () {
    nav();
    searchHandler();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

var $ = __webpack_require__(0);

module.exports = function () {
    // Navigation

    var navTrigger = $('.b-header__nav-trigger'),
        nav = $('.c-nav');

    function triggerHandler() {
        nav.toggleClass('active');
    }

    navTrigger.on('click', triggerHandler);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);

module.exports = function () {
    // Search

    var searchTrigger = $('.b-header__search-trigger'),
        searchBar = $('.c-search');

    function searchHandler() {
        searchBar.toggleClass('active');
    }

    searchTrigger.on('click', searchHandler);
};

/***/ })
],[1]);