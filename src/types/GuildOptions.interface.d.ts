import Client from "../classes/Client";

interface GuildOptions {
  id: string;
  name: string;
  icon: string;
  members: Map;
  channels: Map;
  roles: Map;
  client: Client;
}
