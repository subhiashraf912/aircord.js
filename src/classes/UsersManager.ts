import User from "./User";
import axois from "axios";
import discordApi from "../constants/discordApi";
import Client from "./Client";
import userFetchOptions from "../types/UserFetchOptions.interface";
import UserAPIData from "../types/UserAPIData.interface";
export default class UsersManager {
	cache;
	client;
	constructor(client: Client) {
		this.cache = new Map<string, User>();
		this.client = client;
	}

	async fetch(options: userFetchOptions) {
		const userData = await axois.get(`${discordApi}/users/${options.id}`, {
			headers: {
				authorization: this.client.token,
			},
		});
		const data: UserAPIData = userData.data;
		if (options.cache) {
			const user = new User({
				avatar: data.avatar,
				discriminator: data.discriminator,
				flags: data.public_flags,
				id: data.id,
				username: data.username,
				banner: data.banner,
				bannerColor: data.banner_color,
				accentColor: data.accent_color,
			});
			this.client.users.cache.set(userData.data.id, user);
		}
		return;
	}
}
