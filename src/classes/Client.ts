import UsersManager from "./UsersManager";
import initWs from "../WebSocket";
import initWsEvents from "../WebSocket/wsEvents";
import ClientOptions from "../types/ClientOptions.interface";
import { TypedEmitter } from "tiny-typed-emitter";
import ClientEvents from "../types/ClientEvents.interface";
import BaseWebSocketEvent from "../WebSocket/BaseWebSocketEvent";
import { registerWebSocketEvents } from "../constants/registry";
import User from "./User";
export default class Client extends TypedEmitter<ClientEvents> {
	users;
	token;
	ws;
	user: User | null = null;
	wsEvents = new Map<string, BaseWebSocketEvent>();
	constructor(options: ClientOptions) {
		super();
		this.users = new UsersManager(this);
		this.token = options.token;
		this.ws = initWs(this);
		registerWebSocketEvents(this, "../WebSocket/WebSocketEvents");
		initWsEvents(this);
	}
}
