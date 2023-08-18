"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLogoSettings = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var mapLogoSettings = function (logoData) {
    var data = logoData.data;
    var _a = data[0], _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.attributes, _d = _c === void 0 ? '' : _c, _e = _d.altText, altText = _e === void 0 ? '' : _e, _f = _d.url, url = _f === void 0 ? '' : _f;
    return { id: id, altText: altText, url: url };
};
exports.mapLogoSettings = mapLogoSettings;
