import MessageOptions from "../types/MessageOptions.interface";
import TextChannel from "./TextChannel";

export default class Message {
	user;
	content;
	attachments;
	channelId;
	guildId;
	components;
	editedTimestamp;
	embeds;
	flags;
	id;
	member;
	mentionEveryone;
	mentionRoles;
	mentions;
	nonce;
	pinned;
	repliedMessage;
	timestamp;
	tts;
	type;
	channel;
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
	}
}
