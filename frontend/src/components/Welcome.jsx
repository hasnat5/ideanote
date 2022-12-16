import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Beranda</h1>
            <h2>Welcome back {user && user.name}</h2>
        </div>
    )
}

export default Welcome
