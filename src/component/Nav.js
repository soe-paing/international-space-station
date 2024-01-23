import React from 'react'
import { Link } from 'react-router-dom'

const FixNav = {
    position: "fixed",
    top: 0,
    zIndex: 1200,
}

function changeNavColor(){
	const navBarBgcolor = document.querySelector(".transpNav")
	const navScrollValue = window.scrollY;
	if(navScrollValue < 10){
		navBarBgcolor.classList.remove("bg-main");
	} else{
		navBarBgcolor.classList.add("bg-main");
	}
}

window.addEventListener("scroll", changeNavColor);

export default function Nav() {
  return (
    <nav className="navbar transpNav p-0 pt-1 navbar-expand-sm w-100  mb-5" style={FixNav}>
        <div className='container' style={{maxWidth: 1200}}>
            <Link className='text-decoration-none' to="/iss/">
                <a className="navbar-brand" href="#">
                    <h5 className='d-inline d-sm-none'>ISS</h5>
                    <h5 className='d-none d-sm-inline' >International Space Station</h5>
                </a>
            </Link>
            <div className="navbar nav">
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/iss/">
                        <a className="nav-link" href="#">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/iss/live">
                        <a className="nav-link" href="#">Live Location</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/iss/about" >
                        <a className="nav-link" href="#">About</a>
                    </Link>
                </li>
            </div>
        </div>
    </nav>
  )
}
