// NewsDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
  },[])
  return (

    <div>
      <div>{New.id}</div>
      <div>{New.title}</div>
    </div>
  )
}

export default NewsDetail;