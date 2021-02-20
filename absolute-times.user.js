// ==UserScript==
// @name         Github: always show absolute times
// @match        https://github.com/*
// @author       odony: https://stackoverflow.com/a/47014875/934511
// ==/UserScript==

(function() {
    setTimeout(function() {
        var els = window.document.querySelectorAll("time-ago,relative-time");
        els.forEach(function(el) {
            el.innerHTML += ' <span class="text-small">(' + el.title + ')</span>'; // set original timestamp
            el.disconnectedCallback(); // stop auto-updates
        });
    }, 100); // YMMV, experiment with the timeout
})();
