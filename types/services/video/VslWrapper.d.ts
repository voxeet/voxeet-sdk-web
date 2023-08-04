/**
 * Callback called when an exceptions occurs during processing a video frame.
 */
export declare type VslProcessingErrorHandler = (error: Error) => Promise<void>;
/**
 * @ignore
 *
 * NOTE: Property names must correspond to the names defined inside VSL library
 */
export interface VslFlags {
    /**
     * Use non-blocking async pixels readback from GPU memory. It reduces main thread blocking time.
     */
    nonBlockingAsyncPixelReadback: boolean;
}
/**
 * @ignore
 *
 * NOTE: Property names must correspond to the names defined inside VSL library
 */
export interface VslInitOptions {
    passthrough?: boolean;
    wasm_filepath?: string;
    model_filepath?: string;
    dvdnr_filepath?: string;
    processing_error_handler?: VslProcessingErrorHandler;
    debug: boolean;
    flags?: VslFlags;
}
/**
 * Wrapps @dolbyio/vsl package which isn't a TypeScript module.
 *
 * @ignore
 */
export declare class VslWrapper {
    #private;
    static create(inputStream: MediaStream, options?: VslInitOptions): Promise<VslWrapper>;
    private constructor();
    getModelVersion(): string;
    setProcessingErrorHandler(handler: VslProcessingErrorHandler): void;
    getOutput(): Promise<MediaStream>;
    stop(): void;
    start(): void;
    changeOutputFrameRate(frameRate: number): Promise<void>;
    changeInput(newInput: MediaStream): Promise<void>;
    setPassthroughMode(enabled: boolean): void;
    getPassthroughMode(): boolean;
    setBackgroundMode(mode: string): void;
    getBackgroundMode(): string;
    changeBackground(image: HTMLImageElement | HTMLVideoElement): Promise<void>;
    setFaceEnhanceMode(enabled: boolean): void;
    getFaceEnhanceMode(): boolean;
    setDenoiseMode(enabled: boolean): void;
    getDenoiseMode(): boolean;
    setAutoframeMode(enabled: boolean): void;
    getAutoframeMode(): boolean;
    setFaceSmoothMode(enabled: boolean): void;
    getFaceSmoothMode(): boolean;
    setFaceSmoothStrength(strength: number): void;
    getFaceSmoothStrength(): number;
    getFaceSmoothStrengthMax(): number;
    getFaceSmoothStrengthMin(): number;
    setStudioLightMode(enabled: boolean): void;
    getStudioLightMode(): boolean;
    setFaceGlowStrength(strength: number): void;
    getFaceGlowStrength(): number;
    getFaceGlowStrengthMax(): number;
    getFaceGlowStrengthMin(): number;
}
