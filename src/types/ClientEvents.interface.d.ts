import Message from "../classes/Message";

interface ClientEvents {
  messageCreate: (message: Message) => any;
  ready: () => any;
}

export default ClientEvents;
