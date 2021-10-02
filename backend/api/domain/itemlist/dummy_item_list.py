from .item_list import ItemList
from .item.item import Item
from typing import List
from urllib import request as httpRequest
import xmltodict


class DummyItemList(ItemList):
    def __init__(self):
        self.url = 'http://localhost:8000/api/dummy-xml'

    def get(self) -> List[Item]:
        data = self.getRss()
        return data

    def getRss(self):
        req = httpRequest.Request(self.url)
        with httpRequest.urlopen(req) as res:
            byte_body = res.read()
            decoded_body = byte_body.decode().strip('"')
            xml = xmltodict.parse(decoded_body)
            items = xml['rss']['channel']['item']
            return {'items': items}

    def test_data(self) -> List[Item]:
        data = self.getRss()
        return data
