import MessageOptions from "../types/MessageOptions.interface";

export default class Message {
	user;
	content;
	constructor(options: MessageOptions) {
		this.content = options.content;
		this.user = options.user;
	}
}
