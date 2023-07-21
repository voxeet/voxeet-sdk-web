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
 * This model is supported only in SDK 3.7 and later and only on Chrome and Edge on desktop operating systems.
 */
export interface VideoProcessor {
    /**
     * The type of the video processor.
     */
    type: VideoProcessorType;
    /**
     * The [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object for the [BackgroundReplacement](./../enums/models_VideoProcessor.VideoProcessorType.html#BackgroundReplacement) video processor. The supported image file formats are JPG, JPEG, 24-bit PNG, and 32-bit PNG. In the case of 32-bit PNG with an alpha channel, the transparent areas are displayed as black.
     *
     * The image needs to be loaded before enabling the processor. Otherwise, the SDK triggers an error.
     */
    image?: HTMLImageElement;
}
