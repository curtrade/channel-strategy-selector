const ChannelStrategy = require('./abstract/channel-strategy');

class ViberStrategy extends ChannelStrategy {
    async parseMessage(msg) {
        const {
            sender: { id: chatId, name: title },
            message: { text, type, media }
        } = msg;

        let fileUrl;
        if (type === 'picture' || type === 'video') {
            fileUrl = media;
        }

        return { chatId, title, text, fileUrl };
    }
}

module.exports = ViberStrategy;
