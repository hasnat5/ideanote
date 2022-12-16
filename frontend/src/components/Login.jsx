import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from "../features/authSlice";
import logo from '../assets/idea.png';
import '../App.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user || isSuccess) {
            navigate('/dashboard');
        }
        dispatch(reset())
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }

    return (
        <section class="container max-w-full">
            <div class="h-screen bg-primary grid grid-cols-1 md:grid-cols-2">
                {/* gambar  */}
                <div class="wallpaper hidden md:block p-12">
                    <div class="flex items-center">
                        <img src={logo} class="mr-3 h-16" alt="ideabox Logo" />
                    </div>
                </div>

                {/* login */}
                <div class="grid justify-center content-center px-4 md:px-12">
                    <div class="grid w-72 md:w-[320px] lg:w-96">
                        <div class="flex items-center mb-6 md:hidden">
                            <img src={logo} class="mr-3 h-12" alt="cobadulu Logo" />
                        </div>

                        <form onSubmit={Auth} class="bg-secondary p-8 rounded-2xl">
                            {isError && <p className='text-center'>{message}</p>}
                            <h3 class="mb-6 ">Login</h3>
                            <div class="mb-6" bis_skin_checked="1">
                                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    class="input"
                                    placeholder="name@gmail.com" />
                            </div>
                            <div class="mb-6" bis_skin_checked="1">
                                <label for="password" class="block mb-2 text-sm font-medium text-white">Your password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    class="input"
                                    placeholder='*****' />
                            </div>

                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6">
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                            <p>Dont have account? <a href="signup.html" class="font-semibold text-CTAsec underline">Register now</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login