import rssSettings from '@/config/rssSettings';
import axios from 'axios';

class ApiClient {
    async get() {
        const results = [];
        for (const setting of rssSettings) {
            const response = await axios.get(setting.url);
            results.push({
                rssName: setting.rssName,
                articles: response.data,
            });
        }
        return results;
    }
}

export default ApiClient;
