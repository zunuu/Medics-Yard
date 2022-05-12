import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const menuItem = <>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="appoinment">Appoinment</Link></li>
        <li><Link to="reviews">Reviews</Link></li>

        <li><Link to="about">About</Link></li>
        <li><Link to="contactUs">Contact US</Link></li>
        <li><Link to="faq">FAQ</Link></li>
        <li><Link to="login">Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Medics Yard</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                    {/* <li tabindex="0">
                        <a>
                            Parent
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;