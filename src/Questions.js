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

function Questions() {

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
     axios.get(`https://api.dev.diksha.gov.in/api/questionset/v1/hierarchy/do_21350992582335692811`).then(res =>{
        setcoll(res);
        console.log(res);
        // setarti(coll[0].children[0].artifactUrl);
     })
    }catch(err){
      console.log(err.message);
    }
  })


  return (
    <div>Questions</div>
  )
}

export default Questions