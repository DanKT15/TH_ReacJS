import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

import Image from "../Public/Img/GettyImages-1267679968.jpg"

function Home() {
    const [posts, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8000/api/posts', { withCredentials: true })
        .then(response => {
          // setUsers(response.data);
          // setUsers(response.data);
          setUsers(response.data.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
     
        
         
            <div class="container mt-4">
       
       <div class="row mb-4">
         <div class="col-md-12">
             <h2>Bài viết nổi bật</h2>
         </div>
   
         <div class="col-md-3">
             <div class="card mb-4">
                
                 <img src={Image} classNameclass="card-img-top" />
                 <div class="card-body">
                     <h5 class="card-title">Tiêu đề tin tức 1</h5>
                     <p class="card-text">Nội dung tin tức sẽ được đặt ở đây...</p>
                     <a href="#" class="btn btn-primary">Đọc thêm</a>
                 </div>
             </div>
         </div>
   
         <div class="col-md-3">
             <div class="card mb-4">
                 <img src={Image} classNameclass="card-img-top" />
                 <div class="card-body">
                     <h5 class="card-title">Tiêu đề tin tức 2</h5>
                     <p class="card-text">Nội dung tin tức sẽ được đặt ở đây...</p>
                     <a href="#" class="btn btn-primary">Đọc thêm</a>
                 </div>
             </div>
         </div>
   
         <div class="col-md-3">
             <div class="card mb-4">
                 <img src={Image} classNameclass="card-img-top" />
                 <div class="card-body">
                     <h5 class="card-title">Tiêu đề tin tức 3</h5>
                     <p class="card-text">Nội dung tin tức sẽ được đặt ở đây...</p>
                     <a href="#" class="btn btn-primary">Đọc thêm</a>
                 </div>
             </div>
         </div>
   
         <div class="col-md-3">
             <div class="card mb-4">
                 <img src={Image} classNameclass="card-img-top" />
                 <div class="card-body">
                     <h5 class="card-title">Tiêu đề tin tức 4</h5>
                     <p class="card-text">Nội dung tin tức sẽ được đặt ở đây...</p>
                     <a href="#" class="btn btn-primary">Đọc thêm</a>
                 </div>
             </div>
         </div>
     </div>
     <div class="row">
     <div class="col-md-12">
             <h2>Bài viết mới nhất</h2>
         </div>
        {posts.map((item, index) => (
            //     <li key={index}>
            //     {/* Sử dụng template strings để xây dựng URL với id */}
                
            //     <Link to={`/api/news/${item.id}`} >
            //     {item.title}
            //     </Link>
            // </li>

                <div key={index} class="col-md-4">
                <div class="card mb-4">
                    <img src={Image} classNameclass="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title"><Link to={`/api/post/${item.id}`} >{item.title}</Link></h5>
                        <p class="card-text">Nội dung tin tức sẽ được đặt ở đây...</p>
                        <a href="#" class="btn btn-primary">Đọc thêm</a>
                    </div>
                </div>
                </div>
          ))}
         
         
   
     </div>
        
     
         </div>
        

    
    
     
      
   
      
    );
  }
  
export default Home;


 
