// ==UserScript==
// @name         agar-mass-ejector
// @namespace    http://github.com/dimotsai/
// @version      0.02
// @description  A faster, continuous mass ejector for agar.
// @author       dimotsai
// @license      MIT
// @match        http://agar.io/
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var $ = window.jQuery;

    $(window).load(function() {
        var onkeydown = window.onkeydown;
        var onkeyup = window.onkeyup;
        var amount = 6;
        var duration = 50; //ms

        var overwriting = function(evt) {
            if (evt.keyCode === 69) { // KEY_E
                for (var i = 0; i < amount; ++i) {
                    setTimeout(function() {
                        onkeydown({keyCode: 87}); // KEY_W
                        onkeyup({keyCode: 87});
                    }, i * duration);
                }
            } else {
                onkeydown(evt);
            }
        };

        if (onkeydown === overwriting) return;

        window.onkeydown = overwriting;
    });
})();
