/**
 * The VideoProcessorType model allows selecting the type of the video processor to either blur the local participant's background or use a selected image as the background.
 *
 * This model is supported only in SDK 3.7 and later.
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
 * This model is supported only in SDK 3.7 and later and is supported only on Chrome and Edge on desktop operating systems.
 */
export interface VideoProcessor {
    /**
     * The type of the video processor.
     */
    type?: VideoProcessorType;
    /**
     * The [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object for the [BackgroundReplacement](doc:js-client-sdk-model-videoprocessortype#backgroundreplacement) video processor. The image needs to be loaded before enabling the processor. Otherwise, the SDK triggers the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    image?: HTMLImageElement;
}
