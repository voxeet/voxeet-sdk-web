/**
 * Callback called when an exceptions occurs during processing a video frame.
 */
export declare type VslProcessingErrorHandler = (error: Error) => Promise<void>;
/**
 * @ignore
 */
export interface VslInitOptions {
    passthrough?: boolean;
    wasm_filepath?: string;
    model_filepath?: string;
    processing_error_handler?: VslProcessingErrorHandler;
    debug: boolean;
}
/**
 * Wrapps @dolbyio/vsl package which isn't a TypeScript module.
 *
 * @ignore
 */
export declare class VslWrapper {
    #private;
    static create(inputStream: MediaStream, options?: VslInitOptions): Promise<VslWrapper>;
    constructor(vsl: any);
    setProcessEnable(enabled: boolean): void;
    getProcessEnable(): boolean;
    setFaceEnhanceMode(enabled: boolean): void;
    getFaceEnhanceMode(): boolean;
    setPassthroughMode(enabled: boolean): void;
    getPassthroughMode(): boolean;
    setBackgroundMode(mode: string): void;
    getBackgroundMode(): string;
    getModelVersion(): string;
    stop(): void;
    start(): void;
    setProcessingErrorHandler(handler: VslProcessingErrorHandler): void;
    changeInput(newInput: MediaStream): Promise<void>;
    changeBackground(image: HTMLImageElement): Promise<void>;
    getOutput(): Promise<MediaStream>;
    changeOutputFrameRate(frameRate: number): Promise<void>;
}
