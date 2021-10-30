import WebSocket from "ws";
import Client from "../classes/Client";
const initWs = (client: Client) => {
	const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json");
	const token = client.token;

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
	return ws;
};
export default initWs;
