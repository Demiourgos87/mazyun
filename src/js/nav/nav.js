// ----- Typical module

var $ = require('jquery');

module.exports = function() {
    // Navigation

    var navTrigger = $('.b-header__nav-trigger'),
        nav = $('.c-nav');

    function triggerHandler() {
        nav.toggleClass('active');
    }

    navTrigger.on('click', triggerHandler)
};
