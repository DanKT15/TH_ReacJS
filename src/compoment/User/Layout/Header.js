import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Image1 from "../Public/Img/zcDnTj.jpg"
import Image2 from "../Public/Img/tin-tuc-1536638752.jpg"
import "../Public/Css/style.css"
function Menu() {
  const [users, setUsers] = useState([]);

  useEffect(() => {  
    axios.get('http://localhost:8010/api/v1/news', { withCredentials: true })
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

         <div id="wrapper" >
	
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Hot.Net</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tin Tức
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {users.map((item, index) => (
                //   <li key={index}>
                //   {/* Sử dụng template strings để xây dựng URL với id */}
                  
                //   <Link to={`/api/news/${item.id}`} >
                //     {item.title}
                //   </Link>
                // </li>
                //   <li key={index}>
                <a key={index} class="dropdown-item" href="#">
                    <Link to={`/api/v1/news/${item.id}`} >
                    {item.title}
                  </Link>
                </a>
                ))}
              </div>
             
          </li>
      </ul>

      
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="#">Đăng Nhập</a>
          </li>
      </ul>
  </div>
</nav>


<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
   
    <div class="carousel-item active">
    <img src={Image2} class="d-block w-100" />
      
    </div>
    
    <div class="carousel-item">
    <img src={Image1} class="d-block w-100" />    </div>
   
    <div class="carousel-item">
    <img src={Image2} class="d-block w-100" />    </div>
  </div>
  
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    
    </div>
 
    
  );
}

// const Menu = () => {
//   return (  
   
//      <div id="wrapper" >
	
//  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <a class="navbar-brand" href="#">Tin Tức</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//           <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Tin Tức
//               </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a class="dropdown-item" href="#">Châu Á</a>
//                   <a class="dropdown-item" href="#">Châu Âu</a>
//                   <a class="dropdown-item" href="#">Châu Mỹ</a>
//               </div>
//           </li>
//       </ul>

      
//       <ul class="navbar-nav ml-auto">
//           <li class="nav-item">
//               <a class="nav-link" href="#">Đăng Nhập</a>
//           </li>
//       </ul>
//   </div>
// </nav>
    
    
//     </div>
//   );
 

// };

export default Menu;