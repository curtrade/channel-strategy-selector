class ChannelStrategySelector {
    constructor(strategies) {
        this.strategies = strategies;
    }
    select(name) {
        if (!this.strategies || typeof this.strategies !== 'object') {
            throw new Error('Channel strategies not set');
        }
        if (this.strategies[name]) {
            return this.strategies[name];
        }
        throw new Error('Unknown channel strategy:' + name);
    }
}

module.exports = ChannelStrategySelector;
