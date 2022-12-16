import React from 'react'
import logo from '../assets/idea.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/');
    };

    return (
        <nav class="relative container mx-auto z-10">

            <div class="navbar bg-primary border-fifth border-b-2 fixed top-0 right-0 flex w-full mx-auto justify-between items-center py-2.5 px-4 md:px-12 z-10 transition duration-100 ease-in">

                <NavLink to='./dashboard' className="flex items-center cursor-default lg:cursor-pointer">
                    <img src={logo} class="mr-3 h-9" alt="logo" />
                    <span class="text-fourth font-Lato font-black text-xl">Ideabox</span>
                </NavLink>

                <button onClick={logout} className='bg-fourth rounded-md py-2 px-5 font-Lato font-bold text-primary'>logout</button>

                {/* hamburger */}
                <button class="burgerBar inline-block cursor-pointer z-10 md:hidden">
                    <span class="material-icons select-none text-white hover:select-none active:select-none active:text-sec md:hidden">menu</span>
                </button>

                <aside class="listBar md:hidden -translate-x-full bg-secondary fixed inset-0 top-14 left-0 bottom-0 z-50 h-screen w-[280px] bg-section pt-3 sm:w-[300px] md:relative md:top-0 md:z-0 md:h-auto lg:w-[300px] xl:w-[340px] transition-all duration-300 ease-in-out">
                    <div class="flex max-h-[calc(100vh-64px)] flex-col justify-between pb-2 md:h-full md:max-h-full md:pt-16">

                        <ul class="grid grid-rows-3 gap-y-2">
                            <a href="admin-beranda.html">
                                <li class="flex cursor-pointer items-center justify-between py-3 px-5 border-l-4 border-l-CTAsec bg-third/30">
                                    <div class="flex items-center text-CTAsec">
                                        <span class="material-icons-outlined">
                                            home
                                        </span>
                                        <h5 class="ml-4 uppercase text-CTAsec">Beranda</h5>
                                    </div>
                                </li>
                            </a>

                            <a href="admin-mentor.html">
                                <li class="flex cursor-pointer items-center justify-between py-3 px-5 hover:bg-third">
                                    <div class="flex items-center">
                                        <span class="material-icons-outlined text-white">
                                            account_circle
                                        </span>
                                        <h5 class="ml-4 uppercase">Mentor</h5>
                                    </div>
                                </li>
                            </a>

                            <a href="admin-prodi.html">
                                <li class="flex cursor-pointer items-center justify-between py-3 px-5 hover:bg-third">
                                    <div class="flex items-center">
                                        <span class="material-icons-outlined text-white">
                                            school
                                        </span>
                                        <h5 class="ml-4 uppercase">Prodi</h5>
                                    </div>
                                </li>
                            </a>

                            <a href="admin-user.html">
                                <li class="flex cursor-pointer items-center justify-between py-3 px-5 hover:bg-third">
                                    <div class="flex items-center">
                                        <span class="material-icons-outlined text-white">
                                            person
                                        </span>
                                        <h5 class="ml-4 uppercase">User</h5>
                                    </div>
                                </li>
                            </a>

                            <a href="login-admin.html">
                                <li class="flex cursor-pointer items-center justify-between py-3 px-5 hover:bg-third">
                                    <div class="flex items-center">
                                        <span class="material-icons-outlined text-banger">
                                            logout
                                        </span>
                                        <h5 class="ml-4 uppercase text-banger">Keluar</h5>
                                    </div>
                                </li>
                            </a>

                        </ul>
                    </div>
                </aside>

            </div>

        </nav>
    )
}

export default Navbar