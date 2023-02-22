import Event from '../Event';
import { VideoFilter, VideoFilterOptions } from '../../models/VideoFilters';
/**
 * @ignore
 */
export interface ConferenceVideoFilterUpdateData {
    filter: VideoFilter;
    filterOptions?: VideoFilterOptions;
}
/**
 * @ignore
 */
export default class ConferenceVideoFilterUpdate extends Event {
    filter: VideoFilter;
    filterOptions: VideoFilterOptions;
    constructor();
    static fromData(data: ConferenceVideoFilterUpdateData): ConferenceVideoFilterUpdate;
}
