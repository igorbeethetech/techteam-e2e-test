"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = fibonacci;
function fibonacci(n) {
    if (n < 0)
        return 0;
    n = Math.floor(n);
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
