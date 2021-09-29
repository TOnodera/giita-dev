import iItems from './interface/iItems';

class Items implements iItems {
    private items: Item[] = [];
    constructor() {
        this.items.push({
            title: '霧島さくら最高！！',
            image: 'https://stat.ameba.jp/user_images/20200525/01/masatogame/2a/18/j/o0360064014763826839.jpg?caw=800',
            describe: '？？？？d',
            link: 'https://test.link.title',
            pubDate: '',
        });
    }
    all(): Item[] {
        return this.items;
    }
}

export default Items;
