import axios from 'axios';
import { xmlToJson } from '../../domain/helpers/XmlToJson';
/**
 * RSS取得のテンプレートメソッド
 */
abstract class Rss {
    protected http = axios;
    protected url: string;

    constructor(url: string) {
        this.url = url;
    }

    async get(): Promise<Item[]> {
        const xmlString = await this.rss();
        const json = xmlToJson.convert(xmlString);
        return this.convert(json);
    }

    async rss(): Promise<string> {
        const response = await axios.get(this.url);
        return response.data;
    }

    abstract convert(rawItems: any): Item[];
}

export default Rss;
