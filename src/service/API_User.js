import axios from 'axios';

axios.defaults.withCredentials = true;

const insert_new_user = async (username, password, fullname, address, sex, email, groupid) => {
    return await axios.post("http://localhost:8010/api/v1/insert_new_user",{ username, password, fullname, address, sex, email, groupid });
}

const edit_user = async (username, password, fullname, address, sex, email, groupid) => {
    return await axios.put("http://localhost:8010/api/v1/edit_user",{ username, password, fullname, address, sex, email, groupid });
}

const del_user = async (username) => {
    return await axios.delete("http://localhost:8010/api/v1/del_user/" + username );
}

const list_user = async () => {
    return await axios.get("http://localhost:8010/api/v1/list-user/1-1000");
}

const detail_user = async (username) => {
    return await axios.get('http://localhost:8010/api/v1/detail_user/' + username);
}

export default { insert_new_user, edit_user, del_user, list_user, detail_user }