interface APIGuild{
    icon: string | null;
    public_updates_channel_id: string | null;
    name: string;
    application_id: string | null;
    premium_progress_bar_enabled: boolean;
    mfa_level: number;
    explicit_content_filter: number;
    stage_instances: any[];
    description: string | null;
    vanity_url_code: string | null;
    system_channel_id: string | null;
    guild_scheduled_events: any[];
    premium_subscription_count: number;
    features: any[];
    members: any[];
    afk_channel_id: string | null;
    max_video_channel_users: number;
    guild_hashes: any;
    preferred_locale: string;
    embedded_activities: any[];
    nsfw: boolean;
    nsfw_level: number;
    application_command_counts: any;
    presences: any[];
    banner: string | null;
    afk_timeout: number;
    large: boolean;
    rules_channel_id: string | null;
    emojis: any[];
    discovery_splash: any | null;
    region: string;
    threads: any[];
    roles: any[];
    channels: any[];
    member_count: number;
    verification_level: number;
    application_command_count: number;
    joined_at: string;
    premium_tier: number;
    voice_states: any[];
    system_channel_flags: number;
    unavailable: boolean;
    max_members: number;
    id: string;
    default_message_notifications: number;
    lazy: boolean;
    owner_id: number;
    stickers: any[];
    splash: any | nul;
}



export default APIGuild;






