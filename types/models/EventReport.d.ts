export interface EventReportData {
    type: string;
    level: string;
    component?: string;
    action?: string;
    description?: string;
    error?: string;
    message?: string;
    code?: number;
}
interface UserActionData {
    level: string;
    action: string;
    description: string;
    component: string;
    api: string;
    payload?: Array<any>;
}
interface SDKErrorData {
    error: string;
    message: string;
    code?: number;
}
declare class EventReport {
    type: string;
    level: string;
    constructor(e: EventReportData);
}
export declare class UserActionReport extends EventReport {
    action: string;
    description: string;
    component: string;
    api: string;
    payload?: Array<any>;
    constructor(e: UserActionData);
}
export declare class SDKErrorReport extends EventReport {
    error: string;
    message: string;
    code?: number;
    constructor(e: SDKErrorData);
}
export {};
