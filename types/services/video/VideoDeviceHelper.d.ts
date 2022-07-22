import { MediaManagerInterface } from '../../models/MediaDevice';
/**
 * @ignore
 */
export declare type OnVideoDeviceIdChangedCallback = (deviceId: string) => Promise<void>;
/**
 * @ignore
 */
export declare class VideoDeviceHelper {
    #private;
    constructor(mediaManager: MediaManagerInterface);
    getCurrentDeviceId(): string;
    setNewDeviceId(deviceId: string): Promise<void>;
    setOnVideoDeviceIdChangedCallback(callback: OnVideoDeviceIdChangedCallback): void;
    private onVideInputSelectedCallback;
}
