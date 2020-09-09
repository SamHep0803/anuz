export class MessageEmbedThumbnail {
    constructor (
        private url?: string,
        private height?: number,
        private width?: number
    ) {

    }

    public getUrl() {
        return this.url;
    }

    public getHeight() {
        return this.height;
    }

    public getWidth() {
        return this.width;
    }
}