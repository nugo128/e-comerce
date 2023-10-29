import { useState } from "react"
import CaretDown from "./icons/CaretDown"
import Profile from "./icons/Profile"
import Cart from "./icons/Cart"
import Home from "./icons/Home"
import Dropdown from "./Dropdown"

const Navigation = ()=>{
    const [hovered,setHovered] = useState(false)
    const hoverEffect = ()=>{
        setHovered(prevState=>!prevState)
    }
    return (
        <nav className="w-full bg-gradient-to-r from-[#3503bc] to-[#0b0454] px-10 py-4 flex justify-between items-center z-50">
            <div className="w-9 h-9">
            <Home></Home>
            </div>
            <div className="text-white flex gap-4">
                <h3 className="cursor-pointer font-bold bg-[#e39a65] text-black px-3 rounded-lg w-24 text-center">Home</h3>
                <div className="flex items-center gap-1 hover:font-bold cursor-pointer w-32 justify-center" onMouseEnter={hoverEffect} onMouseLeave={hoverEffect}>
                <h3 className="">Products</h3>
                <CaretDown hover={hovered}></CaretDown>
                 <div className={`${hovered ? 'h-40 absolute' : 'h-0 absolute invisible'} pt-4 top-12 bg-[#1e0386] w-40 text-center rounded-b-xl transition-all duration-1000 ease-in-out overflow-hidden z-50`}><Dropdown></Dropdown></div>
                </div>
                <h3 className="cursor-pointer hover:font-bold w-16 text-center">News</h3>
                <h3 className="cursor-pointer hover:font-bold w-20 text-center">Contact</h3>
            </div>
            <div className="w-20 flex gap-2"><Profile></Profile> <Cart></Cart></div>
        </nav>
    )
}
export default Navigation