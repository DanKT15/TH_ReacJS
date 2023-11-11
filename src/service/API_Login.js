import axios from 'axios';

const Login = async (username, password) => {
    return await axios.post("http://localhost:8000/api/v1/login",
        {
            username,
            password
        })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
}

export default { Login }