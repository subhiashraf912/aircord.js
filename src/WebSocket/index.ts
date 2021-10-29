import WebSocket from "ws";

const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json");
const token =
	"mfa.3f9xdXm_DEj0EMVUerl8U7rTtiXm7rUvszPu17XyvHzrZcnu0oNGQfuWHnCHAz2lHz-A37a-lGJPprE3FoK8";

const payload = {
	op: 2,
	d: {
		token,
		intents: 513,
		properties: {
			$os: "linux",
			$device: "chrome",
		},
	},
};

ws.on("open", () => {
	ws.send(JSON.stringify(payload));
});

export default ws;
