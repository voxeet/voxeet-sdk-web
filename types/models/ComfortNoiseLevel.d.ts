/**
 * The ComfortNoiseLevel model represents the possible comfort noise levels that can be set only while using the Dolby Voice Codec (DVC). The offered levels allow customizing the comfort noise intensity.
 */
declare enum ComfortNoiseLevel {
    /**
     * The default comfort noise level that depends on the platform:
     *
     * - In the Web SDK, the default value automatically switches to [Off](#off) and disables the comfort noise.
     *
     * - In the Desktop SDK, the default value is based on the device database that gathers the optimal comfort noise levels, individual for all devices.
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
export declare function dvwcToComfortNoiseLevel(level: any): ComfortNoiseLevel;
export default ComfortNoiseLevel;
