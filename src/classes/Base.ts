import BaseOptions from "../types/BaseOptions.interface";
import Client from "./Client";

export default abstract class Base {
  id: string;
  client: Client;
  constructor(options: BaseOptions) {
    this.id = options.id;
    this.client = options.client;
  }
}
