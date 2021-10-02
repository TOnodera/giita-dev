import unittest
from domain.itemlist.item_list import ItemList
from domain.itemlist.dummy_item_list import DummyItemList


class TestApp(unittest.TestCase):
    def test_テストの動作確認(self):
        self.assertEqual(True, True)


class TestItemList(unittest.TestCase):
    def test_各サイトのRSSを取得できる(self):
        dummy: ItemList = DummyItemList()
        data = dummy.get()
        self.assertEqual(len(data), 10)
        index = 0
        for value in dummy.test_data():
            self.assertEqual(value['title'], value['title'])
            index += 1


if __name__ == '__main__':
    unittest.main()
