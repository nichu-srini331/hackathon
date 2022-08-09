import React from 'react';
import  { useCallback,useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import{BrowserRouter, Route,Routes,Router,Link} from 'react-router-dom';


const token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJRZ3BFVlNzVE9rR0RRamVFNVNLOUZ6dEVHQ254d2tuRyJ9.lA-IzBtRtwONpb5N-hZjnl9nPLjz2kjDRahXAtM8Euc';
const apiurl="https://api.dev.diksha.gov.in/api/content/v1/search";


  axios.interceptors.request.use(
  config => {
    config.headers.authorization =`Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)



function Science() {
    const [coll,setcoll] = useState([]);
    const[arti,setarti] = useState([])
  useEffect(()=>{
    fetch()
  })
  const fetch = useCallback(async () => {
    // try{
    //   const res = await axios.get(`${apiurl}`);
    //   console.log(res.data.result.content);
    //   setContent(res.data.result.content);
    // }catch(err){
    //   console.log(err.message);
    // }
    try{
     axios.get(`https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773237963653121113`).then(res =>{
        setcoll(res.data.result.content.children);
        console.log(res.data.result.content.children);
        // setarti(coll[0].children[0].artifactUrl);
     })
    }catch(err){
      console.log(err.message);
    }
  })
  const put = () => {
    console.log()
  }
//   const ft = () => { coll[0].children[0].artifactUrl

//     console.log(coll.artifactUrl)
//   }

    return (
        <div>
            <h1 class="h1-course">Digintal Content</h1>
   <div class="cards">
{coll.map(con => {
    return(
   <a href='#'>
  <div class="card card-course">
 <div class="card-body">
        <div>
            <a href={con.children[0].artifactUrl}>Unit {coll.indexOf(con)+1} Pdf</a>
<br/>
   </div>
   </div>
</div></a>  
    )})
 
}
{/* <h1>{con.children[0].artifactUrl}</h1>
        <iframe width="420" height="345" src={con.children[1].artifactUrl}>
</iframe> */}
   </div>
   <h1 class="h1-course">Video Content</h1>
<div class="cards">
{coll.map(con => {
    return(
   <a href='#'>
  <div class="card card-course">
 <div class="card-body">
        {/* <iframe  src={con.children[1].artifactUrl}>
</iframe>  */}
<a href={con.children[1].artifactUrl}>Unit {coll.indexOf(con)+1} Video</a>
<br/>
   </div>
   </div>
</a>  
    )})
 
}
{/* <h1>{con.children[0].artifactUrl}</h1>
        <iframe width="420" height="345" src={con.children[1].artifactUrl}>
</iframe> */}
   </div>
   </div> 
  )
}
export default Science