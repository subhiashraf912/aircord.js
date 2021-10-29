export default class Author {
	username: string;
	flags: number;
	tag: `${string}#${string}`;
	discriminator: string;
	avatar: string;
	id: string;
	constructor(options: AuthorOptions) {
		this.username = options.username;
		this.flags = options.flags;
		this.tag = `${options.username}#${options.discriminator}`;
		this.avatar = options.avatar;
		this.discriminator = options.discriminator;
		this.id = options.id;
	}
}

interface AuthorOptions {
	username: string;
	flags: number;
	id: string;
	discriminator: string;
	avatar: string;
}
