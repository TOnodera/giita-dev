import axios from 'axios';

describe('一覧データ呼び出しまでの流れ', () => {
    test('codezineのRSSデータを取得', async () => {
        const codezine = await axios.get('http://backend:8000/api/codezine');
    });
});
