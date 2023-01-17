import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Sluzby from "./pages/Sluzby"
import Vzdelavanie from "./pages/Vzdelavanie"
import Dotaznik from "./pages/Dotaznik"
import Referencie from "./pages/Referencie"
import Clanky from "./pages/Clanky"
import Kariera from "./pages/Kariera"
import Prihlaseny from "./pages/Prihlaseny"

import "./style.css"

export default function App() {
    return (
        <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/Sluzby' element={<Sluzby/>} />
                <Route path='/Vzdelavanie' element={<Vzdelavanie/>} />
                <Route path='/Dotaznik' element={<Dotaznik/>} />
                <Route path='/Referencie' element={<Referencie/>} />
                <Route path='/Clanky' element={<Clanky/>} />
                <Route path='/Kariera' element={<Kariera/>} />
                <Route path='/Prihlaseny' element={<Prihlaseny/>} />
            </Routes>
        </Router>
        <Footer/>
        </div>
    )
}