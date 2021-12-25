import MessageEmbed from "../classes/MessageEmbed";

interface MessageSendOptions {
  content?: string;
  embeds?: MessageEmbed[];
  components?: any;
  attachments?: any[];
  guild?: { id: string };
}

export default MessageSendOptions;
