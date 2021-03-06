/**
 * @file px2rem
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/5/26
 */

"use strict";

module.exports = function (str, conf) {
    return str.replace(/\b([\d\.]+)px\b/g, function(s, px) {
        px = +px;
        if (Math.abs(px) >= conf.min) {
            return (px / conf.rem).toFixed(4) + 'rem/* @source-size: ' + px + 'px; */';
        }
        return s;
    });
};
