import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Routers() {
    return (
        <BrowserRouter>
		<Routes>
			<Route path="/" element={<Navbar />} />
		</Routes>
	</BrowserRouter>
    )
}
