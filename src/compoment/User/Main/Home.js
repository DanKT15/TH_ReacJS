import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

import Image from "../Public/Img/GettyImages-1267679968.jpg"




function Home() {
    const [posts, setUsers] = useState([]);
    const [NewPosts, setNewPosts] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8010/api/v1/posts', { withCredentials: true })
        .then(response => {
          // setUsers(response.data);
          // setUsers(response.data);
          setUsers(response.data.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8010/api/v1/new_posts', { withCredentials: true })
          .then(response => {
            // setUsers(response.data);
            // setUsers(response.data);
            setNewPosts(response.data.data);
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
         {NewPosts.map((item, index) => (
         <div key={index} class="col-md-4">
         <div class="card mb-4">
             <img src={`http://localhost:8010/static/upload/`+item.image}  classNameclass="card-img-top" />
             <div class="card-body">
                 <h5 class="card-title"><Link to={`/post/${item.id}`} >{item.title}</Link></h5>
                 <p class="card-text">{item.content}</p>
                
                 <a ><Link to={`/post/${item.id}`} >Đọc thêm</Link></a>
             </div>
         </div>
         </div>
        ))}
       
        
     </div>
     <div class="row">
     <div class="col-md-12">
             <h2>tất cả bài viết</h2>
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
                    <img src={`http://localhost:8010/static/upload/`+item.image} classNameclass="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title"><Link to={`/post/${item.id}`} >{item.title}</Link></h5>
                        <p class="card-text">{item.content}</p>
                       
                        <a ><Link to={`/post/${item.id}`} >Đọc thêm</Link></a>
                    </div>
                </div>
                </div>
          ))}
         
         
   
     </div>
        
     
         </div>
        

    
    
     
      
   
      
    );
  }
  
export default Home;


 
