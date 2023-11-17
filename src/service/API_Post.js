import axios from 'axios';

axios.defaults.withCredentials = true;

const insert_new_post = async (title, content, file, news_id) => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("news_id", news_id);
    formData.append("file", file);
    return await axios.post(
        "http://localhost:8010/api/v1/insert_new_post", formData,{ 
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
    );
}

const edit_post = async (id, title, content, file, img_old, news_id) => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("img_old", img_old);
    formData.append("news_id", news_id);
    formData.append("file", file);
    return await axios.put(
        "http://localhost:8010/api/v1/edit_post", formData,{ 
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
    );
}

const del_post = async (id) => {
    return await axios.delete("http://localhost:8010/api/v1/del_post/" + id);
}

const list_post = async () => {
    return await axios.get("http://localhost:8010/api/v1/list-post/1-1000");
}

const detail_post = async (id) => {
    return await axios.get('http://localhost:8010/api/v1/detail_post/' + id);
}

export default { insert_new_post, edit_post, del_post, list_post, detail_post }