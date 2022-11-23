import { DeviceChangeOption, GetComfortNoiseLevel, MediaManagerInterface, SelectAudioInputDevice, SelectAudioOutputDevice, SelectVideoInputDevice, SetComfortNoiseLevel } from '../../models/MediaDevice';
/**
 * @ignore
 */
export declare class MediaManager implements MediaManagerInterface {
    #private;
    constructor();
    initSelectAudioDevice(): void;
    initSelectVideoDevice(): void;
    /**
     * Retrieves selected audio inout device.
     */
    get selectedAudioInputDevice(): MediaDeviceInfo;
    /**
     * Sets selected audio output device.
     */
    set selectedAudioInputDevice(device: MediaDeviceInfo);
    /**
     * Retrieves selected audio output device.
     */
    get selectedAudioOutputDevice(): MediaDeviceInfo;
    /**
     * Sets selected audio output device.
     */
    set selectedAudioOutputDevice(device: MediaDeviceInfo);
    /**
     * Retrieves selected video output device.
     */
    get selectedVideoInputDevice(): MediaDeviceInfo;
    /**
     * Sets selected audio output device.
     */
    set selectedVideoInputDevice(device: MediaDeviceInfo);
    /**
     * defineComfortNoiseLevel getter
     */
    get setComfortNoiseLevel(): SetComfortNoiseLevel;
    /**
     * defineComfortNoiseLevel setter
     */
    set setComfortNoiseLevel(value: SetComfortNoiseLevel);
    /**
     * computeComfortNoiseLevel getter
     */
    get getComfortNoiseLevel(): GetComfortNoiseLevel;
    /**
     * computeComfortNoiseLevel setter
     */
    set getComfortNoiseLevel(value: GetComfortNoiseLevel);
    /**
     * selectAudioInputDevice getter
     */
    get selectAudioInputDevice(): SelectAudioInputDevice;
    /**
     * selectAudioInputDevice setter
     * @param {Callback} value - function to be set to select audio input device
     */
    set selectAudioInputDevice(value: SelectAudioInputDevice);
    /**
     * selectAudioOutputDevice getter
     */
    get selectAudioOutputDevice(): SelectAudioOutputDevice;
    /**
     * selectAudioOutputDevice setter
     * @param {Callback} value - function to be set to select audio output device
     */
    set selectAudioOutputDevice(value: SelectAudioOutputDevice);
    /**
     * selectVideoInputDevice getter
     */
    get selectVideoInputDevice(): SelectVideoInputDevice;
    /**
     * selectVideoInputDevice setter
     * @param {Callback} value - function to be set to select video input device
     */
    set selectVideoInputDevice(value: SelectVideoInputDevice);
    /**
     * audioOutputDevices getter
     */
    get audioOutputDevices(): MediaDeviceInfo[];
    /**
     * audioInputDevices getter
     */
    get audioInputDevices(): MediaDeviceInfo[];
    /**
     * isOutputSelectorValid getter. Returns true if output audio selection is possible.
     */
    get isOutputSelectorValid(): boolean;
    /**
     * list all connected devices
     */
    getConnectedDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * list connected video input devices
     */
    getConnectedVideoInputDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * list connected audio input devices
     */
    getConnectedAudioInputDevices(): Promise<MediaDeviceInfo[]>;
    /**
     * list connected audio output devices
     */
    getConnectedAudioOutputDevices(): Promise<MediaDeviceInfo[]>;
    areDevicesEqual(firstDevice: MediaDeviceInfo, secondDevice: MediaDeviceInfo): boolean;
    /**
     * helper function to compute devices list updates
     * @param oldValues - cached devices list
     * @param newValues - latest devices list
     */
    trackDevicesUpdates(oldValues: MediaDeviceInfo[], newValues: MediaDeviceInfo[]): {
        added: MediaDeviceInfo[];
        removed: MediaDeviceInfo[];
        updated: MediaDeviceInfo[];
    };
    /**
     * helper function to compute devices list updates
     * @param oldCurrent - previous currently used device
     * @param newList - new device list
     * @return current selected device
     */
    getCurrentSelectedDevice(oldCurrent: MediaDeviceInfo, newList: MediaDeviceInfo[]): MediaDeviceInfo;
    scheduleAudioInputChange(device: MediaDeviceInfo): void;
    scheduleAudioOutputChange(device: MediaDeviceInfo): void;
    scheduleVideoInputChange(device: MediaDeviceInfo): void;
    isDeviceListUpdated(first: MediaDeviceInfo[], second: MediaDeviceInfo[]): boolean;
    /**
     * get notified when devices list changed (retrieve device list or devices diff)
     * @param option
     */
    onDeviceChange(option: DeviceChangeOption): () => void;
}
