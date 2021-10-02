import xmltodict


class DummyBehavior:
    def __init__(self):
        self.url = 'https://codezine.jp/rss/new/20/index.xml'

    def get_url(self) -> str:
        return self.url

    def to_dict(self, raw_data: str):
        xml = xmltodict.parse(raw_data)
        items = xml['rss']['channel']['item']
        return items
