/**
 * The SubscriptionType model gathers the subscription types.
 */
export declare enum SubscriptionType {
    Invitation = "Invitation",
    ConferenceCreated = "Conference.Created",
    ConferenceEnded = "Conference.Ended",
    ParticipantJoined = "Participant.Joined",
    ParticipantLeft = "Participant.Left"
}
/**
 * The SubscriptionType model includes types of subscription.
 *
 * @noInheritDoc
 */
/**
 * The BaseSubscription model is an interface for all subscription [types](#type).
 *
 * @noInheritDoc
 */
export interface BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
}
/**
 * The SubscribeInvitation model includes the [Invitation] subscription type that can be included the the [subscribe](/developers/interactivity-apis/reference/client-sdk/reference-javascript/notificationservice#subscribe) method.This subscription is enabled by default.
 */
export declare class SubscribeInvitation implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
}
/**
 * The SubscribeConferenceCreated model includes the conference [alias](#conferencealias) and the [ConferenceCreated](#type) subscription type that can be included in the [subscribe](/developers/interactivity-apis/reference/client-sdk/reference-javascript/notificationservice#subscribe) method.
 */
export declare class SubscribeConferenceCreated implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
/**
 * The SubscribeConferenceEnded model includes the conference [alias](#conferencealias) and the [ConferenceEnded](#type) subscription type that can be included the the [subscribe](/developers/interactivity-apis/reference/client-sdk/reference-javascript/notificationservice#subscribe) method.
 */
export declare class SubscribeConferenceEnded implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
/**
 * The SubscribeParticipantJoined model includes the conference [alias](#conferencealias) and the [ParticipantJoined](#type) subscription type that can be included the the [subscribe](/developers/interactivity-apis/reference/client-sdk/reference-javascript/notificationservice#subscribe) method.
 */
export declare class SubscribeParticipantJoined implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
/**
 * The SubscribeParticipantLeft model includes the conference [alias](#conferencealias) and the [ParticipantLeft](#type) subscription type that can be included the the [subscribe](/developers/interactivity-apis/reference/client-sdk/reference-javascript/notificationservice#subscribe) method.
 */
export declare class SubscribeParticipantLeft implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
