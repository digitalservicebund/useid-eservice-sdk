"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
class Identity {
    constructor(values) {
        this.values = values;
    }
    get(dataGroup) {
        return this.values[dataGroup.toLowerCase()];
    }
}
exports.Identity = Identity;
