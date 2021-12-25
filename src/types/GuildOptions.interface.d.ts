import Client from "../classes/Client";

interface GuildOptions{
    client: Client;
    icon: string | null;
    publicUpdatesChannelId: string | null;
    name: string;
    applicationId: string | null;
    premiumProgressBarEnabled: boolean;
    mfaLevel: number;
    explicitContentFilter: number;
    stageInstances: any[];
    description: string | null;
    vanityUrlCode: string | null;
    systemChannelId: string | null;
    guildScheduledEvents: any[];
    premiumSubscriptionCount: number;
    features: any[];
    members: any[];
    afkChannelId: string | null;
    maxVideoChannelUsers: number;
    guildHashes: any;
    preferredLocale: string;
    embeddedActivities: any[];
    nsfw: boolean;
    nsfwLevel: number;
    applicationCommandCounts: any;
    presences: any[];
    banner: string | null;
    afkTimeout: number;
    large: boolean;
    rulesChannelId: string | null;
    emojis: any[];
    discoverySplash: any | null;
    region: string;
    threads: any[];
    roles: any[];
    channels: any[];
    memberCount: number;
    verificationLevel: number;
    applicationCommandCount: number;
    joinedAt: string;
    premiumTier: number;
    voiceStates: any[];
    systemChannelFlags: number;
    unavailable: boolean;
    maxMembers: number;
    id: string;
    defaultMessageNotifications: number;
    lazy: boolean;
    ownerId: number;
    stickers: any[];
    splash: any | null;
};



export default GuildOptions;






