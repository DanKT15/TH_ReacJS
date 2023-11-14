import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = async (username, password) => {
    return await axios.post("http://localhost:8000/api/v1/login",{ username, password });
}

const GetAuth = async () => {
    return axios.get('http://localhost:8000/api/v1/login-auth');
}

export default { Login, GetAuth }