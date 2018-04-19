// ----- Main app file

var $ = require('jquery');

// ----- Path to main SCSS file
var css = require('./scss/style.scss');

// ----- Require modules here
var nav = require('./js/nav/nav.js');
var searchHandler = require('./js/search/search.js');

// ----- Call modules here
$(document).ready(function() {
    nav();
    searchHandler();
});
