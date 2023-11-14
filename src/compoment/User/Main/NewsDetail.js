// NewsDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Image from "../Public/Img/GettyImages-1267679968.jpg"

function NewsDetail(){
  const {id} = useParams();
  const [New, setNew] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/news/'+id)
    .then(response => {
      console.log(response)
      setNew(response.data.data);
    })
    .catch(err => console.log(err))
    console.log(`Loading news detail for id: ${id}`);
    // Cập nhật dữ liệu, gọi API, hoặc bất kỳ thứ gì bạn cần
  }, [id]);
  return (

    <div>
      <div class="container article-container">
        <h1 class="my-4">{New.title}</h1>
        <p class="lead">Ngày đăng: <span id="publishDate">Ngày Tháng Năm</span></p>
        <img src={Image} className="card-img-top" alt="Card image" style={{ width: '400px', height: '300px' }} />
        <p class="my-4">Nội dung chi tiết bài viết sẽ được đặt ở đây...</p>
      </div>
      {/* <div>{New.id}</div>
      <div>{New.title}</div> */}
    </div>
  )
}

export default NewsDetail;