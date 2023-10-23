import React from 'react'
import pradipLadva from "../resources/images/PradipLogo.svg"
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="preloader">
      <img src={pradipLadva} alt="pradipLadva" />
    </div>
  )
}

export default Loading
