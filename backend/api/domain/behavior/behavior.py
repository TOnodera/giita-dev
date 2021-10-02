from abc import ABCMeta, abstractclassmethod
from .items.item import Item
from typing import List


class Behavior(metaclass=ABCMeta):

    @abstractclassmethod
    def get_url(self) -> str:
        pass

    @abstractclassmethod
    def to_dict(self, raw_data: str) -> dict:
        pass

    @abstractclassmethod
    def to_list(self, raw_items: dict) -> List[Item]:
        pass

    def convert(self, raw_data: str) -> List[Item]:
        raw_items = self.to_dict(raw_data)
        items = self.to_list(raw_items)
        return items
