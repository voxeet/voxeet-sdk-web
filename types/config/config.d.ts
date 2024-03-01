export const leaveURI: string;
export const wsSessionURI: any;
export const ackTimeout: number;
export const keepAlive: number;
export namespace peerConnection {
    namespace config {
        const bundlePolicy: string;
        const iceServers: {
            urls: string;
        }[];
    }
    namespace constraints {
        const mandatory: {};
        const optional: {
            DtlsSrtpKeyAgreement: boolean;
        }[];
    }
}
export namespace media {
    export namespace dolbyProcessing {
        export namespace constraints_1 {
            namespace audio {
                const autoGainControl: boolean;
                const googAutoGainControl: boolean;
                const noiseSuppression: boolean;
                const echoCancellation: boolean;
            }
            const video: {};
        }
        export { constraints_1 as constraints };
    }
    export namespace music {
        namespace _default {
            export namespace constraints_2 {
                export namespace audio_1 {
                    const autoGainControl_1: boolean;
                    export { autoGainControl_1 as autoGainControl };
                    const googAutoGainControl_1: boolean;
                    export { googAutoGainControl_1 as googAutoGainControl };
                    const noiseSuppression_1: boolean;
                    export { noiseSuppression_1 as noiseSuppression };
                    const echoCancellation_1: boolean;
                    export { echoCancellation_1 as echoCancellation };
                }
                export { audio_1 as audio };
                const video_1: {};
                export { video_1 as video };
            }
            export { constraints_2 as constraints };
        }
        export { _default as default };
        export namespace echoCancellationOff {
            export namespace constraints_3 {
                export namespace audio_2 {
                    const autoGainControl_2: boolean;
                    export { autoGainControl_2 as autoGainControl };
                    const googAutoGainControl_2: boolean;
                    export { googAutoGainControl_2 as googAutoGainControl };
                    const noiseSuppression_2: boolean;
                    export { noiseSuppression_2 as noiseSuppression };
                    const echoCancellation_2: boolean;
                    export { echoCancellation_2 as echoCancellation };
                }
                export { audio_2 as audio };
                const video_2: {};
                export { video_2 as video };
            }
            export { constraints_3 as constraints };
        }
    }
    export namespace unprocessed {
        export namespace constraints_4 {
            export namespace audio_3 {
                const autoGainControl_3: boolean;
                export { autoGainControl_3 as autoGainControl };
                const googAutoGainControl_3: boolean;
                export { googAutoGainControl_3 as googAutoGainControl };
                const noiseSuppression_3: boolean;
                export { noiseSuppression_3 as noiseSuppression };
                const echoCancellation_3: boolean;
                export { echoCancellation_3 as echoCancellation };
            }
            export { audio_3 as audio };
            const video_3: {};
            export { video_3 as video };
        }
        export { constraints_4 as constraints };
    }
    export namespace dapm {
        export namespace constraints_5 {
            export namespace audio_4 {
                const autoGainControl_4: boolean;
                export { autoGainControl_4 as autoGainControl };
                const googAutoGainControl_4: boolean;
                export { googAutoGainControl_4 as googAutoGainControl };
                const noiseSuppression_4: boolean;
                export { noiseSuppression_4 as noiseSuppression };
                const echoCancellation_4: boolean;
                export { echoCancellation_4 as echoCancellation };
            }
            export { audio_4 as audio };
            const video_4: {};
            export { video_4 as video };
        }
        export { constraints_5 as constraints };
    }
    export namespace constraints_6 {
        export namespace audio_5 {
            const autoGainControl_5: boolean;
            export { autoGainControl_5 as autoGainControl };
            const googAutoGainControl_5: boolean;
            export { googAutoGainControl_5 as googAutoGainControl };
            const noiseSuppression_5: boolean;
            export { noiseSuppression_5 as noiseSuppression };
            const echoCancellation_5: boolean;
            export { echoCancellation_5 as echoCancellation };
        }
        export { audio_5 as audio };
        const video_5: {};
        export { video_5 as video };
    }
    export { constraints_6 as constraints };
}
export namespace audioSettings {
    const chromeCutOffVolume: number;
    const distanceModel: string;
    const refDistance: number;
    const maxDistance: number;
    const rollOffFactor: number;
    const gain: number;
}
export namespace dialInTexts {
    const title: string;
    const description: string;
    const phone_label: string;
    const pin_label: string;
    const qr_label: string;
}
export const offLine: boolean;
export namespace videoSettings {
    const desktop: {
        range: {
            min: number;
            max: number;
        };
        resolution: number;
        fps: number;
        dimensions: {
            width: number;
            height: number;
        };
    }[];
    const mobile: {
        range: {
            min: number;
            max: number;
        };
        resolution: number;
        fps: number;
        dimensions: {
            width: number;
            height: number;
        };
    }[];
}
export namespace pluginDefs {
    namespace voxeetPlugin {
        const name: string;
        const mimeType: string;
        const activeXName: string;
        const guid: string;
        const version: string;
        namespace installURL {
            const win: string;
            const mac: string;
        }
    }
}
