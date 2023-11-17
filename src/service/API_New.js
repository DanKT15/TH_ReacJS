import axios from 'axios';

axios.defaults.withCredentials = true;

const list_news = async () => {
    return await axios.get("http://localhost:8010/api/v1/list-news");
}

export default { list_news }