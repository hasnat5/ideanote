import React, { useEffect } from 'react';
import { Layout } from './Layout';
import Welcome from '../components/Welcome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import hasnat from '../assets/hasnat_pengembangORI.JPG';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <Welcome />
            <main class="container max-w-sm md:max-w-lg mt-8 px-4">
                <div class="h-80 rounded-2xl overflow-hidden relative group hover:shadow-2xl hover:shadow-[#C850C0E6] transition-all ease-in">
                    <div class="card h-full w-full bg-center bg-cover grid px-4 absolute group-hover:scale-125 group-hover:-rotate-3 transition-all duration-300 ">
                    </div>
                    <div class="grid place-content-center justify-items-center self-center my-auto bottom-0 top-0 absolute left-0 right-0 gap-5">
                        <img src={hasnat} class="h-28 w-28 rounded-full bg-cen" alt="" />
                        <h1 class="font-poppins text-3xl font-bold text-white text-center">Hasnat Ferdiananda</h1>

                        <div className='flex gap-6'>
                            <a href="https://github.com/hasnat5" target="_blank" rel="noopener noreferrer"><img src={github} className='w-6 h-6' alt="" /></a>
                            <a href="https://www.linkedin.com/in/hasnat-ferdiananda-745636248/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className='w-6 h-6' alt="" /></a>
                            <a href="https://www.instagram.com/hasnat5_/" target="_blank" rel="noopener noreferrer"><img src={instagram} className='w-6 h-6' alt="" /></a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Dashboard