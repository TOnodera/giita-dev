
from typing import List
from .items.item import Item
from .items.gizmodo_item import GizmodoItem
import xmltodict


class GizmodoBehavior:
    def __init__(self):
        self.url = 'https://www.gizmodo.jp/index.xml'

    def convert(self, raw_data: str) -> List[Item]:
        raw_items = self._to_dict(raw_data)
        items = self._to_list(raw_items)
        return items

    def get_url(self) -> str:
        return self.url

    def _to_dict(self, raw_data: str):
        xml = xmltodict.parse(raw_data)
        items = xml['rss']['channel']['item']
        return items

    def _to_list(self, raw_items: dict) -> List[Item]:
        list: List[Item] = []
        for raw_item in raw_items:
            item = GizmodoItem(
                raw_item['title'], raw_item['link'], raw_item['description'], raw_item['pubDate'])
            list.append(item)
        return list
