import { MediaManagerInterface } from '../../models/MediaDevice';
/**
 * @ignore
 */
export declare type OnVideoDeviceIdChangedCallback = (deviceId: string) => Promise<void>;
/**
 * Provides two-way communication with the MediaDeviceService. Gets an access
 * to the current selected video deviceId as well as notifies about video input
 * device change event. And allows to set a user-provided new deviceId in
 * MediaDeviceService.
 *
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
