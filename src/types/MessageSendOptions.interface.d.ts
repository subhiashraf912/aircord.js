import MessageEmbed from "../classes/MessageEmbed";

interface MessageSendOptions {
  content?: string;
  embeds?: MessageEmbed[];
  components?: any;
}

export default MessageSendOptions;
