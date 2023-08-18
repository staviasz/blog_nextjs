"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coverClean = function (coverData) {
    var data = coverData.data;
    if (data) {
        var _a = data.id, id = _a === void 0 ? '' : _a, _b = data.attributes, _c = _b.altText, altText = _c === void 0 ? '' : _c, _d = _b.url, url = _d === void 0 ? '' : _d;
        return { id: id, altText: altText, url: url };
    }
};
exports.default = coverClean;
