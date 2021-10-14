from typing import List
from .items.item import Item
from .items.codezine_item import CodezineItem
import xmltodict


class CodezineBehavior:
    def __init__(self):
        self.url = "https://codezine.jp/rss/new/20/index.xml"

    def convert(self, raw_data: str) -> List[Item]:
        raw_items = self._to_dict(raw_data)
        items = self._to_list(raw_items)
        return items

    def get_url(self) -> str:
        return self.url

    def _to_dict(self, raw_data: str):
        xml = xmltodict.parse(raw_data)
        items = xml["rss"]["channel"]["item"]
        return items

    def _to_list(self, raw_items: dict) -> List[Item]:
        list: List[Item] = []
        for raw_item in raw_items:
            item = CodezineItem(
                raw_item["title"],
                raw_item["link"],
                raw_item["description"],
                raw_item["pubDate"],
            )
            list.append(item)
        return list
