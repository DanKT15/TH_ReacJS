import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API_User from "../../../service/API_User";
import Api_Login from "../../../service/API_Login";

import List from "../List";

export default function ListUser() {

    const [dataUser, setdataUser] = useState([]);

    const navigate = useNavigate(); // chuyển hướng link

    const datathead = [
        {value: "username"},
        {value: "sex"},
        {value: "groupid"},
        {value: "email"},
        {value: "address"},
        {value: "fullname"},
        {value: "password"},
        {value: "setting"}
    ];       

    const Apiuser = async () => {

        const oject = await API_User.list_user();
    
        if (oject.data.err === 0) {
    
            let user = oject.data.list; // [0].email

            // console.log(user[0]);

            let tamp = [];

            for (let index = 0; index < user.length; index++) {

                tamp.push(
                    {   
                        id: user[index].username,
                        data: 
                        [
                            user[index].username,
                            user[index].sex,
                            user[index].groupid,
                            user[index].email,
                            user[index].address,
                            user[index].fullname,
                            user[index].password
                        ]
                    }
                )

            }

            setdataUser(tamp);

        }
        
    }

    const handleDelete = async (username) => {

        const oject = await API_User.del_user(username);

        if (oject.data.err === 0) {
            console.log(oject.data);
            setdataUser(
                dataUser.filter(
                    (e) => e.id !== username
                )
            )
        }
        else {
            console.log(oject.data);
        }

    }

    const linkUpdate = (username) => {
        navigate("/admin/updata_user/" + username);
    }

    useEffect( () => {

        const Auth = async () => {

            const GetAuth = await Api_Login.GetAuth();

            const userinfo = GetAuth.data;

            // console.log(userinfo);

            if (userinfo.err === 1) {
                navigate("/admin/login-admin");
            }

        };
    
        Auth();

        Apiuser();

    }, []); 

    return ( 
        <>
            <h1>Danh sách user</h1>
            <List datathead={ datathead } datalist={ dataUser } handleDelete={ handleDelete } linkUpdate= { linkUpdate }/>
        </>
    );
}