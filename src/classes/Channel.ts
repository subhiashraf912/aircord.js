import Base from "./Base";
import Client from "./Client";

export default abstract class Channel extends Base {
	constructor(options: { client: Client; id: string }) {
		super(options);
	}
}
