import Client from "./classes/Client";

const client = new Client({
	token: "Bot ODY0NTU4ODcyMjE0ODk2NjYw.YO3NMQ.9KcZxT3OFgBLbRx_29pwsz4rTTI",
});

client.on("messageCreate", (message) => {
	client.users.cache.get(message.user.id);
	if (message.content === "test") message.channel.send({ content: "testing" });
});

client.on("ready", () => {
	console.log(`${client.user?.username} is ready bishes`);
});
