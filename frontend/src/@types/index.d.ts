interface Item {
    title: string;
    enclosure: string | null;
    image: {
        url: {
            _text: string;
        };
        title: {
            _text: string;
        };
        link: {
            _text: string;
        };
    };
    link: string;
    pubDate: string;
}

interface CodeZineRssType {
    rss: {
        channel: {
            item: Item[];
        };
    };
}
