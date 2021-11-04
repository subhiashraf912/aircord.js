import Client from "../classes/Client";
import path from "path";
import { promises as fs } from "fs";

export const registerWebSocketEvents = async (
  client: Client,
  dir: string = ""
) => {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory())
      registerWebSocketEvents(client, path.join(dir, file));
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const { default: Event } = await import(path.join(dir, file));
      const event = new Event();
      client.wsEvents.set(event.getName(), event);
    }
  }
};
