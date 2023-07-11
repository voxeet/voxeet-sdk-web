/**
 * The VideoProcessorType model allows selecting the type of the video processor to either blur the local participant's background or use a selected image as the background.
 *
 * This model is supported only in SDK 3.7 and later.
 *
 * @deprecated This model is deprecated in SDK 3.11. To blur the background or replace it with an image, use VideoProcessorOptions.
 */
export declare enum VideoProcessorType {
    /**
     * Blurs the local participant's background.
     */
    Bokeh = "bokeh",
    /**
     * Replaces the local participant's background with the selected static image.
     */
    BackgroundReplacement = "backgroundreplacement",
    /**
     * @ignore
     * Video stream passes through video processing unit wihtout any modification. Video frames are just
     * copied from input to output.
     */
    None = "none"
}
/**
 * The VideoProcessor model allows choosing the preferred video processor that either blurs the local participant's background or uses a selected image as the background.
 *
 * This model is supported only in SDK 3.7 and later and only on Chrome and Edge on desktop operating systems.
 *
 * @deprecated This model is deprecated in SDK 3.11 and replaced with VideoProcessorOptions.virtualBackground.
 */
export interface VideoProcessor {
    /**
     * @deprecated Replaced to VideoProcessorOptions.virtualBackground.type
     * The type of the video processor.
     */
    type: VideoProcessorType;
    /**
     * @deprecated Replaced to VideoProcessorOptions.virtualBackground.image
     * The [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object for the [BackgroundReplacement](./../enums/models_VideoProcessor.VideoProcessorType.html#BackgroundReplacement) video processor. The supported image file formats are JPG, JPEG, 24-bit PNG, and 32-bit PNG. In the case of 32-bit PNG with an alpha channel, the transparent areas are displayed as black.
     *
     * The image needs to be loaded before enabling the processor. Otherwise, the SDK triggers an error.
     */
    image?: HTMLImageElement;
}
/**
 * Flags are a way to activate video processor features that are not available by default.
 *
 * This API is for internal use only and is not intended for publishing.
 *
 * @ignore
 */
export interface VideoProcessorFlags {
    /**
     * Enables debug logs. All messages are printed to a standard console output. Note that debug logs, because of the large amount, may slightly impact on general performance and it's recommended to disable it during performance or load tests.
     */
    debugLogs?: boolean;
    /**
     * Experimental feature that reduces a main thread blocking by using async pixels readback from GPU memory.
     */
    nonBlockingAsyncPixelReadback?: boolean;
}
/**
 * The VideoProcessorOptions model gathers video processing settings. This model is supported only in SDK 3.11 and later.
 */
export interface VideoProcessorOptions {
    /**
     * Blurs the local participant's background or replaces it with a selected image or a video.
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | false | Disables all virtual background effects. |
     * | bokeh | Blurs the background. |
     * | HTMLImageElement | Sets the [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object as the background. The supported image file formats are JPG, JPEG, 24-bit PNG, and 32-bit PNG. In the case of 32-bit PNG with an alpha channel, the transparent areas are displayed as black. The image needs to be loaded before setting the background. Otherwise, the SDK triggers an error. |
     * | HTMLVideoElement | Sets the [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) object as the background. We recommend selecting a video that has a similar resolution to the participant's camera resolution and a frame rate below 30 fps. Videos must be in a [format supported by <video> HTML elements](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers).  |
     */
    virtualBackground?: false | 'bokeh' | HTMLImageElement | HTMLVideoElement;
    /**
     * Smooths the local participant's face to improve their appearance. The property can range between 0.0 (off) and 1.0 (full), the default is false.
     */
    facialSmoothing?: false | number;
    /**
     * Automatically adjusts the brightness of the local participant's video to ensure that they are clearly visible. By default, this property is disabled.
     */
    autoBrightness?: boolean;
    /**
     * Replicates a stage spotlight effect for the local participant to highlight the participant's face. The property can range between 0.0 (off) and 1.0 (full), and the default is false.
     */
    spotLight?: false | number;
    /**
     * Reduces unwanted noise from the local participant's video to provide improved video quality. By default, this property is disabled.
     */
    noiseReduction?: boolean;
    /**
     * Automatically adjusts the local participant's video frame to keep the participant within view and centered in the video frame the whole time. By default, this property is disabled.
     */
    autoFraming?: boolean;
    /**
     * Flags can be set once when video processor is initializing. They cannot be modified while video processing is running.
     * @ignore
     */
    flags?: VideoProcessorFlags;
}
