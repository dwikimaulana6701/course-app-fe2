import React from 'react';
import Header from '../components/organisems/Header';
import Sidebar from '../components/organisems/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <aside className="w-14 md:w-64 bg-gray-100 border-r border-gray-300">
                    <Sidebar />
                </aside>

                <main className="flex-1 p-4 bg-white overflow-auto pl-5  ml-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;



    // return (
    //     <>
    //         <div className="min-h-screen flex flex-col">
    //             <Header />
    //             <div className="flex flex-1">
    //                 <aside className="w-64 bg-gray-100 border-r border-gray-300 z-10">
    //                     <Sidebar />
    //                 </aside>
    //                 <main className="flex-1 p-4 bg-white overflow-y-auto">
    //                     <Outlet />
    //                 </main>
    //             </div>
    //         </div>
    //     </>
    // )