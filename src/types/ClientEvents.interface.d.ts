import Guild from "../classes/Guild";
import Message from "../classes/Message";

interface ClientEvents {
  messageCreate: (message: Message) => any;
  ready: () => any;
  guildCreate: (guild:Guild) => any;
}

export default ClientEvents;
