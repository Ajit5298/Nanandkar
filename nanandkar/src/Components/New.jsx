import React from 'react'
import { Navbar } from './Navbar'
import Sidebar from './Sidebar'
import { Footer } from './Footer'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const New = () => {
  const router = useNavigate();
  function handlechat() {
    router('/Chat');
  }
  return (
    <>
      <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
        <div id="menpro">

        </div>
        <div className="corner-div" onClick={handlechat}>
                Need help ?
            </div>
      </div>
      <Footer/>
    </>
  )
}
