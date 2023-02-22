import Event from '../Event';
/**
 * @ignore
 */
export interface DvcsMetricData {
    user_id: string;
    value: string;
}
/**
 * @name DvcsMetric
 * @ignore
 * Internal Event
 */
export default class DvcsMetric extends Event {
    name: string;
    userId: string;
    value: number;
    constructor();
    static fromData(data: any): DvcsMetric;
}
