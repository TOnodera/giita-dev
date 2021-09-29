import Rss from '@/domain/rss/Rss';
import CodezineRss from '../domain/rss/CodezineRss';
describe('一覧データ呼び出しまでの流れ', () => {
    it('全体データ呼び出し', async () => {
        const items: Item[] = [];
        const rsses: Rss[] = [new CodezineRss()];
        for (const rss of rsses) {
            const item = await rss.get();
            items.push(...item);
        }
        expect(items.length).toBe(20);
    });
});
