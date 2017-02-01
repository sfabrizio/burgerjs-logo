#!/usr/bin/env node

module.exports = (function() {
    var turboLogo = require('turbo-logo');

    return {
        print: finalPrint
    };

    /////////

    function printText() {
        turboLogo('Burger JS');
    }

    function printArtLogo() {
        console.log('      _..----.._      \r\n    .\'     o    \'.    \r\n   \/   o       o  \\\r\n  |o        o     o|\r\n  \/\'-.._o     __.-\'\\\r\n  \\      `````     \/\r\n  |``--........--\'`|\r\n   \\ \/\r\n     `\'----------\'`');
    }

    function finalPrint() {
        printText();
        setTimeout(printArtLogo, 0);
    }
})();
