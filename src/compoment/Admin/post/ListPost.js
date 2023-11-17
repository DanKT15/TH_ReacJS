import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API_Post from "../../../service/API_Post";
import Api_Login from "../../../service/API_Login";

import List from "../List";

export default function ListPost() {

    const [dataPost, setdataPost] = useState([]);

    const navigate = useNavigate(); // chuyển hướng link

    const datathead = [
        {value: "id"},
        {value: "title"},
        {value: "content"},
        {value: "image"},
        {value: "news_id"},
        {value: "currentDate"}
    ];       

    const ApiPost = async () => {

        const oject = await API_Post.list_post();

        // console.log(oject.data.err);
    
        if (oject.data.err === 0) {
    
            let Post = oject.data.list; // [0].email

            let tamp = [];

            for (let index = 0; index < Post.length; index++) {

                tamp.push(
                    {   
                        id: Post[index].id,
                        data: 
                        [
                            Post[index].id,
                            Post[index].title,
                            Post[index].content,
                            Post[index].create_at,
                            Post[index].image,
                            Post[index].news_id
                        ]
                    }
                )

            }

            setdataPost(tamp);

        }
        
    }

    const handleDelete = async (id) => {

        const oject = await API_Post.del_post(id);

        if (oject.data.err === 0) {
            console.log(oject.data);
            setdataPost(
                dataPost.filter(
                    (e) => e.id !== id
                )
            )
        }
        else {
            console.log(oject.data);
        }

    }

    const linkUpdate = (id) => {
        navigate("/admin/updata_post/" + id);
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

        ApiPost();

    }, []); 

    return ( 
        <>
            <h1>Danh sách post</h1>
            <List datathead={ datathead } datalist={ dataPost } handleDelete={ handleDelete } linkUpdate= { linkUpdate }/>
        </>
    );
}