/**
 * The VideoFilter model represents the possible video filters that allow blurring or changing the local participant's background. The video filters are available only for the Dolby.io Communications SDK for Desktop users.
 */
export declare enum VideoFilter {
    /**
     * Disables the applied video filter. This setting does not disable [video denoising](doc:js-client-sdk-model-videofilteroptions#videodenoise); you can still use [video denoising](doc:js-client-sdk-model-videofilteroptions#videodenoise) when VideoFilter is set to `None`.
     *
     * Example: VoxeetSDK.videoFilters.setFilter(VideoFilter.None)
     */
    None = "none",
    /**
     * Blurs the local participant's background.
     *
     * Example: VoxeetSDK.videoFilters.setFilter(VideoFilter.Bokeh)
     */
    Bokeh = "bokeh",
    /**
     * Replaces the local participant's background with the selected static image.
     *
     * Example: VoxeetSDK.videoFilters.setFilter(VideoFilter.StaticImage, {imageFile: fileObject})
     */
    StaticImage = "staticimage"
}
/**
 * The VideoFilterOptions model includes the [image file](#imagefile) for the [staticImage](doc:js-client-sdk-model-videofilter#staticimage) filter, information about the video [stream](#stream) on which the video filter should be applied, and the [video denoising](#videodenoise) option.
 */
export interface VideoFilterOptions {
    /**
     * The image file that is required for the [staticImage](doc:js-client-sdk-model-videofilter#staticimage) filter.
     */
    imageFile?: File;
    /**
     * The stream on which the SDK should apply the selected filter.  By default, the filters are applied on the local participant's video track that is sent to a conference. You can change the stream to the local video track to see the filters locally, without adding the filter to the video track that is sent to a conference.
     */
    stream?: MediaStream | MediaStreamTrack;
    /**
     * The video noise reduction that improves video quality. This option is available regardless of the used video filters.
     */
    videoDenoise?: boolean;
}
