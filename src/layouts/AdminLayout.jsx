import React from 'react'
import Header from '../components/organisems/Header'
import Sidebar from '../components/organisems/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default AdminLayout