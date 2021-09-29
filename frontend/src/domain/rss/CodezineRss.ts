import Rss from './Rss';

class CodezineRss extends Rss {
    constructor() {
        super('https://codezine.jp/rss/new/20/index.xml');
    }
    convert(rss: any): Item[] {
        const results: Item[] = [];
        const items = rss.rss.channel.item;
        for (const rawItem of items) {
            results.push({
                title: rawItem.title._text,
                image: '',
                link: rawItem.link._text,
                describe: rawItem.description._text,
                pubDate: rawItem.pubDate._text,
            });
        }
        return results;
    }
}

export default CodezineRss;
