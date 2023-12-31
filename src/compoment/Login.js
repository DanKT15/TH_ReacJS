import { Context } from './Context'
import { useContext, useState } from "react"

import Api_Login from "../service/API_Login";

import img_login from "../asset/images/team.jpg";

export default function Login () {

    const { items, setItems } = useContext(Context);

    const [data_login, setdatalogin] = useState({username: "", Pass: ""});

    const handleChange_name = (e) => {
        setdatalogin(data => {
            return {...data, username: e.target.value}
        });
    };

    const handleChange_pass = (e) => {
        setdatalogin(data => {
            return {...data, Pass: e.target.value}
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const dangnhap = await Api_Login.Login(data_login.username, data_login.Pass);

        // console.log(dangnhap.data.err);
        
        if (dangnhap !== null) {
            if (dangnhap.data.err === 1) {
                alert("Errors: " + dangnhap.data.mess);
            }
            else {
                setItems(data_login);
                // console.log(items);
                
                alert("Susses: " + dangnhap.data.mess);
            }
        }
        else{
            alert("Errors: Server khong phan hoi !!!")
        }

    };

    // useEffect(() => {
        
    // }, []); 

    return ( 
        <>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src={ img_login } alt="IMG"/>
                            </div>


                            <form onSubmit={ handleSubmit } className="login100-form validate-form">


                                <span className="login100-form-title">
                                    <b>ĐĂNG NHẬP HỆ THỐNG</b>
                                </span>

                               
                                <div className="wrap-input100 validate-input">
                                    <input value={ data_login.username } onChange={ handleChange_name } className="input100" type="text" placeholder="Tài khoản quản trị" name="username" id="username"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className='bx bx-user'></i>
                                    </span>
                                </div>


                                <div className="wrap-input100 validate-input">
                                    <input value={ data_login.Pass } onChange={ handleChange_pass } autoComplete="off" className="input100" type="password" placeholder="Mật khẩu" name="password" id="password-field"/>
                                    <span toggle="#password-field" className="bx fa-fw bx-hide field-icon click-eye"></span>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className='bx bx-key'></i>
                                    </span>
                                </div>

          
                                <div className="container-login100-form-btn">
                                    <input type="submit" value="Đăng nhập" id="submit"/>
                                </div>
        

                                <div className="text-right p-t-12">
                                    <a className="txt2" href="/create_new_user">
                                            Đăng ký tài khoản
                                    </a>
                                </div>

              
                                <div className="text-center p-t-70 txt2">
                                    Phần mềm quản lý admin <i className="far fa-copyright" aria-hidden="true"></i>
                                    <script type="text/javascript">document.write(new Date().getFullYear());</script> <a className="txt2" href="#"> Code bởi Trường </a>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}
