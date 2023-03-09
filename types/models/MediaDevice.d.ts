import ComfortNoiseLevel from './ComfortNoiseLevel';
declare type Callback = (device: MediaDeviceInfo) => Promise<void | Error>;
/** * @ignore */
export declare type SelectAudioInputDevice = Callback;
/** * @ignore */
export declare type SelectAudioOutputDevice = Callback;
/** * @ignore */
export declare type SelectVideoInputDevice = Callback;
/** @ignore */
export declare type GetComfortNoiseLevel = () => Promise<ComfortNoiseLevel | Error>;
/** * @ignore */
export declare type SetComfortNoiseLevel = (level: ComfortNoiseLevel) => Promise<void | Error>;
/**
 * The Stats model contains a list of added, updated, or removed devices.
 *
 * Example:
 * ```
 * Stats = {
 *  added: MediaDeviceInfo[];
 *  removed: MediaDeviceInfo[];
 *  updated: MediaDeviceInfo[];
 * };
 * ```
 */
export declare type Stats = {
    added: MediaDeviceInfo[];
    removed: MediaDeviceInfo[];
    updated: MediaDeviceInfo[];
};
/**
 * The DevicesUpdates model contains [information](doc:js-client-sdk-model-stats) about devices that the local participant added, updated, or removed.
 *
 * @example
 * ```
 * DevicesUpdates = {
 *  audioInput?: Stats;
 *  audioOutput?: Stats;
 *  videoInput?: Stats;
 * };
 * ```
 */
export declare type DevicesUpdates = {
    audioInput?: Stats;
    audioOutput?: Stats;
    videoInput?: Stats;
};
/**
 * The DevicesList model gathers a list of all audio and video devices available for the local participant.
 *
 * @example
 * ```
 * Deviceslist = {
 *  audioInput?: MediaDeviceInfo[];
 *  audioOutput?: MediaDeviceInfo[];
 *  videoInput?: MediaDeviceInfo[];
 * };
 * ```
 */
export declare type DevicesList = {
    audioInput?: MediaDeviceInfo[];
    audioOutput?: MediaDeviceInfo[];
    videoInput?: MediaDeviceInfo[];
};
/**
 * @ignore
 */
export declare enum DeviceKind {
    AudioInput = 1,
    AudioOutput = 2,
    VideoInput = 4
}
/**
 * @ignore
 */
export declare enum HandlerType {
    ListDevices = 1,
    GetDifferences = 2
}
/**
 * The DeviceChangeResult model contains a list of [all audio and video devices](doc:js-client-sdk-model-deviceslist) available for the local participant and [information](doc:js-client-sdk-model-devicesupdates) about devices that the local participant added, updated, or removed.
 */
export declare type DeviceChangeResult = {
    list?: DevicesList;
    updates?: DevicesUpdates;
};
/**
 * @ignore
 */
export declare type Handler = (result: DeviceChangeResult) => void;
/**
 * @ignore
 */
export declare type DeviceChangeOption = {
    handler: Handler;
    deviceKind: DeviceKind;
    handlerType: HandlerType;
};
/**
 * @ignore
 */
export interface MediaManagerInterface {
    selectAudioInputDevice: SelectAudioInputDevice;
    selectAudioOutputDevice: SelectAudioOutputDevice;
    selectVideoInputDevice: SelectVideoInputDevice;
    getComfortNoiseLevel: GetComfortNoiseLevel;
    setComfortNoiseLevel: SetComfortNoiseLevel;
    getConnectedDevices: () => Promise<MediaDeviceInfo[]>;
    getConnectedVideoInputDevices: () => Promise<MediaDeviceInfo[]>;
    getConnectedAudioInputDevices: () => Promise<MediaDeviceInfo[]>;
    getConnectedAudioOutputDevices: () => Promise<MediaDeviceInfo[]>;
    onDeviceChange: (configuration: DeviceChangeOption) => () => void;
    selectedAudioInputDevice: MediaDeviceInfo | undefined;
    selectedAudioOutputDevice: MediaDeviceInfo | undefined;
    selectedVideoInputDevice: MediaDeviceInfo | undefined;
}
/**
 * The MediaDeviceServiceInterface is an interface implemented by the [MediaDeviceService](./../classes/services_mediadevice_MediaDeviceService.MediaDeviceService.html).
 */
export interface MediaDeviceServiceInterface {
    /**
     * Enumerates all audio input devices that are available for the local participant.
     */
    enumerateAudioInputDevices: () => Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates all audio output devices that are available for the local participant.
     */
    enumerateAudioOutputDevices: () => Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates all video input devices that are available for the local participant.
     */
    enumerateVideoInputDevices: () => Promise<MediaDeviceInfo[]>;
    /**
     * Enumerates all connected audio and video devices that are available for the local participant.
     */
    enumerateDevices: () => Promise<MediaDeviceInfo[]>;
    /**
     * Selects a specific local participant's audio input device for capturing audio during a conference. A joining participant can either use the default audio device or select a different device. All operating systems recognize one default device, however on Windows there is an additional device called the [default communication device](https://docs.microsoft.com/en-us/windows/win32/coreaudio/using-the-communication-device). Selecting an audio device by providing the `communications` (only on Windows) or `default` [deviceId](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId) causes that the SDK uses the selected device as long as the device is recognized by the operating system as the default device. After changing the default device in the system settings or disconnecting the current default device, the SDK switches to the new default device. When the participant selects the audio device by providing the actual deviceId, the SDK uses the selected device as long as it is available. After disconnecting the selected device, the SDK switches to the default device.
     *
     * Calling this method by a participant who sends audio from a custom track results in switching their audio source to the selected microphone.
     */
    selectAudioInput: (device: MediaDeviceInfo | string) => Promise<string | Error>;
    /**
     * Selects a specific local participant's audio output device for playing audio during a conference. A joining participant can either use the default audio device or select a different device. All operating systems recognize one default device, however on Windows there is an additional device called the [default communication device](https://docs.microsoft.com/en-us/windows/win32/coreaudio/using-the-communication-device). Selecting an audio device by providing the `communications` (only on Windows) or `default` [deviceId](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo/deviceId) causes that the SDK uses the selected device as long as the device is recognized by the operating system as the default device. After changing the default device in the system settings or disconnecting the current default device, the SDK switches to the new default device. When the participant selects the audio device by providing the actual deviceId, the SDK uses the selected device as long as it is available. After disconnecting the selected device, the SDK switches to the default device.
     */
    selectAudioOutput: (device: MediaDeviceInfo | string) => Promise<string | Error>;
    /**
     * Selects a specific local participant's video input device for capturing video during a conference.
     */
    selectVideoInput: (device: MediaDeviceInfo | string) => Promise<string | Error>;
    /**
     * Gets the comfort noise level setting for output devices in Dolby Voice conferences.
     *
     * This API is only supported in the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) and Web SDK 3.5 and later versions.
     */
    getComfortNoiseLevel: () => Promise<ComfortNoiseLevel | Error>;
    /**
     * Sets the comfort noise level for output devices in Dolby Voice conferences.
     *
     * This API is only supported in the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) and Web SDK 3.5 and later versions.
     */
    setComfortNoiseLevel: (level: ComfortNoiseLevel) => Promise<void | Error>;
    /**
     * Returns the selected audio input device.
     */
    selectedAudioInputDevice: MediaDeviceInfo | undefined;
    /**
     * Returns the selected audio output device.
     */
    selectedAudioOutputDevice: MediaDeviceInfo | undefined;
    /**
     * Returns the selected video input device.
     */
    selectedVideoInputDevice: MediaDeviceInfo | undefined;
}
export {};
