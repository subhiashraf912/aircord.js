import Client from "../classes/Client";
import Message from "../classes/Message";
import User from "../classes/User";

let interval: number | NodeJS.Timer = 0;
const initWsEvents = async (client: Client) => {
	client.ws.on("message", async (data) => {
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
				if (!client.users.cache.get(author.id)) {
					await client.users.fetch({ id: author.id, cache: true });
				}
				const message = new Message({
					content: d.content,
					user: client.users.cache.get(d.author.id) as User,
				});
				client.emit("messageCreate", message);
		}
	});
	const heartbeat = (ms: number) => {
		return setInterval(() => {
			client.ws.send(JSON.stringify({ op: 2, d: null }));
		}, ms);
	};
};

export default initWsEvents;
