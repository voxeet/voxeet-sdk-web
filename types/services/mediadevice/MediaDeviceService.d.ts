import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../index';
import ComfortNoiseLevel from '../../models/ComfortNoiseLevel';
/**
 * MediaDeviceService allows the application to manage devices that are used during conferences. The service allows the application to:
 *
 * - Enumerate [audio](#enumerateaudiodevices) and [video](#enumeratevideodevices) devices.
 * - Select [audio](#selectaudioinput) and [video](#selectvideoinput) input devices.
 * - Select [output](#selectaudiooutput) devices.
 * - [Check](#getcomfortnoiselevel) the selected comfort noise level for output devices in Dolby Voice conferences and [change](#setcomfortnoiselevel) the comfort noise level. These functions are only available for the [Desktop SDK](doc:desktop-sdk) users.
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
    /**
     * Configures the comfort noise level for output devices in Dolby Voice conferences. This API is only available for the [Desktop SDK](doc:desktop-sdk) users.
     *
     * @param level - The selected comfort noise level.
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<any>;
    /**
     * Retrieves the comfort noise level setting for output devices in Dolby Voice conferences. This API is only available for the [Desktop SDK](doc:desktop-sdk) users.
     *
     * @return The comfort noise level.
     */
    getComfortNoiseLevel(): Promise<any>;
}
