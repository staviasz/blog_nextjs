"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMenuSettings = void 0;
var mapMenuSettings = function (menuData) {
    if (menuData === void 0) { menuData = []; }
    return menuData.map(function (item) {
        var _a = item.id, id = _a === void 0 ? '' : _a, _b = item.link, link = _b === void 0 ? '' : _b, _c = item.newTab, newTab = _c === void 0 ? false : _c, _d = item.text, text = _d === void 0 ? '' : _d;
        return {
            id: id,
            link: link,
            newTab: newTab,
            text: text,
        };
    });
};
exports.mapMenuSettings = mapMenuSettings;
