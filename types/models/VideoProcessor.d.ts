export declare enum VideoProcessorType {
    Bokeh = "bokeh",
    BackgroundReplacement = "backgroundreplacement"
}
export interface VideoProcessor {
    type?: VideoProcessorType;
    image?: HTMLImageElement;
}
