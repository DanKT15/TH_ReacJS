import { Link, useNavigate } from "react-router-dom";
import { Context } from '../../compoment/Admin/Context';
import { useContext, useEffect } from "react";
import Api_Login from "../../service/API_Login";

export default function Header() {

    const { items, setItems } = useContext(Context);

    const navigate = useNavigate(); // chuyển hướng link

    const logout = async () => {

        const oject = await Api_Login.LogOut();

        // console.log(oject.data.err);

        if (oject.data.err === 0) {
            navigate("login-admin");
        }

    }

    const login_logout = (data) => {
        if (data.user === "") {
            return (
                <Link to={'login-admin'} data-toggle="tooltip" data-placement="bottom"><b>Đăng nhập</b><span className="caret"></span></Link>
            );
        } else {

            return (
                <ul className="dropdown">
                    <li>
                        <i className="fas fa-sign-out-alt" onClick={ logout }>Đăng xuất</i>
                    </li>
                </ul>
            );
        }
    }

    useEffect( () => {

        const Auth = async () => {

            const GetAuth = await Api_Login.GetAuth();

            const userinfo = GetAuth.data;
            // console.log(userinfo.jwt.user.data);

            if (userinfo.err === 0) {

                let name = userinfo.jwt.user.data.auth;
                let role = userinfo.jwt.user.data.role;

                setItems(data => {
                    return {...data, user: name, role: role}
                });

            }
            else {
                navigate("login-admin");
            }

        };
        
        Auth();

    }, []);  

    return ( 
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <i className="fas fa-bars"></i>
                    </button>
                        
                    <i className="fa fa-user-circle" aria-hidden="true"></i><b>Xin Chào { items.user !== "" ? items.user : "" }</b>
                
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        
                        {/* <li><a href="/about" data-toggle="tooltip" data-placement="bottom" title="TIỀN LƯƠNG">About</a></li>
                        <li><a href="/list-user/0-10" data-toggle="tooltip" data-placement="bottom" title="ĐIỂM DANH">Danh Sách User</a></li>
                        <li><a href="/create_new_user" data-toggle="tooltip" data-placement="bottom" title="LỊCH CÔNG TÁC">Thêm User</a></li>       
                        <li><a href="/list-news/0-10" data-toggle="tooltip" data-placement="bottom" title="ĐIỂM DANH">Danh Sách Danh Mục</a></li>
                        <li><a href="/create_new_news" data-toggle="tooltip" data-placement="bottom" title="LỊCH CÔNG TÁC">Thêm Danh Mục</a></li>
                        <li><a href="/list-post/0-10" data-toggle="tooltip" data-placement="bottom" title="ĐIỂM DANH">Danh Sách Bài Viết</a></li>
                        <li><a href="/create_new_post" data-toggle="tooltip" data-placement="bottom" title="LỊCH CÔNG TÁC">Thêm Bài Viết</a></li> */}

                        <li>
                            {
                                login_logout(items)
                            }
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
