import React from 'react'
import { Navbar } from './Navbar'
import Sidebar from './Sidebar'
import { Footer } from './Footer'


export const Men = () => {
  return (
    <>
      <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
        <div id="menpro">

        </div>
      </div>
      <Footer/>
    </>
  )
}
