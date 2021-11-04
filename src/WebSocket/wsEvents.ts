import Client from "../classes/Client";
import Message from "../classes/Message";
import User from "../classes/User";

let interval: number | NodeJS.Timer = 0;
const initWsEvents = async (client: Client) => {
  client.ws.on("message", async (data) => {
    const payload = JSON.parse(data as any);
    const { t, event, op, d } = payload;
    switch (op) {
      case 10:
        const { heartbeat_interval } = d;
        interval = heartbeat(heartbeat_interval);
        break;
    }
    for (const [key, event] of client.wsEvents) {
      if (event.getName() === t) event.run(client, d);
    }
  });
  const heartbeat = (ms: number) => {
    return setInterval(() => {
      client.ws.send(JSON.stringify({ op: 2, d: null }));
    }, ms);
  };
};

export default initWsEvents;
