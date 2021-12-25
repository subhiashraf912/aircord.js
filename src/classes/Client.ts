import UsersManager from "./UsersManager";
import initWs from "../WebSocket";
import initWsEvents from "../WebSocket/wsEvents";
import ClientOptions from "../types/ClientOptions.interface";
import { TypedEmitter } from "tiny-typed-emitter";
import ClientEvents from "../types/ClientEvents.interface";
import BaseWebSocketEvent from "../WebSocket/BaseWebSocketEvent";
import { registerWebSocketEvents } from "../constants/registry";
import User from "./User";
import clientErrors from "../constants/clientErrors";
import GuildsManager from "./GuildsManager";
export default class Client extends TypedEmitter<ClientEvents> {
  public readonly users;
  public readonly guilds;
  public readonly token;
  public readonly ws;
  public user: User | null = null;
  public readonly wsEvents = new Map<string, BaseWebSocketEvent>();
  public readonly errors;
  constructor(options: ClientOptions) {
    super();
    this.users = new UsersManager(this);
    this.guilds = new GuildsManager(this);
    this.token = options.token;
    this.ws = initWs(this);
    registerWebSocketEvents(this, "../WebSocket/WebSocketEvents");
    initWsEvents(this);
    this.errors = clientErrors;
  }
}
