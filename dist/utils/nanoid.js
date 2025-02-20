"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nanoid = nanoid;
function generateString() {
    return Math.random().toString(36).substring(2, 5);
}
function nanoid() {
    const fistSegment = generateString();
    const secondSegment = generateString();
    return `${fistSegment}-${secondSegment}`;
}
