# channel-strategy-selector

This module separates logic of multiple channels from app busyness logic. Realized example channels for viber (messaging-api-viber) and telegram (node-telegram-bot-api).

## Scheme of usage 
```
const {
    loader: channelStrategySelectorLoader
} = require('./channel-strategy-selector/index.js');

const channel1Bot = <... bot1 configuration>
const channel2Bot = <... bot2 configuration>

const channelStrategySelector = channelStrategySelectorLoader([
    { name: 'channel1', instance: channel1Bot },
    { name: 'channel2', instance: channel2Bot },
    //...
])

channel1Bot.on('message', (msg) => {
    customHandler('channel1', msg);
});
channel2Bot.on('message', (msg) => {
    customHandler('channel2', msg);
});
//...

function customHandler(channelName, msg) {
    const channel = channelStrategySelector.select(channelName);
    let parsedResult = await channel.parseMessage(msg);
    //...busyness logic independed of channels code...
}
```
