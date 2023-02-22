import Event from '../Event';
/**
 * @ignore
 */
export interface ConferenceStatsData {
    participantStats: Map<string, Object>;
}
/**
 * @ignore
 */
export default class ConferenceStats extends Event {
    stats: Map<string, Object>;
    constructor();
    static fromData(data: ConferenceStatsData): ConferenceStats;
}
