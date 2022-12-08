import Link from 'next/link'

export function NavBar() {
    return (
        <div className='flex justify-around m-4 '>
            <Link href='/'>Home</Link>
            <Link href='/switches'>Switches</Link>
            <Link href='/keyboards'>Keyboards</Link>
        </div>
    )
}