import axios from 'axios';

axios.defaults.withCredentials = true;

const list_news = async () => {
    return await axios.get("http://localhost:8010/api/v1/list-news");
}

const del_new = async (id) => {
    return await axios.delete("http://localhost:8010/api/v1/del_news/" + id);
}

const insert_new = async (title) => {
    // let formData = new FormData();
    // formData.append("title", title);
    return await axios.post("http://localhost:8010/api/v1/insert_news",{title});
}


const edit_new = async (title,id) => {
   
    return await axios.put(
        "http://localhost:8010/api/v1/edit_new", {title,id}
    );
}


const GetById = async (id) => {
    return await axios.get('http://localhost:8010/api/v1/GetById/' + id);
}



export default { list_news,del_new,insert_new,edit_new,GetById }