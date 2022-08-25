/**
 * @ignore
 */
export declare class VslResources {
    private static readonly dolbyIoVslVersionHash;
    private static readonly dolbyIoVslModelFile;
    private static readonly dolbyIoVslWasmFile;
    /**
     * Returns the relative path of the VSL's model file requires to fetch.
     */
    static getModelFilePath(): string;
    /**
     * Returns the relative path of the VSL's wasm file requires to fetch.
     */
    static getWasmFilePath(): string;
}
