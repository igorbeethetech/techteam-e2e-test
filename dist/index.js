"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
exports.hello = hello;
function hello() {
    return "Hello from TechTeam E2E test";
}
var fibonacci_1 = require("./utils/fibonacci");
Object.defineProperty(exports, "fibonacci", { enumerable: true, get: function () { return fibonacci_1.fibonacci; } });
