"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoriesClean = function (categoriesData) {
    var data = categoriesData.data;
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
exports.default = categoriesClean;
