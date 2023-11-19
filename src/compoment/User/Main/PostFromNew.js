import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import Image from "../Public/Img/GettyImages-1267679968.jpg"

function PostFromNew() {
    const {id} = useParams();
    const [Posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8010/api/v1/news/'+id, { withCredentials: true })
        .then(response => {
          // setUsers(response.data);
          // setUsers(response.data);
          setPosts(response.data.data);
        })
        .catch(error => {
          console.error('Error:', error);
          console.log(`Loading news detail for id: ${id}`);

        });
    }, [id]);
 
    
  
    return (
      <div className="App">
       
       <div class="container mt-5">
    <h2>Danh sách bài viết</h2>

    
    <div class="row">

        
    {Posts.map((item, index) => (
    //     <li key={index}>
    //     {/* Sử dụng template strings để xây dựng URL với id */}
        
    //     <Link to={`/api/news/${item.id}`} >
    //       {item.title}
    //     </Link>
    //   </li>

      <div class="col-md-4" key={index}>
        <div class="card mb-4">
        <img src={`http://localhost:8010/static/upload/`+item.image} className="card-img-top" alt="Card image" style={{ width: '268px', height: '300px' }} />
          <div class="card-body">
            <h5 class="card-title"><Link to={`/post/${item.id}`} >
          {item.title}
        </Link></h5>
            <p class="card-text"> {item.content}</p>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>


      ))}
     
    

     
     

     

    </div>
  </div>
     
        
       </div>
      
   
      
    );
  }
  
  export default PostFromNew;