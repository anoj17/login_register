import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const ClientLayout = () => {
    return <>

        <div className='flex h-[100vh] w-[100%] overflow-hidden'>
            <div className=''>
                <Sidebar />
                <Dashboard />
            </div>
            <div className='text-white'>
                <Outlet />
            </div>
        </div>

    </>
}

export default ClientLayout