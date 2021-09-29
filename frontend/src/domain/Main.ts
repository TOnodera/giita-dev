import CodezineRss from './rss/CodezineRss';
import Rss from './rss/Rss';
class Main {
    private rssList: Rss[] = [new CodezineRss()];
    async all(): Promise<Item[]> {
        const result: Item[] = [];
        for (const rss of this.rssList) {
            const items = await rss.get();
            result.push(...items);
        }
        return result;
    }
}

export default Main;
