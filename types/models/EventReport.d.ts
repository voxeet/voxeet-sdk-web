/**
 * @ignore
 * */
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
interface SDKTraceData {
    description?: string;
    data: any;
    api: string;
}
declare class EventReport {
    type: string;
    level: string;
    constructor(e: EventReportData);
}
/**
 * @ignore
 */
export declare class UserActionReport extends EventReport {
    action: string;
    description: string;
    component: string;
    api: string;
    payload?: Array<any>;
    constructor(e: UserActionData);
}
/**
 * @ignore
 */
export declare class SDKErrorReport extends EventReport {
    error: string;
    message: string;
    code?: number;
    constructor(e: SDKErrorData);
}
/**
 * @ignore
 */
export declare class SDKTraceReport extends EventReport {
    description?: string;
    payload: any;
    api: string;
    constructor(e: SDKTraceData);
}
export {};
