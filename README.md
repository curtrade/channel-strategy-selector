# channel-strategy-selector

This module separates logic of multiple channels from app busyness logic. Realized example channels for viber (messaging-api-viber) and telegram (node-telegram-bot-api).

## Scheme of usage 
`````javascript
const {
    loader: channelStrategySelectorLoader
} = require('./channel-strategy-selector/index.js');

const channel1Bot = {}; //bot1 configuration
const channel2Bot = {}; //bot2 configuration
//...

const channelStrategySelector = channelStrategySelectorLoader([
    { name: 'channel1', instance: channel1Bot },
    { name: 'channel2', instance: channel2Bot },
    //...
]);

channel1Bot.on('message', (msg) => {
    messageHandler('channel1', msg);
});
channel2Bot.on('message', (msg) => {
    messageHandler('channel2', msg);
});
//...

async function messageHandler(channelName, msg) {
    const channel = channelStrategySelector.select(channelName);
    const parsedResult = await channel.parseMessage(msg);
    //busyness logic independed of channels code
};
`````
