"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tagsClean = function (tagsData) {
    var data = tagsData.data;
    if (data !== null) {
        return data.map(function (item) {
            var _a = item.attributes, displayName = _a.displayName, slug = _a.slug;
            return {
                displayName: displayName,
                slug: slug,
            };
        });
    }
};
exports.default = tagsClean;
