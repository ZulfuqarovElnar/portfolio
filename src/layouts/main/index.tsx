import React from 'react'
import Navbar from '../../components/Navbar'
import Home from '../../components/Home'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Home />
            <Outlet />
        </>
    )
}
