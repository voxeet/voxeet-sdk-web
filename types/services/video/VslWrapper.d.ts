/**
 * @ignore
 */
export interface VslInitOptions {
    passthrough?: boolean;
    wasm_filepath?: string;
    model_filepath?: string;
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
    stop(): Promise<void>;
    changeInput(newInput: MediaStream): Promise<void>;
    changeBackground(image: HTMLImageElement): Promise<void>;
    getOutputStream(): Promise<MediaStream>;
}
