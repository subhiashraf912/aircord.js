import Client from "../classes/Client";
const initWsEvents = async (client: Client) => {
  client.ws.on("message", async (data) => {
    const payload = JSON.parse(data as any);
    const opCode = payload.op;
    const eventData = payload.d;
    const sequenceNumber = payload.s;
    const eventName = payload.t;
    if (opCode === 10) { 
      const { heartbeat_interval } = eventData;
      sendHeartBeatToTheGateway(heartbeat_interval);
    }
    for (const [key, event] of client.wsEvents) {
      if (event.getName() === eventName) event.run(client, eventData);
    }
  });
  const sendHeartBeatToTheGateway = (ms: number) => {
    setInterval(() => {
      client.ws.send(JSON.stringify({ op: 2, d: null }));
    }, ms);
  };
};

export default initWsEvents;
