import {AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { MenuData } from "../utils/data";
import Link from 'next/link'

export const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 flex justify-between items-center mt-2 mb-2">
            {/* Menu Drawer */}
            <Drawer
                anchor='left'
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
            {
                MenuData.map(menu => <Link href={menu.name.toLowerCase()} key={menu.id}>{menu.name}</Link>)
            }                  
            </Drawer>

            {/* Cart Drawer */}
            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            >
                <h1>Cart placeholder</h1>                 
            </Drawer>

            {/* Mobile Navbar menu */}
            <button className='md:hidden'>
                <AiOutlineMenu size={25} onClick={() => setMenuOpen(true)}/>
            </button>

            <div>Logo</div>
            
            {/* desktop menu */}
            <div className="hidden md:flex">
            {
                MenuData.map(menu => <Link href={menu.name.toLowerCase()} key={menu.id}>{menu.name}</Link>)
            } 
            </div>

            {/* Account and Cart */}
            <div className='flex gap-x-2'>
                <button>
                    <VscAccount size={25}/> 
                </button>
                <button onClick={() => setCartOpen(true)}>
                    <AiOutlineShoppingCart size={27}/>
                </button>
            </div>
        </nav>
    )
}