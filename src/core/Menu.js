import React from 'react'
import { Link , withRouter  } from 'react-router-dom'

const currTab = (history,path) =>{
    if(history.location.pathname === path){
        return { color : '#2ecc72'}
    }
    else{
        return { color : '#FFFFFF'}
    }
}

const Menu = ({history}) => {
  return (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currTab(history,"/")} className='nav-link' to="/">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/cart")} className='nav-link' to="/cart">
                    Cart
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/dashboard")} className='nav-link' to="/dashboard">
                    Dashboard
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/admin-dashboard")} className='nav-link' to="/admin-dashboard">
                    Admin Dashboard
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/signup")} className='nav-link' to="/signup">
                    Signup
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/signin")} className='nav-link' to="/signin">
                    Signin
                </Link>
            </li>

            <li className="nav-item">
                <Link style={currTab(history,"/signout")} className='nav-link' to="/signout">
                    Signout
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default withRouter(Menu)