"use strict";
// // // // Q2:
// // // // let personalname = "Rabisha"
// // // // console.log('hello,person Name,"would you like to play table tennis')
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName) {
    var extraOption = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraOption[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign.apply(Object, __spreadArray([{}], extraOption, false)));
    return carInfo;
}
;
var answare = storeCarInfo('Honda', 'civic', { colour: 'black' }, { features: ['Navigation', 'power window'] });
console.log('answare');
