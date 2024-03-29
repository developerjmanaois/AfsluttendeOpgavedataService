import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (


        <nav className='bg-slate-100'>
            <div className="navbar max-w-screen-xl mx-auto p-10 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-8">
                        <li>
                            <NavLink to="/" className='hover:bg-green-500'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/viborghaveservice1" className='hover:bg-green-500'>
                                Viborg Have Service
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/viborghaveservice2" className='hover:text-gray-200'>
                                Viborg Have Service
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/nyheder" className='hover:bg-green-500' >
                                Nyheder
                            </NavLink>
                        </li>   
                        <li>
                            <NavLink to="/energidata" className='hover:bg-green-500' >
                            Energi Priser
                            </NavLink>
                        </li>
                        <li>
                            <details>
                            <summary>Vejret</summary>
                            <ul className="p-2">
                                <li>
                                    <NavLink to="/vejret" className='hover:bg-green-500' >
                                        Vejret
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vejret2" className='hover:bg-green-500' >
                                        Vejret - 2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/vejret3" className='hover:bg-green-500' >
                                        Vejret - 3
                                    </NavLink>
                                </li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-green-500">Kontakt os</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar