/**
 * **Note**: This model is available only to the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) users. If you wish to change the local participant's background using the Web SDK, call the [start](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#start) or [setProcessor](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#setprocessor) method.
 *
 * The VideoFilter model represents the possible video filters that allow blurring or changing the local participant's background.
 */
export declare enum VideoFilter {
    /**
     * Disables the applied video filter. This setting does not disable [video denoising](./../interfaces/models_VideoFilters.VideoFilterOptions.html#videoDenoise); you can still use [video denoising](./../interfaces/models_VideoFilters.VideoFilterOptions.html#videoDenoise) when VideoFilter is set to `None`.
     *
     * @example
     * ```js
     * VoxeetSDK.videoFilters.setFilter(VideoFilter.None)
     * ```
     */
    None = "none",
    /**
     * Blurs the local participant's background.
     *
     * @example
     * ```js
     * VoxeetSDK.videoFilters.setFilter(VideoFilter.Bokeh)
     * ```
     */
    Bokeh = "bokeh",
    /**
     * Replaces the local participant's background with the selected static image. The StaticImage filter supports the following image formats:
     *
     * - Windows bitmaps: BMP and DIB
     * - JPEG files: JPEG, JPG, and JPE
     * - Portable Network Graphics: PNG
     *
     * @example
     * ```js
     * VoxeetSDK.videoFilters.setFilter(VideoFilter.StaticImage, {imageFile: fileObject})
     * ```
     */
    StaticImage = "staticimage"
}
/**
 * **Note**: This model is available only to the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) users. If you wish to change the local participant's background using the Web SDK, call the [start](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#start) or [setProcessor](https://docs.dolby.io/communications-apis/docs/js-client-sdk-model-localvideo#setprocessor) method.
 *
 * The VideoFilterOptions model contains additional options for [VideoFilters](./../enums/models_VideoFilters.VideoFilter.html).
 */
export interface VideoFilterOptions {
    /**
     * The image file that is required for the [staticImage](./../enums/models_VideoFilters.VideoFilter.html#StaticImage) filter. The StaticImage filter supports the following image formats:
     *
     * - Windows bitmaps: BMP and DIB
     * - JPEG files: JPEG, JPG, and JPE
     * - Portable Network Graphics: PNG
     */
    imageFile?: File;
    /**
     * The stream on which the SDK should apply the selected filter. By default, the filters are applied on the local participant's video track that is sent to a conference. Participants can also retrieve the local stream using [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) and then apply the filter to that stream to preview what the filter would look like.
     */
    stream?: MediaStream | MediaStreamTrack;
    /**
     * The video noise reduction that improves video quality. This option is available regardless of the used video filters.
     */
    videoDenoise?: boolean;
}
