import React from 'react'
import pradipLadva from "../resources/images/Pradip-Ladva.svg"
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="preloader">
      <img src={pradipLadva} alt="pradipLadva" />
    </div>
  )
}

export default Loading
