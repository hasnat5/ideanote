import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <main class="bg-primary mt-16 min-h-[calc(100vh-64px)] w-full overflow-hidden px-4 pb-6 lg:max-h-[calc(100vh-64px)] lg:overflow-y-scroll lg:px-9
                ">

                    {children}


                </main>
            </div>
        </React.Fragment>
    )
}
