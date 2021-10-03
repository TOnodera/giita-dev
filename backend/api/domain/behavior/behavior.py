from abc import ABCMeta, abstractclassmethod
from .items.item import Item
from typing import List


class Behavior(metaclass=ABCMeta):

    @abstractclassmethod
    def get_url(self) -> str:
        pass

    @abstractclassmethod
    def convert(self, raw_data: str) -> List[Item]:
        pass
