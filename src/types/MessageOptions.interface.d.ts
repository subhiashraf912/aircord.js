import Client from "../classes/Client";
import Message from "../classes/Message";
import User from "../classes/User";
import APIRefrencedMessage from "./ReferencedMessage.interface";

interface MessageOptions {
  client: Client;
  content: string;
  user: User;
  type: number;
  tts: boolean;
  timestamp: string;
  repliedMessage?: APIRefrencedMessage;
  pinned: boolean;
  nonce: string;
  mentions: string[];
  mentionRoles: string[];
  mentionEveryone: boolean;
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
  editedTimestamp: null | string;
  components: any[];
  channelId: string;
  attachments: any[];
  guildId: string | null;
}
export default MessageOptions;
