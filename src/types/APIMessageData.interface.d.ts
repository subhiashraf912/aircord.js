import APIRefrencedMessage from "./ReferencedMessage.interface";
import UserAPIData from "./UserAPIData.interface";

export default interface APIMessageData {
  type: number;
  tts: boolean;
  timestamp: string;
  referenced_message: APIRefrencedMessage;
  pinned: boolean;
  nonce: string;

  message_reference?: {
    message_id: string;
    guild_id: string;
    channel_id: string;
  };
  mentions: string[];
  mention_roles: string[];
  mention_everyone: boolean;
  member: {
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
  id: string;
  flags: number;
  embeds: any[];
  edited_timestamp: null | string;
  content: string;
  components: any[];
  channel_id: string;
  author: UserAPIData;
  attachments: any[];
  guild_id: string | null;
}
