const ChannelStrategy = require('./abstract/channel-strategy');

class TelegramStrategy extends ChannelStrategy {
    async parseMessage(msg) {
        const {
            chat: { id: chatId },
            from,
            text,
            caption,
            photo,
            video
        } = msg;

        const title = from.first_name + ' ' + from.last_name;

        let fileId;
        if (photo && photo.length > 0) {
            fileId = photo[photo.length - 1].file_id;
        } else if (video) {
            fileId = video.file_id;
        }

        const fileUrl = fileId ? await this.instance.getFileLink(fileId) : null;

        return { chatId, title, text: text || caption, fileUrl };
    }
}

module.exports = TelegramStrategy;
