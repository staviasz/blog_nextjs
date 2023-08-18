"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authorClean = function (authorData) {
    var data = authorData.data;
    if (data !== null) {
        var _a = data.attributes, displayName = _a.displayName, slug = _a.slug;
        return { displayName: displayName, slug: slug };
    }
};
exports.default = authorClean;
