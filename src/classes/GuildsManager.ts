import axois from "axios";
import discordApi from "../constants/discordApi";
import Client from "./Client";
import Guild from "./Guild";
import APIGuild from "../types/APIGuild.interface";
import GuildFetchOptions from "../types/GuildFetchOptions.interface";
export default class GuildsManager {
  public readonly cache;
  public readonly client;
  constructor(client: Client) {
    this.cache = new Map<string, Guild>();
    this.client = client;
  }

  async fetch(options: GuildFetchOptions) {
    const guildData = await axois.get(`${discordApi}/guilds/${options.id}`, {
      headers: {
        authorization: this.client.token,
      },
    });
    const data: APIGuild = guildData.data;
    if (options.cache) {
      const guild = new Guild({
        afkChannelId: data.afk_channel_id,
        afkTimeout: data.afk_timeout,
        applicationCommandCount: data.application_command_count,
        applicationCommandCounts: data.application_command_counts,
        applicationId: data.application_id,
        banner: data.banner,
        channels: data.channels,
        client: this.client,
        defaultMessageNotifications: data.default_message_notifications,
        description: data.description,
        discoverySplash: data.discovery_splash,
        embeddedActivities: data.embedded_activities,
        emojis: data.emojis,
        explicitContentFilter: data.explicit_content_filter,
        features: data.features,
        guildHashes: data.guild_hashes,
        guildScheduledEvents: data.guild_scheduled_events,
        icon: data.icon,
        id: data.id,
        joinedAt: data.joined_at,
        large: data.large,
        lazy: data.lazy,
        maxMembers: data.max_members,
        maxVideoChannelUsers: data.max_video_channel_users,
        memberCount: data.member_count,
        members: data.members,
        mfaLevel: data.mfa_level,
        name: data.name,
        nsfw: data.nsfw,
        nsfwLevel: data.nsfw_level,
        ownerId: data.owner_id,
        preferredLocale: data.preferred_locale,
        premiumProgressBarEnabled: data.premium_progress_bar_enabled,
        premiumSubscriptionCount: data.premium_subscription_count,
        premiumTier: data.premium_tier,
        presences: data.presences,
        publicUpdatesChannelId: data.public_updates_channel_id,
        region: data.region,
        roles: data.roles,
        rulesChannelId: data.rules_channel_id,
        splash: data.splash,
        stageInstances: data.stage_instances,
        stickers: data.stickers,
        systemChannelFlags: data.system_channel_flags,
        systemChannelId: data.system_channel_id,
        threads: data.threads,
        unavailable: data.unavailable,
        vanityUrlCode: data.vanity_url_code,
        verificationLevel: data.verification_level,
        voiceStates: data.voice_states
      });
      this.client.guilds.cache.set(guildData.data.id, guild);
    }
    return;
  }
}
