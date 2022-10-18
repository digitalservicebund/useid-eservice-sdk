"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
class Identity {
    constructor(data) {
        this.data = data;
    }
    get(dataGroup) {
        return this.data.personalData[dataGroup];
    }
}
exports.Identity = Identity;
