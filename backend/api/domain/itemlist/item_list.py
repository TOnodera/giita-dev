from .item.item import Item
from typing import List
from abc import ABCMeta, abstractclassmethod


class ItemList(metaclass=ABCMeta):
    def __init__(self):
        self.items: List[Item]

    @abstractclassmethod
    def get(self) -> List[Item]:
        pass
