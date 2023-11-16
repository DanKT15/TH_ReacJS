import axios from 'axios';

axios.defaults.withCredentials = true;

const insert_new_post = async (username, password) => {
    return await axios.post("http://localhost:8010/api/v1/insert_new_post",{ username, password });
}

const edit_post = async (username, password) => {
    return await axios.put("http://localhost:8010/api/v1/edit_post",{ username, password });
}

const del_post = async (username, password) => {
    return await axios.delete("http://localhost:8010/api/v1/del_post",{ username, password });
}

const list_post = async () => {
    return await axios.get("http://localhost:8010/api/v1/list-post/1-1000");
}

const detail_post = async (id) => {
    return await axios.get('http://localhost:8010/api/v1/detail_post/' + id);
}

const view_edit_post = async (id) => {
    return await axios.get('http://localhost:8010/api/v1/view_edit_post/' + id);
}

export default { insert_new_post, edit_post, del_post, list_post, detail_post, view_edit_post }