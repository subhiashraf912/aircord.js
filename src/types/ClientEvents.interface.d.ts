import Message from "../classes/Message";

interface ClientEvents {
	messageCreate: (message: Message) => any;
}

export default ClientEvents;
