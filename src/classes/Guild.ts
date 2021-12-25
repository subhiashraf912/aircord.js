import GuildOptions from "../types/GuildOptions.Interface";

export default class Guild {
    client;
    icon;
    publicUpdatesChannelId;
    name;
    applicationId;
    premiumProgressBarEnabled;
    mfaLevel;
    explicitContentFilter;
    stageInstances;
    description;
    vanityUrlCode;
    systemChannelId;
    guildScheduledEvents;
    premiumSubscriptionCount;
    features;
    members;
    afkChannelId;
    maxVideoChannelUsers;
    guildHashes;
    preferredLocale;
    embeddedActivities;
    nsfw;
    nsfwLevel;
    applicationCommandCounts;
    presences;
    banner;
    afkTimeout;
    large;
    rulesChannelId;
    emojis;
    discoverySplash;
    region;
    threads;
    roles;
    channels;
    memberCount;
    verificationLevel;
    applicationCommandCount;
    joinedAt;
    premiumTier;
    voiceStates;
    systemChannelFlags;
    unavailable;
    maxMembers;
    id;
    defaultMessageNotifications;
    lazy;
    ownerId;
    stickers;
    splash;
    constructor(options: GuildOptions) {

          this.client = options.client
    this.icon = options.icon
    this.publicUpdatesChannelId = options.publicUpdatesChannelId
    this.name = options.name
    this.applicationId = options.applicationId
    this.premiumProgressBarEnabled = options.premiumProgressBarEnabled
    this.mfaLevel = options.mfaLevel
    this.explicitContentFilter = options.explicitContentFilter
    this.stageInstances = options.stageInstances
    this.description = options.description
    this.vanityUrlCode = options.vanityUrlCode
    this.systemChannelId = options.systemChannelId
    this.guildScheduledEvents = options.guildScheduledEvents
    this.premiumSubscriptionCount = options.premiumSubscriptionCount
    this.features = options.features
    this.members = options.members
    this.afkChannelId = options.afkChannelId
    this.maxVideoChannelUsers = options.maxVideoChannelUsers
    this.guildHashes = options.guildHashes
    this.preferredLocale = options.preferredLocale
    this.embeddedActivities = options.embeddedActivities
    this.nsfw = options.nsfw
    this.nsfwLevel = options.nsfwLevel
    this.applicationCommandCounts = options.applicationCommandCounts
    this.presences = options.presences
    this.banner = options.banner
    this.afkTimeout = options.afkTimeout
    this.large = options.large
    this.rulesChannelId = options.rulesChannelId
    this.emojis = options.emojis
    this.discoverySplash = options.discoverySplash
    this.region = options.region
    this.threads = options.threads
    this.roles = options.roles
    this.channels = options.channels
    this.memberCount = options.memberCount
    this.verificationLevel = options.verificationLevel
    this.applicationCommandCount = options.applicationCommandCount
    this.joinedAt = options.joinedAt
    this.premiumTier = options.premiumTier
    this.voiceStates = options.voiceStates
    this.systemChannelFlags = options.systemChannelFlags
    this.unavailable = options.unavailable
    this.maxMembers = options.maxMembers
    this.id = options.id
    this.defaultMessageNotifications = options.defaultMessageNotifications
    this.lazy = options.lazy
    this.ownerId = options.ownerId
    this.stickers = options.stickers
    this.splash = options.splash
    };
};