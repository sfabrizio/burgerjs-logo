#!/usr/bin/env node

module.exports = (function() {
    var turboLogo = require('turbo-logo'),
        colors = require('colors/safe');

    return {
        print: finalPrint
    };

    /////////

    function getText() {
        return 'Burger JS';
    }

    function getBurgerAscii() {
        return '      _..----.._      \r\n    .\'     o    \'.    \r\n   \/   o       o  \\\r\n  |o        o     o|\r\n  \/\'-.._o     __.-\'\\\r\n  \\      `````     \/\r\n  |``--........--\'`|\r\n   \\ \/\r\n     `\'----------\'`';
    }

    function finalPrint(options) {
        var burger = getBurgerAscii(),
            text = getText(),
            color = options && options.color || 'rainbow';

        console.log(colors[color](burger));
        turboLogo(text, color);
    }
})();
