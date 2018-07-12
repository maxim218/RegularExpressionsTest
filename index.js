"use strict";

function isNumber(stringParam) {

    function isCharNumber(charParam) {
        const c = charParam.toString();
        const s = "1234567890";
        return s.indexOf(c) !== -1;
    }

    const s = stringParam.toString();

    if(s.length === 0) {
        return false;
    }

    if(s === "-") {
        return false;
    }

    if(s === "0") {
        return true;
    }

    if(s.charAt(0) === "0") {
        return false;
    }

    if(s.length > 1) {
        if(s.charAt(0) === "-" && s.charAt(1) === "0") {
            return false;
        }
    }

    let start = 0;

    if(s.charAt(0) === "-") {
        start = 1;
    }

    for(let i = start; i < s.length; i++) {
        const c = s.charAt(i);
        if(isCharNumber(c) === false) {
            return false;
        }
    }

    return true;
}

function equal(a, b) {
    if(a === b) {
        console.log("OK");
    } else {
        throw new Error();
    }
}

equal(isNumber("00"), false);
equal(isNumber("000"), false);
equal(isNumber("0123"), false);
equal(isNumber("00456"), false);
equal(isNumber(""), false);
equal(isNumber("-0"), false);
equal(isNumber("-0123"), false);
equal(isNumber("-"), false);

equal(isNumber("0"), true);
equal(isNumber("456"), true);
equal(isNumber("-123"), true);
equal(isNumber("15"), true);
equal(isNumber("-15"), true);
equal(isNumber("6"), true);
equal(isNumber("-6"), true);
equal(isNumber("10"), true);
equal(isNumber("-10"), true);
equal(isNumber("500"), true);
equal(isNumber("-500"), true);
equal(isNumber("203040"), true);
equal(isNumber("800"), true);
