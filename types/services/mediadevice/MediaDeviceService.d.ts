import { BaseConferenceService } from '../Service';
import ComfortNoiseLevel from '../../models/ComfortNoiseLevel';
import { MediaDeviceServiceInterface, MediaManagerInterface } from '../../models/MediaDevice';
/**
 * The MediaDeviceService allows the application to manage devices that the local participant uses during conferences. The service allows the application to:
 *
 * - Enumerate audio [input](#enumerateaudioinputdevices) and [output](#enumerateaudiooutputdevices) devices
 * - Enumerate video [input](#enumeratevideoinputdevices) devices
 * - Enumerate [all devices](#enumeratedevices)
 * - Select an audio [input](#selectaudioinput) and [output](#selectaudiooutput) device
 * - Select a video [input](#selectvideoinput) device
 * - [Check](#getcomfortnoiselevel) the selected comfort noise level for output devices in Dolby Voice conferences and [change](#setcomfortnoiselevel) the comfort noise level.
 * - Return the selected [audio input device](#selectedaudioinputdevice), [audio output device](#selectedaudiooutputdevice), and [video input device](#selectedvideoinputdevice)
 * - [Notify](#devicechange) about the added, updated, and removed devices
 *
 * @noInheritDoc
 */
export declare class MediaDeviceService extends BaseConferenceService implements MediaDeviceServiceInterface {
    #private;
    /**
     * @ignore
     * @param sdk
     * @param manager
     */
    constructor(sdk: unknown, manager: MediaManagerInterface);
    /**
     * Retrieves the comfort noise level setting for output devices in Dolby Voice conferences. This API is only supported on the [Desktop SDK](doc:desktop-sdk) and Web SDK 3.5 and later versions.
     */
    getComfortNoiseLevel(): Promise<Error | ComfortNoiseLevel>;
    /**
     * Configures the comfort noise level for output devices in Dolby Voice conferences. This API is only supported on the [Desktop SDK](doc:desktop-sdk) and Web SDK 3.5 and later versions.
     * @param {ComfortNoiseLevel} level - The comfort noise level.
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<void | Error>;
    /**
     * Enumerates all connected audio and video devices that are available for the local participant.
     */
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates all audio input devices that are available for the local participant.
     */
    enumerateAudioInputDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates all audio output devices that are available for the local participant.
     */
    enumerateAudioOutputDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates video input devices that are available for the local participant.
     */
    enumerateVideoInputDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * Selects a specific local participant's audio input device for capturing audio during a conference. A joining participant can either use the default audio device or select a different device. All operating systems recognize one default device, however on Windows there is an additional device called the [default communication device](https://docs.microsoft.com/en-us/windows/win32/coreaudio/using-the-communication-device). Selecting an audio device by providing the `communications` (only on Windows) or `default` [deviceId](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId) causes that the SDK uses the selected device as long as the device is recognized by the operating system as the default device. After changing the default device in the system settings or disconnecting the current default device, the SDK switches to the new default device. When the participant selects the audio device by providing the actual deviceId, the SDK uses the selected device as long as it is available. After disconnecting the selected device, the SDK switches to the default device.
     * @param {MediaDeviceInfo} device - The [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) interface that contains information about the device.
     */
    selectAudioInput(device: MediaDeviceInfo | string): Promise<string>;
    /**
     * Selects a specific local participant's audio output device for playing audio during a conference. A joining participant can either use the default audio device or select a different device. All operating systems recognize one default device, however on Windows there is an additional device called the [default communication device](https://docs.microsoft.com/en-us/windows/win32/coreaudio/using-the-communication-device). Selecting an audio device by providing the `communications` (only on Windows) or `default` [deviceId](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId) causes that the SDK uses the selected device as long as the device is recognized by the operating system as the default device. After changing the default device in the system settings or disconnecting the current default device, the SDK switches to the new default device. When the participant selects the audio device by providing the actual deviceId, the SDK uses the selected device as long as it is available. After disconnecting the selected device, the SDK switches to the default device.
     * @param {MediaDeviceInfo} device - The [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) interface that contains information about the device.
     */
    selectAudioOutput(device: MediaDeviceInfo | string): Promise<string>;
    /**
     * Selects a specific local participant's video input device for capturing video during a conference.
     * @param {MediaDeviceInfo} device - The [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) interface that contains information about the device.
     */
    selectVideoInput(device: MediaDeviceInfo | string): Promise<string>;
    /**
     * Returns the audio input device that is currently used by the local participant.
     */
    get selectedAudioInputDevice(): MediaDeviceInfo;
    /**
     * Returns the audio output device that is currently used by the local participant.
     */
    get selectedAudioOutputDevice(): MediaDeviceInfo;
    /**
     * Returns the video input device that is currently used by the local participant.
     */
    get selectedVideoInputDevice(): MediaDeviceInfo;
    /**
     * @deprecated
     * Enumerates all audio devices.
     * @param type - The device type, either input or output.
     */
    enumerateAudioDevices(type?: string): Promise<MediaDeviceInfo[]>;
    /**
     * @deprecated
     * Enumerates all video devices.
     * @param type - The device type, either input or output.
     */
    enumerateVideoDevices(type?: string): Promise<MediaDeviceInfo[]>;
}
