import ConferenceParameters from './ConferenceParameters';
/**
 * The ConferenceOptions model includes information about a conference that needs to be created, such as its [alias](#optional-alias), [parameters](#optional-params), and [PIN code](#optional-pincode).
 */
export default interface ConferenceOptions {
    /**
     * The conference alias.
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
