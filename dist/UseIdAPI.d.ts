import { IStartSessionResponse } from "./IStartSessionResponse";
import { Identity } from "./Identity";
export declare class UseIdAPI {
    domain: string;
    widgetSrc: string;
    apiBaseUrl: string;
    constructor(apiKey: string, domain: string);
    startSession(): Promise<IStartSessionResponse>;
    getIdentity(eIdSessionId: string): Promise<Identity>;
}
export interface IUseIdAPI {
    startSession(): Promise<IStartSessionResponse>;
    getIdentity(eIdSessionId: string): Promise<Identity>;
}
