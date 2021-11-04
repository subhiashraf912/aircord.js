import UserAPIData from "./UserAPIData.interface";

export default interface APIRefrencedMessage {
  type: number;
  tts: boolean;
  timestamp: string;
  pinned: boolean;
  mentions: string[]; //totest
  mention_roles: string[]; //totest
  mention_everyone: boolean;
  id: string;
  flags: number;
  embeds: any[]; //totest
  edited_timestamp: null | string; //totest
  content: string;
  components: any[]; //totest
  channel_id: string;
  author: UserAPIData;
  attachments: any[]; //totest
}
