import Client from "../../classes/Client";
import Message from "../../classes/Message";
import User from "../../classes/User";
import APIMessageData from "../../types/APIMessageData.interface";
import BaseWebSocketEvent from "../BaseWebSocketEvent";

export default class WebSocketMessageEvent extends BaseWebSocketEvent {
  constructor() {
    super({ name: "MESSAGE_CREATE" });
  }
  async run(client: Client, data: APIMessageData) {
    if (!client.users.cache.get(data.author.id)) {
      await client.users.fetch({ id: data.author.id, cache: true });
    }
    const {
      attachments,
      author,
      channel_id,
      components,
      content,
      edited_timestamp,
      embeds,
      flags,
      guild_id,
      id,
      member,
      mention_everyone,
      mention_roles,
      mentions,
      nonce,
      pinned,
      referenced_message,
      timestamp,
      tts,
      type,
    } = data;
    const message = new Message({
      client,
      content: content,
      user: client.users.cache.get(author.id) as User,
      attachments,
      channelId: channel_id,
      guildId: guild_id,
      components,
      editedTimestamp: edited_timestamp,
      embeds,
      flags,
      id,
      member,
      mentionEveryone: mention_everyone,
      mentionRoles: mention_roles,
      mentions,
      nonce: nonce,
      pinned: pinned,
      repliedMessage: referenced_message,
      timestamp,
      tts,
      type,
    });
    client.emit("messageCreate", message);
  }
}
