"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSettings = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var logoSettings_1 = require("./logoSettings");
var menuSettings_1 = require("./menuSettings");
var mapSettings = function (settings) {
    var data = settings.data;
    var _a = data.id, id = _a === void 0 ? '' : _a, _b = data.attributes, _c = _b === void 0 ? '' : _b, _d = _c.blogName, blogName = _d === void 0 ? '' : _d, _e = _c.blogDescription, blogDescription = _e === void 0 ? '' : _e, _f = _c.logo, logo = _f === void 0 ? '' : _f, _g = _c.menuLink, menuLink = _g === void 0 ? [] : _g, _h = _c.footerText, footerText = _h === void 0 ? '' : _h;
    return {
        id: id,
        blogName: blogName,
        blogDescription: blogDescription,
        cover: (0, logoSettings_1.mapLogoSettings)(logo),
        menuLink: (0, menuSettings_1.mapMenuSettings)(menuLink),
        footerText: footerText,
    };
};
exports.mapSettings = mapSettings;
