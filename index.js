const ChannelStrategySelector = require('./channel-strategy-selector');
const TelegramStrategy = require('./telegram-strategy');
const ViberStrategy = require('./viber-strategy');

const allStrategies = {
    telegram: TelegramStrategy,
    viber: ViberStrategy
};

function loader(config) {
    let resultChannels = {};
    for (const { name, instance } of config) {
        if (typeof name !== 'string') {
            console.error('Channel name should be string:', { channelName: name });
            continue;
        }
        if (!allStrategies[name]) {
            console.error('Unknown channel:', { channelName: name });
            continue;
        }
        resultChannels[name] = new allStrategies[name](instance);
    }
    return new ChannelStrategySelector(resultChannels);
}

module.exports = { loader };
