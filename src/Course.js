import React, { useCallback,useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import{BrowserRouter, Route,Routes,Router,Link} from 'react-router-dom';
import { Button } from 'bootstrap';

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


function Course() {
  const [content,setContent] = useState([]);
  useEffect( ()=>{
 fetc();
  })
  console.log("hi",content);
  // const fetch = useCallback(async () => {
    // try{
    //   const res = await axios.get(`${apiurl}`);
    //   console.log(res.data.result.content);
    //   setContent(res.data.result.content);
    // }catch(err){
    //   console.log(err.message);
    // }
    console.log(1);
   
  const fetc = (() => {
    try{
     axios.post(`${apiurl}`,{
        "request": {
          "filters": {
            "primaryCategory": [
              "Digital Textbook"
            ],
            "se_boards": [
              "State (Gujarat)"
            ],
            "se_mediums": [
              "English"
            ],
            "se_gradeLevels": [
              "Class 7"
            ]
          },
          "limit": 1000
        }
       }).then(res=>setContent(res.data.result.content))
       console.log("hello",content)
      }catch(err){
        console.log(err.message);
      }
    })
  

  return (
<div class='container'>

<div class="row">
  <div class="col-3">
  <div class="col-lg-2 sidebar-offcanvas pl-0 nav-add" id="sidebar" role="navigation" style={{backgroundColor:"#B498C9"}}>
    <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5 class="h1-cl">fusion</h5></a></li>
        <div class="sub-nav">
        <li class="nav-item mb-2 highlight-nav"><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3  nav-sub">Dashboard</span></a></li>
        <li class="nav-item mb-2">
            <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3 nav-sub"> Home</span></a>
        </li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"> <span className="ml-3 nav-sub">Classroom</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3 nav-sub">Libraries</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3 nav-sub">Chatroom</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"> <span className="ml-3 nav-sub">Groups</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"> <span className="ml-3 nav-sub">Explore</span></a></li>
        <div class="nav-dwn">
        <li class="nav-item mb-2"><a class="nav-link text-secondary nav-sub" href="#"><span className="ml-3 nav-sub">Settings</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary nav-sub" href="#"><span className="ml-3 nav-sub">Logout</span></a></li>
        </div>
        </div>
    </ul>

</div>
  </div>
<div class="col-6">
  <div class="top-course">
  <h1 class="h1-course">Hi Lee!</h1>
<h2 class="h2-course">Welcome back,you are doing great</h2>
  </div>
  <h1 class="h1-course you">Your Courses,</h1>
   <div class="cards">
<a href='#'>
  <div class="card card-course">
 <div class="card-body">
<Link to="/collection"><h1 class="card-h1">{content[0]?.se_subjects}</h1></Link>   
 </div>
</div></a>  
<a href='#'>
  <div class="card card-course">
 <div class="card-body">
<Link to="/Science"><h1 class="card-h1">{content[1]?.se_subjects}</h1></Link>   
 </div>
</div></a>  
  </div>

</div>
<div class="col-3 r">
</div>
  
</div>
    </div>
    
  )
}

export default Course