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



function Collection() {
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
     axios.get(`https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773513380331521130`).then(res =>{
        setcoll(res.data.result.content.children);
        
     })
    }catch(err){
      console.log(err.message);
    }
  })
  const put = () => {
    console.log()
  }
//   const ft = () => {

//     console.log(coll.artifactUrl)
//coll[0].children[0].artifactUrl
//   }

    return (
   <div>
   <h1> <a href="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/assets/do_2134773370187284481126/7th-social-studies-hm-2020-21.pdf">Digital Content</a></h1>
   {/* <button onClick={ft}>Click</button> */}
   <h1>Video file :</h1>
   <iframe
        src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/assets/do_2134773120371752961108/4.mp4"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
   </div>
  
  )
}

export default Collection