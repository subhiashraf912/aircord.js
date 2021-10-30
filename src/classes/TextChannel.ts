import axios from "axios";
import discordApi from "../constants/discordApi";
import Base from "./Base";
import Channel from "./Channel";
import Client from "./Client";

export default class TextChannel extends Channel {
	constructor(options: { client: Client; id: string }) {
		super(options);
	}

	async send(options: { content: string }) {
		axios.post(
			`${discordApi}/channels/${this.id}/messages`,
			{ content: options.content },
			{
				headers: {
					authorization: this.client.token,
				},
			},
		);
	}
}
