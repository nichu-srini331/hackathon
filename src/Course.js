import React, { useCallback,useEffect, useState } from 'react'
import axios from 'axios'

const token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJRZ3BFVlNzVE9rR0RRamVFNVNLOUZ6dEVHQ254d2tuRyJ9.lA-IzBtRtwONpb5N-hZjnl9nPLjz2kjDRahXAtM8Euc';
const apiurl="https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773237963653121113";


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
  const [content,setContent] = useState();
  useEffect(()=>{
    fetch()
  },[])
  const fetch = useCallback(async () => {
    try{
      const res = await axios.get(`${apiurl}`);
      console.log(res.data);
      setContent(res.data.result.content);
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
  {/* <button onClick={fetch}>HELLO</button> */}
</div>
  </div>
<div class="col-6">
  <div class="top-course">
  <h1 class="h1-course">Hi Lee!</h1>
<h2 class="h2-course">Welcome back,you are doing great</h2>
  </div>
  <h1 class="h1-course you">Your Courses,</h1>
  <div class="card">
  <img class="card-img-top" src="" alt="Card image cap"/>
  <div class="card-body">
    <h1>{content.se_subjects}</h1>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div class="col-3 r">
</div>
  
</div>
    </div>
    
  )
}

export default Course