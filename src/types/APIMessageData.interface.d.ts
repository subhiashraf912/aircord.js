import APIRefrencedMessage from "./ReferencedMessage.interface";
import UserAPIData from "./UserAPIData.interface";

export default interface APIMessageData {
  id: string;
  type: number;
  content: string;
  channel_id: string;
  author: APIUserData;
  attachments: any[];
  embeds: any[];
  mentions: string[];
  mention_roles: string[];
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  timestamp: string;
  edited_timestamp: null | string;
  flags: number;
  components: any[];
  referenced_message: APIRefrencedMessage;
  nonce?: string;
  message_reference?: {
    message_id: string;
    guild_id: string;
    channel_id: string;
  };
  member?: {
    roles: string[];
    premium_since: null | string;
    pending: boolean;
    nick: string | null;
    mute: boolean;
    joined_at: string;
    is_pending: boolean;
    hoisted_role: null | string;
    deaf: boolean;
    avatar: string | null;
  };
  guild_id: string | null;
}
