// NewsDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import Image from "../Public/Img/GettyImages-1267679968.jpg"

function NewsDetail(){
  const {id} = useParams();
  const [Post, setPost] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8010/api/v1/post/'+id, { withCredentials: true })
    .then(response => {
      // console.log(response)
      setPost(response.data.data);
    })
    .catch(err => console.log(err))
    console.log(`Loading news detail for id: ${id}`);
    // Cập nhật dữ liệu, gọi API, hoặc bất kỳ thứ gì bạn cần
  }, [id]);


  const [listNews, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8010/api/v1/news')
      .then(response => {
        // setUsers(response.data);
        // setUsers(response.data);
        setNews(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  
  return (

    <div>
      
     
      {/* <div>{New.id}</div>
      <div>{New.title}</div> */}
      <div class="container mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
               
                <li class="breadcrumb-item active" aria-current="page">{Post.title}</li>
            </ol>
        </nav>
        <div class="row">
            <div class="col-md-7">
                <h2>{Post.title}</h2>
                <img src={Image} className="card-img-top" alt="Card image" style={{ width: '400px', height: '300px' }} />

                <p>Nội dung chi tiết bài viết sẽ được đặt ở đây.</p>
            </div>

            <div class="col-md-3 offset-md-1">
                <h3>Danh sách tin tức</h3>
                <ul class="list-group">

                {listNews.map((item, index) => (
                      <li key={index}>
                      {/* Sử dụng template strings để xây dựng URL với id */}
                      
                      <Link to={`/news/${item.id}`} >
                         <li class="list-group-item">{item.title}</li>
                      </Link>
                    </li>
                    ))}

                  
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewsDetail;