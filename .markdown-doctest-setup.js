"use strict";

const globals = require("./lib");
const internals = require("./lib/internals");

module.exports = {
  globals: Object.assign(Object.assign({}, internals), globals),
};
