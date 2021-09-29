interface Item {
    title: string;
    image: string;
    link: string;
    describe: string;
    pubDate: string;
}

interface CodeZineRssType {
    rss: {
        channel: {
            item: Item[];
        };
    };
}
