"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAPHQL_QUERIES = void 0;
var graphql_request_1 = require("graphql-request");
var fragments_1 = require("./fragments");
exports.GRAPHQL_QUERIES = (0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  query GET_POSTS(\n    $categorySlug: String\n    $postSlug: String\n    $postSearch: String\n    $authorSlug: String\n    $tagSlug: String\n    $sort: [String] = \"createdAt:desc\"\n    $start: Int = 0\n    $limit: Int = 10\n  ) {\n    setting {\n      ...settings\n    }\n    posts(\n      pagination: { start: $start, limit: $limit }\n      sort: $sort\n      filters: {\n        slug: { contains: $postSlug }\n        title: { contains: $postSearch }\n        categories: { slug: { contains: $categorySlug } }\n        author: { slug: { contains: $authorSlug } }\n        tags: { slug: { contains: $tagSlug } }\n      }\n    ) {\n      ...posts\n    }\n  }\n"], ["\n  ", "\n  query GET_POSTS(\n    $categorySlug: String\n    $postSlug: String\n    $postSearch: String\n    $authorSlug: String\n    $tagSlug: String\n    $sort: [String] = \"createdAt:desc\"\n    $start: Int = 0\n    $limit: Int = 10\n  ) {\n    setting {\n      ...settings\n    }\n    posts(\n      pagination: { start: $start, limit: $limit }\n      sort: $sort\n      filters: {\n        slug: { contains: $postSlug }\n        title: { contains: $postSearch }\n        categories: { slug: { contains: $categorySlug } }\n        author: { slug: { contains: $authorSlug } }\n        tags: { slug: { contains: $tagSlug } }\n      }\n    ) {\n      ...posts\n    }\n  }\n"])), fragments_1.GRAPHQL_FRAGMENTS);
var templateObject_1;
