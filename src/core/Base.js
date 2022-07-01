import React from 'react'
import Menu from './Menu'
const Base = (
  // dereferencing the props 
  { title , description , className = "text-white text-center", children }
) => {
  return (
    <div>
      <Menu/>

      <div className="container-fluid p-0 ">
          <div className="jumbotron py-3 mb-3 bg-secondary text-white text-center">
            <h2 className='display-4'>{title}</h2>
            <p className='lead'>{description} </p>
          </div>

          <div className={className} >
            {children}
          </div>

          <footer className="footer mt-auto py-2 fixed-bottom">
            <div className="container-fluid bg-success text-white text-center py-3">
              <h5>If you have any Questions feel free to reach out !</h5>
              <button className="btn btn-warning btn-md">Contact Us</button>
            </div>
            <div className="container">
              <span className="text-secondary">Ecommerce Store by <span className='text-white'>@moinak878</span> </span>
            </div>
          </footer>
      </div>
    </div>
  )
}

export default Base