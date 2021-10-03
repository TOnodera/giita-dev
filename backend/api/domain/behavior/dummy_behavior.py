from typing import List
from .items.item import Item
from .items.dummy_item import DummyItem
from .behavior import Behavior
import xmltodict


class DummyBehavior(Behavior):
    def __init__(self):
        self.url = 'http://localhost:8000/api/dummy-xml'

    def get_url(self) -> str:
        return self.url

    def convert(self, raw_data: str) -> List[Item]:
        raw_items = self._to_dict(raw_data)
        items = self._to_list(raw_items)
        return items

    def _to_dict(self, raw_data: str) -> dict:
        trimed_data = raw_data.decode().strip('"')
        xml = xmltodict.parse(trimed_data)
        items = xml['rss']['channel']['item']
        return items

    def _to_list(self, raw_items: dict) -> List[Item]:
        list: List[Item] = []
        for raw_item in raw_items:
            list.append(DummyItem(
                raw_item['title'],
                raw_item['link'],
                raw_item['description'],
                raw_item['pubDate']
            ))
        return list
