import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";
import '../App.css';
import { HomeIcon, LightBulbIcon, UserIcon, ArrowRightOnRectangleIcon, PlusIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate('/');
    };

    return (
        <aside class="hidden md:block bg-primary border-r-2 border-fifth fixed inset-0 top-14 left-0 bottom-0 z-50 h-screen w-[280px] bg-section pt-3 sm:w-[300px] md:relative md:top-0 md:z-0 md:h-auto lg:w-[300px] xl:w-[340px]">
            <div class="flex max-h-[calc(100vh-64px)] flex-col justify-between pb-2 md:h-full md:max-h-full md:pt-20">

                <ul class="grid gap-y-3">
                    <Link to={"/ideas/add"} className="justify-self-center bg-secondary rounded-md inline-flex gap-2 py-3 px-16 mb-5 font-Lato font-bold text-fourth text-base">
                        <PlusIcon className="h-6 w-6 text-fourth stroke-2" />
                        Add idea
                    </Link>

                    <NavLink to={"/dashboard"}>
                        <li className="flex cursor-pointer py-3 px-9 hover:bg-third">
                            <HomeIcon className="h-6 w-6 text-fourth stroke-2" />
                            <h5 className="ml-4 font-Lato font-bold text-fourth text-base">Dashboard</h5>
                        </li>
                    </NavLink>

                    <NavLink to={"/ideas"}>
                        <li className="flex cursor-pointer py-3 px-9 hover:bg-third">
                            <LightBulbIcon className="h-6 w-6 text-fourth stroke-2" />
                            <h5 className="ml-4 font-Lato font-bold text-fourth text-base">Ideas</h5>
                        </li>
                    </NavLink>

                    {user && user.role === 'admin' && (
                        <div>
                            <NavLink to={"/users"}>
                                <li class="flex cursor-pointer py-3 px-9 hover:bg-third">
                                    <UserIcon className="h-6 w-6 text-fourth stroke-2" />
                                    <h5 class="ml-4 font-Lato font-bold text-fourth text-base">Users</h5>
                                </li>
                            </NavLink>
                        </div>
                    )}

                    <button onClick={logout}>
                        <li class="flex cursor-pointer items-center justify-between py-3 px-9 hover:bg-third">
                            <div class="flex items-center">
                                <ArrowRightOnRectangleIcon className="h-6 w-6 text-red-500 stroke-2" />
                                <h5 class="ml-4 font-Lato font-bold text-red-500">Logout</h5>
                            </div>
                        </li>
                    </button>


                </ul>
            </div >
        </aside >
    )
}

export default Sidebar