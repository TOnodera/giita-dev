from typing import List
from .items.item import Item
from .items.dummy_item import DummyItem
import xmltodict


class DummyBehavior:
    def __init__(self):
        self.url = 'http://localhost:8000/api/dummy-xml'

    def get_url(self) -> str:
        return self.url

    def convert(self, raw_data: str) -> List[Item]:
        raw_items = self.to_dicts(raw_data)
        items = self.to_list(raw_items)
        return items

    def to_dicts(self, raw_data: str):
        trimed_data = raw_data.decode().strip('"')
        xml = xmltodict.parse(trimed_data)
        items = xml['rss']['channel']['item']
        return items

    def to_list(self, raw_items: List[dict]) -> List[Item]:
        list: List[Item] = []
        for raw_item in raw_items:
            list.append(DummyItem(
                raw_item['title'],
                raw_item['link'],
                raw_item['description'],
                raw_item['pubDate']
            ))
        return list
