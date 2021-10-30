import UsersManager from "./UsersManager";
import initWs from "../WebSocket";
import initWsEvents from "../WebSocket/wsEvents";
import ClientOptions from "../types/ClientOptions.interface";
import { TypedEmitter } from "tiny-typed-emitter";
import ClientEvents from "../types/ClientEvents.interface";

export default class Client extends TypedEmitter<ClientEvents> {
	users;
	token;
	ws;
	constructor(options: ClientOptions) {
		super();
		this.users = new UsersManager(this);
		this.token = options.token;
		this.ws = initWs(this);
		initWsEvents(this);
	}
}
