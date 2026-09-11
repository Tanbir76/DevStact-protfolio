// import React from 'react';
import logoTx from '../logo-text.png'

function Nav() {
    return (
        <div className='border-b border-b-blue-50  '>
        <div className=" container mx-auto navbar sm:flex sm:justify-between py-4 ">
            <div className=" md:hidden ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Technologies</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <a className="btn btn-ghost text-xl"><img src={logoTx} alt="" /></a>
            </div>
            <div>
                <ul className="hidden sm:block md:flex gap-2 md:gap-8 text-[16px]  font-[88px] text-[#475569] ">
                    <li className=' text-[#DB2777]'><a>Home</a></li>
                    <li><a>Technologies</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-2 ">
                <button className="btn rounded-3xl text-[16px] border-none bg-white">Sing In</button>
                <button className="btn rounded-3xl text-[16px] text-white bg-[#D91B7E] ">Sing UP</button>
                
            </div>
        </div>

        </div>
    );
}

export default Nav;