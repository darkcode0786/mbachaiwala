import React from 'react'
import Logo from '../assets/logo.png'
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return <>
  <div className="cursor"></div>
  <a href="/" className="logo" ><img data-cursorpointer={true} src={Logo} alt="logo"/> </a>
  <a href="/franchise" className="franchiseBtn" data-cursorpointer={true} >GET A FRANCHISE</a>
  <BsMouse className="scrollBtn" data-cursorpoin={true}/>
  </>
}

export default Misc
