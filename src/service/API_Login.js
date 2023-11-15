import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = async (username, password) => {
    return await axios.post("http://localhost:8000/api/v1/login",{ username, password });
}

const LogOut = async () => {
    return await axios.get("http://localhost:8000/api/v1/logout");
}

const GetAuth = async () => {
    return await axios.get('http://localhost:8000/api/v1/login-auth');
}

export default { Login, GetAuth, LogOut }