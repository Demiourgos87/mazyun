var $ = require('jquery');

module.exports = function() {
    // Search

    var searchTrigger = $('.b-header__search-trigger'),
        searchBar = $('.c-search--mob');

    function searchHandler() {
        searchBar.toggleClass('active');
    }

    searchTrigger.on('click', searchHandler);
};
