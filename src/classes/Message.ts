import axios from "axios";
import discordApi from "../constants/discordApi";
import APIEmbed from "../types/APIEmbed.interface";
import MessageOptions from "../types/MessageOptions.interface";
import MessageSendOptions from "../types/MessageSendOptions.interface";
import TextChannel from "./TextChannel";

export default class Message {
  public readonly user;
  public readonly content;
  public readonly attachments;
  public readonly channelId;
  public readonly guildId;
  public readonly components;
  public readonly editedTimestamp;
  public readonly embeds;
  public readonly flags;
  public readonly id;
  public readonly member;
  public readonly mentionEveryone;
  public readonly mentionRoles;
  public readonly mentions;
  public readonly nonce;
  public readonly pinned;
  public readonly repliedMessage;
  public readonly timestamp;
  public readonly tts;
  public readonly type;
  public readonly channel;
  public readonly client;
  constructor(options: MessageOptions) {
    this.content = options.content;
    this.user = options.user;
    this.attachments = options.attachments;
    this.channelId = options.channelId;
    this.components = options.components;
    this.editedTimestamp = options.editedTimestamp;
    this.embeds = options.embeds;
    this.flags = options.flags;
    this.guildId = options.guildId;
    this.id = options.id;
    this.member = options.member;
    this.mentionEveryone = options.mentionEveryone;
    this.mentionRoles = options.mentionRoles;
    this.mentions = options.mentions;
    this.nonce = options.nonce;
    this.pinned = options.pinned;
    this.repliedMessage = options.repliedMessage;
    this.timestamp = options.timestamp;
    this.tts = options.tts;
    this.type = options.type;
    this.channel = new TextChannel({
      client: options.client,
      id: this.channelId,
    });
    this.client = options.client;
  }

  async reply(options: MessageSendOptions) {
    if (!options.components && !options.content && !options.embeds)
      throw new Error(this.client.errors.MessageCannotBeEmpty);
    let embeds: APIEmbed[] | undefined = undefined;
    if (options.embeds) {
      embeds = options.embeds.map((embed) => embed.toAPIEmbed());
    }
    axios.post(
      `${discordApi}/channels/${this.channelId}/messages`,
      {
        content: options.content,
        message_reference: {
          message_id: this.id,
          guild_id: this.guildId,
          channel_id: this.channelId,
        },
        embeds,
      },
      {
        headers: {
          authorization: this.client.token,
        },
      }
    );
  }
}
