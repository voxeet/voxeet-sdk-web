import Event from './Event';
import * as VideoPresentationEvents from './videopresentation/index';
import * as FilePresentationEvents from './filepresentation/index';
import * as ConferenceEvents from './conference/index';
import * as RecordingEvents from './recording/index';
import * as CommandEvents from './command/index';
import * as NotificationEvents from './notification/index';
import * as SessionEvents from './session/index';
import * as VideoEvents from './video/index';
import * as AudioEvents from './audio/index';
/**
 * @ignore
 */
declare const Events: {
    AudioUpdated: typeof AudioEvents.AudioUpdated;
    LocalVideoStarted: typeof VideoEvents.LocalVideoStarted;
    LocalVideoStopped: typeof VideoEvents.LocalVideoStopped;
    LocalVideoUpdated: typeof VideoEvents.LocalVideoUpdated;
    SessionOpened: typeof SessionEvents.SessionOpened;
    SessionClosed: typeof SessionEvents.SessionOpened;
    InvitationReceived: typeof NotificationEvents.InvitationReceived;
    ConferenceCreatedNotification: typeof NotificationEvents.ConferenceCreatedNotification;
    ConferenceEndedNotification: typeof NotificationEvents.ConferenceEndedNotification;
    ConferenceStatusNotification: typeof NotificationEvents.ConferenceStatusNotification;
    ParticipantJoinedNotification: typeof NotificationEvents.ParticipantJoinedNotification;
    ParticipantLeftNotification: typeof NotificationEvents.ParticipantLeftNotification;
    ActiveParticipants: typeof NotificationEvents.ActiveParticipants;
    ConferenceMessageReceived: typeof CommandEvents.ConferenceMessageReceived;
    RecordingStatusUpdated: typeof RecordingEvents.RecordingStatusUpdated;
    VideoPresentationStarted: typeof VideoPresentationEvents.VideoPresentationStarted;
    VideoPresentationStopped: typeof VideoPresentationEvents.VideoPresentationStopped;
    VideoPresentationPlay: typeof VideoPresentationEvents.VideoPresentationPlay;
    VideoPresentationPause: typeof VideoPresentationEvents.VideoPresentationPause;
    VideoPresentationSeek: typeof VideoPresentationEvents.VideoPresentationSeek;
    FilePresentationStarted: typeof FilePresentationEvents.FilePresentationStarted;
    FilePresentationStopped: typeof FilePresentationEvents.FilePresentationStopped;
    FilePresentationUpdated: typeof FilePresentationEvents.FilePresentationUpdated;
    FileConversionProgress: typeof FilePresentationEvents.FileConversionProgress;
    FileConverted: typeof FilePresentationEvents.FileConverted;
    ConferenceJoined: typeof ConferenceEvents.ConferenceJoined;
    ConferenceJoining: typeof ConferenceEvents.ConferenceJoining;
    ConferenceStats: typeof ConferenceEvents.ConferenceStats;
    ConferenceLeft: typeof ConferenceEvents.ConferenceLeft;
    OfferCreated: typeof ConferenceEvents.OfferCreated;
    ParticipantAdded: typeof ConferenceEvents.ParticipantAdded;
    ParticipantUpdated: typeof ConferenceEvents.ParticipantUpdated;
    ConferenceLeaving: typeof ConferenceEvents.ConferenceLeaving;
    ConferenceEnded: typeof ConferenceEvents.ConferenceEnded;
    ConferenceGlobalError: typeof ConferenceEvents.ConferenceGlobalError;
    ConferenceGlobalTrace: typeof ConferenceEvents.ConferenceGlobalTrace;
    ParticipantSwitched: typeof ConferenceEvents.ParticipantSwitched;
    OwnParticipantSwitched: typeof ConferenceEvents.OwnParticipantSwitched;
    ConferenceDestroyed: typeof ConferenceEvents.ConferenceDestroyed;
    DvcsMetric: typeof ConferenceEvents.DvcsMetric;
    ActiveSpeakerChange: typeof ConferenceEvents.ActiveSpeakerChange;
    VideoForwardedChanged: typeof ConferenceEvents.VideoForwardedChanged;
    UpdateToken: typeof ConferenceEvents.UpdateToken;
    ParticipantKicked: typeof ConferenceEvents.ParticipantKicked;
    ConferenceVideoFilterUpdate: typeof ConferenceEvents.ConferenceVideoFilterUpdate;
    StreamAdded: typeof ConferenceEvents.StreamAdded;
    StreamRemoved: typeof ConferenceEvents.StreamRemoved;
    StreamUpdated: typeof ConferenceEvents.StreamUpdated;
    BandwidthRestrictionChanged: typeof ConferenceEvents.BandwidthRestrictionChanged;
    RtsStatusUpdated: typeof ConferenceEvents.RtsStatusUpdated;
    UserAction: typeof ConferenceEvents.UserAction;
};
/**
 * @ignore
 */
declare type AllEventsType = {
    [K in keyof typeof Events]: K;
};
/**
 * @ignore
 */
declare const EventType: AllEventsType & {
    [index: string]: string;
};
/**
 * @ignore
 */
export { AllEventsType, Event, Events, EventType };
