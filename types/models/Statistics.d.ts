/**
 * @ignore
 */
export declare class Stats {
    type: string;
}
/**
 * @ignore
 */
export declare class RTCInboundRTPAudioStreamStats extends Stats {
    ssrc: number;
    trackId: string;
    mediaType: string;
    packetsReceived: number;
    bytesReceived: number;
    bitrateReceived: Number;
    packetsLost: number;
    jitter: number;
}
/**
 * @ignore
 */
export declare class RTCInboundRTPVideoStreamStats extends Stats {
    ssrc: number;
    trackId: string;
    mediaType: string;
    packetsReceived: number;
    bytesReceived: number;
    bitrateReceived: Number;
    packetsLost: number;
    jitter: number;
    framesDecoded: number;
    keyFramesDecoded: number;
    totalInterFrameDelay: number;
    totalSquaredInterFrameDelay: number;
    framesReceived: number;
    framesDropped: number;
    firCount: number;
    pliCount: number;
    nackCount: number;
    decoderImplementation: string;
    qpSum: number;
}
/**
 * @ignore
 */
export declare class RTCOutboundRtpAudioStreamStats extends Stats {
    ssrc: number;
    trackId: string;
    mediaType: string;
    packetsSent: number;
    bytesSent: number;
    bitrateSent: number;
    retransmittedPacketsSent: number;
    retransmittedBytesSent: number;
}
/**
 * @ignore
 */
export declare class RTCOutboundRtpVideoStreamStats extends Stats {
    ssrc: number;
    trackId: string;
    mediaType: string;
    packetsSent: number;
    bytesSent: number;
    bitrateSent: number;
    retransmittedPacketsSent: number;
    retransmittedBytesSent: number;
    contentType: string;
    nackCount: number;
    firCount: number;
    pliCount: number;
    qualityLimitationReason: string;
    framesEncoded: number;
    framesSent: number;
    keyFramesEncoded: number;
    totalPacketSendDelay: number;
    encoderImplementation: string;
    qpSum: number;
}
/**
 * @ignore
 */
export declare class RTCRemoteInboundRTPStreamStats extends Stats {
    ssrc: number;
    kind: string;
    packetLost: number;
    jitter: number;
    roundTripTime: number;
}
/**
 * @ignore
 */
export declare class RTCMediaStreamAudioTrack extends Stats {
    id: string;
    kind: string;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    audioLevel: number;
    totalAudioEnergy: number;
}
/**
 * @ignore
 */
export declare class RTCMediaStreamVideoTrack extends Stats {
    id: string;
    kind: string;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    frameWidth: number;
    frameHeight: number;
    framesReceived: number;
    framesDecoded: number;
}
/**
 * @ignore
 */
export declare class RTCStreamDescription extends Stats {
    streamIdentifier: string;
    trackIds: Array<string>;
}
/**
 * @ignore
 */
export declare class RTCCandidatePairStats extends Stats {
    id: string;
    availableOutgoingBitrate: number;
    availableIncomingBitrate: number;
    bytesSent: number;
    bytesReceived: number;
    bitrateSent: number;
    bitrateReceived: number;
    totalRoundTripTime: number;
    currentRoundTripTime: number;
    requestsReceived: number;
    requestsSent: number;
    responsesReceived: number;
    responsesSent: number;
    consentRequestsSent: number;
    selected?: boolean;
}
/**
 * @ignore
 */
export declare class WebAudioStats extends Stats {
    bufferIsOverrun: boolean;
    bufferOverrunTimes: number;
    bufferOverrunLength: number;
    bufferIsUnderrun: boolean;
    bufferUnderrunTimes: number;
    bufferUnderrunLength: number;
}
/**
 * @ignore
 */
export declare type Statistics = RTCInboundRTPAudioStreamStats | RTCOutboundRtpVideoStreamStats | RTCRemoteInboundRTPStreamStats | RTCCandidatePairStats;
/**
 * The WebRTCStats model includes WebRTC statistics described in the [WebRTC documentation](https://www.w3.org/TR/webrtc-stats/#dom-rtcstatstype).
 */
export declare type WebRTCStats = Map<string, Array<Statistics>>;
