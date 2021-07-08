/**
 * The Quality model represents the quality of the received Simulcast video streams.
 */
export declare enum Quality {
    HD = "hd",
    MD = "md",
    SD = "sd",
    Auto = "auto"
}
/**
 * The ParticipantQuality model enables choosing quality of the received Simulcast video streams for conference participants. The model includes information about the participant's [ID](#id) and the [quality](#quality) of the received Simulcast video stream.
 */
export interface ParticipantQuality {
    /**
     * The participant ID.
     */
    id: string;
    /**
     * The quality of the received Simulcast video stream.
     */
    quality: Quality;
}
