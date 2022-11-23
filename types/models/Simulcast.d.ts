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
 * The ParticipantQuality model allows choosing the quality of the received Simulcast video streams for conference participants.
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
