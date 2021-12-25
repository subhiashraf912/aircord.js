import axios from "axios";
import discordApi from "../constants/discordApi";
import GenerateMessage from "../constants/GenerateMessage";
import APIMessageData from "../types/APIMessageData.interface";
import MessageSendOptions from "../types/MessageSendOptions.interface";
import Channel from "./Channel";
import Client from "./Client";

export default class TextChannel extends Channel {
  constructor(options: { client: Client; id: string }) {
    super(options);
  }

  async send(options: MessageSendOptions) {
    if (!options.components && !options.content && !options.embeds)
      throw new Error(this.client.errors.MessageCannotBeEmpty);
    const res = await axios.post(
      `${discordApi}/channels/${this.id}/messages`,
      { content: options.content },
      {
        headers: {
          authorization: this.client.token,
        },
      }
    );
    const messageData: APIMessageData = res.data;
    const message = GenerateMessage(this.client, messageData);
    return message;
  }
}
