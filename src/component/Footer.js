import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <nav className='navbar p-0'>
        <div className='container border-top border-secondary' style={{maxWidth: 1200}}>
            <div className="navbar nav">
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/">
                        <a className="nav-link" href="#">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/live">
                        <a className="nav-link" href="#">Live Location</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none' to="/about" >
                        <a className="nav-link" href="#">About</a>
                    </Link>
                </li>
            </div>
                <div className='text-light float-end'>@2024 International Space Station Live @SKY</div>
        </div>
    </nav>
  )
}
