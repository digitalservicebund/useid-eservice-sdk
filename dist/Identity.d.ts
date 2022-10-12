import { DataGroup } from "./DataGroup";
export interface IIdentityValues {
    [key: string]: string | undefined;
}
export declare class Identity {
    private values;
    constructor(values: IIdentityValues);
    get(dataGroup: DataGroup): string | undefined;
}
