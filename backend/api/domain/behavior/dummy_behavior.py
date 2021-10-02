import xmltodict


class DummyBehavior:
    def __init__(self):
        self.url = 'http://localhost:8000/api/dummy-xml'

    def get_url(self) -> str:
        return self.url

    def convert(self, raw_data: str):
        trimed_data = raw_data.decode().strip('"')
        xml = xmltodict.parse(trimed_data)
        items = xml['rss']['channel']['item']
        return items
