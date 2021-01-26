class ChannelStrategy {
    constructor(instance) {
        this.instance = instance;
    }
    async parseMessage() {
        throw new Error('Method parseMessage should be set');
    }
}

module.exports = ChannelStrategy;
