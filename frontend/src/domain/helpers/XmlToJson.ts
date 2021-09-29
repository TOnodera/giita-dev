import convert from 'xml-js';

class XmlToJson {
    convert(xmlString: string): any {
        const textFeeds = convert.xml2json(xmlString, {
            compact: true,
        });
        const json: any = JSON.parse(textFeeds);
        return json;
    }
}

const xmlToJson = new XmlToJson();

export { xmlToJson };
