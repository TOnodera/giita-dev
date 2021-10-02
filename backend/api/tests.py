import unittest
from domain.item_list import ItemList
from domain.behavior.dummy_behavior import DummyBehavior


class TestApp(unittest.TestCase):
    def test_テストの動作確認(self):
        self.assertEqual(True, True)


class Testデータの取得(unittest.TestCase):
    def test_各サイトのRSSを取得できる(self):
        behavior = DummyBehavior()
        dummy: ItemList = ItemList(behavior)
        data = dummy.get()
        self.assertEqual(len(data['items']), 20)


if __name__ == '__main__':
    unittest.main()
