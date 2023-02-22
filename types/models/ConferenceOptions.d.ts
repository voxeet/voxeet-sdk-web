import ConferenceParameters from './ConferenceParameters';
/**
 * The ConferenceOptions model allows defining additional conference details.
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
}
