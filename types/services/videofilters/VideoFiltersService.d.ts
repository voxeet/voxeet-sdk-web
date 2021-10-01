import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
import { SessionService } from '..';
import { VideoFilter, VideoFilterOptions } from '../../models/VideoFilters';
/**
 * The VideoFiltersService manages the video filters that allow blurring the local participant's background or using a selected image as the local participant's background. The video filters are available only for the Dolby.io Communications SDK for Desktop users. The service allows [checking](#getsupportedfilters) the available video filters and [applying](#setfilter) the selected filter on the proper video stream.
 *
 */
export declare class VideoFiltersService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     */
    constructor(sdk: any, conferenceService: ConferenceService, sessionService: SessionService);
    /**
     * Returns video filters that are available for the local participant.
     *
     * The [bokeh](doc:js-client-sdk-model-videofilters#bokeh) and [staticImage](doc:js-client-sdk-model-videofilters#staticimage) filters are available only for the Dolby.io Communications SDK for Desktop users and are not supported on any other platform.
     */
    getSupportedFilters(): VideoFilter[];
    /**
     * Applies the selected video filter on the local participant's video stream.
     *
     * @param filter - The selected video filter.
     * @param options - The video filter options. The options include the image file for the [staticImage](doc:js-client-sdk-model-videofilters#staticimage) filter and information about the video stream on which the video filter should be applied.
     */
    setFilter(filter: VideoFilter, options?: VideoFilterOptions): Promise<void>;
}
