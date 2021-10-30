import Client from "../classes/Client";
import BaseWebSocketEventOptions from "../types/BaseWebSocketEvent";

export default abstract class BaseWebSocketEvent {
	constructor(private options: BaseWebSocketEventOptions) {}
	getName() {
		return this.options.name;
	}
	abstract run(client: Client, data: any): Promise<void>;
}
