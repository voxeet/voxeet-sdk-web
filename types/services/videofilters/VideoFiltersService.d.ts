import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
import { SessionService } from '..';
import { VideoFilter, VideoFilterOptions } from '../../models/VideoFilters';
/**
 * **Note**: This service is available only to the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) users. If you wish to change the local participant's background using the Web SDK, call the [start](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#start) or [setProcessor](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#setprocessor) method.
 *
 * The VideoFiltersService manages video filters that allow blurring the local participant's background or using a selected image as the background.
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
     * The [bokeh](./enums/models_VideoFilters.VideoFilter.html#Bokeh) and [staticImage](./enums/models_VideoFilters.VideoFilter.html#StaticImage) filters are available only to the Desktop SDK users and are not supported in the Web SDK.
     */
    getSupportedFilters(): VideoFilter[];
    /**
     * Applies the selected video filter on the local participant's video stream. When setting the filter is successful, the method returns a promise. Otherwise, the promise is rejected and the SDK returns the [UnsupportedError](./lib_Exceptions.UnsupportedError.html) if the required filer is not supported or [MediaStreamError](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/applyConstraints#return_value) if the requested constraints could not be applied.
     *
     * @param filter - The selected video filter.
     * @param options - The video filter options that can contain the image file for the [staticImage](./enums/models_VideoFilters.VideoFilter.html#StaticImage) filter and information about the video stream on which the filter should be applied.
     */
    setFilter(filter: VideoFilter, options?: VideoFilterOptions): Promise<void>;
}
