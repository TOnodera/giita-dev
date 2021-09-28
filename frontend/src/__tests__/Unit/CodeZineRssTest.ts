import CodeZineRss from '../../domain/rss/CodeZineRss';

describe('CodeZineRss', () => {
    const codezine = new CodeZineRss();
    it('rss() 文字列としてデータを取得出来る。', async () => {
        const xmlString = await codezine.rss();
        expect(xmlString).not.toBeNull();
        codezine.convert(xmlString);
    });
});
