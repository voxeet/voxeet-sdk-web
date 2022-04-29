/**
 * The ComfortNoiseLevel model represents the possible comfort noise levels in Dolby Voice conferences. The offered levels allow customizing the comfort noise intensity. You can either use the default level that is based on the device database or choose the medium or low level if you wish to change the comfort noise intensity. The model also allows disabling the comfort noise completely. The ComfortNoiseLevel model is only available for the [Desktop SDK](doc:desktop-sdk) users.
 */
declare enum ComfortNoiseLevel {
    /**
     * The default comfort noise level that is based on the device database. The database includes the proper comfort noise levels, individual for all devices.
     */
    Default = "default",
    /**
     * The medium comfort noise level.
     */
    Medium = "medium",
    /**
     * The low comfort noise level.
     */
    Low = "low",
    /**
     * The disabled comfort noise.
     */
    Off = "off"
}
/**
 * Translate SDK comfort noise level to DVWC comfort noise level
 * @ignore
 */
export declare function comfortNoiseLevelToDvwc(level: ComfortNoiseLevel): any;
/**
 * Translate DVWC comfort noise level to SDK comfort noise level
 * @ignore
 */
export declare function dvwcTocomfortNoiseLevel(level: any): ComfortNoiseLevel;
export default ComfortNoiseLevel;
