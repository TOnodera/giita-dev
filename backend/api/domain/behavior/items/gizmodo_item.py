from .item import Item


class GizmodoItem(Item):
    def __init__(self, title: str, link: str, description: str, pubDate: str):
        self.title = title
        self.link = link
        self.description = description
        self.pubDate = pubDate
