import Author from "./classes/Author";
import ws from "./WebSocket";
let interval: number | NodeJS.Timer = 0;

const users = new Map<string, Author>();

ws.on("message", (data) => {
	const payload = JSON.parse(data as any);
	const { t, event, op, d } = payload;
	switch (op) {
		case 10:
			const { heartbeat_interval } = d;
			interval = heartbeat(heartbeat_interval);
			break;
	}
	switch (t) {
		case "MESSAGE_CREATE":
			let author = d.author;
			const { avatar, discriminator, flags, id, username } = author;
			if (!users.get(author.id)) {
				const user = new Author({ discriminator, avatar, flags, id, username });
				users.set(user.id, user);
			}
	}
});

const heartbeat = (ms: number) => {
	return setInterval(() => {
		ws.send(JSON.stringify({ op: 2, d: null }));
	}, ms);
};
