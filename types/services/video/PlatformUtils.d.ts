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
     * Video processing is supported for Chrome v91+ and Edge v91+ browsers on the desktop platform.
     *
     * VSL requires SIMD support, chrome-based browsers support SIMD from v91.x
     *
     * It is also supported for Electron v13+ that uses Chrome 91.
     */
    private static readonly mIsVideoProcessingSupported;
    static get isFirefox(): boolean;
    static get isChrome(): boolean;
    static get isEdge(): boolean;
    static get isVideoProcessingSupported(): boolean;
}
