"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseIdAPI = void 0;
const Identity_1 = require("./Identity");
const axios_1 = require("axios");
class UseIdAPI {
    constructor(apiKey) {
        axios_1.default.interceptors.request.use(config => {
            var _a;
            config.headers = (_a = config.headers) !== null && _a !== void 0 ? _a : {};
            config.headers['Authorization'] = `Bearer ${apiKey}`;
            return config;
        });
    }
    async startSession() {
        const response = await axios_1.default.post(UseIdAPI.apiBaseUrl);
        return {
            tcTokenUrl: response.data.tcTokenUrl,
        };
    }
    async getIdentity(eIdSessionId) {
        const response = await axios_1.default.get(`${UseIdAPI.apiBaseUrl}/${eIdSessionId}`);
        return new Identity_1.Identity(response.data);
    }
}
exports.UseIdAPI = UseIdAPI;
UseIdAPI.domain = "https://useid.dev.ds4g.net";
UseIdAPI.widgetSrc = `${UseIdAPI.domain}/widget.js`;
UseIdAPI.apiBaseUrl = `${UseIdAPI.domain}/api/v1/identification/sessions`;
