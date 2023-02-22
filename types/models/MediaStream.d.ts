/**
 * @ignore
 */
interface VideoType {
    type: MediaStreamType;
}
/**
 * The MediaStreamType model contains the available media stream types.
 */
export declare enum MediaStreamType {
    /**
     * The camera media stream, either audio, video, or audio and video. This stream type is used by default.
     */
    Camera = "Camera",
    /**
     * The screen-share media stream.
     */
    ScreenShare = "ScreenShare",
    /**
     * User added custom stream.
     * @ignore
     */
    Custom = "Custom",
    /**
     * User added custom stream.
     * @ignore
     */
    CustomVideo = "CustomVideo"
}
/**
 * @ignore
 */
export declare enum MediaStreamIndex {
    Camera = 0,
    ScreenShare = 1,
    Custom = 2
}
/**
 * @ignore
 */
export declare const CustomStreamMinIndex: number;
/**
 * The MediaStreamWithType model is a WebRTC MediaStream that contains information about the stream [types](./../enums/models_MediaStream.MediaStreamType.html).
 *
 */
export declare type MediaStreamWithType = MediaStream & VideoType;
/**
 * @ignore
 */
export declare class DvcsMediaStream extends MediaStream {
    #private;
    type: MediaStreamType;
    constructor(stream: MediaStream);
    addTrack(track: FakeMediaStreamAudioTrack | MediaStreamTrack): void;
    removeTrack(track: FakeMediaStreamAudioTrack | MediaStreamTrack): void;
    getAudioTracks(): MediaStreamTrack[];
    getTracks(): MediaStreamTrack[];
}
/**
 * @ignore
 */
export declare class FakeMediaStreamAudioTrack implements MediaStreamTrack {
    id: string;
    kind: string;
    enabled: boolean;
    readonly isolated: boolean;
    readonly label: string;
    readonly muted: boolean;
    onended: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onisolationchange: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onunmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    readonly readyState: MediaStreamTrackState;
    applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener(): void;
    removeEventListener(): void;
    dispatchEvent(event: Event): boolean;
}
export {};
