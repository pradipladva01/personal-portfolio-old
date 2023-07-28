import React, { useEffect } from 'react'
import '../styles/Loading.css'

const Loading = () => {
  useEffect(() => {
    const preloaderElement = document.getElementById('preloader');
    preloaderElement.classList.add('off');
    return () => {
      preloaderElement.classList.remove('off');
    };
  }, []);

  return (
    <div id="preloader" className="preloader off">
      <div className="black_wall"></div>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
