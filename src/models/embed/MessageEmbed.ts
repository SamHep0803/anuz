import { MessageEmbedThumbnail } from "./MessageEmbedThumbnail.ts";
import { MessageEmbedImage } from "./MessageEmbedImage.ts";

export class MessageEmbed {
    constructor (
        private title?: string,
        private description?: string,
        private color?: string | number,
        private image?: MessageEmbedImage,
        private thumbnail?: MessageEmbedThumbnail
    ) {

    }

    getTitle() {
        return this.title
    }
    setTitle(title: string | undefined): MessageEmbed {
        this.title = title;
        return this;
    }

    getDescription() {
        return this.description;
    }
    setDescription(description: string | undefined): MessageEmbed {
        this.description = description;
        return this;
    }

    getColor() {
        return this.color;
    }
    setColor(color: string | undefined | number): MessageEmbed {
        if (typeof color === "string") {
            this.color = parseInt(color?.replace('#', '')!, 16);
        }
        if (typeof color === "number") {
            this.color = color;
        }
 
        return this;
    }

    getImage() {
        return this.image;
    }
    setImage(url?: string): MessageEmbed {
        this.image = new MessageEmbedImage(url);
        return this;
    }

    getThumbnail() {
        return this.thumbnail;
    }
    setThumbnail(url?: string, height?: number, width?: number): MessageEmbed {
        this.thumbnail = new MessageEmbedThumbnail(url, height, width);
        return this;
    }
}