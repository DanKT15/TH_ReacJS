import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ListNew() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8010/api/v1/news')
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
      <div className="App">
        <h1>Danh sach tin tuc</h1>
        <ul>
          {users.map((item, index) => (
            <li key={index}>
            {/* Sử dụng template strings để xây dựng URL với id */}
            
            <Link to={`/api/v1/news/${item.id}`} >
              {item.title}
            </Link>
          </li>
          ))}
        </ul>
  
     
        
       </div>
      
   
      
    );
  }
  
  export default ListNew;