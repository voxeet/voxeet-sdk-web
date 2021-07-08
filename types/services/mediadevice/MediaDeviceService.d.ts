import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../index';
/**
 * MediaDeviceService allows the application to manage the devices used during the conference. It allows the application to:
 * - Enumerate [audio](#enumerateaudiodevices) and [video](#enumeratevideodevices) devices
 * - Select inputs for [audio](#selectaudioinput) and [video](#selectvideoinput) devices
 * - Select [outputs](#selectaudiooutput) for audio devices
 *
 * @noInheritDoc
 */
export declare class MediaDeviceService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     * @param conferenceService
     */
    constructor(sdk: any, conferenceService: ConferenceService);
    /**
     * Enumerates audio devices.
     * @param type - The device type, either input or output.
     */
    enumerateAudioDevices(type?: string): Promise<any[]>;
    /**
     * Enumerates video devices.
     * @param type - The device type, either input or output.
     */
    enumerateVideoDevices(type?: string): Promise<any[]>;
    /**
     * Enables the selection of an audio device input.
     * @param deviceId - The device ID.
     */
    selectAudioInput(deviceId: string): Promise<any>;
    /**
     * Enables the selection of an audio device output.
     * @param deviceId - The device ID.
     */
    selectAudioOutput(deviceId: string): Promise<any>;
    /**
     * Enables the selection of a video device input.
     * @param deviceId - The device ID.
     * @param constraints - The [MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks).
     */
    selectVideoInput(deviceId: string, constraints: any): Promise<any>;
}
