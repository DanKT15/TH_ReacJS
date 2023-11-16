import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API_User from "../../../service/API_User";
import Api_Login from "../../../service/API_Login";

export default function UpdataUser() {
    
    const navigate = useNavigate(); // chuyển hướng link

    const [datauUser, setUser] = useState({username: "", password: "", fullname: "", address: "", sex: "", email: "", groupid: ""});

    const HandleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...datauUser, [name]: value
        });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (datauUser.username === "") { return alert("Thiếu thông tin trường username") }
        if (datauUser.password === "") { return alert("Thiếu thông tin trường password") }
        if (datauUser.fullname === "") { return alert("Thiếu thông tin trường fullname") }
        if (datauUser.email === "") { return alert("Thiếu thông tin trường email") }
        if (datauUser.address === "") { return alert("Thiếu thông tin trường address") }
        if (datauUser.sex === "") { return alert("Thiếu thông tin trường giới tính") }
        if (datauUser.groupid === "") { return alert("Thiếu thông tin trường quyền") }

        console.log(datauUser);

        const Updatauser = await API_User.insert_new_user(datauUser.username, datauUser.password, datauUser.fullname, datauUser.address, datauUser.sex, datauUser.email, datauUser.groupid);

        return alert(Updatauser.data.mess);
    }

    useEffect( () => {

        const Auth = async () => {

            const GetAuth = await Api_Login.GetAuth();

            const userinfo = GetAuth.data;

            if (userinfo.err === 1) {
                navigate("/admin/login-admin");
            }

        };
    
        Auth();

    }, []); 

    return ( 

        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <h3>New user</h3>
                    <p className="blue-text"></p>
                    <div className="card">
                        <h5 className="text-center mb-4"></h5>
                        
                        <form onSubmit={ HandleSubmit } className="form-card" >

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Tài khoản:<span className="text-danger"> </span></label> <input type="text" id="fname" value={ datauUser.username } name="username" onChange={ HandleChange } placeholder="" /> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Mật khẩu:<span className="text-danger"> </span></label> <input type="text" id="lname" value={ datauUser.password } name="password" onChange={ HandleChange } placeholder="" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Họ và tên:<span className="text-danger"> </span></label> <input type="text" id="fname" value={ datauUser.fullname } name="fullname" onChange={ HandleChange } placeholder="" /> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email:<span className="text-danger"> </span></label> <input type="text" id="email" value={ datauUser.email } name="email" onChange={ HandleChange } placeholder="" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Địa chỉ:<span className="text-danger"> </span></label> <input type="text" id="fname" value={ datauUser.address } name="address" onChange={ HandleChange } placeholder="" /> </div>
                            </div>

                            <div className="row justify-content-between text-left">
                                
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Giới Tính<span className="text-danger"> </span></label> 
                                    <select value={ datauUser.sex } name="sex" onChange={ HandleChange } id="cars">
                                        <option value="">Chọn</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>

                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Quyền<span className="text-danger"> </span></label> 
                                    <select value={ datauUser.groupid } name="groupid" onChange={ HandleChange } id="cars">
                                        <option value="">Chọn</option>
                                        <option value="2">Admin</option>
                                        <option value="1">User</option>
                                    </select>
                                </div>

                            </div>

                            <input type="submit" value="Cập nhật"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>   

    );
}

