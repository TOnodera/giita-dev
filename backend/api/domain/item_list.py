from .behavior.items.item import Item
from typing import List
from urllib import request as httpRequest


class ItemList():
    def __init__(self, behavior):
        self.behavior = behavior

    def get(self) -> List[Item]:
        req = httpRequest.Request(self.behavior.get_url())
        with httpRequest.urlopen(req) as res:
            body = res.read()
            items = self.behavior.convert(body)
            return {'items': items}
