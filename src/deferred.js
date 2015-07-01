/*jslint */
/*global module */

"use strict";

function deferred(actions) {
    var temp;
    function iterate() {
        setTimeout(function () {
            var action = temp.shift();
            if (typeof action === "function") {
                action(iterate);
            }
        }, 0).unref();
    }
    if (Object.prototype.toString.call(actions).substr(8, 5).toLowerCase() === "array") {
        temp = actions.splice(0);
        iterate();
    }
}

module.exports = deferred;