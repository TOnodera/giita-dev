import Rss from './Rss';
import convert from 'xml-js';

class CodeZineRss extends Rss {
    constructor() {
        super('https://codezine.jp/rss/new/20/index.xml');
    }
    convert(xmlString: string): Item[] {
        const textFeeds = convert.xml2json(xmlString, {
            compact: true,
            spaces: 4,
        });
        const jsonFeeds: CodeZineRssType = JSON.parse(textFeeds);
        return jsonFeeds.rss.channel.item;
    }
}

export default CodeZineRss;
