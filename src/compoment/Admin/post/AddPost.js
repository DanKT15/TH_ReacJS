import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API_Post from "../../../service/API_Post";
import Api_Login from "../../../service/API_Login";
import API_New from "../../../service/API_New";

export default function UpdataPost() {

    const { id } = useParams();

    const navigate = useNavigate(); // chuyển hướng link

    const [dataPost, setdataPost] = useState({title: "", content: "", file: "", news_id: ""});
    const [danhmuc, setdanhmuc] = useState([]);

    const HandleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setdataPost({
            ...dataPost, [name]: value
        });
    }

    const HandleFile = (e) => {

        let name = e.target.name;
        let file = e.target.files[0];

        setdataPost({
            ...dataPost, [name]: file
        });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (dataPost.title === "") { return alert("Thiếu thông tin trường title") }
        if (dataPost.content === "") { return alert("Thiếu thông tin trường content") }
        if (dataPost.file === "") { return alert("Thiếu thông tin trường file") }
        if (dataPost.news_id === "") { return alert("Thiếu thông tin trường news_id") }

        const UpdataPost = await API_Post.insert_new_post(dataPost.title, dataPost.content, dataPost.file, dataPost.news_id);

        return alert(UpdataPost.data.mess);
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

        const importdata = async () => {

            const oject = await API_New.list_news();

            // console.log(oject.data.items);

            const Danhmuc = oject.data.items;

            let tamp = [];

            for (let index = 0; index < Danhmuc.length; index++) {

                tamp.push(
                    {   
                        id: Danhmuc[index].id,
                        title: Danhmuc[index].title
                    }
                )

            }

            setdanhmuc(tamp)
            
        };
    
        Auth();

        importdata();

    }, []);

    const test = () => {
        console.log(danhmuc);
    }


    return ( 

            <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h3 onClick={ test } >New post</h3>
                    <p className="blue-text"></p>
                    <div className="card">
                        <h5 className="text-center mb-4"></h5>
                       
                        <form onSubmit={ HandleSubmit }>
                            
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Tiêu đề:<span className="text-danger"> *</span></label> <input value={ dataPost.title } type="text" id="fname" name="title" onChange={ HandleChange } placeholder=""/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nội dung:<span className="text-danger"> *</span></label> <input value={ dataPost.content } type="text" id="lname" name="content" onChange={ HandleChange } placeholder=""/> </div>
                            </div>
        
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Ảnh:<span className="text-danger"> *</span></label> <input type="file" name="file" onChange={ HandleFile }/> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Danh mục:<span className="text-danger"> *</span></label> 
                                    <select value={ dataPost.news_id } name="news_id" onChange={ HandleChange } id="cars">
                                        <option value="">Chọn</option>

                                        {
                                            danhmuc.length !== 0 ? danhmuc.map((e) => <option value={ e.id }>{ e.title }</option>) : ""
                                        }

                                    </select>
                                </div>
                            </div>

                            <input type="submit" value="Request"/>

                        </form>
        
                    </div>
                </div>
            </div>
        </div>   

    );
}
