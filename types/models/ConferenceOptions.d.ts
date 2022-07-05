import ConferenceParameters from './ConferenceParameters';
import { SpatialAudioStyle } from './SpatialAudio';
/**
 * The ConferenceOptions model allows defining details of a conference.
 */
export default interface ConferenceOptions {
    /**
     * The conference alias. The alias needs to be a logical and unique string that consists of up to 250 characters, such as letters, digits, and symbols other than #. The alias is case insensitive, which means that using "foobar" and "FOObar" aliases refers to the same conference.
     */
    alias?: string;
    /**
     * Conference sdk / wowza
     * @ignore
     */
    type?: string;
    /**
     * @ignore
     */
    preferredRegions?: string;
    /**
     * The conference PIN code.
     */
    pinCode?: number;
    /**
     * The conference parameters.
     */
    params?: ConferenceParameters;
    /**
     * Defines how the spatial location should be communicated between the SDK and the Dolby.io server.
     *
     * Setting the spatial audio style is supported only on SDK 3.6 and later. The earlier SDK versions support only the individual mode.
     */
    spatialAudioStyle?: SpatialAudioStyle;
}
