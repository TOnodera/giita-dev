import unittest
from domain.itemlist.item_list import ItemList
from domain.itemlist.dummy_item_list import DummyItemList


class TestApp(unittest.TestCase):
    def test_テストの動作確認(self):
        self.assertEqual(True, True)


class Testデータの取得と戻り値を返すまで(unittest.TestCase):
    def test_各サイトのRSSを取得できる(self):
        dummy: ItemList = DummyItemList()
        data = dummy.get()
        dummy_data = dummy.test_data()
        self.assertEqual(len(data['items']), 20)

        index = 0
        for value in data['items']:
            self.assertEqual(
                value['title'], dummy_data['items'][index]['title'])
            index += 1


class TestItemList(unittest.TestCase):
    pass


if __name__ == '__main__':
    unittest.main()
