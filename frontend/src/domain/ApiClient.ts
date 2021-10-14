import axios, { AxiosAdapter } from 'axios';

class ApiClient {
    private url: string;
    private http: AxiosAdapter;
    constructor(url: string) {
        if (!/https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+/.test(url)) {
        }
        this.http = axios.create({});
    }
}
