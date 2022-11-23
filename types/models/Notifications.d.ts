/**
 * The SubscriptionType model gathers the subscription types.
 */
export declare enum SubscriptionType {
    Invitation = "Invitation",
    ConferenceCreated = "Conference.Created",
    ConferenceEnded = "Conference.Ended",
    ParticipantJoined = "Participant.Joined",
    ParticipantLeft = "Participant.Left",
    ConferenceActiveParticipants = "Conference.ActiveParticipants"
}
/**
 * The SubscriptionType model contains types of subscription.
 *
 */
/**
 * The BaseSubscription model is an interface for all subscription [types](#type).
 *
 */
export interface BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
}
/**
 * The SubscribeInvitation model contains the [Invitation](./../enums/models_Notifications.SubscriptionType.html#Invitation) subscription type that can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method. This subscription is enabled by default.
 */
export declare class SubscribeInvitation implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
}
/**
 * The SubscribeConferenceCreated model contains information about a created conference that can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method.
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
 * The SubscribeConferenceEnded model contains information about an ended conference that can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method.
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
 * The SubscribeParticipantJoined model contains information about a participant who joined a conference. This information can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method.
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
 * The SubscribeParticipantLeft model contains information about a participant who left a conference. This information can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method.
 */
export declare class SubscribeParticipantLeft implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
/**
 * The SubscribeActiveParticipants model contains information about active conference participants. This information can be used in the [subscribe](./services_notification_NotificationService.NotificationService.html#subscribe) method.
 */
export declare class SubscribeActiveParticipants implements BaseSubscription {
    /** The subscription type. */
    type: SubscriptionType;
    /** The conference alias. */
    conferenceAlias: string;
    /** @ignore */
    constructor(conferenceAlias: string);
}
