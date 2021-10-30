import UserOptions from "../types/User.interface";

export default class User {
	username: string;
	flags: number;
	tag: `${string}#${string}`;
	discriminator: string;
	avatar: string;
	id: string;
	banner: string | null = null;
	bannerColor: string | null = null;
	accentColor: string | null = null;
	constructor(options: UserOptions) {
		this.username = options.username;
		this.flags = options.flags;
		this.tag = `${options.username}#${options.discriminator}`;
		this.avatar = options.avatar;
		this.discriminator = options.discriminator;
		this.id = options.id;
	}
}
