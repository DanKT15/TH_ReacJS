import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API_Post from "../../../service/API_Post";
import Api_Login from "../../../service/API_Login";
import Api_New from "../../../service/API_New";

import List from "../List";

export default function ListNews() {

    const [ListNews, setListNews] = useState([]);

    const navigate = useNavigate(); // chuyển hướng link

    const datathead = [
        {value: "id"},
        {value: "title"},
        
    ];
    
    const ApiNews = async () => {

        const oject = await Api_New.list_news();

        // console.log(oject.data.err);
    
        if (oject.data.err === 0) {
            

            let New = oject.data.items; 

            let tamp = [];

            for (let index = 0; index < New.length; index++) {

                tamp.push(
                    {   
                        id: New[index].id,
                        data: 
                        [
                            New[index].id,
                            New[index].title,
                            
                        ]
                    }
                )

            }

            setListNews(tamp);

        }

       
        
    }
    const handleDelete = async (id) => {

        const oject = await Api_New.del_new(id);

        if (oject.data.err === 0) {
            console.log(oject.items);
            setListNews(
                ListNews.filter(
                    (e) => e.id !== id
                )
            )
        }
        else {
            console.log(oject.items);
        }

    }

    const linkUpdate = (id) => {
        navigate("/admin/edit_news/" + id);
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

        ApiNews();

    }, []); 
    return ( 
        <>
            <h1>Danh sách tin tuc</h1>
            <List datathead={ datathead } datalist={ ListNews } handleDelete={ handleDelete } linkUpdate= { linkUpdate }/>
        </>
    );
}