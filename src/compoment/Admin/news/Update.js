import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API_New from "../../../service/API_New";
import Api_Login from "../../../service/API_Login";

export default function UpdateNew() {

    const { id } = useParams();

    const navigate = useNavigate(); // chuyển hướng link

    const [dataNew, setdataNew] = useState({title: ""});
    
    const HandleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setdataNew({
            ...dataNew, [name]: value
        });
    }


    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (dataNew.title === "") { return alert("Thiếu thông tin trường title") }
    

        const UpdateNew = await API_New.edit_new(dataNew.title,id);


        return alert(UpdateNew.data.mess);
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

            const oldataNew = await API_New.GetById(id);



            const Newinfo = oldataNew.data.items[0];

            setdataNew({
                ...dataNew, title: Newinfo.title
            });

           

           

            
            
        };
    
        Auth();

        importdata();

    }, []);

    return ( 

        <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3>Updata new</h3>
                <p className="blue-text"></p>
                <div className="card">
                    <h5 className="text-center mb-4"></h5>
                   
                    <form onSubmit={ HandleSubmit }>
                        
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Tiêu đề:<span className="text-danger"> *</span></label> <input value={ dataNew.title } type="text" id="fname" name="title" onChange={ HandleChange } placeholder=""/> </div>
                        </div>
    
                        

                        <input type="submit" value="Request"/>

                    </form>
    
                </div>
            </div>
        </div>
    </div>   

);

}
