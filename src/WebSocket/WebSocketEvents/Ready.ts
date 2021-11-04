import Client from "../../classes/Client";
import User from "../../classes/User";
import BaseWebSocketEvent from "../BaseWebSocketEvent";

export default class WebSocketMessageEvent extends BaseWebSocketEvent {
  constructor() {
    super({ name: "READY" });
  }
  async run(client: Client, data: any) {
    const clientUser = new User({
      avatar: data.user.avatar,
      discriminator: data.user.discriminator,
      flags: data.user.flags,
      id: data.user.id,
      username: data.user.username,
    });
    client.users.cache.set(clientUser.id, clientUser);
    client.user = clientUser;
    client.emit("ready");
  }
}
