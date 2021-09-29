import Rss from './Rss';
import { testData } from './TestData';

class TestRss extends Rss {
    constructor() {
        super('test://codezine.test');
    }
    async rss(): Promise<string> {
        return testData;
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

export default TestRss;
