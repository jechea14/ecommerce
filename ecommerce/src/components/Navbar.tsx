import {AiOutlineShoppingCart} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            {/* desktop menu */}
            <div>Logo</div>
            <div className="flex">
                <h1>Keyboards</h1>
                <h1>Keycaps</h1>
                <h1>Switches</h1>
            </div>
            <div className='flex gap-x-2'>
                <button>
                    <VscAccount size={25}/> 
                </button>
                <button>
                    <AiOutlineShoppingCart size={27}/>
                </button>
            </div>
        </nav>
    )
}