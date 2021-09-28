import axios from 'axios';
/**
 * RSS取得のテンプレートメソッド
 */
abstract class Rss {
    protected http = axios;
    protected url: string;

    constructor(url: string) {
        this.url = url;
    }

    async items(): Promise<Item[]> {
        const xmlString = await this.rss();
        return this.convert(xmlString);
    }

    async rss(): Promise<string> {
        const response = await axios.get(this.url);
        return response.data;
    }

    abstract convert(xmlString: string): Item[];
}

export default Rss;
