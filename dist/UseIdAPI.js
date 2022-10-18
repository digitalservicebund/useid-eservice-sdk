"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseIdAPI = void 0;
const Identity_1 = require("./Identity");
const axios_1 = require("axios");
class UseIdAPI {
    constructor(apiKey, domain) {
        axios_1.default.interceptors.request.use(config => {
            var _a;
            config.headers = (_a = config.headers) !== null && _a !== void 0 ? _a : {};
            config.headers['Authorization'] = `Bearer ${apiKey}`;
            return config;
        });
        this.domain = domain;
        this.widgetSrc = `${domain}/widget.js`;
        this.apiBaseUrl = `${domain}/api/v1/identification/sessions`;
    }
    async startSession() {
        const response = await axios_1.default.post(this.apiBaseUrl);
        return {
            tcTokenUrl: response.data.tcTokenUrl,
        };
    }
    async getIdentity(eIdSessionId) {
        const response = await axios_1.default.get(`${this.apiBaseUrl}/${eIdSessionId}`);
        return new Identity_1.Identity(response.data);
    }
}
exports.UseIdAPI = UseIdAPI;
