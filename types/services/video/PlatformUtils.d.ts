/**
 * ToDo: Consider to make the class common and move it to 'lib' directory
 * @ignore
 */
export declare class PlatformUtils {
    private static readonly mBrowser;
    private static readonly mIsFirefox;
    private static readonly mIsChrome;
    private static readonly mIsEdge;
    /**
     * Video processing is supportd for Chrome v91+ and Edge v91+ platforms.
     *
     * VSL requires SIMD support, chrome-based browsers support SIMD from v91.x
     */
    private static readonly mIsVideoProcessingSupported;
    static get isFirefox(): boolean;
    static get isChrome(): boolean;
    static get isEdge(): boolean;
    static get isVideoProcessingSupported(): boolean;
}
