import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Menu() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/news')
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
    // <div className="App">
    //   <h1>Danh sach tin tuc</h1>
    //   <ul>
    //     {users.map((item, index) => (
    //       <li key={index}>
    //       {/* Sử dụng template strings để xây dựng URL với id */}
          
    //       <Link to={`/api/news/${item.id}`} >
    //         {item.title}
    //       </Link>
    //     </li>
    //     ))}
    //   </ul>

   
      
    //  </div>


         <div id="wrapper" >
	
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Hot.Net</a>
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
                    <Link to={`/api/news/${item.id}`} >
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