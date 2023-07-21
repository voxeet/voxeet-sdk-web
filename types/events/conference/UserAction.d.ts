import Event from '../Event';
/**
 * @ignore
 */
interface UserActionData {
    level: string;
    action: string;
    description: string;
    component: string;
    api: string;
    payload: Array<any>;
}
/**
 * @ignore
 */
export default class UserAction extends Event {
    level: string;
    action: string;
    description: string;
    component: string;
    api: string;
    payload: Array<any>;
    constructor(e: UserActionData);
    static fromData(e: UserActionData): UserAction;
}
export {};
