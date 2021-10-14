from .behavior.items.item import Item
from typing import List
from urllib import request as httpRequest
from .behavior.behavior import Behavior


class ItemList:
    def __init__(self, behavior: Behavior):
        self.behavior = behavior

    def get(self) -> List[Item]:
        req = httpRequest.Request(self.behavior.get_url())
        with httpRequest.urlopen(req) as res:
            body = res.read()
            return self.behavior.convert(body)
