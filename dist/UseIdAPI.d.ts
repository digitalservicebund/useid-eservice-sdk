import { IStartSessionResponse } from "./IStartSessionResponse";
import { Identity } from "./Identity";
export declare class UseIdAPI {
    static domain: string;
    static widgetSrc: string;
    private static apiBaseUrl;
    constructor(apiKey: string);
    startSession(): Promise<IStartSessionResponse>;
    getIdentity(eIdSessionId: string): Promise<Identity>;
}
export interface IUseIdAPI {
    startSession(): Promise<IStartSessionResponse>;
    getIdentity(eIdSessionId: string): Promise<Identity>;
}
