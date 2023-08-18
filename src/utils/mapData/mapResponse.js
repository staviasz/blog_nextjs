"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapResponse = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var mapPost_1 = require("./mapPost");
var mapSettings_1 = require("./mapSettings");
var mapResponse = function (response) {
    var setting = response.setting, posts = response.posts;
    return {
        setting: (0, mapSettings_1.mapSettings)(setting),
        posts: (0, mapPost_1.default)(posts),
    };
};
exports.mapResponse = mapResponse;
